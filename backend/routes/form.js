const accountschema=require("../models/ModelAccount");



const express = require("express");
const router = express.Router();
const formModel = require("../models/formModel");
const multer = require("multer");

// var myfileName = "";
// const fileName = (file) => {
// 	myfileName = Date.now() + "." + file.mimetype.split("/")[1];
// 	return myfileName;
// };
const upload = multer({ dest: 'assets/' })

// const storage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 		cb(null, "assets/");
// 	},
// 	filename: (req, file, cb) => {
// 		cb(null, Date.now() + "." + file.mimetype.split("/")[1]);
// 	},
	// filename: (req, file, cb) => {
	// 	cb(null, fileName(file));
	// },
// });
// const upload = multer({ storage });

// Set main Page
router.get("/", async (req, res) => {
	const form = await formModel.find();
	res.json(form);
});

// Get specific data by id
// Delete Data from database through ID
router.get("/:id", async (req, res) => {
	const post = await formModel.findById(req.params.id);
	res.send(post);
});

// Send data to Database
router.post("/", upload.single("image"), async (req, res) => {
	try {
		const { name, description, price } = req.body;
		const image = req.file.filename;
		const form = await formModel({ name, description, price, image });
		await form.save();
		res.send(form);
	} catch (error) {
		console.log(error);
	}
});

// Delete Data from database through ID
router.delete("/:id", async (req, res) => {
	const post = await formModel.findById(req.params.id);
	post.delete();
	res.send(post);
});

// Update Data from database through ID
router.put("/:id", async (req, res) => {
	const post = await formModel.findByIdAndUpdate(req.params.id, {
		$set: req.body,
	});
	res.send(post);
});







//api for signup function
router.post("/signup", async (req, res) => {
    const userdetails = await accountschema(req.body);
    try {
      const userexist = await accountschema.findOne({
        email: req.body.email,
      });
      //assume user already exists
      if (userexist) {
        res.json("Email already exists");
      } else {
        //for new user
        userdetails.save();
        res.json("User created successfully");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  
  //api for signin function
  router.post("/login",async (req, res) => {
    const userlogin = await accountschema.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (userlogin) {
      res.json({ message: "Login successfully", userlogin: userlogin });
    } else {
      res.json("credentials do not match or wrong email/password");
    }
  });






module.exports=router;