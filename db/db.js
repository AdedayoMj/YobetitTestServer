const mongoose = require("mongoose");

const uri = process.env.MONGODB_URL;

mongoose
  .connect(
    uri,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("MongoDB database connection established successfully");
    }
  )
  .catch(err => console.log(err));
