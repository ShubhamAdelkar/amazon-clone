import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left' >
        <img
          className="checkout__ad"
          src="https://storage.googleapis.com/website-production/uploads/2023/01/new-yorker-banner-ad-.png"
          alt=""
          onError={() => {
            // Handle image load error
            console.log("Image failed to load");
          }}
        />

        <div>
          <h2 className='checkout__title'>
            Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>

    </div >
  )
}

export default Checkout