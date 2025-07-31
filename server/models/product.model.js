import mongoose from "mongoose";

// The schema for new items to the db
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    }, {
        timestamps: true    // createdAt, updatedAt fields
    });

    const Product = mongoose.model('Product', productSchema);

    export default Product;