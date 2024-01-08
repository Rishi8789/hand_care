const express = require("express");
const { connection } = require("./db");
const { userController } = require("./controller/user.controller");
const { authentication } = require("./Auth_middleware/authentication");
const { productController } = require("./controller/products.controller");
const { userDetailsController} = require("./controller/userAddress.controller");
const cors = require("cors");
const app = express();

app.use(cors());
require("dotenv").config();

app.use(express.json());

app.use("/user", userController);

// app.use(authentication);

app.use("/handcare", productController);
app.use("/user", userDetailsController);
app.get("/", (req, res) => {
  res.send("HomePage for HAAN Hand Sanitizer");
});

app.listen(process.env.PORT || 8000, async () => {
  try {
    await connection;
    console.log("Connected to DataBase(MongoDB)");
  } catch (err) {
    console.log(err);
    console.log("error while connecting to DataBase(MongoDB)");
  }
  console.log(`App is running on port ${process.env.PORT}`);
});
