const express = require("express");
const router = express();
// const path = require("path");
const {headeroptions} = require("../headerO")
// const { allproducts1 } = require("../controller/helpers/index");
// const {
//   mainroute,
//   allproducts,
//   addProduct,
//   removeProduct,
//   delet,
  
// } = require("../controller/product");
// Getting the collection from the model
const product = require("../models/product");
// Importing Modules 
const {
  allproducts123,
  allproductsdelete,
  allproductspost,
  allproductsupdate,
  getproductbyid
} = require("../controller/allproductsjson");
require("dotenv/config");
const {deviceLogging} = require('../controller/helpers/deviceLogging')
// ------------------------------------------------------------------------------------//
//ROUTES add product get 

// router.use(headeroptions)
// router.get("/", mainroute);
// router.get("/all-products", deviceLogging,allproducts);


// API PRODUCTS -------------
router
  .route("/all-products/json") // Sets Route 
  .get(allproducts123) 
  .post(allproductspost)
  .delete(allproductsdelete) // Delete based on body
  .put(allproductsupdate); // Update based on "id" query
// Post route to add product

router.get("/all-products/json/:id", getproductbyid);
// router.post("/add-product", addProduct);
// Remove a product based on ID
// router.post("/remove", removeProduct);
// router.get("/delet/:ProductName", delet);
module.exports = router; // Exporting module to set on the main app.js file
