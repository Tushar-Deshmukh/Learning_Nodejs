const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DB_URL)
        .then(() => {
            console.log("Connected to DB")
        })
        .catch((error) => {
            console.log("Error in connection to DB")
            console.error(error)
        });
}

module.exports = dbConnect;