import React from 'react';
import './ServicesData.css'

const ServicesData = ({ service }) => {
    console.log(service)
    return (
        <div className="col-md-4">
            <div className="m-1 text-center">
                <img className="serviceImg" src={`data:image/png;base64,${service.image.img}`} alt="" />
                <h5 className="mt-3 mb-2"><strong>{service.name}</strong> </h5>
                <p className="text-secondary">{service.desc}</p>
            </div>
        </div>

    );
};

export default ServicesData;