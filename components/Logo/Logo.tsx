
  import React from 'react'
  import styles from './Logo.module.scss'

  const Logo = (props: Logo) => {
  
  return (
    <div className={styles.logo}>
      <img className={styles.animatedLogo} src="https://uploads-ssl.webflow.com/5cf4f70073a623716fb74c59/5d02841b011a4982e4e1b9e4_Util_Logo_Loop_Delay_Clean.gif" />
      <img className={styles.name} src="https://uploads-ssl.webflow.com/5cf4f70073a623716fb74c59/5d0ce360e8ded04b2c6f02ce_Util_Name.svg" />
    </div>
  )
}

export interface Logo {

}

export default Logo
