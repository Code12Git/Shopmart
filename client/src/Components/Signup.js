import React, { useState,useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Datacontext } from '../context/DataProvider'
import { useNavigate } from 'react-router-dom'
import { authenticateSignup } from '../service/api'
import './Signup.css'
function Signup() {
const navigate=useNavigate()
    const[signup,setsignup]=useState({
        firstname:'',lastname:'',username:'', email:'',password:'',phone:''
    })
const{setAccount}=useContext(Datacontext)

   const inputChangeHandler=(e)=>{
        const{name,value}=e.target
        setsignup({...signup,[name]:value})
    }
    const signupHandler=async(e)=>{
        let res=await authenticateSignup(signup)
        if(res){
        
        navigate('/login')
        setAccount(signup.firstname)
        }else{
            alert('Account already exits')
        }
    }
    const submitHandler=(e)=>{
        e.preventDefault()
    }
  return (
    <section>
    <div className="form-box">
        <div className="form-value">
            <form action="" onSubmit={submitHandler}>
                <h2>Signup</h2>
                <div className="inputbox">
                <ion-icon name="document-text-outline"></ion-icon>
                    <input type="text" name='firstname' value={signup.firstname}   onChange={inputChangeHandler} required />
                    <label htmlFor="" >FirstName</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="document-text-outline"></ion-icon>
                    <input type="text"  name='lastname' value={signup.lastname} onChange={inputChangeHandler} required />
                    <label htmlFor="">LastName</label>
                </div>
                <div className="inputbox">
                <ion-icon name="document-text-outline"></ion-icon>
                    <input type="text"  name='username' value={signup.username} onChange={inputChangeHandler} required />
                    <label htmlFor="">Username</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email"  name='email' value={signup.email} onChange={inputChangeHandler} required />
                    <label htmlFor="">Email</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" name='password' value={signup.password} onChange={inputChangeHandler} required />
                    <label htmlFor="" >Password</label>
                </div>
                <div className="inputbox">
                <ion-icon name="call-outline"></ion-icon>
                    <input type="number"  name='phone' value={signup.phone} onChange={inputChangeHandler} required />
                    <label htmlFor="">Phone</label>
                </div>
                <div className="forget">
                    <label htmlFor=""><input type="checkbox" />Remember Me </label>
                  
                </div>
                <button onClick={() =>signupHandler()}>Signup</button>
                <div className="register">
                    <NavLink to ='/login' className='Signup'><p>Already have a account </p></NavLink>
                </div>
            </form>
        </div>
    </div>
</section>
  )
}

export default Signup