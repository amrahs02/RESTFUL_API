const Product = require("../models/product")
const getAllProducts = async (req, res) => {

    const { company, name, featured, sort, select } = req.query;
    // queryObject is used to store the query
    const queryObject = {};

    // if company is present in query then add it to queryObject
    if (company) {
        queryObject.company = company;
    }

    if (featured) {
        queryObject.featured = featured;
    }
    // $regex is used to search the name in case-insensitive way and $options: "i" is used to make it case-insensitive
    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }

    let apiData = Product.find(queryObject);

    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    console.log(queryObject);

    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    // // 
    // let = page = Number(req.query.page) || 1;
    // let limit = Number(req.query.limit) || 5;

    // let skip = (page - 1) * limit;


    // apiData = apiData.skip(3).limit(3);
    // const myData = await apiData;

    const myData = await apiData;

    res.status(200).json({ myData });
}

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "I am getAllProductsTesting" });
}

module.exports = { getAllProducts, getAllProductsTesting }