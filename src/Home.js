import React from "react";
import { data } from "./data";
import Product from "./product";
import axios from "axios";

const Home = props => {

    const [products,setProduct] = React.useState(null);
    React.useEffect(()=>{
        const load = async () =>{
            const {data} =await axios.get("http://localhost:8989/INVENTORY-SERVICE/products")
            setProduct(data);
        }
        load();
    },[])
    return (
        <div className="home">
            <img 
            className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
         <div className="home__row">
        { products &&
            products.map((v,index) => (
            <Product
            key={v.id + Math.random()}
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
