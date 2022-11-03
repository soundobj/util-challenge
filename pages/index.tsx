import Head from 'next/head'

import styles from '@/pages/index.module.scss'
import Sustainability from '@/components/Sustainability/Sustainability'
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Util React Challenge</title>
        <link rel="icon" href="https://uploads-ssl.webflow.com/5cf4f70073a623716fb74c59/5d027c18e5a5fe1fdbb0ab02_util-favicon.png" />
      </Head>
      <div className={styles.contentWrapper}>
        <Sustainability />
      </div>
    </div>
  )
}
