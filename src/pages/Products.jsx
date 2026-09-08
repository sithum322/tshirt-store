import { useEffect, useState } from "react";
import API from "../api/api";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-5">
        Products
      </h1>

      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-5 rounded"
          >
            <h2 className="font-bold">
              {product.name}
            </h2>

            <p>{product.description}</p>

            <p className="text-red-500">
              Rs. {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;