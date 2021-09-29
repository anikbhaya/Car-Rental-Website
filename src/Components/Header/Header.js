import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div id="header" className="container-lg text-center mt-4">
            <div>
                <h6>Find Your Car Rental Today!</h6>
                <h1 className="fw-bold uppercase my-0">Brands You Trust At Prices You'll Love</h1>
                <br />
                <h2 className="pb-5 mt-0">Total Rent Budget: 100K</h2>
            </div>
        </div>
    );
};

export default Header;