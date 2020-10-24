import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home"
function App() {
  return (
    <Router>
  <div className="App">
         <Header/>
         <Switch>
            <Route exact path="/">
               <Home/>
            </Route>
            <Route path="/login">
               <h1>Login page</h1>
            </Route>
            <Route path="/">
               <h1>404 page</h1>
            </Route>
         </Switch>
    </div>
    </Router>
  
  );
}

export default App;
