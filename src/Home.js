import React from "react";
import Product from "./product";

const Home = props => {

    return (
        <div className="home">
            <img 
            className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
        
        <div className="home__row">
        <Product
        id ="101"
        title="The lean Startup: How Constant Innovation Creates "
        price={106}
        image="https://m.media-amazon.com/images/I/51JvqroQdWL._SY346_.jpg"
        rating={5}
        />
         <Product
        id ="101"
        title="The lean Startup: How Constant Innovation Creates "
        price={106}
        image="https://m.media-amazon.com/images/I/51JvqroQdWL._SY346_.jpg"
        rating={5}
        />
        </div>
        <div className="home__row">
        <Product
        id ="101"
        title="The lean Startup: How Constant Innovation Creates "
        price={106}
        image="https://m.media-amazon.com/images/I/51JvqroQdWL._SY346_.jpg"
        rating={5}
        />
         <Product
        id ="101"
        title="The lean Startup: How Constant Innovation Creates "
        price={106}
        image="https://m.media-amazon.com/images/I/51JvqroQdWL._SY346_.jpg"
        rating={5}
        /> <Product
        id ="101"
        title="The lean Startup: How Constant Innovation Creates "
        price={106}
        image="https://m.media-amazon.com/images/I/51JvqroQdWL._SY346_.jpg"
        rating={5}
        />
    
        </div>
        <div className="home__row">
        <Product
        id ="101"
        title="The lean Startup: How Constant Innovation Creates "
        price={106}
        image="https://m.media-amazon.com/images/I/51JvqroQdWL._SY346_.jpg"
        rating={5}
        />
         
        </div>
       
        </div>
    )
}

export default Home;
