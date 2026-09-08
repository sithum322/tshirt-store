function ProductCard({ name, price, image }) {
  return (
    <div className="rounded-lg w-full h-72 object-cover">

      <img
        src={image}
        alt={name}
        className="rounded-lg"
      />

      <h3 className="text-xl font-semibold mt-3">
        {name}
      </h3>

      <p>Rs. {price}</p>

      <button className="mt-3 bg-black text-white px-4 py-2 rounded w-full hover:bg-red-500 transition">
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;