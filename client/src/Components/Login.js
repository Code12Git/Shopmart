import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { authenticateLogin } from '../service/api';
import './Login.css'
import { Datacontext } from '../context/DataProvider';
function Login() {
    const navigate=useNavigate()
    const initialvalue={
        username:'',
        password:''
    }
    const[Credentials,setCredentials]=useState(initialvalue)
    const {setAccount}=useContext(Datacontext)
    const LoginChangeHandler=(e)=>{
        setCredentials({...Credentials,[e.target.name]:e.target.value})
        }

    const submitChangeHandler=async(e)=>{
        e.preventDefault()
        let response=await authenticateLogin(Credentials)
        console.log(response)
        if(response){
        
            navigate('/')
            setAccount(Credentials.username);
            }else{
                alert('Invalid Credentials')
            }
        }
    
        
  return (
    <div>
<section className='sec'>
        <div className="form">
            <div className="form-value">
                <form action="" onSubmit={submitChangeHandler}>
                    <h2>Login</h2>
                    <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" name="username"  value={Credentials.username} onChange={LoginChangeHandler}/>
                        <label htmlFor="">Username</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" name="password"  value={Credentials.password} onChange={LoginChangeHandler} required/>
                        <label htmlFor="">Password</label>
                    </div>
                    <div className="forget">
                        <label htmlFor=""><input type="checkbox" />Remember Me </label>
                      
                    </div>
                    <button>Log in</button>
                    <div className="register">
                        <p >Don't have a account <NavLink to='/signup'>Register</NavLink> or  <NavLink to='/'>login as a guest</NavLink></p>
                    </div>
                </form>
            </div>
        </div>
    </section>

    </div>
  )
  }

export default Login