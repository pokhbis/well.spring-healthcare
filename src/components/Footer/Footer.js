import React from 'react';
import './Footer.css';
import logo from '../../project-img/logo-2-removebg-preview.png';

const Footer = () => {
    return (
        <div className="">
            <div className="footer-container mt-5 ">
                <div className="row">
                    <div className="col-lg-3">

                        <img className="footer-logo" src={logo} alt="" />
                        {/* section-1 */}
                        <h5>All About Well.Spring </h5>
                        <p className="footer-description text-start">Well.Spring is one of the leading healthcare providing institute. Here patient of all ages can get mental as well as physical support so that they can live a healthy and happy life.</p>
                    </div>
                    <div className="col-lg-3 pt-4">
                        {/* section-2 */}
                        <h3>Follow Us</h3>
                        <ul className="footer-social-media">
                            <li> <img className="icon-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="" /> FaceBook</li>

                            <li> <img className="icon-img" src="https://cdn.icon-icons.com/icons2/729/PNG/512/twitter_icon-icons.com_62751.png" alt="" /> Tweeter</li>
                            <li> <img className="icon-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncuHUeb1oOQuSdOmfg64FtTQiXAA-zB-L7OmyXjzlpc_jmf954S6UHr7ETO-jf9NMpPw&usqp=CAU" alt="" /> Instagram</li>
                        </ul>

                    </div>
                    <div className="col-lg-3 pt-4">
                        {/* section-3 */}
                        <h3>Contact Us</h3>
                        <p>Level-4, 34, Lg Tower, New York, USA <br />
                            Official: well.spring@gmail.com <br />
                            Helpline : 22810867 (Available : 09:00am to 7:00pm)</p>
                    </div>
                    <div className="col-lg-3 pt-4">
                        {/* section-4 */}
                        <h3>Comment</h3>
                        <div>
                            <form action="">
                                <input className="footer-input mt-1" type="text" name="" id="" placeholder=" Your Name" />
                                <input className="footer-input mt-1" type="email" name="" id="" placeholder=" Your Email" />
                            </form>
                        </div>

                        <div>
                            <textarea className="footer-input mt-1" id="w3review" name="w3review" rows="3" cols="23" placeholder=" Comments" ></textarea>
                        </div>
                        <button className="header-btn mb-2">Submit</button>
                    </div>

                </div>
            </div>

            <div className="footer-end pb-3"> @ 2021. Well.Spring By Pokhbis. All Rights Resurved.</div>

        </div>
    );
};

export default Footer;