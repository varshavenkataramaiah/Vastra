import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';
import ProductItem from '../Components/ProductItem';

function Wishlist() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.items);

  return (
    <>
      <Navbar />
      <main className="container wishlist-page py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="page-title mb-0">My Wishlist</h1>
          <span className="text-muted">{items.length} item{items.length === 1 ? '' : 's'}</span>
        </div>
        {items.length > 0 ? (
          <div className="row g-4">
            {items.map((product) => (
              <div className="col-12 col-sm-6 col-lg-3" key={`${product.id}-${product.image}`}>
                <ProductItem product={product} showActions={false} />
                <div className="wishlist-actions">
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() => dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product })}
                  >
                    Remove
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state text-center py-5">
            <h2>Your wishlist is empty</h2>
            <p className="text-muted">Save products you love and find them here later.</p>
            <Link className="btn btn-dark" to="/">Continue shopping</Link>
          </div>
        )}
      </main>
    </>
  );
}

export default Wishlist;