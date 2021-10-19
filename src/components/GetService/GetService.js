import React from 'react';
import { useParams } from 'react-router';
import './GetService.css';
const GetService = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h3 className="p-5">Your request for <span className="text-primary"> {serviceId} </span>course will be processed soon and you will receive necessary instructions.</h3>

        </div>
    );
};

export default GetService;