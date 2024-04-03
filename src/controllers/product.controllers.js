import Product from '../models/product.models.js';

export const getProduct = async (req, res) => {
    try {
        const product = await Product.find();
        res.json(product);
    } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido un Error" });
    }
};

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, img, _id, quantity } = req.body

        const newProduct = new Product({
            name,
            description,
            price,
            img,
            _id,
            quantity,
        })

        const saveProduct = await newProduct.save();
        res.json(saveProduct);
    } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido un Error" });
    }
};

export const getOneProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) return res.status(404).json({ message: "No se encontro el Producto" });
        res.json(product);
    } catch (error) {
        return res.status(404).json({ message: "No se encontro el Producto" });
    }
};

export const udaptedProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!product) return res.status(404).json({ message: "No se encontro el Producto" });
        res.json(product);
    } catch (error) {
        return res.status(404).json({ message: "Error al actualizar productos" });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) return res.status(404).json({ message: "No se encontro el Producto " });
        res.json(product);
    } catch (error) {
        return res.status(404).json({ message: "Error al eliminar el  productos" });
    }
};