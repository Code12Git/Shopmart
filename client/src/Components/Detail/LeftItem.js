import React from 'react'
import { useState } from 'react';
import './LeftItem.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { useNavigate } from 'react-router-dom';
import {addToCart} from '../../redux/actions/cartActions'
function LeftItem({product}) {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const[quantity,setquantity]=useState(1)
    const {id}=product;
    const clickNavigate=()=>{
        dispatch(addToCart(id,quantity))
        navigate('/cart')

    }
  return (
    <div className='container item '>
        <div className='left__container'>
        <img src={product.detailUrl} className='my-5 col-4 item__image' />
        <div className='item__btn'>
        <button type="button" className="btn btn-warning" onClick={clickNavigate}>Add to Cart</button>
        <button type="button" className="btn btn-info"  onClick={clickNavigate}>Buy Now</button>
        </div>
        </div>
        <div className='container__right col-8'>
        <h3 className='my-5'>{product.title.longTitle}</h3>
        <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
      <hr></hr>
    </Stack>
    <h6 style={{color:'rebeccapurple'}}>Deal</h6>
    <div className='discount__item'>
        <h3>-{product.price.discount}</h3>
        <h3>₹{product.price.cost}</h3>
    </div>
    <div className='mrp__item'>
        <h6>M.R.P</h6>
        <small><del>₹{product.price.mrp}</del></small>
    </div>
    <p>Inclusive of all taxes</p>
    <div className='icon__item my-2 mx-2'>
            <div className='shipping mx-3'>
        <LocalShippingIcon />
        <p>Free Delivery</p>
        </div>
            <div className='replacement mx-3'>
        <FindReplaceIcon/>
        <p>10 days Replacement</p>
        </div>
            <div className='install mx-3'>
        <InstallDesktopIcon />
        <p>Installation available</p>
        </div>
            <div className='delivery mx-3'>
        <LocalShippingOutlinedIcon  />
        <p>Shopmart Delivered</p>
        </div>
            <div className='warranty mx-3'>
        <SafetyCheckIcon />
        <p>1 Year Warranty Care</p>
        </div>
        </div>
        
        
        
        </div>
    </div>
  )
}

export default LeftItem