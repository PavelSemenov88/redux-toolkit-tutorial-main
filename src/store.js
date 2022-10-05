import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./folder/cart/cartSlice";
import modalReducer from "./folder/modal/modalSlice";

// cartReducer = cartSlice.reducer из cartSlice.js 
// modalReducer = modalSlice.reducer из modalSlice.js

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  }
})