import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    _id:{
        type: Number,
    },
    quantity:{
        type: Number,
    },
    
}, {
    timestamps: true
});

export default mongoose.model("Product", productSchema);