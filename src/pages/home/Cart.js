import React from "react";
import CartDetails from "../../components/CartDetails";
import CartItem from "../../components/CartItem";

function Cart() {

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
                            <CartItem />
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
                        <CartDetails />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;