import React from 'react';
import './Header.css';
import logo from "../../project-img/logo-2-removebg-preview.png";
import { Link } from 'react-router-dom';
import useAuth from '../Context/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header-container">
            <div className="header container">
                <div className="row">
                    <div className="col-md-2">
                        <img className="logo-img pt-2" src={logo} alt="" />

                    </div>


                    <div className="col-md-10">

                        <div className="header-items">
                            <ul className="d-flex align-items-end justify-content-end pt-4 me-5">
                                <Link to="/home" className="item">Home</Link>
                                <Link to="/services" className="item">Services</Link>
                                <Link to="/partners" className="item">Partners</Link>
                                <Link to="/blog" className="item">Blog</Link>
                                <Link to="/register" className="item">Register</Link>
                                {user.email &&
                                    <span style={{ color: "blue ", fontWeight: "bold", paddingBottom: "10px" }}>Hello {user.displayName}</span>
                                }
                                {
                                    user.email ?
                                        // <button onClick={logOut} className="item">Logout</button>
                                        <Link to="/home" onClick={logOut} className="item">Logout</Link>
                                        :
                                        <Link to="/login" className="item">Login</Link>

                                }
                                {/* 
                                <li className="item">Services</li>
                                <li className="item">Partners</li>
                                <li className="item">Blog</li>
                                <li className="item">Register</li>
                                <li className="item">Login</li>
                                <li className="item">Logout</li> */}

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;