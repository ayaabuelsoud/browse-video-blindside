import React, { useState } from 'react'
import { useNavigate, Link} from "react-router-dom";


const RegistrationForm = () => {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "userName") {
      setUserName(value);
    }

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log(userName, email, password, confirmPassword);
    if (password.length < 6) {
      alert("password length should be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      alert("passwords don't match.");
      return;
    }
    let parsedUsers = JSON.parse(localStorage.getItem('users'))
    let users = parsedUsers ? parsedUsers : [];

    let obj = {
      userName: userName,
      email: email,
      password: password, // should be encrypted
    }

    let newUsers = [...users, obj];

    localStorage.setItem('users', JSON.stringify(newUsers))
    alert("User has been registered successfully, please login.");

    navigate("/login")
  }

  return (
    <div className='form'>
      <div class="text-center">
        <img src='./images/blindside.jpg' alt='BlindSide'/></div>
      <div className="form-body">
      <p>Please Create a new account</p>
        <form onSubmit={handleSubmit}>
          <div className="username form-group">
            <label className="form__label" for="userName">User Name </label>
            <input className="form__input form-control" type="text" value={userName} onChange={(e) => handleInputChange(e)} id="userName" placeholder="User Name" />
          </div>

          <div className="email form-group">
            <label className="form__label" for="email">Email </label>
            <input type="email" id="email" className="form__input form-control" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
          </div>

          <div className="password form-group">
            <label className="form__label" for="password">Password </label>
            <input className="form__input form-control" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
          </div>

          <div className="confirm-password form-group">
            <label className="form__label" for="confirmPassword">Confirm Password </label>
            <input className="form__input form-control" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />
          </div>
          <div className="footer">
            <button type="submit" class="btn btn-warning">Create a new account</button>

            <p className="text-center text-muted mt-5 mb-0">
              Have already an account?
              <Link to={"/login"}> Login</Link>
            </p>

          </div>
        </form>
      </div>
    </div>

  );
}
export default RegistrationForm;