import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';

function Footer() {
  const currentUser = useSelector((state) => state.user.currentUser);

  return createPortal(
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-brand">
          <Link to="/" className="site-footer-logo">VASTRA</Link>
          <p>Everyday style, considered carefully.</p>
        </div>
        <div className="site-footer-column">
          <span>Shop</span>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/beauty">Beauty</Link>
        </div>
        <div className="site-footer-column">
          <span>Explore</span>
          <Link to="/living">Living</Link>
          <Link to="/accessories">Accessories</Link>
          <Link to="/footwear">Footwear</Link>
          <Link to="/search">Search</Link>
        </div>
        <div className="site-footer-column">
          <span>Customer care</span>
          <Link to="/orders">Orders &amp; returns</Link>
          <Link to="/account">Account</Link>
          {!currentUser?.isAdmin && <Link to="/wishlist">Wishlist</Link>}
          <a href="mailto:care@vastra.store">care@vastra.store</a>
        </div>
      </div>
      <div className="site-footer-bottom">
        <span>© {new Date().getFullYear()} Vastra</span>
        <span>Made for your everyday.</span>
      </div>
    </footer>,
    document.body
  );
}

export default Footer;
