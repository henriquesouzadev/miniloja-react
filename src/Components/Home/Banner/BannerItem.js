import React from 'react'
import styles from './BannerItem.module.css';
import useMedia from '../../../Hooks/useMedia';

const BannerItem = (props) => {

   const mobile = useMedia('(max-width: 768px)');

   return (
      <div
         className={`${styles.item} ${props.id === props.active ? styles.active : ''}`}
         style={{ backgroundImage: `url('${mobile ? props.src.mobile : props.src.desktop}')` }}
      >
         <div className={`fullHeight ${!mobile ? 'container' : ''}`}>
            <div className={styles.textWrapper}>
               <div className={styles.text}>
                  <h1>{props.name}</h1>
                  <div className={styles.price}>R$ 299<span>,99</span></div>
                  <p>Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.</p>
               </div>
            </div>

         </div>
      </div >
   );
}

export default BannerItem
