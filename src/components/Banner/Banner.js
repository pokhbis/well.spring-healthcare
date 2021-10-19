import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div>

            <div className="banner d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="banner-title-text">Nurturing Your <span>Body And Mind !</span></h1>
                            <h4>We help people to become  the happiest version of themselves.</h4>
                            <button className="header-btn">Purchase</button>
                        </div>
                        <div className="col-md-4">
                            {/* <h3>col-2</h3> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;