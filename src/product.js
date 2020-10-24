import React from "react";


const Product = props => {
    const {id, title , price, rating, image} = {...props};
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
                             .map(_ => <p>⭐</p>)
                 }
                 </div>
                 
            </div>
            <img src={image} className="product__image"/>
            <button className="product__button">Add to basket</button>
        </div>
    );
}
export default Product;