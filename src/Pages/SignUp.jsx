import React from 'react'
import { useState } from 'react'
import '../CSS/login.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
    })
    const [error, setError] = useState({});

    const formValidator = () => {
        let newErrors = {};

        let { name, email, phone, password } = formData;

        // Name Validation
        if (name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters long";
        }

        const isValidName = /^[a-zA-Z ]*$/;
        if (!isValidName.test(name)) {
            {
                newErrors.name = "Enter a valid name";
            }
        }
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
        // Phone Number Validation
        const isValidPhone = /^[0-9]{10}$/;
        if (!isValidPhone.test(phone)) {
            newErrors.phone = "Enter a valid phone number";
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
        )
        setError((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const validateErrors = formValidator();
        setError(validateErrors);

        let existingUser = JSON.parse(localStorage.getItem("user-data")) || [];

        const updatedUser = [...existingUser, formData];

        localStorage.setItem("user-data", JSON.stringify(updatedUser));

        if (Object.keys(validateErrors).length === 0) { 
            toast.success("Form Submitted Successfully!");
            setFormData({   
                name: "",
                email: "",
                password: "",
                phone: "",
            });
        }
    };
    
    return (
        <>
            <form action="" className='login-form' onSubmit={submitHandler}>
                <h5 className='out'>Sign-UP </h5>

                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    onChange={changeHandler}
                    name='name'
                    value={formData.name}
                    placeholder='enter your name'
                />
                {error.name && <span className='error'>{error.name}</span>}

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id='email'
                    name='email'
                    onChange={changeHandler}
                    value={formData.email}
                    placeholder='enter your email'
                />
                {error.email && <span className='error'>{error.email}</span>}


                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='enter your password'
                />
                {error.password && <span className='error'>{error.password}</span>}

                <label htmlFor="num">Phone:</label>
                <input
                    type="number"
                    name="phone"
                    id="num"
                    value={formData.phone}
                    onChange={changeHandler}
                    placeholder="Enter your phone number"
                />
                {error.phone && <span className='error'>{error.phone}</span>}

                <div className='bottom'>
                    <button type='submit' className="button">sign-up</button>
                    <span >Already have an account <Link to="/login" className='hover' >Log-in</Link></span>
                </div>
            </form>
            <ToastContainer position='top-center' />
        </>
    )
}
export default SignUp;