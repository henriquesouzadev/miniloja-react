import React from 'react';
import styles from './Menu.module.css'

const Menu = ({ menuActive }) => {

   return (
      <>
         <div className={`${styles.menuDropdown} ${menuActive && styles.active}`}>
            <div className={styles.wrapper}>

               <div className={styles.dropdownItem}>
                  <ul>
                     <h3>Luta</h3>
                     <li>
                        <a href="/">Mortal Kombat</a>
                     </li>
                     <li>
                        <a href="/">Smash Bros</a>
                     </li>
                     <li>
                        <a href="/">Killer Instict</a>
                     </li>
                     <li>
                        <a href="/">DBZ Kakarot</a>
                     </li>
                  </ul>
               </div>

               <div className={styles.dropdownItem}>
                  <ul>
                     <h3>Ação / Aventura</h3>
                     <li>
                        <a href="/">Mortal Kombat</a>
                     </li>
                     <li>
                        <a href="/">Smash Bros</a>
                     </li>
                     <li>
                        <a href="/">Killer Instict</a>
                     </li>
                     <li>
                        <a href="/">DBZ Kakarot</a>
                     </li>
                  </ul>
               </div>

               <div className={styles.dropdownItem}>
                  <ul>
                     <h3>Corrida</h3>
                     <li>
                        <a href="/">Mortal Kombat</a>
                     </li>
                     <li>
                        <a href="/">Smash Bros</a>
                     </li>
                     <li>
                        <a href="/">Killer Instict</a>
                     </li>
                     <li>
                        <a href="/">DBZ Kakarot</a>
                     </li>
                  </ul>
               </div>

            </div>
         </div>
      </>
   );

}
export default Menu;
