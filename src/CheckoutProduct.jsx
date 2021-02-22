import React from 'react'
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, title,rating,quantity, price, image}) => {
    const [{basket},dispatch] = useStateValue();
    const removeItem = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: id
        })
    }
    const updateQt = (qt)=>{
        dispatch({
            type :"UPDATE_BASKET",
            payload:{id,quantity:qt}
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
                             .map(_ => <p key={Math.random()}>⭐</p>)
                 }
                 </div>
                 <button onClick={removeItem} className="product__button">Remove Item</button>
            </div>
            <div className="product__quantity">
                <h4>Qt :</h4>
                <button className="product__button btn__qt" onClick={e=> updateQt(quantity + 1)}>+</button>
                <input type="number" value={quantity} min="1" name="quantity" onChange={e =>updateQt(Number(e.target.value))}/>
                <button className="product__button btn__qt" onClick={e=> updateQt(quantity - 1)}>-</button>
            </div>
        </div>
    )
}
export default CheckoutProduct;