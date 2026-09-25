import React from 'react';
import Navbar from '../Components/Navbar';
import CategoryProducts from '../Components/CategoryProducts';

function Accessories() {
  return (
    <>
      <Navbar />
      <CategoryProducts title="Accessories Collection" category="accessories" />
    </>
  );
}

export default Accessories;
