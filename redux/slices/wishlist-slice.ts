import { createSlice } from "@reduxjs/toolkit";
import { Product, ProductWithImages } from "@/types/responses/product";

const defaultWishlistProducts: ProductWithImages[] = [];

type WishlistAction = {
  payload: ProductWithImages;
  type: string;
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: defaultWishlistProducts,
  },
  reducers: {
    addProduct: (state, action: WishlistAction) => {
      state.value.push(action.payload);
    },
    removeProduct: (state, action: WishlistAction) => {
      state.value = state.value.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const { addProduct, removeProduct } = wishlistSlice.actions;

export default wishlistSlice.reducer;
