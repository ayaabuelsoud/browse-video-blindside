import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

const LogIn = () => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "userName") {
            setUserName(value);
        }

        if (id === "password") {
            setPassword(value);
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let currentUsers = JSON.parse(localStorage.getItem('users'));
        let users = currentUsers ? currentUsers : [];
        if (userName == "admin" && password == "admin") {
            localStorage.setItem("currentUser", JSON.stringify({ userName, password }))
            navigate("/")
            return alert(`Welcome ${userName}`)
        }
        let found = false;
        users.forEach(user => {
            console.log(user, userName, password, user.userName == userName && user.password == password)
            if (user.userName == userName && user.password == password) {
                localStorage.setItem("currentUser", JSON.stringify(user))
                navigate("/")
                found = true;
                return 0
            }
        });
        if (found) {
            return alert(`Welcome ${userName}`)
        }
        return alert("no user with the userName and password provided")
    }
    return (
        <div className='form'>

            <div class="text-center">
                <img src='./images/blindside.jpg' alt='BlindSide' />
            </div>

            <div className="form-body">
                <p>Please login to your account</p>
                <form onSubmit={handleSubmit}>
                    <div className="userName form-group">
                        <label className="form__label" htmlFor="userName">UserName </label>
                        <input type="text" id="userName" className="form__input form-control" onChange={(e) => handleInputChange(e)} placeholder="UserName" />
                    </div>
                    <div className="form-group password">
                        <label className="form__label" htmlFor="password">Password </label>
                        <input className="form__input form-control" type="password" id="password" onChange={(e) => handleInputChange(e)} placeholder="Password" />
                    </div>
                    <div className="footer">
                        <button type="submit" className="btn btn-warning">LogIn</button>

                        <div class="text-center mt-2">
                            <p>Not a member? <Link to={"/register"}>Register</Link> </p>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;