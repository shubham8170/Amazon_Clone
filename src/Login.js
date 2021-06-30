import React,{useState} from 'react'
import './Login.css'
import {Link,useHistory} from 'react-router-dom'
import {auth} from './firebase.js'


function Login() {
    const history=useHistory();
   const [email, setEmail] = useState("");
   const [password,setPassword]=useState("");
//    console.log(email);
//    console.log(password);


   const Signin=(e)=>{
      e. preventDefault();
      console.log("Kam done");

      auth.signInWithEmailAndPassword(email,password).then(auth=>{
          history.push('/')
      }).catch(error=>alert(error.message))

   }

   const Register=e=>{
    e. preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
        console.log("Create user success");
        if(auth){
            history.push('/')
        }
    }).catch(error=>alert(error.message))



   }
    return (
        <div className="login">
            <Link to='/'>
            <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png"/>
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button className="login_signin" type="submit" onClick={Signin}>Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <h6>New to Amazon?</h6>
                <button className="register" onClick={Register}>Create your Amazon account</button>
            </div>
            
        </div>
    )
}

export default Login
