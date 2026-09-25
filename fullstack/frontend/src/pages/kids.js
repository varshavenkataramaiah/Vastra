import React from 'react';
import Navbar from '../Components/Navbar';
import CategoryProducts from '../Components/CategoryProducts';

function Kids() {
  return (
    <div>
      <Navbar />
      <CategoryProducts title="Kids Collection" category="kids" />
    </div>
  );
}

export default Kids;