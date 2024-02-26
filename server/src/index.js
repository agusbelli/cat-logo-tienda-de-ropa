import express from "express";
import cors from "cors";

import productRoutes from "./routes/products.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

/* app.use("/server", productRoutes);
 */

app.use("/server", (req, res)=>{
    res.send("hola")
});


app.listen(3000);
console.log("Server on port", 3000);
