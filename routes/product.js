const express = require("express");
const router = express();
const path = require("path");
const {headerO} = require("../headerO/")
const { allproducts1 } = require("../controller/helpers/index");
const {
  mainroute,
  allproducts,
  addProduct,
  removeProduct,
  delet,
  
} = require("../controller/product");
const product = require("../models/product");
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
router.get("/", mainroute);
router.get("/all-products", deviceLogging,allproducts);


// API PRODUCTS -------------
router
  .route("/all-products/json")
  .get(allproducts123)
  .post(allproductspost)
  .delete(allproductsdelete)
  .put(allproductsupdate);
// Post route to add product

router.get("/all-products/json/:id", getproductbyid);
router.post("/add-product", addProduct);
// Remove a product based on ID
router.post("/remove", removeProduct);
router.get("/delet/:ProductName", delet);
module.exports = router;
