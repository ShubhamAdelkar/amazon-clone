import React from 'react';
import './Product.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';

function Product({ id, title, seller, image, price, list, rating, save }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='seller'>{seller}</p>
                <p className='product__price'>
                    <small>$ </small>
                    <strong>{price}  </strong>
                    <small>  List: </small>
                    <small className='list'>  {list} </small>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (<p><StarIcon /></p>))}
                </div>
                <div className='save'>
                    <p>{save}</p>
                </div>
            </div>

            <img src={image} alt='product_image' />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product