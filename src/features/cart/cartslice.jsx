import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: [],
    total: 0,
    amount: 0,
    isLoading: true,
};

export const getItems = createAsyncThunk('cart/getCartItems', async() => {
  try {
    const response = await axios(url);
    return response.data;

  } catch (error) {
    console.error('Error retrieving data:');
  }
})

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
    
      increaseItem: (state, action) => {
        const itemId = action.payload;
        const cartItem = state.cartItems.find((item) => item.id === itemId);
        cartItem.amount = cartItem.amount + 1;
      },
    
      decreaseItem: (state, action) => {
        const itemId = action.payload;
        const cartItem = state.cartItems.find((item) => item.id === itemId);
        cartItem.amount = cartItem.amount - 1;
      },
    
      calculateTotal: (state) => {
        let total = 0;
        let amount = 0;
        state.cartItems.forEach((item) => {
          amount += item.amount;
          total += item.price * item.amount;
        });
        state.total = total;
        state.amount = amount;
      }
    },
    
    extraReducers: {
      [getItems.pending]: (state) => {
        state.isLoading = true;
      },
      [getItems.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      },      
      
      [getItems.rejected]: (state) => {
        state.isLoading = false;
      }
    }
})


export const {clearCart,removeItem,increaseItem,decreaseItem,calculateTotal} = cartSlice.actions;

export default cartSlice.reducer;