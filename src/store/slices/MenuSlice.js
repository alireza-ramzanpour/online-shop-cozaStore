import { createSlice } from "@reduxjs/toolkit";

export const MenuSlice = createSlice({

    name: 'menus',
    initialState: {
        shoppingCart: [],
        menus: [

            {
                name: "Dashboard",
                path: "/admin/dashboard",
            },
            {
                name: "Carts",
                path: "/admin/carts",
            },
            {
                name: "Clothes",
                path: "/admin/clothes",
            },
            {
                name: "Users",
                path: "/admin/users",
            },
        ],
        groups: [
            {
                name: "admin",
                menus: ["Dashboard", "Clothes", 'Carts', 'Users']
            },
            {
                name: "user",
                menus: ["Dashboard", "Clothes", 'Carts']
            },
            {
                name: "customer",
                menus: ["Dashboard", 'Carts']
            },
        ]

    },

    reducers: {


    }
});

export const allMenus = (state) => state.menus.menus
export const allGroups = (state) => state.menus.groups
export default MenuSlice.reducer;