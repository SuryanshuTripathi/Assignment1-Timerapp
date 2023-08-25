import React, {useState} from 'react'
import './LoginSignup.css'; // Import the CSS file for styling
import { database } from '../firebaseConfig'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function LoginSignup() {
    const [login, setLogin] = useState(false);

    const history = useNavigate();

    const handleSubmit =(e, type)=>{
        e.preventDefault()
        // console.log(e.target.email.value)
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (type === 'signup'){
            createUserWithEmailAndPassword(database, email, password).then(data=>{
                console.log(data, "authData")
                history('/home')
            }).catch(err=>{
                alert(err.code)
                setLogin(true)
            })

        }else{
            signInWithEmailAndPassword(database, email, password).then(data=>{
                console.log(data, "authData")
                history('/home')
            }).catch(err=>{
                alert(err.code)
            })
        }
        
    }
  return (
    <div className='container'>
        
        <div className="row">
            <div
            className={login === false ? "activeColor" : "pointer"}
            onClick={() => setLogin(false)}
            >SignUp
            </div>
            <div
            className={login === true ? "activeColor" : "pointer"}
            onClick={() => setLogin(true)}
            >
            SignIn/Login
            </div>
        </div>
        <h1>{login?'SignIn/Login':'SignUp'} </h1>
      <form onSubmit={(e)=> handleSubmit(e, login?'signin':'signup')}>
        
        
        <input name="email" type="email" placeholder='Enter Email id'/> <br />
        <input name="password" type="password" placeholder='Enter Password'/><br />
        <button>{login?'SignIn':'SignUp'}</button>
      </form>
    </div>
  )
}

export default LoginSignup