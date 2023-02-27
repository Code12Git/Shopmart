import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import './Header.css'
import Box from '@mui/material/Box';

import Drawer from '@mui/material/Drawer';
import {styled,List,ListItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Datacontext } from '../context/DataProvider';
import {useDispatch,useSelector} from 'react-redux';
import {getProducts} from '../redux/actions/productActions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink, useNavigate } from 'react-router-dom';


function Header() {
  const navigate=useNavigate()
  const {account,setAccount}=useContext(Datacontext)
  const[text,settext]=useState('')
  const {products}=useSelector(state => state.getProducts)
  const dispatch=useDispatch();
  const{cartItems}=useSelector(state => state.cart)
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
const MenuButton=styled(MenuIcon)(({theme})=>({
  display:'none',
  [theme.breakpoints.down('md')]:{
  display:'block'
}
}))
const [open,setopen]=useState(false)
const handleOpen=()=>{
  setopen(true)
}

const handleClose=()=>{
setopen(false)
}
const clickLogout=()=>{

 setAccount('')
}
const list=()=>{
  <Box>
    <List>
      <ListItem button>
      </ListItem>
    </List>
  </Box>
}
const searchChangeHandler=(e)=>{
      settext(e.target.value)
        
} 
  return (
    <div className='header'>
      <MenuButton color="inherit" onClick={handleOpen}>
      <MenuIcon />
      </MenuButton>
      <Drawer open={open} onClose={handleClose}>
        {list()}
        </Drawer>
     <NavLink to='/' style={{textDecoration:'none',outline:'none'}}> <h3 style={{color:'whitesmoke'}}><sup> <StorefrontIcon /></sup>Shopmart</h3></NavLink> 
       
       <div className='header__search'>
            <input className='header__searchbar' type='text' placeholder='Search for products,brands and more' onChange={searchChangeHandler} />
            <SearchIcon className='header__searchIcon' />
        </div>
      
       <div className='header__right'>
        {
          account ?< div> <p className='login__username'><span className='hello'>Hello</span>,{account} </p><button onClick={clickLogout}>Logout</button></div> : <NavLink to='/login' className='header__login'>Login</NavLink>
        }
          
        
       
        <p style={{color:'whitesmoke'}} className=' my-2'>Become a Seller</p>
  <div className="dropdown">
  <button className="btnm  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    More
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href='/'>Notification Preferences</a></li>
    <li><a className="dropdown-item" href='/'>24*7 Customer Support</a></li>
    <li><a className="dropdown-item" href='/' >Advertise</a></li>
    <li><a className="dropdown-item" href='/'>Download App</a></li>
  </ul>
 </div>
 <div className='header__cart'>

<ShoppingCartIcon className='my-2' style={{color:'whitesmoke'}} />
<NavLink style={{textDecoration:'none'}} to='/cart'> <p style={{color:'whitesmoke'}} className='my-2'>Cart<sup className='badge'>{cartItems?.length}</sup></p></NavLink>
 
 </div>
 </div>
    </div>
  )
}

export default Header