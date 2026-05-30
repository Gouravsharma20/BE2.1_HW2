const mongoose = require("mongoose")

require("dotenv").config()

const mongourl = process.env.MONGO_URI

const dbConnection = async () => {
  try {

    await mongoose.connect(mongourl)

    console.log("database connected successfully")

  } catch (err) {

    console.log("an Error occured while connecting to database", err)

  }
}

module.exports = dbConnection

