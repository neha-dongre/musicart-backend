const mongoose = require("mongoose");

const mongoDb = mongoose
  .connect(process.env.MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("server started!"))
  .catch((err) => console.error("Connection error:", err));

module.exports = mongoDb;
