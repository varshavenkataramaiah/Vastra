import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';
import currentProductReducer from './currentProductReducer';
import { wishlistReducer } from './wishlistReducer';
import { ordersReducer } from './ordersReducer';





const rootReducer = combineReducers({
  
  user: userReducer,
  wishlist: wishlistReducer,
  currentProduct: currentProductReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

export default rootReducer;