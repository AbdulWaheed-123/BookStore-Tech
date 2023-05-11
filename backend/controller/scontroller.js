
const shipschema = require("../models/ModelShip");

//creating Shipment Api
const spost= (req, res) => {
    const data = shipschema(req.body);
    data.save()
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  };


  //for getting shipment data from database

const sget=async (req,res)=>{
    const data=await shipschema.find()
    try {
        res.status(200).send(data);
     } catch {
        res.status(500).send("error");
     }
}


module.exports={
    sget,
    spost
}