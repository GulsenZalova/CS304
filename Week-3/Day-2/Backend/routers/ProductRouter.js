const express=require("express")
const router=express.Router()
const ProductController=require("../controllers/ProductController")



router.get("/",ProductController.getAll)
router.post("/",ProductController.post)




module.exports=router




