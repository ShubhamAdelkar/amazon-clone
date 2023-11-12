import React from 'react'
import './CheckoutProduct.css';
import StarIcon from '@mui/icons-material/Star';


const CheckoutProduct = ({ id, title, seller, image, price, list, rating, save }) => {
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="img" />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                    <small>  List: </small>
                    <small className='list'>  {list} </small>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p><StarIcon /></p>
                    ))}
                </div>
                <button>Remove Item</button>
            </div>
        </div>
    )
}

export default CheckoutProduct