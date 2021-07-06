import React from 'react'
import styles from './BannerNavigation.module.css';
import { ReactComponent as ArrowL } from '../../../Assets/angle-left-solid.svg'
import { ReactComponent as ArrowR } from '../../../Assets/angle-right-solid.svg'

const BannerNavigation = ({ setCount, count, items }) => {
   const [name, setName] = React.useState('')

   React.useEffect(() => {
      setName(
         items.map(item => count === item.id ? item.name : '')
      )
   }, [count, items]);

   function handleClickUp() {
      if (count < items.length - 1)
         setCount(count + 1)
   }

   function handleClickDown() {
      if (count > 0)
         setCount(count - 1)
   }

   return (
      <div className={styles.navigation}>
         <div className={styles.name}>{name}</div>
         <div className={styles.controls}>
            <div className={styles.number}>{count + 1} / {items.length}</div>
            <div className={styles.arrows}>
               <button onClick={handleClickDown}>
                  <ArrowL />
               </button>
               <button onClick={handleClickUp}>
                  <ArrowR />
               </button>
            </div>
         </div>
      </div >
   )
}

export default BannerNavigation
