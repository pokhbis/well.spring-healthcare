import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
    return (
        <div className="register-form mx-5">



            <div>
                <h2>Register Here</h2>
                <form onSubmit="">
                    {/* <div className="d-flex align-items-center justify-content-center"> */}
                    {/* <h4>Name:</h4> */}

                    {/* </div> */}
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
                <div><button className="login-submit mt-2">Google Register</button></div>
            </div>



            {/* <form >
                <h3>Register: Create Account Here</h3>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control " id="" placeholder="Enter Your Name" />
                    </div>
                </div>
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
                <button type="submit" class="btn btn-primary">Register</button>
                <br />
                <p>Already Registered? <Link to="/login">Log-in</Link></p>
                <button type="submit">Register with Google</button>
            </form> */}

        </div>
    );
};

export default Register;