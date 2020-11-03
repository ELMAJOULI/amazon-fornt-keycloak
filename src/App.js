import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home"
import Checkout from "./Checkout";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
 const [{},dispatch]= useStateValue();
   useEffect(()=> {
      const unsubscribe =  auth.onAuthStateChanged( authUser => {
         if (authUser){
            dispatch({
               type: "SET_USER",
               payload : authUser
            });
         }
         else {
            dispatch({
               type : "SET_USER",
               payload: null
            })
         }
      });
      return () => {
         unsubscribe();
      }
   },[])
  return (
    <Router>
  <div className="App">
         
         <Switch>
            <Route exact path="/">
            <Header/>
               <Home/>
            </Route>
            <Route exact path="/checkout" >
            <Header/>
               <Checkout />
            </Route>
            <Route path="/signin">
               <Login/>
            </Route>
            <Route path="/">
            <Header/>
               <h1>404 page</h1>
            </Route>
         </Switch>
    </div>
    </Router>
  
  );
}

export default App;
