import React from "react";
import {useStateValue} from "./StateProvider";

const Product = props => {
    const {id, title , price, rating, image} = {...props};
    const [{basket},dispatch] = useStateValue();
    const addToBasket = () =>{
        dispatch(
            {
                type : "ADD_TO_BASKET",
                payload : {
                    id,
                    title,
                    price,
                    rating,
                    image,
                    quantity: 1
                }
            }
        )
    };
    return (
        <div className="product">
            <div className="product__info">
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
                 
            </div>
            <img src={image} className="product__image"/>
            <button onClick={addToBasket} className="product__button product__button__center">Add to basket</button>
        </div>
    );
}
export default Product;