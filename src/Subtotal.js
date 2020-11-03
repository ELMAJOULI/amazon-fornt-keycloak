import React from 'react'
import { useStateValue } from './StateProvider';

const Subtotal = () => {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <p>Subtotal ({basket.length} items)<span className="subtotal__total">{basket.map(e => e.price).reduce((e1,e2)=> e1+e2,0)} MAD</span></p>
        
        <div className="subtotal__isgift">
        <input type="checkbox" name="isgift" value="0" id="isgift"/>
        <label htmlFor="isgift">This code contains a gift</label>
        </div>
        <button className="product__button subtotal__button">proceed to Checkout</button>
        </div>
    )
}
export default Subtotal;