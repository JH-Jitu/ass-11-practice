import React from 'react';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'
import FeedbackData from './FeedbackData/FeedbackData';

const feedbacks = [
    {
        name: 'Web & Mobile Design',
        img: service1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum quos odio, dicta porro quidem ut.",
        desig: "CEO"
    },
    {
        name: 'Graphics Design',
        img: service2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum quos odio, dicta porro quidem ut.",
        desig: "CEO"
    },
    {
        name: 'Web Development',
        img: service3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum quos odio, dicta porro quidem ut.",
        desig: "CEO"
    }
]
const Feedback = () => {
    return (
        <div className="container mb-5">
            <h3 align="center"><b> Clients <strong className="text-danger"> Feedback </strong></b></h3>
            <div className="d-flex justify-content-center mt-3">
                <div className="mx-auto w-100 row mt-2 pt-4">
                    {
                        feedbacks.map(feedback => <FeedbackData feedback={feedback} key={feedback.name}></FeedbackData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Feedback;