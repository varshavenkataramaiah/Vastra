import React from 'react';
import ProductSection from './ProductSection';
import { useProducts } from '../hooks/useProducts';

function CategoryProducts({ title, category }) {
  const { products, loading } = useProducts(category);

  return (
    <>
      {loading ? (
        <div className="container py-4 text-center text-muted">Loading products...</div>
      ) : (
        <ProductSection title={title} products={products} />
      )}
    </>
  );
}

export default CategoryProducts;
