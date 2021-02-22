import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import JWTdecode from 'jwt-decode';
import { useStateValue } from './StateProvider';


const Login = () => {
    const [{},dispatch] = useStateValue();
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    const login = async(e) => {
        e.preventDefault();
        try {
        const {data} = await axios.post("http://localhost:8080/auth/realms/ecom-realm/protocol/openid-connect/token",
           {
            username:user,
            password,
            client_id:"react-front",
            grant_type:["password"]
           },
           {
               headers: {"Access-Control-Allow-Origin":"*"}
           }
           )
           localStorage.setItem("access_token",data.access_token);
           localStorage.setItem("refresh_token",data.refresh_token);
           dispatch({type:'SET_USER',payload:JWTdecode(data.access_token)})
            history.push("/");
        } catch (err) {
            console.log(err)
            alert(err.error_description);
        }
    }
    const register = async(e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post("http://localhost:8080/auth/admin/realms/amazon/users",
               {
                username:user,
                enabled:true,
                email:user,
                credentials:{
                    type:"password",
                    value:password,
                    temporary:false
                }
               },
               {
                   headers: {"Access-Control-Allow-Origin":"*"}
               }
               )
               localStorage.setItem("access_token",data.access_token);
               localStorage.setItem("refresh_token",data.refresh_token);
               dispatch({type:'SET_USER',payload:JWTdecode(data.access_token)})
                history.push("/");
            } catch (err) {
                console.log(err)
                alert(err.error_description);
            }
      
    }
    return (
        <div className="login">
            <div className="login__container">
            <Link to="/">
            <img src="http://logok.org/wp-content/uploads/2015/01/Amazon-logo-880x660.png" 
            className="login__logo"/>
            </Link>
            <form className="login__form">
                <h1>Sign-In</h1>
                <div className="login__field">
                <label htmlFor="user">Email or mobile phone number</label>
                <input type="text" id="user" className="login__input" value={user} onChange={(e)=> setUser(e.target.value)}/>
                </div>
                
                <div className="login__field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="login__input" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                
                <button className="product__button" onClick={login} >Continue</button>
            </form>
            <div className="login__register__title"><h3>New to Amazon?</h3></div>
            <button className="login__button" onClick={register}>Create your amazon account</button>
            </div>
           
            
        </div>
    )
}
export default Login;