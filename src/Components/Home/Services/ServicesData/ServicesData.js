import React from 'react';

const ServicesData = ({ service }) => {
    return (
        <div className="col-md-4">
            <div className="m-1 text-center">
                <img style={{ height: '50px' }} src={service.img} alt="" />
                <h5 className="mt-3 mb-2"><strong>{service.name}</strong> </h5>
                <p className="text-secondary">{service.desc}</p>
            </div>
        </div>

    );
};

export default ServicesData;