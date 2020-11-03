import React from "react";
import { data } from "./data";
import Product from "./product";

const Home = props => {

    return (
        <div className="home">
            <img 
            className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
         <div className="home__row">
        {
            
            data.map((v,index) => (
            <Product
            id ={v.id}
            title={v.title}
            price={v.price}
            image={v.image}
            rating={v.rating}
            />
            ))
        }
        </div>
        </div>
    )
}

export default Home;
