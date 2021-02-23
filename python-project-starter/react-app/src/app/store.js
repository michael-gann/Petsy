import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../components/ShoppingCart/cartSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
