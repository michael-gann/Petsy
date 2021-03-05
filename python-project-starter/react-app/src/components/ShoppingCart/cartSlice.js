import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: {},
    cartPets: {},
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems = action.payload;
      console.log(cartItems);
    },
    addCartPet: (state, action) => {
      state.cartPets = action.payload;
      console.log(cartPets)
    },
    removeCartItem: (state, action) => {
      state.cartItems = action.payload;
      console.log(cartItems);
    },
    removeCartPet: (state, action) => {
      state.cartPets = action.payload;
    }
  }
})


export const {
  addCartItem,
  addCartPet,
  removeCartItem,
  removeCartPet,
} = cartSlice.actions;

export const selectCartItems = state => state.cartItems;
export const selectCartPets = state => state.cartPets;

export default cartSlice.reducer;
