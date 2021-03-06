const express = require("express");
const env = require("dotenv");

const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

// DB-CONNECT
DB_DATABASE = process.env.DB_DATABASE;

mongoose
  .connect(
    `mongodb+srv://root:admin@e-commerce-db.qhacu.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error(err);
  });

// Routing

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");

// calling ENV variables
env.config();

app.use(bodyParser());

// Prefix Routing with /api
app.use("/api", authRoutes);
// Admin Admin Routes
app.use('/api', adminRoutes);
// Post and localhost configuration

let PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
