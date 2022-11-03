
import React, { useState } from 'react'
import axios from "axios"

import Search from '@/components/Search/Search'
import Logo from '@/components/Logo/Logo'

import { FUNDS_AS_ARRAY, SustainabilityPerformancePayload, SDG_RECORD } from '../../consts'
import { groupBySDG } from '../../utilities/utils'
import Spinner from '../Spinner/Spinner'

import styles from './Sustainability.module.scss'

const Sustainability = (props: SustainabilityProps) => {

  const [sustainability, setSustainability] = useState<SDG_RECORD>()
  const [sustainabilityError, setSustainabilityError] = useState()
  const [sustainabilityLoading, setSustainabilityLoading] = useState<boolean>(false)

  const onOptionSelected = async (option: string) => {
    console.log('searchTerm', option);
    setSustainabilityLoading(true)
    axios.get(`http://localhost:3000/api/sustainability?id=${option}`)
      .then((response: SustainabilityPerformancePayload) => {
        const rows = response.data.data.datarows.rows
        setSustainability(groupBySDG(rows))
      })
      .catch((error) => setSustainabilityError(error))
      .finally(() => setSustainabilityLoading(false))
  }

  console.log('sus performance', sustainability)
  console.log('loading', sustainabilityLoading)

  return (
    <>
      <nav className={styles.nav}>
        <Logo className={styles.logo} />
        <Search onOptionSelected={onOptionSelected} suggestions={FUNDS_AS_ARRAY} />
      </nav>
      <main>
        {/* @TODO use https://recharts.org/en-US/ */}
        {sustainabilityLoading && <Spinner className={styles.spinner} />}
      </main>
    </>
  )
}

export interface SustainabilityProps {}

export default Sustainability
