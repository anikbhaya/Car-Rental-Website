import React from 'react';
import './Cartitem.css'

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
                    <i onClick={() => props.removeFromCart(props.product.carModel)} id="close" className="fas fa-times"></i>
                </div>
            </div>
        </div>
    );
};

export default Cartitem;