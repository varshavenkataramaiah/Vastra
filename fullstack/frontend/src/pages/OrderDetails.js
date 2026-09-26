import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { API_BASE_URL } from '../api';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');
  const [actionError, setActionError] = useState('');
  const [isCancelling, setIsCancelling] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('vastraToken');
    if (!token) {
      setError('Sign in to view this order.');
      return;
    }

    const fetchOrder = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/orders/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Unable to load order');
        }
        setOrder(data.order);
      } catch (fetchError) {
        setError(fetchError.message || 'Unable to load order');
      }
    };

    fetchOrder();
  }, [id]);

  const cancelOrder = async () => {
    if (!window.confirm('Cancel this order?')) return;

    setActionError('');
    setIsCancelling(true);
    try {
      const response = await fetch(`${API_BASE_URL}/orders/${id}/cancel`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${localStorage.getItem('vastraToken') || ''}` },
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Unable to cancel order');
      setOrder(data.order);
    } catch (cancelError) {
      setActionError(cancelError.message || 'Unable to cancel order');
    } finally {
      setIsCancelling(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="container orders-page py-4">
        <Link to="/orders">Back to orders</Link>
        {error ? (
          <section className="empty-state text-center py-5">
            <h1 className="page-title">Unable to load order</h1>
            <p className="text-muted">{error}</p>
          </section>
        ) : order ? (
          <article className="order-card mt-4">
            <div className="order-card-header">
              <div>
                <h1 className="page-title mb-2">Order {order._id}</h1>
                <div className="order-meta">
                  <span>Placed on {new Date(order.createdAt).toLocaleDateString()}</span>
                  <span className="order-status">{order.status}</span>
                </div>
              </div>
              <strong>Rs. {Number(order.total).toFixed(2)}</strong>
            </div>
            <div className="order-items">
              {(order.items || []).map((item) => (
                <div className="order-item" key={`${item._id || item.productId}-${item.name}`}>
                  <img src={item.image} alt={item.name} />
                  <span>{item.name} × {item.quantity}</span>
                  <strong>Rs. {(Number(item.price) * item.quantity).toFixed(2)}</strong>
                </div>
              ))}
            </div>
            {['PLACED', 'PROCESSING'].includes(order.status) && (
              <div className="order-detail-actions">
                <button className="btn btn-outline-danger btn-sm" type="button" disabled={isCancelling} onClick={cancelOrder}>
                  {isCancelling ? 'Cancelling...' : 'Cancel order'}
                </button>
                {actionError && <p className="text-danger mb-0" role="alert">{actionError}</p>}
              </div>
            )}
          </article>
        ) : (
          <p className="text-muted mt-4">Loading order...</p>
        )}
      </main>
    </>
  );
}

export default OrderDetails;