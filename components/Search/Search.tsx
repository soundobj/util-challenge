
import React, { MouseEvent } from 'react'
import Downshift from "downshift";

import { Fund } from '../../consts'
import { filterArrayByText } from '../../utilities/utils'

import styles from './Search.module.scss'

const DATA_ID = "data-id"

const Search = (props: SearchProps<Fund>) => {
  const { suggestions, onOptionSelected } = props;

  const onOptionSelect = (event: MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    const fundID = event.target.getAttribute(DATA_ID);
    onOptionSelected(fundID); 
  }

  return (
    <div className={styles.search}>
      <Downshift
        itemToString={item => (item ? item.name : "")}
        id="searchSuggestions"
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
              })}
            />
            {isOpen ? (
              <div className={styles.downshiftDropdown} onClick={onOptionSelect}>
                {
                  filterArrayByText(suggestions, inputValue || "")
                  .map((item: Fund, index) => (
                    <div 
                      data-id={item.id}
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

export interface SearchProps<T extends { name: string}> {
  onOptionSelected: (searchTerm: string) => void,
  suggestions: T[]
}

export default Search
