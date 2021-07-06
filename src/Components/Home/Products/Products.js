import React from 'react'
import styles from './Products.module.css'
import ProductsCard from './ProductsCard'
import imgCyberpunk from '../../../Assets/product-cyberpunk2077.png'
import imgOutriders from '../../../Assets/product-outriders.png'
import imgDonkey from '../../../Assets/product-donkey-kong-country-tropical-freeze.png'
import { ReactComponent as ArrowL } from '../../../Assets/angle-left-solid.svg'
import { ReactComponent as ArrowR } from '../../../Assets/angle-right-solid.svg'
import ProductsModal from './ProductsModal'


const Products = () => {
   const games = [
      { id: 1, name: 'Outriders', price: 200, img: imgOutriders },
      { id: 2, name: 'Cyberpunk 2077', price: 200, img: imgCyberpunk },
      { id: 3, name: 'Donkey Kong Countru Tropical Freeze', price: 200, img: imgDonkey },
   ];
   const [modalBuy, setModalBuy] = React.useState(false);
   const [active, setActive] = React.useState(0);
   const [position, setPosition] = React.useState(0);
   const refList = React.useRef();

   React.useEffect(() => {
      const { width } = refList.current.getBoundingClientRect();
      setPosition(-(width * active));
   }, [active]);

   function slidePrev() {
      if (active > 0) setActive(active - 1);
   }

   function slideNext() {
      if (active < games.length - 1) setActive(active + 1);
   }

   return (
      <>
         <ProductsModal setModalBuy={setModalBuy} active={modalBuy} />
         <section className="mt-80">
            <div className="container">

               <div className="title">
                  <h1>Produtos em destaque</h1>
               </div>

               <div className={styles.productsList} ref={refList}>
                  {games && games.map(item => (
                     <ProductsCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                        setModalBuy={setModalBuy}
                        position={position}
                     />
                  ))}
                  <div className={styles.navigation}>
                     <button onClick={slidePrev}>
                        <ArrowL />
                     </button>

                     <button onClick={slideNext}>
                        <ArrowR />
                     </button>
                  </div>
               </div>

            </div>
         </section>
      </>
   )
}

export default Products
