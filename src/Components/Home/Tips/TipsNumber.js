import React from 'react'
import styles from './TipsNumber.module.css'

const TipsNumber = (props) => {
   return (
      <div className={styles.number}>
         <svg>
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle">
               {props.number}
            </text>
         </svg>
      </div>
   )
}

export default TipsNumber
