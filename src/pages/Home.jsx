import tshirt1 from "../assets/tshirt1.jpg";
import tshirt2 from "../assets/tshirt2.jpg";
import tshirt3 from "../assets/tshirt3.jpg";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

function Home() {

  const products = [
  {
    id: 1,
    name: "Black Premium T-Shirt",
    price: 2500,
    image: tshirt1,
  },
  {
    id: 2,
    name: "White Premium T-Shirt",
    price: 2800,
    image: tshirt2,
  },
  {
    id: 3,
    name: "Red Premium T-Shirt",
    price: 3000,
    image: tshirt3,
  },
];

  return (
    <>
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto py-16 px-5">

        <h2 className="text-3xl font-bold mb-8">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}

        </div>

      </section>
    </>
  );
}

export default Home;