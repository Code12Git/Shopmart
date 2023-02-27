import express from 'express'
import connection from './db/conn.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import defaultdata from './default.js'
import Router from './routes/route.js'
const app=express()


dotenv.config();

const port=process.env.PORT||8000
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const URL=process.env.MONGODB_URI||`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.os363zi.mongodb.net/shopmart?retryWrites=true&w=majority`
connection(URL);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
}


app.get('/',(req,res)=>{
    res.status(200).send('Working!')
})

app.listen(port,()=>{
    console.log(`Server is up on PORT : ${port}`)
})

defaultdata();