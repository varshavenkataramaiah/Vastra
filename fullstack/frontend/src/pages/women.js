import React from 'react';
import Navbar from '../Components/Navbar';
import CategoryProducts from '../Components/CategoryProducts';

function Women() {
  return (
    <div>
      <Navbar />
      <CategoryProducts title="Women's Collection" category="women" />
    </div>
  );
}

export default Women;