const router = require("express").Router();
const Product = require("../models/Product");
 
const {verifyTokenAndAdmin} = require("./verifyToken");
const {verifyToken} = require("./verifyToken");



// CREATE Product
router.post("/add", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });



// UPDATE Product
router.put("/:id", verifyTokenAndAdmin, async(req, res) => {
    
    try{
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
})

// FIND Product
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }   catch(err) {
        res.status(500).json(err);
    }
})

// FIND ALL Products (with sorting new products and same category)
router.get("/", async (req, res) => {
    const newQuery = req.query.new;
    const catQuery = req.query.category;

    try {
        let products;
        if (newQuery){
            products = await Product.find().sort({createdAt: -1}).limit(1)
        } 
        else if (catQuery){
            products = await Product.find({categories:{
                $in: [catQuery],
            },
        });
        } else {
            products = await Product.find();
        }
        res.status(200).json(products);
    } catch(err) {
        res.status(500).json(err);
    }
})

//DELETE Product
router.delete("/delete/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product Deleted");
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;