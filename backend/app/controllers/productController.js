const Product = require("../models/product");

// GET ALL

exports.getProducts = async (req, res) => {

    try {

        const products = await Product.findAll();

        res.json(products);

    } catch (err) {

        res.status(500).json(err);

    }

};


// GET SINGLE

exports.getProduct = async (req, res) => {

    try {

        const product = await Product.findByPk(req.params.id);

        if (!product) {

            return res.status(404).json({
                message: "Product Not Found"
            });

        }

        res.json(product);

    } catch (err) {

        res.status(500).json(err);

    }

};


// POST

exports.createProduct = async (req, res) => {

    try {

        const product = await Product.create(req.body);

        res.status(201).json(product);

    } catch (err) {

        res.status(500).json(err);

    }

};


// PUT

exports.updateProduct = async (req, res) => {

    try {

        const product = await Product.findByPk(req.params.id);

        if (!product) {

            return res.status(404).json({
                message: "Product Not Found"
            });

        }

        await product.update(req.body);

        res.json(product);

    } catch (err) {

        res.status(500).json(err);

    }

};


// PATCH

exports.patchProduct = async (req, res) => {

    try {

        const product = await Product.findByPk(req.params.id);

        if (!product) {

            return res.status(404).json({
                message: "Product Not Found"
            });

        }

        await product.update(req.body);

        res.json(product);

    } catch (err) {

        res.status(500).json(err);

    }

};


// DELETE

exports.deleteProduct = async (req, res) => {

    try {

        const product = await Product.findByPk(req.params.id);

        if (!product) {

            return res.status(404).json({
                message: "Product Not Found"
            });

        }

        await product.destroy();

        res.json({
            message: "Product Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json(err);

    }

};