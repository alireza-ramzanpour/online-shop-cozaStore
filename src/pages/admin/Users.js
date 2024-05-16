import React from "react";
import { allUsers, deleteUser, editUser } from "../../store/slices/UsersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2';


function Users() {

    const users = useSelector(allUsers)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleDeleteUser = (value) => {
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
                dispatch(deleteUser(
                    {
                        username: value
                    }
                ))
            }
        });
    }

    return (
        <>
            <div className='page-wrapper__box'>
                <div className='inputWrapper'>
                    <input type="button" className='saveBtn' value='Add' onClick={() => {
                        navigate('/admin/adduser')
                    }} />
                </div>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Family</td>
                            <td>Username</td>
                            <td>Cart</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.family}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        {/* {user.cart.map((c) => c.product) + ','} */}
                                    </td>
                                    <td>
                                        <FaEdit className="productFormIcon tableEdit" onClick={() => {
                                            dispatch(editUser({
                                                username: user.username,
                                            }))
                                            navigate('/admin/adduser')
                                        }} />
                                    </td>
                                    <td>
                                        <RiDeleteBin6Line className="productFormIcon tableDelete" onClick={() => {
                                            handleDeleteUser(user.username)
                                            navigate('/admin/users')
                                        }} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>


            </div>

        </>
    )
}
export default Users;