const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 9000;
const userRoutes = require("./routes/users");
app.use(express.json());
app.use("/api",userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my first API");
});


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado a la base de datos Cluster Atlas'))
.catch((error) => console.console.log(error));

app.listen(port, () => {
  console.log('Server running on port '+port);
});
