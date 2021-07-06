import React from 'react';
import Banner from './Banner/Banner'
import ExtraBanners from './ExtraBanners/ExtraBanners'
import Products from './Products/Products';
import Tips from './Tips/Tips';

const Home = () => {
   return (
      <section className="home">
         <Banner />
         <ExtraBanners />
         <Products />
         <Tips />
      </section >
   )
}

export default Home