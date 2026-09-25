import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_BASE_URL } from '../api';

function PreferencesSync() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const [isLoaded, setIsLoaded] = useState(false);
  const loadedUserId = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('vastraToken');
    if (!token || !currentUser || currentUser.isAdmin !== undefined) return;

    const refreshCurrentUser = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/users/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Unable to refresh user session');
        dispatch({ type: 'SET_CURRENT_USER', payload: data.user });
      } catch (error) {
        console.error('Unable to refresh user session:', error);
      }
    };

    refreshCurrentUser();
  }, [currentUser, dispatch]);

  useEffect(() => {
    const userId = currentUser?.id || currentUser?._id;
    const token = localStorage.getItem('vastraToken');

    if (!userId || !token) {
      loadedUserId.current = null;
      setIsLoaded(false);
      return;
    }

    loadedUserId.current = null;
    setIsLoaded(false);

    const loadPreferences = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/users/me/preferences`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Unable to load saved shopping data');
        }

        dispatch({ type: 'SET_CART', payload: data.cartItems || [] });
        dispatch({ type: 'SET_WISHLIST', payload: data.wishlistItems || [] });
        loadedUserId.current = userId;
        setIsLoaded(true);
      } catch (error) {
        console.error('Unable to load saved shopping data:', error);
      }
    };

    loadPreferences();
  }, [currentUser, dispatch]);

  useEffect(() => {
    const userId = currentUser?.id || currentUser?._id;
    const token = localStorage.getItem('vastraToken');
    if (!isLoaded || !userId || loadedUserId.current !== userId || !token) return;

    const savePreferences = async () => {
      try {
        await fetch(`${API_BASE_URL}/users/me/preferences`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ cartItems, wishlistItems }),
        });
      } catch (error) {
        console.error('Unable to save shopping data:', error);
      }
    };

    savePreferences();
  }, [cartItems, wishlistItems, currentUser, isLoaded]);

  return null;
}

export default PreferencesSync;
