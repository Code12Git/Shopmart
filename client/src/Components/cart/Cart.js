import {useSelector} from 'react-redux'
import CartItem from './CartItem'
import './Cart.css'
import Subtotal from './Subtotal'
import Empty from './Empty'
import { NavLink } from 'react-router-dom'

function Cart() {
  const {cartItems}=useSelector(state =>state.cart)
  return (
    
    cartItems.length>0 ?
      (
    <div className='cart my-4 mx-4 col-8'>
      <div className='Cart__title'>
        <div className='cart__shopping'>
          <h4>Shopping Cart</h4>
          <h6 className='mx-5 my-3'>Price</h6>
          </div>
         
          <hr></hr>
          {
            cartItems.map((item)=>{
              return<CartItem item={item}/>
            })
           
          }  
          <NavLink to='/'><button style={{textDecoration:'none',backgroundColor:'transparent'}}>Go to Homepage</button></NavLink>
          </div> 
     <div>
        <Subtotal cartitem={cartItems}/>
           
      </div>
      
    </div>)
    :(<Empty />)
        
        

  )
}

export default Cart