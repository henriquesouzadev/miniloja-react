import React from 'react'
import styles from './Footer.module.css'
import imgLogo from '../../Assets/logo-footer.png'

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className={styles.logo}>
            <img src={imgLogo} alt="" />
         </div>
         <div className={styles.copyright}>Agência N1 - Todos os direitos reservados</div>
      </footer>
   )
}

export default Footer
