const express=require("express")
const app=express()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const dotEnv=require("dotenv")
const cors=require("cors")
const bycrpt=require("bcrypt")
const jwt=require("jsonwebtoken")
const joi=require("joi")
app.use(bodyParser.json())
// app.use(cors())
dotEnv.config()
app.use(cors({
    exposedHeaders: ['x-auth-token']
}));
let PORT=process.env.PORT



// const ProductRouter=require("./routers/ProductRouter")

// app.use("/product",ProductRouter)

let ProductSchema= new mongoose.Schema({
    name:String,
    price:Number
})

let UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})



let ProductValidationSchema = joi.object({
    name:joi.string().min(3).max(30).required(),
    price:joi.number().integer().positive().min(5).max(10000).required()
})


let UserValidationSchema = joi.object({
    name:joi.string().min(3).max(30).required(),
    email:joi.string().email().required(),
    password:joi.string().min(8).max(10).required()
})

let loginValidationSchema=joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(8).max(10).required()
})

let ProductModel= mongoose.model("product",ProductSchema)
let UserModel= mongoose.model("user",UserSchema)


let tokenControl=function(req,res,next){
    let token=req.header("x-auth-token")

    if(!token){
     return   res.send("token yoxdur")
    }

    try {
        let decodedToken =  jwt.verify(token,"jwttokensecretkey")
        // res.send(decodedToken)
        next()
      } catch (err) {
       res.send("token yalnisdir")
      }
   
}



app.get("/products",tokenControl ,async (req,res,next)=>{
    let products= await ProductModel.find()
    res.send(products)
})


app.post("/products",async (req,res)=>{
   let {error}=ProductValidationSchema.validate(req.body)

   if(error){
       return res.send(error.details[0].message)
   }
    let newProduct= ProductModel(req.body)
     
    await newProduct.save()
    res.send(newProduct)
})



app.post("/users/register", async (req,res)=>{
    let {error}=UserValidationSchema.validate(req.body)
    if(error){
        return res.send(error.details[0].message)
    }else{
        let user= await UserModel.findOne({email:req.body.email})
        if(user){
            res.send("Bu email artıq var")
        }
    
      let hashedPassword= await bycrpt.hash(req.body.password,10)
    //  console.log(hashedPassword)
        let newUser= new UserModel({
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword
        })
        await newUser.save()
    
    let token= jwt.sign({_id:newUser._id},"jwttokensecretkey")
    
     res.header("x-auth-token",token).send(newUser) 
    }
   

})



app.post("/users/login", async (req,res)=>{
    let {error}=loginValidationSchema.validate(req.body)


    if(error){
      return  res.status(404).send(error.details[0].message)
    }else{
        let user= await UserModel.findOne({email:req.body.email})
        if(!user){
          return  res.send("Bele bir istifadeci yoxdur")
        }
    
        let isPassword= await bycrpt.compare(req.body.password,user.password)
    
        if(!isPassword){
            return  res.send("Password sehvdir")
        }
    
    
        let token= jwt.sign({_id:user._id},"jwttokensecretkey")
    
    
        res.send(token)
    }
  
})




mongoose.connect(process.env.DB_Connection)
.then(()=>{
    console.log("Connect")
})
.catch((err)=>{
    console.log(err)
})



app.listen(PORT,()=>{
    console.log(`${PORT} aktivdir`)
})

