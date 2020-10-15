import React, { useEffect, useState } from 'react';
import ServicesData from './ServicesData/ServicesData';


const Services = () => {
    const [services, setServices] = useState([]);
    const [redirect, setRedirect] = useState();
    const [search, setSearch] = useState("");
    
    // Database
    useEffect(() =>{
        fetch("http://localhost:4200/services?search="+search)
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setRedirect(true)
        })
    }, [redirect, search]);
    
    return (
        <div className="container" id="service">
            <h3 align="center"><b> Provide awesome <strong className="text-danger"> services </strong> </b></h3>
            <div className="d-flex justify-content-center">
                <div className="mx-auto w-100 row mt-2 pt-5">
                    {
                        services.map(service => <ServicesData service={service} key={service.name}></ServicesData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;