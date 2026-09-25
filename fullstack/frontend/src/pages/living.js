import React from 'react';
import Navbar from '../Components/Navbar';
import CategoryProducts from '../Components/CategoryProducts';

function Living() {
  return (
    <div>
      <Navbar />
      <CategoryProducts title="Living Collection" category="living" />
    </div>
  );
}

export default Living;