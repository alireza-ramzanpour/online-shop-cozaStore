import React, { useEffect, useState } from "react";
import { products } from "../../store/slices/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
    allShopping,
    decreaseCount,
    increaseCount,
    deleteItem,
    loggedUser,
    addhistory
} from "../../store/slices/UsersSlice";
import { useNavigate } from "react-router-dom";

function Cart() {

    const shoppingCart = useSelector(allShopping)
    const goods = useSelector(products)
    const user = useSelector(loggedUser)
    const [sCart, setSCart] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()


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
            <div className="container">
                <div className="shopBox-wrapper">
                    <div className="shopBox-leftCol">
                        <table >
                            <thead>
                                <tr >
                                    <th className="column-1">Product</th>
                                    <th className="column-2"></th>
                                    <th className="column-3">Price</th>
                                    <th className="column-4">Quantity</th>
                                    <th className="column-5">Total</th>
                                </tr>
                            </thead>
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
                        </table>
                        <div className="button-wrapper">
                            <div className="button-wrapper__left">
                                <input type="text" placeholder="Coupon Code" />
                                <div className="coupon-btn">APPLY COUPON</div>
                            </div>
                            <div className="coupon-btn">UPDATE CART</div>
                        </div>
                    </div>
                    <div className="shopBox-rightCol">
                        <div className="shopBox-rightCol__inner">
                            <h1>CART TOTALS</h1>
                            <div className="subtotal">
                                <span>Subtotal:</span>
                                <span>$79.65</span>
                            </div>
                            <div className="shipping">
                                <div className="letfCol-shipping">
                                    <span>Shipping</span>
                                </div>
                                <div className="rightCol-shipping">
                                    <p>
                                        There are no shipping methods available. Please double check your address, or contact us if you need any help.
                                    </p>
                                    <div className="shipping-input__box">
                                        <span>
                                            CALCULATE SHIPPING
                                        </span>
                                        <select>
                                            <option>Select a country</option>
                                            <option>USA</option>
                                            <option>UK</option>
                                        </select>
                                        <input type="text" placeholder="State / Country" />
                                        <input type="text" placeholder="Postcode / Zip" />
                                        <div className="button-wrapper__cart">UPDATE TOTALS</div>
                                    </div>
                                </div>
                            </div>
                            <div className="subtotal">
                                <span>Total</span>
                                <span>{
                                    "$" +
                                    sCart.reduce((s, num) => {
                                        return (num.count * num.price) + s
                                    }, 0)
                                }</span>
                            </div>

                            <input type="button" className="check-btn" value='PROCEED TO CHECKOUT' onClick={() => {
                                sCart.map((s) => {

                                    dispatch(addhistory(
                                        {
                                            username: user.username,
                                            history: {
                                                name: s.name,
                                                price: s.price,
                                                count: s.count,
                                                images: s.images[0],
                                                date: Date()
                                            },
                                            cart: [],
                                        }
                                    ))
                                })
                                setSCart([])
                                navigate('/history')

                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;