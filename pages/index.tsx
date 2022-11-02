import Head from 'next/head'
import axios from "axios"

import styles from '@/pages/index.module.scss'
import Search from '@/components/Search/Search'
import Logo from '@/components/Logo/Logo'

import { FUNDS_AS_ARRAY } from '../consts'
import { useState } from 'react'

export default function Home() {

  const [sustainabiltyPerformance, setSustainbilityPerformance] = useState();
  const [fetchError, setFetchError] = useState();

  const onOptionSelected = async (option: string) => {
    console.log('searchTerm', option);
    axios.get(`http://localhost:3000/api/sustainabiltyPerformance?id=${option}`)
      .then((response) => setSustainbilityPerformance(response.data))
      .catch((error) => setFetchError(error))
  }

  console.log('sus performance', sustainabiltyPerformance);
  console.log('error', fetchError);

  return (
    <div className={styles.container}>
      <Head>
        <title>Util React Challenge</title>
        <link rel="icon" href="https://uploads-ssl.webflow.com/5cf4f70073a623716fb74c59/5d027c18e5a5fe1fdbb0ab02_util-favicon.png" />
      </Head>
      <main>
        <nav className={styles.nav}>
          <Logo className={styles.logo} />
          <Search onOptionSelected={onOptionSelected} suggestions={FUNDS_AS_ARRAY} />
          {/* @TODO use https://recharts.org/en-US/ */}
        </nav>
      </main>
    </div>
  )
}
