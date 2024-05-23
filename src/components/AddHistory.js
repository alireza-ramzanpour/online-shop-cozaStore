import React, { useEffect, useState } from "react";
import { loggedUser } from "../store/slices/UsersSlice";
import { useSelector } from "react-redux";

function AddHistory() {
    const loginUser = useSelector(loggedUser)
    const [formattedHistory, setFormattedHistory] = useState([]);

    useEffect(() => {
        const formattedHistoryData = loginUser.history.map((h) => {
            const purchaseDate = new Date(h.date);
            const formattedDate = `${purchaseDate.toLocaleString('en-US', { weekday: 'long' })}, ${purchaseDate.getDate()}/${purchaseDate.getMonth() + 1}/${purchaseDate.getFullYear()}, ${purchaseDate.getHours()}:${purchaseDate.getMinutes()}:${purchaseDate.getSeconds()}`;
            return { ...h, formattedDate };
        });
        setFormattedHistory(formattedHistoryData);
    }, [loginUser]);

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
                                    <th className="column-4">Qty</th>
                                    <th className="column-5">Total</th>
                                    <th className="column-5">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    formattedHistory.map((h) => (
                                        <tr className="table-row">
                                            <td className="column-1">
                                                <div className="item">
                                                    <img src={process.env.PUBLIC_URL + h.images} className="item-img" alt="IMG"></img>
                                                </div>
                                            </td>
                                            <td className="column-2">{h.name}</td>
                                            <td className="column-3">{"$" + h.price}</td>
                                            <td className="column-4">{h.count}</td>
                                            <td className="column-5">{"$" + (h.price * h.count).toFixed(2)}</td>
                                            <td className="column-5">{h.formattedDate}</td>
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
                    {/* <div className="shopBox-rightCol">
                        <div className="shopBox-rightCol__inner">

                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )

}
export default AddHistory;