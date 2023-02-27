import React from 'react'
import './Slide.css'
import { NavLink } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import {Box,Typography,Button,Divider,styled} from '@mui/material'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
const Component=styled(Box)`
            margin-top:15px;
            background:#FFFFFF
            `
const Deal=styled(Box)`
padding:15px 20px;
display:flex;


`
const Timer=styled(Box)`
   display:flex;
   margin-left:10px;
   align-items:center;
   color:#7f7f7f;
`          
const DealText=styled(Typography)`
    font-size:22px;
    font-weight:600;
    margin-right:25px;
    line-height:30px;
`  
const ViewAllButton=styled(Button)`
  margin-left:auto
  background-color:#2874f0;
  font-size:13px;
  font-weight:600;
  width:100px;
 margin-left:800px
`
const Text=styled(Typography)`
font-size:14px;
margin-top:5px;
`
function Slides({products,title,timer}) {
  const timerURL='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg'
  const renderer = ({ hours, minutes, seconds }) => {
   return <Box variant='span'>{hours}:{minutes}:{seconds}Left</Box>
    } 
  
  return(
    // <div className='container slider__container'>
    
    <div className="gd-carousel-wrapper">
   <Component>
    <Deal>
      
      {timer &&
      <Timer>
      <img src={timerURL} style={{width:24}}/>
      <Countdown date={Date.now() + 5.04e+7}  renderer={renderer}/>
      </Timer>
}
      
    </Deal>
  
   <Carousel 
  swipeable={false}
  responsive={responsive}
  className="gd-carousel"
  >
    {products.map(product=>{
      return(

      <NavLink className='slide__link' to={`product/${product.id}`} style={{textDecoration:'none'}}>
        
      <Box textAlign='center' style={{padding:'25px 15px'}}> <img className='img__slide' src={product.url} />
      <Text style={{fontWeight: 600,color:'#212121'}}>{product.title.shortTitle}</Text>
      <Text style={{color:'rebeccapurple'}}>{product.discount}</Text>
      <Text style={{color:'#212121'}}>{product.tagline}</Text>
      
      </Box>
    
      </NavLink>
      )
    })}
   </Carousel>
   </Component>
   </div>
  //  </div>
  )
}
export default Slides;