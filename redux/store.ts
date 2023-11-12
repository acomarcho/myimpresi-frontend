import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlist-slice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
