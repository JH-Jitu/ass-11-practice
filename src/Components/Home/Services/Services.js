import React from 'react';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'
import ServicesData from './ServicesData/ServicesData';

const serviceData = [
    {
        name: 'Web & Mobile Design',
        img: service1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum quos odio, dicta porro quidem ut."
    },
    {
        name: 'Graphics Design',
        img: service2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum quos odio, dicta porro quidem ut."
    },
    {
        name: 'Web Development',
        img: service3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum quos odio, dicta porro quidem ut."
    }
]

const Services = () => {
    return (
        <div className="container">
            <h3 align="center"><b> Provide awesome <strong className="text-danger"> services </strong> </b></h3>
            <div className="d-flex justify-content-center">
                <div className="mx-auto w-100 row mt-2 pt-5">
                    {
                        serviceData.map(service => <ServicesData service={service} key={service.name}></ServicesData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;