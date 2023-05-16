import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartitem";

const initialState = {
    cartItems: cartItems,
    total: 0,
    quantity: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },

        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
          },

          increaseItem: (state,action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === itemId)
            cartItem.quantity = cartItem.quantity + 1
          },
          decreaseItem: (state,action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === itemId)
            cartItem.quantity = cartItem.quantity - 1
          },
          calculateTotal: (state) => {
            let total = 0;
            let quantity = 0;
            state.cartItems.forEach((item) => {
                quantity += item.quantity;
              total += item.price * item.quantity;
            });
            state.total = total;
            state.quantity = quantity;
          }
          
    }
})

export const {clearCart,removeItem,increaseItem,decreaseItem,calculateTotal} = cartSlice.actions;

export default cartSlice.reducer;