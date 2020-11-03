import React from "react"
import  {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
const Checkout = props => {
    const [{basket},dispatch] = useStateValue();
    return(
        <div className="checkout">
            <div className="checkout__items">
            <img className="checkout__img" src="http://g-ecx.images-amazon.com/images/G/31/prime/Events/2017/Jan/ART/IN-PR-PEX-LP-Banner-1500x200.jpg"
         alt="amazon prime for memebers"/>
        {
            basket?.length === 0 ? 
            (
                <h1>You bakset is empty</h1>
            )
            :
            (
            <>
            <h1 className="checkout__title">You have {basket?.length} in your baket</h1>
            
            {
                basket.map(element => 
                    <CheckoutProduct {...element} key={element.id} />
                )
            }
            
            </>
            )
        }            
            </div>
         <Subtotal />
        
    </div>
    );
}
export default Checkout;



