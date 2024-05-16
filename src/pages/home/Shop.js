import React from "react";

function Shop() {

    return (
        <>
            <div className="container">
                <div className="shop-wrapper">
                    <div className="shop-col">
                        <table className="shoppingCart-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th></th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table_row">
                                    <td>
                                        <div className="shop-item">
                                            <img src="assets/images/item-cart-04.jpg.webp" alt="ITEM" />
                                        </div>
                                    </td>
                                    <td>Fresh Strawberries</td>
                                    <td>$ 36.00</td>
                                    <td></td>
                                    <td>$ 36.00</td>
                                </tr>
                                <tr className="table_row">
                                    <td>
                                        <div className="shop-item">
                                            <img src="assets/images/item-cart-05.jpg.webp" alt="ITEM" />
                                        </div>
                                    </td>
                                    <td>Lightweight Jacket</td>
                                    <td>$ 16.00</td>
                                    <td></td>
                                    <td>$ 16.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="shop-modifyCart">
                            <div className="shop-coupon">
                                <input type="text" placeholder="Coupon Code" />
                                <div className="coupon-btn">Apple Coupon</div>
                            </div>
                            <div className="shop-updateCart">
                                <div className="coupon-btn">Update Cart</div>
                            </div>
                        </div>
                    </div>

                    <div className="shop-col"></div>
                </div>
            </div>


        </>
    )
}

export default Shop;