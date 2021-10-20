import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

import { useLocation, useHistory, } from 'react-router-dom';
import useAuth from '../Context/useAuth';
const Register = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="register-form mx-5">

            <div>
                <h2>Register Here</h2>
                <form onSubmit="">

                    <input className="register-input mt-4" type="text" name="" id="" placeholder="Enter Name" />
                    <br />
                    <input className="register-input mt-2" type="email" name="" id="" placeholder="Enter Email" />
                    <br />
                    <input className="register-input mt-2" type="password" name="" id="" placeholder="Enter Password" />
                    <br />
                    <input className="login-submit mb-4 mt-2" type="submit" value="Submit" />
                </form>

                <p>Already Have an Account? <Link to="/login">Log-in</Link></p>
                <div>------------------- Or ------------------</div>
                <div><button onClick={handleGoogleLogin} className="login-submit mt-2">Google Register</button></div>
            </div>


        </div>
    );
};

export default Register;






