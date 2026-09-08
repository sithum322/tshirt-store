const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const verifyToken = require("./middleware/authMiddleware");
const productRoutes = require("./routes/productRoutes");

dotenv.config();
console.log("DB_USER =", process.env.DB_USER);
console.log("DB_HOST =", process.env.DB_HOST);

require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "T-Shirt Store API Running",
  });
});

app.get("/api/profile", verifyToken, (req, res) => {
  res.json({
    message: "Protected Route Access Granted",
    user: req.user,
  });
});

app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});