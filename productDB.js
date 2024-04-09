require('dotenv').config();
const connectDB = require("./db/connect");
const Product = require("./models/product");

const ProductJson = require("./products.json")

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany(); // when we are adding data then again whole data is added and repeated , this delete previous data and add new 
        await Product.create(ProductJson);
        console.log('Success');
    }
    catch (error) {
        console.log(error);
    }
};
start();