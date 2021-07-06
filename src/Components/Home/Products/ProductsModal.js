import React from 'react'
import styles from './ProductsModal.module.css'
import imgMarioModal from '../../../Assets/marioModal.png'

const ProductsModal = ({ setModalBuy, active }) => {

   function handleClick() {
      setModalBuy(false);
   }

   function handleClickOut(e) {
      if (e.target === e.currentTarget) {
         setModalBuy(false);
      }
   }

   return (
      <div className={`${styles.modal} ${active ? styles.active : ''}`} onClick={handleClickOut}>
         <div className={styles.modalContent}>
            <button className={styles.btnClose} onClick={handleClick}>
               <span></span>
               <span></span>
            </button>
            <div className={styles.title}>
               <h1>Pedido realizado com sucesso!</h1>
            </div>
            <img src={imgMarioModal} alt="" className="img-fluid" />
         </div>
      </div>
   );

}
export default ProductsModal;
