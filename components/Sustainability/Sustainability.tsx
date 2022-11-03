
import React, { useState } from 'react'
import axios from "axios"

import Search from '@/components/Search/Search'
import Logo from '@/components/Logo/Logo'

import { FUNDS_AS_ARRAY, SustainabilityPerformancePayload, SDG_RECORD } from '../../consts'
import { groupBySDG } from '../../utilities/utils'

import Spinner from '../Spinner/Spinner'
import SustainabilityChart from '../SustainabilityChart/SustainabilityChart'

import styles from './Sustainability.module.scss'

const Sustainability = (props: SustainabilityProps) => {

  const [sustainability, setSustainability] = useState<SDG_RECORD>()
  const [sustainabilityError, setSustainabilityError] = useState()
  const [sustainabilityLoading, setSustainabilityLoading] = useState<boolean>(false)

  const onOptionSelected = async (option: string) => {
    setSustainabilityLoading(true)
    axios.get(`http://localhost:3000/api/sustainability?id=${option}`)
      .then((response: SustainabilityPerformancePayload) => {
        const rows = response.data.data.datarows.rows
        setSustainability(groupBySDG(rows))
      })
      .catch((error) => setSustainabilityError(error))
      .finally(() => setSustainabilityLoading(false))
  }

  return (
    <>
      <nav className={styles.nav}>
        <Logo className={styles.logo} />
        <Search onOptionSelected={onOptionSelected} suggestions={FUNDS_AS_ARRAY} />
      </nav>
      <main className={styles.main}>
        {/* @TODO use https://recharts.org/en-US/ */}
        {sustainabilityLoading &&
          <Spinner className={styles.spinner} />
        }
        {(!sustainabilityLoading && sustainability) &&
          <SustainabilityChart sdgs={sustainability} />
        }
      </main>
    </>
  )
}

export interface SustainabilityProps {}

export default Sustainability
