import React from 'react'
import { useState,useEffect } from 'react'
import './Subtotal.css'
import CheckIcon from '@mui/icons-material/Check';
function Subtotal({cartitem}) {
  const[price,setprice]=useState(0);

  useEffect(()=>{
    totalAmount()
  },[cartitem])
  const totalAmount=()=>{
    let price=0;

    cartitem.map((item)=>{
      price +=item.price.cost
    })
    setprice(price)
  }
  return (
    <div className='subtotal mx-4 my-4'>
      
        <small style={{color:'green'}}><CheckIcon />Your order is eligible for FREE Delivery.</small>
        <p> Subtotal ({cartitem?.length}item):{price} </p>
        <button className='subtotal__btn'>Proceed to Buy</button>
        
    </div>
  )
}

export default Subtotal