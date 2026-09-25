import React from 'react';
import Navbar from '../Components/Navbar';
import CategoryProducts from '../Components/CategoryProducts';

function Footwear() {
  return (
    <>
      <Navbar />
      <CategoryProducts title="Footwear Collection" category="footwear" />
    </>
  );
}

export default Footwear;
