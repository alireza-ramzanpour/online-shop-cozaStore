import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/slices/UsersSlice";

function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(logoutUser());
        navigate('/login');
    }, [dispatch, navigate]);

    return null; // or any other component you want to render
}

export default Logout;





// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logoutUser, allShopping } from "../../store/slices/UsersSlice";
// import configureStore from "../Store";
// import { redirect } from "react-router-dom";


// export function loader(data) {
//     configureStore.dispatch(logoutUser())
//     return redirect('/login')
// }

// function Logout() {

//     // const navigate = useNavigate()
//     // const dispatch = useDispatch()
//     // const cart = useSelector(allShopping)

//     // useEffect(() => {
//     //     console.log('6666666666666666666666666666');
//     //     console.log(cart);

//     //     dispatch(logoutUser())
//     //     navigate('/login')
//     // }, 0)

//     return (
//         <>
//             {
//             }



//         </>
//     );
// }

// export default Logout;