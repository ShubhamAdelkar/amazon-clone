import React from 'react'
import './CheckoutProduct.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id, title, seller, image, price, list, rating, save }) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
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
                <button onClick={removeFromBasket}>Remove Item</button>
            </div>
        </div>
    )
}

export default CheckoutProduct