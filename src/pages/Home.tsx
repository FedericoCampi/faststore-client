import React from "react";
import ProductList from "../components/ProductList";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="p-6 max-w-[1000px]">
        <div className="p-8 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold mb-4">Busca tu producto</h3>
          <ProductList />
        </div>
      </div>
    </div>

  );
};

export default Home;