import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from '../Alert/Alert';
import Cars from '../Cars/Cars';
import Cart from '../Cart/Cart';
import './Showcase.css'


toast.configure()

const Showcase = () => {
    const [cars, setCars] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./rentData.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    
    const notify = () => toast.warn("Already Added to Cart", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
    });
    const handleAddtoCart = (car) => {
        let newCart = [...cart];
        const isExist = newCart.find(item => item.id === car.id)
        if(isExist === undefined){
            newCart.push(car)
            setCart(newCart)
        }else{
            notify()
        }
        
    }

    const removeFromCart = (productId) => {
        let newCart = [...cart];
        const remaining = newCart.filter(pw => pw.carModel !== productId)
        setCart(remaining)
    }



    return (
        
        <div className="container-lg">
            <div className="row px-3">
      
                <div className="col-7 col-md-8 col-lg-9 cars-showcase">
                    {
                        cars.map(car => <Cars
                            key={car.id}
                            car={car}
                            handleAddtoCart={handleAddtoCart}
                        ></Cars>)
                    }
                </div>
                <div className="col-5 col-md-4 col-lg-3 cart">
                <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Showcase;