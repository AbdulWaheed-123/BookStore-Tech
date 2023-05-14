const express = require("express");
const app = express();
const form = require("./routes/form");
const ship=require("./routes/Ship")

const PORT =4000
// const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");
const bodyParser = require("body-parser");
// const multer = require("multer");
// const static = require("express-static");
// Port Connection
app.listen(4000, () => {
	console.log("Port is connected AT "+4000);
});
app.use(cors());
app.use(express.static("assets"));




// Database Connection Established
mongoose.set("strictQuery", false);



mongoose
	.connect("mongodb://127.0.0.1:27017/N_Crud", { useNewUrlParser: true });
mongoose.connection.once("open", () => {
	console.log("Database Check Once");
});

// Connect Form Route
app.use(bodyParser.json());
app.use("/forms", form);
app.use("/", ship);