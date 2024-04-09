require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Our Website</title>
            <style>
                /* Add your CSS styles here */
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f5f5f5;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 800px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                }
                .button {
                    display: inline-block;
                    background-color: green;
                    color: #fff;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 50px;
                    transition: background-color 0.3s ease;
                }
                .button:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Welcome to Our Website</h1>
                    <p>Thank you for visiting!</p>
                </div>
                <p>Don't forget to check out our API for more data.</p>
                <p>Click the button below to view API data:</p>
                <a href="/api/products" class="button">View API Data</a>
            </div>
        </body>
        </html>
    `);
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
