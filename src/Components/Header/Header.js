import React from 'react'
import styles from './Header.module.css'
import imgLogo from '../../Assets/logo-branca.png'
import Menu from './Menu'
import MenuExtra from './MenuExtra'

const Header = () => {

   const [menuActive, setMenuActive] = React.useState(false);

   return (
      <header
         className={`${styles.header} ${menuActive && styles.fixed}`}
      >
         <div className="container">

            <div className={styles.wrapper}>
               <button
                  className={`${styles.menuButton} ${menuActive ? styles.active : ''}`}
                  aria-label="Menu"
                  onClick={() => setMenuActive(!menuActive)}
               >
                  <div></div>
                  <div></div>
                  <div></div>
               </button>

               <Menu menuActive={menuActive} />

               <div className={styles.logo}>
                  <img src={imgLogo} alt="" className="img-fluid" />
               </div>

               <MenuExtra />
            </div>

         </div>
      </header>
   );

}
export default Header
