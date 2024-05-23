import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({

    name: 'users',
    initialState: {
        shoppingCart: [],
        users: [
            {
                username: 'ali1234',
                password: '1234',
                groups : ["admin"],
                name: 'ali',
                family: 'rezaei',
                cart: [
                    { product: 1, count: 2 },
                    { product: 12, count: 1 },
                    { product: 10, count: 3 },
                ],
                history: []
            },
            {
                username: 'mehran2222',
                password: '2222',
                groups : [ "user"],
                name: 'mehran',
                family: 'ahmadi',
                cart: [
                    { product: 2, count: 2 },
                    // { product: 11, count: 1 },
                    // { product: 1, count: 1 },
                    // { product: 3, count: 1 },
                ],
                history: []
            },
            {
                username: 'mehdi1111',
                password: '1111',
                groups : ["customer" ],
                name: 'mehdi',
                family: 'omidi',
                cart: [
                    { product: 1, count: 1 },
                    // { product: 2, count: 2 },
                    // { product: 3, count: 3 },
                ],
                history: []
            },
            {
                username: 'soheil68',
                password: '6868',
                groups : ["user", "customer"],
                name: 'soheil',
                family: 'modiri',
                cart: [
                    { product: 3, count: 1 },
                    // { product: 4, count: 5 },
                    // { product: 5, count: 5 },
                ],
                history: []
            },
            {
                username: 'reza64',
                password: '6464',
                groups : ["admin" , "user" , "customer"],
                name: 'reza',
                family: 'alinia',
                cart: [
                    { product: 2, count: 2 },
                    { product: 1, count: 1 },
                    { product: 3, count: 3 },
                ],
                history: []
            },
        ],
        loginUser: {
            username: '',
            password: '',
            groups: [],
            name: '',
            family: '',
            cart: [
                { product: 1, count: 2 },
            ],
            history: []
        }
    },

    reducers: {
        enterUser: (state, action) => {
            const findUser = state.users.find((user) => user.username == action.payload.username && user.password == action.payload.password)

            if (findUser) {
                state.shoppingCart = [...findUser.cart]
                state.loginUser = JSON.parse(JSON.stringify(findUser))
            }
        },
        logoutUser: (state) => {
            console.log("state.shoppingCart", state.shoppingCart);
            const findUser = state.users.findIndex((user) => user.username == state.loginUser.username)
            if (findUser > -1) {
                let s = [...state.shoppingCart]
                state.users[findUser].cart = [...s]
                state.users = [...state.users]
                state.shoppingCart = []
            }
        },
        decreaseCount: (state, action) => {
            const findProduct = state.shoppingCart.find((cart) => cart.product == action.payload.id)
            if (findProduct) {
                findProduct.count = action.payload.count - 1
            }
        },
        increaseCount: (state, action) => {
            const findProduct = state.shoppingCart.find((cart) => cart.product == action.payload.id)
            if (findProduct) {
                findProduct.count = action.payload.count + 1
            }
        },
        addToCart: (state, action) => {
            const findProduct = state.shoppingCart.find((cart) => cart.product == action.payload.id)
            if (findProduct) {
                findProduct.count += action.payload.count
            } else {
                state.shoppingCart.push({ product: action.payload.id, count: action.payload.count })
            }


        },
        deleteItem: (state, action) => {
            state.shoppingCart = state.shoppingCart.filter((cart) => cart.product != action.payload.id)
        },
        addUser: (state, action) => {
            state.users = state.users.concat({
                name: action.payload.name,
                family: action.payload.family,
                username: action.payload.username,
                password: action.payload.password
            })

        },
        deleteUser: (state, action) => {
            state.users = state.users.filter((user) => user.username != action.payload.username)
        },
        editUser: (state, action) => {
            let findUser = state.users.find((user) => user.username == action.payload.username)
            if (findUser) {
                state.editingUser = {
                    name: findUser.name,
                    family: findUser.family,
                    password: findUser.password,
                    cart: findUser.cart
                }
            }
        },
        addhistory: (state, action) => {
            const findUser = state.users.find((user) => user.username == action.payload.username)
            state.shoppingCart = action.payload.cart
            if (findUser) {
                state.loginUser = {
                    ...state.loginUser,
                    history: [...state.loginUser.history, action.payload.history],
                    cart: action.payload.cart,
                }
            }
        }
        
    }
});

export const { enterUser, logoutUser, increaseCount, decreaseCount, addToCart, deleteItem, addUser, deleteUser, editUser, addhistory } = usersSlice.actions
export const allUsers = (state) => state.users.users
export const loggedUser = (state) => state.users.loginUser
export const allShopping = (state) => state.users.shoppingCart
export default usersSlice.reducer;