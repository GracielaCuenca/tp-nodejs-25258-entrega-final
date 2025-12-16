
import { getProdById, getAllProducts, createProd, updateProd, deleteProd } from "../models/Product.js";

export const getProducts = async () => {

    const products = await getAllProducts()
    return products;
};


export const getProductById = async (id) => {
    const product = await getProdById(id)

    return product;

};

export const createProduct = async (data) => {

    const newProduct = await createProd(data);

    return (newProduct);

};


export const updateProduct = async (id, data) => {

    const productUpdated = await updateProd(id, data)

    return productUpdated


}


export const deleteProduct = async (id) => {

    const productToDelete = await deleteProd(id)

    return productToDelete
}

