import React from 'react';
import './Cars.css'

const Cars = (props) => {
    const { car } = props
    const { carMake, carModel, carModelYear, driverName, rentPerDay, image } = car
    return (
        <div className="card card-item shadow-lg p-2">
            <img className="" src={image} className="card-img-top img-fluid" alt={carModel} />

            <table className="table">
                <tbody>
                    <tr>
                        <th colSpan="2">
                            <h5 className="card-title text-center">Model: {carModel}</h5>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">Car Make :</th>
                        <td>{carMake}</td>
                    </tr>
                    <tr>
                        <th scope="row">Model Year :</th>
                        <td>{carModelYear}</td>
                    </tr>
                    <tr>
                        <th scope="row">Driver Name :</th>
                        <td>{driverName}</td>
                    </tr>
                </tbody>
            </table>
            <div className="text-center">
                <p className="mb-0">Rent Per Day</p>
                <h2 className="fs-1">${rentPerDay}</h2>
            </div>

            <div className="card-body d-flex justify-content-center">
                <div>
                    <button onClick={() => props.handleAddtoCart(car)} className="btn btn-warning"><i className="fas fa-cart-plus"></i> add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Cars;