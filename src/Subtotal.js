import React from 'react';
import axios from 'axios';
import { useStateValue } from './StateProvider';

const Subtotal = () => {
    const [{user,basket},dispatch] = useStateValue();
    const checkout =async() =>{
        try{
            await axios.post("http://localhost:8989/BILLING-SERVICE/bills/checkout",
            {
                basket,
                user:{
                    id: Math.random(),
                    email: user.email,
                    name: user.email.split("@")[0]
                }
            }
            )
            alert("Succes operation !");
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className="subtotal">
            <p>Subtotal ({basket.length} items)<span className="subtotal__total">{basket.map(e => e.price).reduce((e1,e2)=> e1+e2,0)} MAD</span></p>
        
        <div className="subtotal__isgift">
        <input type="checkbox" name="isgift" value="0" id="isgift"/>
        <label htmlFor="isgift">This code contains a gift</label>
        </div>
        <button className="product__button subtotal__button" disabled={!(basket && user)} onClick={checkout}>proceed to Checkout</button>
        </div>
    )
}
export default Subtotal;