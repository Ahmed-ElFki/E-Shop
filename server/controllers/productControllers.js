const productModel = require("../models/productModel");
const {
  JoiProductRegisterValidation,
} = require("../validators/productValidator");

const registerProduct = async (req, res) => {
  const { error } = JoiProductRegisterValidation(req.body);
  if (!error) {
    const productExists = await productModel.findOne({ name: req.body.name });
    if (productExists) res.json({ message: "Product already exist" });
    else {
      const productObject = new productModel(req.body);
      const savedProduct = await productObject.save();
      res.status(400).json({ product: savedProduct._id });
    }
  } else res.status(409).json({ error });
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await productModel.deleteOne({ _id: id });
    res.status(200).json({ message: `Product with id ${id} deleted` });
  } catch (error) {
    res.status(409).json({ error });
  }
};

const getProducts = async (req, res) => {
  try {
    const productsList = await productModel.find();
    res.status(200).json({ productsList });
  } catch (error) {
    res.status(409).json({ error });
  }
};

const updateProduct = async (req, res) => {
  const productID = req.params.id;
  try {
    const updatedProduct = productModel.updateOne({ _id: productID }, req.body);
    res.status(200).json({ updatedProduct });
  } catch (error) {
    res.status(409).json({ error });
  }
};

module.exports.registerProduct = registerProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.getProducts = getProducts;
module.exports.updateProduct = updateProduct;
