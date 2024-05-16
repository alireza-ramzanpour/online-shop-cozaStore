import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enterUser, allUsers } from "../../store/slices/UsersSlice";
import { useNavigate } from "react-router-dom";

function Login() {
    const users = useSelector(allUsers)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const txtUsername = useRef()
    const txtPassword = useRef()
    return (
        <>
            <div className="loginBox">
                <div className="loginBox-content">
                    <input type="text" ref={txtUsername} placeholder="Username" className="txtInput" /> <br />
                    <input type="password" ref={txtPassword} placeholder="Password" className="txtInput" /> <br />
                    <input type="button" className="loginBtn" value='Login' onClick={() => {
                        dispatch(enterUser({
                            username: txtUsername.current.value,
                            password: txtPassword.current.value,
                        }))
                        navigate('/home')
                    }} />
                </div>
            </div>
        </>
    );
}

export default Login;