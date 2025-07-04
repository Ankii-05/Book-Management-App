import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../CSS/login.css'
import { toast, ToastContainer } from "react-toastify";
function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const formValidator = () => {
    let newErrors = {};
    let { email, password } = formData;

    // Email Validation
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!isValidEmail.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    // Password Validation
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    let isValidPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,20}$/;
    if (!isValidPassword.test(password)) {
      newErrors.password = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }
    return newErrors;
  }
  const changeHandler = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    })
    );
    setError((prev) => ({
      ...prev,
      [name]: "",
    }))
  }
  const submitHandler = (e) => {
    e.preventDefault();
    let errors = formValidator();
    setError(errors);

    let existingUser = JSON.parse(localStorage.getItem("user-data")) || [];

    const updatedUser = [...existingUser, formData];

    localStorage.setItem("user-data", JSON.stringify(updatedUser));

    if (Object.keys(errors).length === 0) {
      toast.success("Login Successful");
      setFormData({
        email: "",
        password: "",
      });
    }
  }
  return (
    <>
      <form action="" className="login-form" onSubmit={submitHandler}>

        <h5 className="out">Login Form</h5>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={changeHandler}
          value={formData.email}
          placeholder="Enter your email"
        />
        {error.email && <span className="error">{error.email}</span>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={changeHandler}
          value={formData.password}
          id="password"
          placeholder="Enter your password"
        />
        {error.password && <span className="error">{error.password}</span>}


        <div className="btn-div bottom">
          <p><button className="button " type="submit">Sign-In</button></p>
          <span>if you don't have any account please <Link to="/sign-up" className='hover'>Sign-UP</Link></span>
        </div>

      </form>
      <ToastContainer position="top-center" />
    </>
  );
}
export default Login;
