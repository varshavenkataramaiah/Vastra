import React from 'react';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel';
import Ads from '../Components/Ads';
import CategoryProducts from '../Components/CategoryProducts';

function Home() {
  const product_array = [
    { name: 'iphone', label: 'Smart essentials', tag: 'New launches' },
    { name: 'samsung', label: 'Signature style', tag: 'Best sellers' },
    { name: 'oneplus', label: 'Performance picks', tag: 'Trending now' },
    { name: 'xiaomi', label: 'Everyday value', tag: 'Hot deals' },
  ];

  return (
    <div>
      <div className='container-fluid'>
        <Navbar />
        <Carousel />
        <div className='row g-3 home-brand-row'>
          {product_array.map((item) => (
            <Ads
              key={item.name}
              name={item.name}
              label={item.label}
              tag={item.tag}
            />
          ))}
        </div>
        <CategoryProducts title='Featured Products' category='featured' />
      </div>
    </div>
  );
}

export default Home;
