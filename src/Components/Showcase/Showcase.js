import React, { useEffect, useState } from 'react';
import Cars from '../Cars/Cars';
import Cart from '../Cart/Cart';
import './Showcase.css'

const Showcase = () => {
    const [cars, setCars] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./rentData.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const handleAddtoCart = (car) => {
        const newCart = [...cart];
        newCart.push(car)
        setCart(newCart)
        
    }



    return (
        <div className="container">
            <div className="row px-3">
                <div className="col-9 cars-showcase">
                    {
                        cars.map(car => <Cars
                            key={car.id}
                            car={car}
                            handleAddtoCart={handleAddtoCart}
                        ></Cars>)
                    }
                </div>
                <div className="col-3 cart">
                <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Showcase;