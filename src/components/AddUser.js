import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { allUsers, addUser } from "../store/slices/UsersSlice";

function AddUser() {

    const members = useSelector(allUsers)
    const txtName = useRef()
    const txtFamily = useRef()
    const txtUsername = useRef()
    const txtMail = useRef()
    const txtPassword = useRef()
    const txtConfirmPassword = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleDublicateUsername = (value) => {
        let dublicateUser = members.map((member) => member.username).some((username) => username.toLowerCase() == value.toLowerCase())
        if (dublicateUser) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'User with this username already exist!'
            })
        } else {
            dispatch(addUser({
                name: txtName.current.value,
                family: txtFamily.current.value,
                username: txtUsername.current.value,
                password: ''
            }))
            navigate('/admin/users')
        }
    }

    const validatePassword = (txtPassword, txtConfirmPassword) => {
        if (txtPassword.current.value != txtConfirmPassword.current.value) {
            alert("Passwords Don't Match")
        }
    }

    return (
        <>
            <div className='page-wrapper__box'>
                <div className='addProduct-row'>
                    <div className='addProduct-col'>
                        <h4>ADD A NEW USER</h4>
                    </div>
                    <div className='addProduct-col'>
                        <input type="button" className='saveBtn dd' value='SAVE' onClick={() => {
                            handleDublicateUsername(txtUsername.current.value)
                        }} />
                        <input type="button" className='saveBtn cancel dd' value='CANCEL' onClick={() => navigate('/admin/users')} />
                    </div>
                </div>
                <br />
                <div className='card-header'>
                    <h5>User Information</h5>
                </div>
                <div className='card-body'>
                    <form>
                        <div className='card-body__row'>
                            <div className='card-body__col'>
                                <label for='lname' className='form-lable'>Name:</label>
                                <input type="text" ref={txtName} className='form-control' placeholder="type name..." />
                            </div>
                            <div className='card-body__col'>
                                <label for='lfamily' className='form-lable'>Family:</label>
                                <input type="text" ref={txtFamily} className='form-control' placeholder="type family..." />
                            </div>
                        </div>
                        <br />
                        <div className='card-body__row'>
                            <div className='card-body__col'>
                                <label for='lusername' className='form-lable'>Username:</label>
                                <input type="text" ref={txtUsername} className='form-control' placeholder="type username..." />
                            </div>
                            <div className='card-body__col'>
                                <label for='lemail' className='form-lable'>Email:</label>
                                <input type="email" ref={txtMail} className='form-control' placeholder="john.joe@example.com" />
                            </div>
                        </div>
                        <br />
                        <div className='card-body__row'>
                            <div className='card-body__col'>
                                <label for='pwd' className='form-lable'>Password:</label>
                                <input type="password" ref={txtPassword} className='form-control' placeholder="type password..." required
                                    onChange={() => {
                                        if (txtPassword.current.value != txtConfirmPassword.current.value) {
                                            alert("Passwords Don't Match")
                                        }
                                    }}
                                />
                            </div>
                            <div className='card-body__col'>
                                <label for='pwd' className='form-lable'>Re-password:</label>
                                <input type="password" ref={txtConfirmPassword} className='form-control' placeholder="repeat password..." required
                                    onKeyUp={() => {
                                        if (txtPassword.current.value != txtConfirmPassword.current.value) {
                                            alert("Passwords Don't Match")
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
export default AddUser;