import React from "react";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";

const Header = props =>{
    const [{basket,user},dispatch] = useStateValue();
    const signOut = ()=>{
        dispatch({
            type :"SET_USER",
            payload: null
        });
        auth.signOut();
    };
return (
<nav className="header">
    <Link className="header__logoLink" to="/">
    <img  className="header__logo"
    src="https://oralcancerfoundation.org/wp-content/uploads/2018/11/white-amazon-logo-png-6.png"
    alt="amazon-clone-logo"/>
    </Link>
    <div className="header__search">
     <input type="text" className="header__searchInput" placeholder="Search for... "/>
     <SearchIcon className="header__searchIcon" />
    </div>
    
    <div className="header__nav">
       
        <Link onClick={signOut} to="/signin" className="header__link">
            <div className="header__option">
            <span className="header__optionLineOne">Hello {user?.email.split('@')[0]}</span>
            {
                user ? (<span className="header__optionLineTwo">Sign Out</span>)
                :
                (<span className="header__optionLineTwo">Sign In</span>)
            }
            
            </div>  
        </Link>
        <Link className="header__link" to="/">
            <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Orders</span>
            </div>  
        </Link>
        <Link className="header__link" to="/">
            <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
            </div>  
        </Link>
        <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__optionBasketIcon"/>
            <span className="header__optionLineTwo">{basket.length}</span>
            </div>  
        </Link>
    
    </div>
</nav>
);

}
export default Header;