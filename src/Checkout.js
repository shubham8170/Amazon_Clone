import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import userEvent from '@testing-library/user-event'

function Checkout() {
    const [{basket,user},dispatch]=useStateValue();
    return (
        <div className="checkout">
            
           < div className="checkout_left">
               <img className="checkout_ad" 
               src="https://smsh-0-778169-juc1ugur1qwqqqo4.stackpathdns.com/1545644/wp-content/uploads/2021/04/Sellics_Benchmarker_Banner_1740x450_EN.png?lossy=0&strip=1&webp=1" 
               alt=""
               />
               <div>
                   <h3>Hello, </h3>
           <h2 className="checkout_title">
                Your Shopping Basket
           </h2>

           {basket.map(item=>(
               <CheckoutProduct
               id={item.id}
               title={item.title}
              image={item.image}
               price={item.price}
               rating={item.rating}
               />
           ))}





           </div>
           
           </div>
           <div className="checkout_right">
           <Subtotal/>
           </div>

        </div>
    )
}

export default Checkout
