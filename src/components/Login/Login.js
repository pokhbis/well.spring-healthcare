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
                {/* <form onSubmit="">
                    <h3>Log-in Here</h3>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control " id="inputEmail3" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control " id="inputPassword3" />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-sm-10 offset-sm-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                <label class="form-check-label" for="gridCheck1">
                                    Example checkbox
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                    <br />
                    <p>New To Well.Spring? <Link to="/register">Register</Link></p>
                    {/* <button type="submit">Submit</button> */}
                {/* <br />
                    <button onClick={signInUsingGoogle} type="submit">Log-in with Google</button>
                </form> */}

            </div>

        </div>
    );
};

export default Login;