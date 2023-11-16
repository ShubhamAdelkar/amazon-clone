import React from 'react'
import './Checkout.css'
import image from './banner2.jpg';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left' >
        <a href='https://www.primevideo.com/detail/Hunters/0M8DF75985NBNID4SCTP3X0AZJ' target='_blanck'><img
          className="checkout__ad"
          src={image}
          alt="ad"
        />
        </a>

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>
            Your Shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              list={item.list}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>

    </div >
  )
}

export default Checkout