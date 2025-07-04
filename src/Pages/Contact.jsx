import React from 'react';
import '../CSS/login.css';
import '../CSS/contact.css';
import { toast, ToastContainer } from 'react-toastify';
function Contact() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: "",
    });
    const [error, setError] = React.useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = formValidator();
        setError(newErrors);
        if (Object.keys(newErrors).length === 0) {
            toast.success("Form submitted successfully");
            // Reset the form
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } else {
            console.log("Form has errors", newErrors);
        }
    }
    const formValidator = () => {
        let newErrors = {};
        if (!formData.name) {
            newErrors.name = "Name is required";
        }
        else if (formData.name.length < 3) {
            newErrors.name = "Name must be at least 3 characters long";
        }
        else if (!/^[a-zA-Z ]*$/.test(formData.name)) {
            newErrors.name = "Name can only contain letters and spaces";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid";
        }

        if (!formData.message) {
            newErrors.message = "Message is required";
        }
        else if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters long";
        }
        return newErrors;
    }
    const changeHandler = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    return (
        <div>
        <div className="container">
            
            <div className="left">
                <div className="details">
                    <span><i class="fa-solid fa-location-dot"></i></span>
                    <h5>XYZ Road, ABC Building</h5>
                    <p>Gwalior, Madhya Pradesh</p>
                </div>
                <div className="details">
                    <span></span>
                    <h5>+91 1234567890</h5>
                    <p>Monday to Saturday, 10 AM to 6 PM</p>
                </div>
                <div className="details">
                    <span></span>
                    <h5>ankitkushwah6195@gmail.com</h5>
                    <p>Gwalior, Madhya Pradesh </p>
                </div>
            </div>
            <div className="right">
                <form action="" className='form' onSubmit={handleSubmit}>
                    <h5 className='out'>Get in Touch</h5>
                    <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            onChange={changeHandler}
                            value={formData.name}
                            id="name"
                            placeholder='enter your name'
                        />
                    {error.name && <span className='error'>{error.name}</span>}

                    <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name='email'
                            onChange={changeHandler}
                            value={formData.email}
                            id='email'
                            placeholder='enter your email'
                        />
                    {error.email && <span className='error'>{error.email}</span>}

                    <label htmlFor="message">Message:</label>
                        <input
                            id='message'
                            name='message'
                            onChange={changeHandler}
                            value={formData.message}
                            type="text"
                            placeholder='enter your message'
                        />
                        {error.message && <span className='error'>{error.message}</span>}
                    <button className='button'  type='submit'>Send</button>
                </form>
            </div>
            </div>
            
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229085.78865536652!2d78.02608413499695!3d26.214061908156168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1745084852094!5m2!1sen!2sin" width="1000" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
            <p id='reserve'> &copy; All rights are reserved  &hearts;</p>
            <ToastContainer position='top-center'/ >
            </div>
    );
}
export default Contact;
