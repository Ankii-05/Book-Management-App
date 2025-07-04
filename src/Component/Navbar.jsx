import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
let style = {
    btn:{
        margin:0,
    }
}
import './navbar.css';
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-secondary  navbar-dark p-2">
                <Link to="#" className="navbar-brand">
                    MyBookApp
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link fs-6">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/MyBookApp" className="nav-link fs-6">MyBook</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/favorite" className="nav-link fs-6">Favorite Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link fs-6">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link fs-6">Contact</Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="/login"  className="btn btn-outline-warning fs-6">Login</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
