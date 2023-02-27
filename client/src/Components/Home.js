import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Corousel from './Corousel'
import Slides from './Slides'
import MidSlide from './MidSlide'
import './Home.css'
import { getProducts } from '../redux/actions/productActions'
import {useDispatch,useSelector} from 'react-redux';
function Home() {
  const{products}=useSelector(state => state.getProducts)
  console.log(products)
  
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  const url=[
  "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90",
  "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/898b527fdf29b17a.jpg?q=90",
  "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/898b527fdf29b17a.jpg?q=90",
  "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/898b527fdf29b17a.jpg?q=90",
  "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/31d46a8fd93eeedd.jpg?q=90",
  "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90",
  "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/898b527fdf29b17a.jpg?q=90",
"https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90"
  ]


  return (
    <>
    
      <Navbar />
      <Corousel/>
    <MidSlide  url={url[0]} products={products} title="Deal of the Day" timer={true}/>
    <MidSlide url={url[1]} products={products} title="Discounts for you" timer={false}/>
    <MidSlide  url={url[2]}products={products} title="Suggesting Items" timer={false}/>
    <MidSlide url={url[3]}products={products} title="Top Selection" timer={false}/>
    <MidSlide url={url[4]}products={products} title="Recommended Items" timer={false}/>
    <MidSlide url={url[5]}products={products} title="Trending Offers" timer={false}/>
    <MidSlide url={url[6]}products={products} title="Season's top picks" timer={false}/>
    <MidSlide url={url[7]}products={products} title="Top Deals on Accessories" timer={false}/>
    </>
  )

}

export default Home