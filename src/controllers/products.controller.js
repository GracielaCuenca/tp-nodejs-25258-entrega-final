import { getProducts, getProductById, createProduct, deleteProduct, updateProduct } from "../services/products.services.js";


export const index = async (req, res) => {  
    const products = await getProducts(); 
    res.status(200).json(products) 
};

export const getById = async (req, res) => {
    const { id } = req.params;
    const productById = await getProductById(id);
    if (!productById) {
        res.status(404).json({ error: "El producto no existe" }); 
    }
    res.status(200).json(productById);
};

export const create = async  (req, res) => {
    
    const { name, price, category } = req.body;

    if (name ===undefined  ||  !name || price === undefined || !category ||category === undefined || !price)  {
        return res.status(422).json({ error: "Faltan campos" });
    };

    try{
    const newProduct = await createProduct({  
        name, 
        price,
        category
    });

    res.status(201).json(newProduct);
} catch (error){
    res.status(500).json({error: "Error al crear el producto"})
}
};

export const deleteAProduct = async (req, res) => { 

    const { id } = req.params;

    const productToDelete = await deleteProduct(id); 

    if (productToDelete) {
        return res.status(200).json({ mensaje: "Producto eliminado" });
    } else {
        res.status(404).json({ mensaje: "Producto no encontrado" });
    }
};


export const update = async (req, res) => {

    const { id } = req.params;
    const productToUpdate = await getProductById(id);

    if (!productToUpdate) {
       return  res.status(404).json({ error: "El producto no existe" }); 
    }

    const { name, price, category } = req.body;


    if (!name || price === undefined || !category) {
        return res.status(400).json({ error: "Faltan campos" });
    }
    
    console.log(productToUpdate)
    const updated = updateProduct(id, {name, price, category})

    return res.status(200).json({mensaje : "Producto Actualizado"});
};


export const productsByFilter = async (req, res) => {
    const { category, price } = req.query; 

    console.log(category) 
    console.log(price)   
    const result = await productsFiltered(category, price) 

    res.status(200).json(result);
};

