import Product from '../models/productModel.js'

export const getProducts = async(req, res) =>{
    try {
        const products = await Product.find()
        res.json(products)

    } catch (error) {
        res.status(500).json({message: 'error fetching products',error})
    }
}

export const getProductById = async(req, res) =>{
    try {
        const product = await Product.findById(req.params.id)
        if(!product) return res.status(404).json({message: 'product not found'})
        res.json(product)

    } catch (error) {   
        res.status(500).json({message:'error fetching product', error})
    }
}

export const createProduct = async(req, res) => {
    try {
        const {title, price} = req.body
        const product = new Product({title, price})
        const savedProduct = await product.save()
        res.status(201).json(savedProduct)

    } catch (error) {
        res.status(400).json({message: 'error creating product', error})
    }
}

export const updateProduct = async(req, res) =>{
    try {
        const {title, price} = req.body
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            {title, price},
            {new: true}
        )
        if(!updated) return res.status(404).json({message: 'product not found'})

    } catch (error) {
        res.status(400).json({message: 'error updating product', error})
    }
}

export const deleteProduct = async(req, res)  =>{
    try {
        const deleted = Product.findByIdAndDelete(req.params.id)
        if(!deleted) return res.status(404).json({message:'product not found'})
        res.json({message: 'product deleted sucessfully'})

    } catch (error) {
        res.status(400).json({message: 'error deleting product'}, error)
    }
}