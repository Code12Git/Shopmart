import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getProductsDetails } from '../../redux/actions/productActions';
import LeftItem from './LeftItem';
function DetailItem() {
    const dispatch=useDispatch();
    const {id}=useParams();

   const {loading,product}= useSelector(state=>state.getProductDetails);
    useEffect(()=>{
      if(product&& id !==product.id)
        dispatch(getProductsDetails(id))
    },[dispatch,id,product,loading])
    console.log(product)
  return (
    <div className='container'>
    {
      product&&Object.keys(product).length&&
      <div>
        <LeftItem product={product}/>
        </div>
      
    }


    </div>
  )
}

export default DetailItem