const mongoose = require("mongoose");

const connect = () => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(
    // "mongodb+srv://venkat:venkat123@cluster0.orx2f.mongodb.net/ken42?retryWrites=true&w=majority"
    "mongodb://venkat:venkat123@cluster0-shard-00-00.orx2f.mongodb.net:27017,cluster0-shard-00-01.orx2f.mongodb.net:27017,cluster0-shard-00-02.orx2f.mongodb.net:27017/ken42?ssl=true&replicaSet=atlas-zk7c7o-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
};

module.exports = connect;
