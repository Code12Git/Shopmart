import products from "./constants/data.js";
import Product from "./model/product.js";
const defaultdata=async()=>{
    try{
        
        await Product.insertMany(products);
        console.log('Data succeeded')
    }catch(error){
        console.log(`Error: ${error}`)
    }
}
export default defaultdata;