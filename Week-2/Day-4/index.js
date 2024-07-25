const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const dotenv=require("dotenv")
dotenv.config()
const app=express()
app.use(bodyParser.json())


const CategorySchema=new mongoose.Schema({
    name:String,
    description:String
})
const CategoryModel= mongoose.model("Category",CategorySchema)



app.get("/categories", async (req,res)=>{

    let categories= await  CategoryModel.find()
    res.send(categories)

})


app.get("/categories/:id", async (req,res)=>{
    console.log(req)
        let id=req.params.id
        let category= await CategoryModel.findById(id)
        res.send(category)
})

app.delete("/categories/:id", async (req,res)=>{
   
        let id=req.params.id
        let category= await CategoryModel.findByIdAndDelete(id)
        res.send(category)
})



app.post("/categories", async (req,res)=>{
     let newCategory= new CategoryModel(req.body)
    await newCategory.save()
    res.send(newCategory)
})



mongoose.connect(process.env.DB_Connection)
.then(res=>{
    console.log("Connected")
})
.catch(err=>{
    
        console.log(err)
    
})


app.listen(5050,()=>{
    console.log("5050 portu aktivdir")
})