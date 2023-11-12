import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlist-slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedWishlistReducer = persistReducer(persistConfig, wishlistReducer);

const store = configureStore({
  reducer: {
    wishlist: persistedWishlistReducer,
  },
});

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
