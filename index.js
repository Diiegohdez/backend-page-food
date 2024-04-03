import 'dotenv/config';
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./src/routes/product.routes.js";


//setting
const app = express();
const PORT = process.env.PORT || 8000;


//middlewares
app.use(cors({origin: '*'}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use("/api", productRoutes);

//routes
app.get("/", (req, res) => {
    res.send("Serve Activo !")
});



//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.log(error));

// server listening
app.listen(PORT);
console.log("El serve esta activo", PORT);

