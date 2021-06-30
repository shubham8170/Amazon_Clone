import React,{useEffect} from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

  const [{},dispatch]=useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('USER : ',authUser);
      if(authUser){
        //the user just loged in
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }
      else{
        //user loged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])

  return (
    <Router>
    <div className="App">
      <Switch>
     <Route path="/checkout">
     <Header/>
       <Checkout/>
     </Route>
     <Route path="/login">  
     <Login/>
   </Route>
     <Route path="/">
     <Header/> 
    <Home/>
     </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
