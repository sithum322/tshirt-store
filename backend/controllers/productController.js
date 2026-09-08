const db = require("../config/db");

const getProducts = (req, res) => {
  db.query(
    "SELECT * FROM products",
    (err, results) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.json(results);
    }
  );
};

module.exports = {
  getProducts,
};