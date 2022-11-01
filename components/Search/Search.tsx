
import React, { useState, ChangeEvent } from 'react'
import Downshift from "downshift";

import { FUNDS_AS_ARRAY, Fund } from '../../consts'
import { filterArrayByText } from '../../utilities/utils'

import styles from './Search.module.scss'
import axios from "axios";


const Search = (props: SearchProps) => {

  const [suggestions] = useState<Fund[]>(FUNDS_AS_ARRAY);

  const inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    // @TODO: do callback
    // fetchSuggestions(event.target.value);
  }

  // const fetchSuggestions = (searchTerm: string) => {
  //   if (!searchTerm) {
  //     return;
  //   }

  //   // TODO: this could be an axios call to fetch suggestions dynamically
  //   // setMovies(FUNDS_AS_ARRAY);

  //   // const moviesURL = `https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=${movie}`;
  //   // axios.get(moviesURL).then(response => {
  //   //   console.log('got movies', response.data.results);

  //   //   setMovies(response.data.results);
  //   // });
  // }

  return (
    <div className={styles.search}>
      <Downshift
        itemToString={item => (item ? item.name : "")}
      >
        {({
          selectedItem,
          getInputProps,
          getItemProps,
          highlightedIndex,
          isOpen,
          inputValue,

        }) => (
          <div className={styles.searchContainer}>
            <input
              {...getInputProps({
                placeholder: "Search...",
                onChange: inputOnChange
              })}
            />
            {isOpen ? (
              <div className={styles.downshiftDropdown}>
                {
                  filterArrayByText(suggestions, inputValue || "")
                  .map((item: Fund, index) => (
                    <div
                      className={styles.dropDownItem}
                      {...getItemProps({ key: index, index, item })}
                      style={{
                        backgroundColor:
                          highlightedIndex === index ? "lightgray" : "white",
                        fontWeight: selectedItem === item ? "bold" : "normal"
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
        )}
      </Downshift>
    </div>
  )
}

export interface SearchProps { }

export default Search
