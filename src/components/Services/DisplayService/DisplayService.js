import React, { useEffect, useState } from 'react';
// import servicesTopImg from '../../project-img/services-icon-new.jpg';
// import { useHistory } from 'react-router';
import './DisplayService.css';

const Services = () => {
    const [service, setService] = useState([]);
    // const history = useHistory();

    useEffect(() => {

        fetch("./data.json")
            .then(res => res.json())
            .then(data => setService(data))

    }, [])

    // const handleGoogleLoginBtn = () => {
    //     // setCart([]);
    //     // clearTheCart();
    //     history.push('/login');
    // }
    return (
        <div>
            <div className="services container mt-5">
                <div className="services-top">
                    {/* <h1>
                        <span ><img className="services-top-img" src={servicesTopImg} alt="" /></span>
                        Our Services
                        <span ><img className="services-top-img" src={servicesTopImg} alt="" /></span>
                    </h1> */}

                    {/* <h6>Our team of experts are here to help people in diverse health care fields, so that the world can be a happy place to live in. <br /> We are committed to our clients to give them a healthy life ahead!</h6> */}
                </div>
                <div className="services-card mt-5">
                    <div className="row">
                        {
                            service.map(service =>

                                // <DisplayService

                                //     key={service.id}
                                //     service={service}
                                // ></DisplayService>

                                <div key={service.id} className="col-md-6 col-lg-4">
                                    <div className="card p-3 m-2 border border">
                                        <div className="">
                                            <img className="singleCard-img " src={service.img} alt="" />
                                        </div>
                                        <h3 className="singleCard-text">
                                            {service.title}
                                        </h3>
                                        <p className="singleCard-description">{service.description}</p>
                                        {/* <div><button onClick=" " className="service-btn">Enroll</button></div> */}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>



                <div>

                </div>
            </div>
        </div>
    );
};

export default Services;