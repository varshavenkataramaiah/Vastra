import React from 'react';
import Navbar from '../Components/Navbar';
import CategoryProducts from '../Components/CategoryProducts';

function Men() {
  return (
    <div>
      <Navbar />
      <CategoryProducts title="Men's Collection" category="men" />
    </div>
  );
}

export default Men;