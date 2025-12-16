
import "dotenv/config";
import express from "express";  
import cors from "cors";
import productsRouter from './src/routes/products.routes.js';
import authRouter from './src/routes/auth.routes.js';
import {auth} from './src/middlewares/auth.middleware.js'


const app = express();   

app.use(cors()); 


app.use(express.json()) ; 

app.get("/", (req, res) => {
  res.send("API de productos online");
});



/*
app.get("/", authRouter, (req, res) = > {
    res.send("API...");
});
*/

app.use("/api", productsRouter);
app.use("/api", authRouter);

app.use((req, res, next) => { 
res.status(404).json({error: "Not found"});  
});


const PORT = process.env.PORT || 3005 ;  
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
}); 


