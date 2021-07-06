import React from 'react'
import styles from './ExtraBanners.module.css'
import imgBannerZelda from '../../../Assets/banner-zelda.png'
import imgBannerSekiro from '../../../Assets/banner-sekiro.png'

const ExtraBanners = () => {
   return (
      <section className={styles.extraBanners}>
         <div className="container">

            <div className={styles.itemWrapper}>
               <div className={styles.item}>
                  <img src={imgBannerZelda} alt="" />
                  <div className={styles.name}>
                     <span>The Legend of Zelda - Breath of the wild</span>
                  </div>
               </div>

               <div className={styles.item}>
                  <img src={imgBannerSekiro} alt="" />
                  <div className={styles.name}>
                     <span>SEKIRO - Shadows die twice</span>
                  </div>
               </div>
            </div>

         </div>
      </section>
   );
}

export default ExtraBanners
