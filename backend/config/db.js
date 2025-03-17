const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Server Connected Successfully");
  } catch (err) {
    console.error("Server Connection Failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;
