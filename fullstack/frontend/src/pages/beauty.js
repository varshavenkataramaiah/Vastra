import React from 'react';
import Navbar from '../Components/Navbar';
import CategoryProducts from '../Components/CategoryProducts';

function Beauty() {
  return (
    <div>
      <Navbar />
      <CategoryProducts title="Beauty Collection" category="beauty" />
    </div>
  );
}

export default Beauty;