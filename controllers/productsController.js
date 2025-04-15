const Product = require("../models/Product");
const { STATUS_CODE } = require("../constants/statusCode");
const { MENU_LINKS } = require("../constants/navigation");

const getProductsView = (_req, res) => {
  const products = Product.getAll();
  res.render("products", {
    headTitle: "Shop - Products", path: "/products", activeLinkPath: "/products", menuLinks: MENU_LINKS, products});
};

const getAddProductView = (_req, res) => {
  res.render("add-product", {headTitle: "Shop - Add Product", path: "/products/add", activeLinkPath: "/products", menuLinks: MENU_LINKS});
};

const addNewProduct = (req, res) => {
  const { name, description } = req.body;
  const newProduct = new Product(name, description);
  Product.add(newProduct);
  res.redirect("/products/new");
};

const getNewProductView = (_req, res) => {
  const newestProduct = Product.getLast();
  res.render("new-product", {headTitle: "Shop - New Product", path: "/products/new", activeLinkPath: "/products/new", menuLinks: MENU_LINKS, newestProduct});
};

const getProductView = (req, res) => {
  const product = Product.findByName(req.params.productName);
  if (!product) {
    return res.status(STATUS_CODE.NOT_FOUND).render("404", {
      message: "Product not found",
    });
  }
  res.render("product", {headTitle: `Product: ${product.name}`, path: `/products/${product.name}`, activeLinkPath: "/products", menuLinks: MENU_LINKS, product});
};

const deleteProduct = (req, res) => {
  Product.deleteByName(req.params.productName);
  res.status(STATUS_CODE.OK).json({ success: true });
};

module.exports = {
  getProductsView,
  getAddProductView,
  addNewProduct,
  getNewProductView,
  getProductView,
  deleteProduct
};