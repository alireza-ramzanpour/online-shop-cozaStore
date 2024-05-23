import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allShopping } from "../store/slices/UsersSlice";
import { products } from "../store/slices/ProductsSlice";
import { loggedUser } from "../store/slices/UsersSlice";
import { addhistory } from "../store/slices/UsersSlice";

function CartDetails() {
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

        </>
    )
}
export default CartDetails;