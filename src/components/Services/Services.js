import React, { useEffect, useState } from 'react';
import './Services.css';
import servicesTopImg from '../../project-img/services-icon-new.jpg';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const Services = () => {
    const [services, setServices] = useState([]);
    const history = useHistory();

    useEffect(() => {

        fetch("./data.json")
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    const handleGoogleLoginBtn = () => {
        // setCart([]);
        // clearTheCart();
        history.push('/login');
    }
    return (
        <div>
            <div className="services container mt-5">
                <div className="services-top">
                    <h1>
                        <span ><img className="services-top-img" src={servicesTopImg} alt="" /></span>
                        Our Services
                        <span ><img className="services-top-img" src={servicesTopImg} alt="" /></span>
                    </h1>

                    <h6>Our team of experts are here to help people in diverse health care fields, so that the world can be a happy place to live in. <br /> We are committed to our clients to give them a healthy life ahead!</h6>
                </div>
                <div className="services-card mt-5">
                    <div className="row">
                        {
                            services.map(service =>

                                // <DisplayService

                                //     key={service.id}
                                //     service={service}
                                // ></DisplayService>

                                <div key={service.id} className="col-md-6 col-lg-4">
                                    <div className="card p-3 m-2 border border">
                                        <div className="">
                                            <img className="card-img" src={service.img} alt="" />
                                        </div>
                                        <h3>
                                            {service.title}
                                        </h3>
                                        <p>{service.description}</p>
                                        <div>
                                            <Link to={`/getService/${service.title}`}>
                                                <button onClick={handleGoogleLoginBtn} className="service-btn">Enroll</button>
                                            </Link>

                                        </div>
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