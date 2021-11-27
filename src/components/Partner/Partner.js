import React from 'react';
import './Partner.css';
import servicesTopImg from '../../project-img/services-icon-new.jpg';
import img1 from '../../partner-img/p-1.jpg';
import img4 from '../../partner-img/p-2.jpg';
import img2 from '../../partner-img/p-3.jpg';
import img3 from '../../partner-img/p-4.jpg';
import img5 from '../../partner-img/p-5.jpg';
import img6 from '../../partner-img/p-6.jpg';

const Partner = () => {
    return (
        <div className="container mt-5">
            <div>
                <div >
                    <h1>
                        <span ><img className="services-top-img" src={servicesTopImg} alt="" /></span>
                        Our Partners
                        <span ><img className="services-top-img" src={servicesTopImg} alt="" /></span>
                    </h1>
                </div>
                <div className=" row">
                    <div className="d-flex m-5">
                        <div className="col-md-6 mt-5">
                            <h3>Our Happy Partners</h3>
                            <p className="text-start ">In this 4+ years journey, with the intension of making people healthy and happy; introduced us with various well known organization. We are happy to serve them with our knowledge as well as products. It's a great pleasure that we have changed numerous lives in those years.  </p>
                        </div>
                        <div className="col-md-6 ms-4">
                            <div className="row">

                                <div className="col-lg-4 p-img"><img src="https://wellspring.qodeinteractive.com/wp-content/uploads/2016/01/client-2.png" alt="" /></div>
                                <div className="col-lg-4 p-img"><img src="https://wellspring.qodeinteractive.com/wp-content/uploads/2016/01/client-1.png" alt="" /></div>
                                <div className="col-lg-4 p-img-middle p-img"><img src="https://wellspring.qodeinteractive.com/wp-content/uploads/2016/01/client-3.png" alt="" /></div>
                                <div className="col-lg-4 p-img-middle  "><img src="https://wellspring.qodeinteractive.com/wp-content/uploads/2016/01/client-4.png" alt="" /></div>
                                <div className="col-lg-4 p-img-middle"><img src="https://wellspring.qodeinteractive.com/wp-content/uploads/2016/01/client-5.png" alt="" /></div>
                                <div className="col-lg-4 p-img-middle"><img src="https://wellspring.qodeinteractive.com/wp-content/uploads/2016/01/client-7.png" alt="" /></div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;