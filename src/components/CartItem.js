import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    allShopping,
    loggedUser,
    decreaseCount,
    increaseCount,
    deleteItem,
} from "../store/slices/UsersSlice";
import { products } from "../store/slices/ProductsSlice";

function CartItem() {
    const shoppingCart = useSelector(allShopping)
    const goods = useSelector(products)
    const user = useSelector(loggedUser)
    const [sCart, setSCart] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        let ss = goods.filter((good) => {
            return shoppingCart.some((item) => item.product == good.id)
        }).map((good) => (
            {
                ...good,
                count: shoppingCart.find((item) => item.product == good.id).count
            }
        ))
        setSCart(ss)

    }, [shoppingCart, user])

    return (
        <>
            <tbody>
                {
                    sCart.map((s) => (
                        <tr className="table-row">
                            <td className="column-1">
                                <div className="item">
                                    <input type="button" className="delItem" value="X" onClick={() => {
                                        dispatch(deleteItem(
                                            { id: s.id, username: s.username }
                                        ))
                                    }} />
                                    <img src={process.env.PUBLIC_URL + s.images[0]} className="item-img" alt="IMG"></img>
                                </div>
                            </td>
                            <td className="column-2">{s.name}</td>
                            <td className="column-3">{"$" + s.price}</td>
                            <td className="column-4">
                                <div className="num-product">
                                    <input type="button" className="num-product__arrow" value='-' onClick={() => {
                                        dispatch(decreaseCount(
                                            { id: s.id, count: s.count }
                                        ))
                                    }} />
                                    <input type="number" className="txt-product" value={s.count} />
                                    <input type="button" className="num-product__arrow" value='+' onClick={() => {
                                        dispatch(increaseCount(
                                            { id: s.id, count: s.count }
                                        ))
                                    }} />
                                </div>
                            </td>
                            <td className="column-5">{"$" + (s.price * s.count).toFixed(2)}</td>
                        </tr>
                    ))
                }
            </tbody>


        </>
    )
}
export default CartItem;