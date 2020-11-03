import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';


const Login = () => {
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(user,password).then(auth => {
            history.push("/");
        }).catch(e => {
            alert(e);
        });
    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(user,password).then(auth => {
                history.push("/");
            }).catch(e => alert(e.message));
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