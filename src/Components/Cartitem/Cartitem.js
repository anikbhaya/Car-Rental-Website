import React from 'react';

const Cartitem = (props) => {
    const {rentPerDay, image, carModel} = props.product
    return (
        <div className="card mb-3">
            <div className="row g-0 d-flex align-items-center">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt={carModel} />
                </div>
                <div className="col-md-8 d-flex justify-content-between align-items.center px-1">
                    <h6 className="m-0">{carModel}</h6>
                    <p className="m-0">${rentPerDay}/Day</p>
                </div>
            </div>
        </div>
    );
};

export default Cartitem;