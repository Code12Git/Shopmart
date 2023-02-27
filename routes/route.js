import express from "express";
import { usersignup,userLogin } from "../controller/user-controller.js";
import { getProducts,getProductById } from "../controller/Product-controller.js";
const router=express.Router()

router.post('/signup',usersignup)
router.post('/login',userLogin)

router.get('/products',getProducts)
router.get('/product/:id',getProductById);


export default router;