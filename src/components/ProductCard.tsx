import React from "react";

type ProductProps = {
  producto: {
    id: number;
    title: string;
    image: string;
    price: number;
  };
};

const ProductCard: React.FC<ProductProps> = ({ producto }) => {
  return (
    <a
      href={`/producto/${producto.id}`}
      className="w-full flex flex-col justify-between items-center border rounded-lg p-4 shadow-md hover:shadow-lg hover:bg-gray-400"
    >
      <img src={producto.image} alt={producto.title} className="h-40 object-contain mx-auto" />
      <h2 className="mt-2 font-bold">{producto.title}</h2>
      <p className="text-gray-700 text-2xl">${producto.price.toFixed(2)}</p>
    </a>
  );
};

export default ProductCard;