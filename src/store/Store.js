import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./slices/ProductsSlice";
import UsersSlice from "./slices/UsersSlice";
import MenuSlice from "./slices/MenuSlice";

export default configureStore({
    reducer: {
        products: ProductsSlice,
        users: UsersSlice,
        menus: MenuSlice
    }
})