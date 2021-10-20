import React from 'react';
import { Link, useLocation, useHistory, } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import './Login.css';



const Login = () => {
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



        <div className="login-form">

            <div>
                <h2>Login Here</h2>
                <form onSubmit="">
                    {/* <div className="d-flex align-items-center justify-content-center"> */}
                    {/* <h4>Name:</h4> */}
                    <input className="login-input mt-4" type="email" name="" id="" placeholder="Enter Email" />
                    {/* </div> */}

                    <br />
                    <input className="login-input mt-2" type="password" name="" id="" placeholder="Enter Password" />
                    <br />
                    <input className="login-submit mb-4 mt-2" type="submit" value="Submit" />
                </form>

                <p>New to Well.Spring? <Link to="/register">Create Account</Link></p>
                <div>------------------- Or ------------------</div>
                <div><button onClick={handleGoogleLogin} className="login-submit mt-2">Google Log-in</button></div>


            </div>

        </div >
    );
};

export default Login;


