import React from 'react';
import { ReactComponent as ImgContact } from '../../Assets/paper-plane.svg'
import { ReactComponent as ImgSearch } from '../../Assets/search-solid.svg'
import { ReactComponent as ImgShop } from '../../Assets/shopping-bag-solid.svg'
import styles from './MenuExtra.module.css'
import { CartContext } from '../../Context/CartContext'
import Minicart from './Minicart'

const MenuExtra = () => {

   const cart = React.useContext(CartContext);
   const [cartOpen, setCartOpen] = React.useState(false);

   function handleCart(e) {
      e.preventDefault();
      setCartOpen(!cartOpen);
   }

   return (
      <div className={styles.menuExtra}>
         <ul>
            <li>
               <a href="/">
                  <ImgContact /> Contato
               </a>
            </li>

            <li>
               <a href="/">
                  <ImgSearch /> Buscar
               </a>
            </li>

            <li>
               <a href="/" onClick={handleCart}>
                  <ImgShop style={{ marginRight: '5px' }} />
                  <span className={styles.qtd}>
                     {cart.items.length}
                  </span>
               </a>
            </li>

            <Minicart cartOpen={cartOpen} />
         </ul>
      </div >
   );

}
export default MenuExtra;
