import React from 'react';
import Cartitem from '../Cartitem/Cartitem';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let totalCost = 0;
    cart.forEach(product => totalCost += product.rentPerDay)
    return (
        <div id="cart" className="card shadow-lg">
            <table className="table">
                <tbody>
                    <tr className="p-2">
                        <th colSpan="2">
                            <h5 className="card-title text-center"><i className="fas fa-car"></i> Cars Added: {cart.length} </h5>
                        </th>
                    </tr>
                    <tr className="p-2">
                        <th scope="row">Total Rent Cost :</th>
                        <th>${totalCost}</th>
                    </tr>
                </tbody>
            </table>

            <div className="px-3">
                {
                    cart.map(product => <Cartitem key={product.id} product={product}></Cartitem>)
                }
            </div>
            <div className="card-body d-flex justify-content-center">
                <button className="btn btn-warning">Proceed to checkout</button>
            </div>
        </div>
    );
};

export default Cart;