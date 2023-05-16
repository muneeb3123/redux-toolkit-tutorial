import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartslice';
import modalReducer from './features/modal/modalslice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export default store;
