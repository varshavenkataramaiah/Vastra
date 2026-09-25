import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import ProductItem from '../Components/ProductItem';
import { API_BASE_URL } from '../api';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(`${API_BASE_URL}/products${query ? `?search=${encodeURIComponent(query)}` : ''}`)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) setProducts(data.products || []);
      })
      .catch(() => {
        if (isMounted) setProducts([]);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [query]);

  return (
    <>
      <Navbar />
      <main className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="page-title mb-0">{query ? `Search results for “${query}”` : 'All products'}</h1>
          <span className="text-muted">{products.length} item{products.length === 1 ? '' : 's'}</span>
        </div>
        {loading ? <p className="text-muted">Loading products...</p> : products.length > 0 ? (
          <div className="row g-4">
            {products.map((product) => (
              <div className="col-12 col-sm-6 col-lg-3" key={product._id || product.id}>
                <ProductItem product={product} />
              </div>
            ))}
          </div>
        ) : (
          <section className="empty-state text-center py-5">
            <h2>No products found</h2>
            <p className="text-muted">Try a different search term.</p>
            <Link className="btn btn-dark" to="/">Continue shopping</Link>
          </section>
        )}
      </main>
    </>
  );
}

export default Search;