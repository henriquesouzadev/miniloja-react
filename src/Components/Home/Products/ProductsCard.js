import React from 'react';
import styles from './ProductsCard.module.css';
import { CartContext } from '../../../Context/CartContext';

const ProductsCard = ({ id, name, price, img, setModalBuy, position }) => {

   const [productBought, setProductBought] = React.useState(false);
   const cart = React.useContext(CartContext);

   function handleClick() {
      if (productBought === false) {
         setProductBought(true);
         cart.addProduct({
            id,
            name,
            price
         });
      } else {
         setProductBought(false);
         cart.removeProduct(id);
      }
   }

   React.useEffect(() => {
      setModalBuy(productBought);
   }, [productBought, setModalBuy]);

   return (
      <div className={styles.card} style={{ transform: `translateX(${position}px)` }}>

         <div className={styles.cover}>
            <img src={img} alt={name} className="img-fluid" />
         </div>

         <div className={styles.content}>
            <div className={styles.info}>
               <div className={styles.name}>{name}</div>
               <div className={styles.price}>
                  {price.toLocaleString('pt-BR',
                     { style: 'currency', currency: 'BRL' }
                  )}
               </div>
            </div>

            <button
               className={`${styles.buttonBuy} ${productBought ? styles.active : ''}`}
               onClick={handleClick}
            >
               {productBought ? 'Comprado!' : 'Comprar'}
            </button>
         </div>


      </div>
   );

}
export default ProductsCard;
