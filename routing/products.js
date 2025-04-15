const express = require("express");
const router = express.Router();


const {getProductsView, getAddProductView, addNewProduct, getNewProductView, getProductView, deleteProduct,} = require("../controllers/productsController");

router.get("/", getProductsView);
router.get("/add", getAddProductView);
router.post("/add", addNewProduct);
router.get("/new", getNewProductView);
router.get("/:productName", getProductView);
router.delete("/:productName", deleteProduct);

module.exports = router;