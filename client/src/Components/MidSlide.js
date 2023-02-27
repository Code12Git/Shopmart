import React from 'react'
import Slides from './Slides'
import { Box,Button,styled } from '@mui/material'

const Component=styled(Box)`
display:flex;

`
const Leftcomponent=styled(Box)(({theme})=>({
marginTop:20,
padding:5,
marginRight:10,
background:'#FFFFFF',
width:'17%',
textAlign:'center',
[theme.breakpoints.down('md')]:{
  display:'none'
}
}))
const Rightcomponent=styled(Box)(({theme})=>({
width:'80%',
[theme.breakpoints.down('md')]:{
  width:'100%'
}
}))

function MidSlide({products,title,timer,url}) {

  return (
   <Component>
   
       <Leftcomponent>
        <img style={{height:250,width:250}}src={url} />
      {title}
      <button type="button" className="btn btn-info">VIEW ALL</button>
    
        
    </Leftcomponent>
    <Rightcomponent>
       <Slides products={products}
       title={title}
       timer={timer}
       />
       </Rightcomponent>
    </Component>
  )
}

export default MidSlide