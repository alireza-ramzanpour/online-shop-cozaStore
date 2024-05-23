import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { allUsers } from "../../store/slices/UsersSlice";
import { products } from "../../store/slices/ProductsSlice";
import { deleteProduct, editProduct } from "../../store/slices/ProductsSlice";
import AddToClothes from "../../components/AddToClothes";


function Clothes() {

    const users = useSelector(allUsers)
    const goods = useSelector(products)
    const [allPrice, setAllPrice] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const [userProducts, setUserProducts] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        let prcs = goods.map((good) => allPrice.push(good.price))
        let gheymats = allPrice.flat()
        let fi = new Set(gheymats)
        prcs = Array.from(fi)
        setAllPrice(prcs)

        let das = allCategories.flat()
        let cats = goods.map((good) => allCategories.push(good.categories))
        let c = new Set(das)
        cats = Array.from(c)
        setAllCategories(cats)

    }, 0)

    return (
        <>

            <div className='page-wrapper__box'>
                <div className='inputWrapper'>
                    <input type="button" className='saveBtn' value='Add' onClick={() => {
                        <AddToClothes />
                    }} />
                    <div className='addItem-holder part'>
                        <div className='addProduct-col'>
                            <input type="text" className='form-control' placeholder="search products..." /> <br />
                        </div>
                    </div>
                </div>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th className='tablePrice'>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            goods.map((product) => (
                                <tr>
                                    <td className='tableId'>{product.id}</td>
                                    <td >{product.name}</td>
                                    <td className='tablePrice'>{'$ ' + product.price}</td>
                                    <td>
                                        <FaEdit className="productFormIcon tableEdit" onClick={() => {
                                            dispatch(editProduct({
                                                id: product.id
                                            }))
                                            // <AddToClothes />
                                        }
                                        } />
                                    </td>
                                    <td>
                                        <RiDeleteBin6Line className="productFormIcon tableDelete" onClick={() => {

                                            let findInCart = users.some((user) => user.cart.some((item) => item.product == product.id))

                                            if (findInCart) {
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Error',
                                                    text: 'You cannot delete this item. It is in the user list'
                                                })
                                            } else {
                                                Swal.fire({
                                                    title: "Are you sure?",
                                                    text: "You won't be able to revert this!",
                                                    icon: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonColor: "#0db4ac",
                                                    cancelButtonColor: "#d33",
                                                    confirmButtonText: "Yes, delete it!"
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        dispatch(deleteProduct(
                                                            {
                                                                id: product.id
                                                            }
                                                        ))
                                                    }
                                                });
                                            }
                                        }} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='page-wrapper__box'>
                <table className='styled-table leftTable'>
                    <thead>
                        <tr>
                            <th colSpan='2'>At a glance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Total Products:</td>
                            <td>{goods.length}</td>
                        </tr>
                        <tr>
                            <td>Maximum Price:</td>
                            <td>{Math.max(...allPrice) + ' $'}</td>
                        </tr>
                        <tr>
                            <td>Minimum Price:</td>
                            <td>{Math.min(...allPrice) + ' $'}</td>
                        </tr>
                        {/* <tr>
                            <td>Categories:</td>
                            <td>{allCategories.join(', ')}</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Clothes;