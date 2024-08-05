"use strict";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT || 4000;

app.use(cors({ origin: true }));
app.set("strict routing", true);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "api working fine " });
});
app.use("/user", require("./source/module/auth/authRoute"));
app.use("/blogs", require("./source/module/blogs/blogRoute"));
process.on("warning", (e) => console.warn(e.stack));
mongoose.set("debug", true);
mongoose
  .connect(
    "mongodb+srv://akshayd:6K4jlA0gKu1FWkw3@cluster0.xfqfnqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
