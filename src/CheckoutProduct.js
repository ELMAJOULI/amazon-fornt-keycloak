import React from 'react'
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, title,rating, price, image}) => {
    const [{basket},dispatch] = useStateValue();
    const removeItem = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: id
        })
    }
    return (
        <div className="checkoutProduct" key={id}>
            <img src={image} className="checkoutProduct__img"/>
            <div className="checkoutProduct__info">
                <p>{title}</p>
                <div className="product__price">
                    <strong>{price}</strong>
                     <small> MAD</small>
                 </div>
                 <div className="product__rating">
                 {
                     Array(rating).fill()
                             .map(_ => <p>⭐</p>)
                 }
                 </div>
                 <button onClick={removeItem} className="product__button">Remove Item</button>
            </div>
        </div>
    )
}
export default CheckoutProduct;