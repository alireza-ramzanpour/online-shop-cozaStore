import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./slices/ProductsSlice";
import UsersSlice from "./slices/UsersSlice";

export default configureStore({
    reducer: {
        products: ProductsSlice,
        users: UsersSlice
    }
})