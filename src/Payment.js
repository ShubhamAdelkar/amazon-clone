import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>Checkout (
                    <Link to="/checkout" >{basket?.length} items</Link>)</h1>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React lane</p>
                        <p>Adeli, Vengurla</p>
                    </div>
                </div>


                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items & delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />)}
                    </div>
                </div>


                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment method</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment