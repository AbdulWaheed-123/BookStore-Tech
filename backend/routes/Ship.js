
const express=require("express");
const { sget,spost } = require("../controller/scontroller");

const route=express.Router();

route.get("/gship",sget)
route.post("/cship",spost)


module.exports=route;