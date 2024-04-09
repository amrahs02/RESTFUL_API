require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
    res.send("Hey You are Live");
    console.log("hey live");
});



// middlewares or to set router // we are sending our router through middleware to /router/route....
app.use("/api/products", products_routes);

const start = async () => {

    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes We are live`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();
