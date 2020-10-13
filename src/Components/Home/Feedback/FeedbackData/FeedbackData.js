import React from 'react';

const FeedbackData = ({ feedback }) => {
    return (
        <div className="col-md-4">
            <div style={{ borderRadius: '5px' }} className="m-1 border border-1 p-4">
                <div className="d-flex justify-content-start">
                    <div> <img style={{ height: '45px', borderRadius: '100%' }} src={feedback.img} alt="" /></div>
                    <div>
                        <h5 className="ml-3"><strong>{feedback.name}</strong> </h5>
                        <h6 className="ml-3"><strong> {feedback.desig}</strong></h6></div>
                </div>
                <p className="text-secondary">{feedback.desc}</p>
            </div>
        </div>
    );
};
export default FeedbackData;