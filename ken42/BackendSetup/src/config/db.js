const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://venkat:venkat123@cluster0.orx2f.mongodb.net/ken42?retryWrites=true&w=majority"
  );
};

module.exports = connect;
