import React from 'react'
import {NavLink} from 'react-router-dom'
import './Empty.css'
function Empty({cart}) {
  return (
    <div className='empty__container'>
        <div className='empty__title'>
        <h3 className='mx-4'>Your Shopmart Cart is empty.</h3>
        <small className='mx-4'>Price</small>
        </div>
        <hr></hr>
        <p className='mx-4'> Item ...was removed from Shopping Cart.</p>
        <hr></hr>
        <h6 style={{float:'right'}} className='mx-4'>Subtotal(0)</h6>
       <NavLink to='/'><button className='empty__btn'>Home</button></NavLink> 
    </div>
  )
}

export default Empty