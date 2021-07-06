import React from 'react';
import styles from './Banner.module.css';
import BannerItem from './BannerItem';
import BannerNavigation from './BannerNavigation';
import banner01Desktop from '../../../Assets/banner-desktop-01.png';
import banner02Desktop from '../../../Assets/banner-desktop-02.png';
import banner01Mobile from '../../../Assets/banner-mobile-01.png';
import banner02Mobile from '../../../Assets/banner-mobile-02.png';

const Banner = () => {
   const banners = [
      {
         id: 0,
         name: 'Mortal Kombat',
         src: {
            mobile: banner01Mobile,
            desktop: banner01Desktop,
         },
      },
      {
         id: 1,
         name: 'Red Dead Redemption 2',
         src: {
            mobile: banner02Mobile,
            desktop: banner02Desktop,
         },
      }
   ];
   const [count, setCount] = React.useState(0);

   return (
      <section className={styles.banner}>
         {banners.map(item => (
            <BannerItem
               key={item.id}
               id={item.id}
               src={item.src}
               name={item.name}
               active={count}
            />
         ))}
         <BannerNavigation setCount={setCount} count={count} items={banners} />
      </section>
   );
}

export default Banner
