
import React from "react";
import ProductCard from "../product/ProductCard";
import { mockProducts } from "@/lib/utils";

const PopularProducts = () => {
  const sortedProducts = [...mockProducts].sort((a, b) => b.sold - a.sold);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-6">Phổ biến</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              sold={product.sold}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
