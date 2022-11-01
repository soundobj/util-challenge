import Head from 'next/head'
// import Image from 'next/image'

import styles from '@/pages/index.module.scss'
import Search from '@/components/Search/Search'
import Logo from '@/components/Logo/Logo'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Util React Challenge</title>
        <link rel="icon" href="https://uploads-ssl.webflow.com/5cf4f70073a623716fb74c59/5d027c18e5a5fe1fdbb0ab02_util-favicon.png" />
      </Head>
      <main>
        <nav className={styles.nav}>
          <Logo />
          <Search className={styles.search} />
        </nav>
      </main>
    </div>
  )
}
