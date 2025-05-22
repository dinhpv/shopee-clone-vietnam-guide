
import React from "react";
import { Clock } from "lucide-react";
import ProductCard from "../product/ProductCard";
import { mockProducts } from "@/lib/utils";

const FlashDeals = () => {
  // Select 5 random products for flash deals
  const flashProducts = mockProducts
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-shopee-primary mr-4">FLASH SALE</h2>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-red-500" />
                <span className="text-sm font-medium">07:00:00</span>
              </div>
            </div>
            <a href="#" className="text-sm text-shopee-primary hover:underline">
              Xem tất cả &gt;
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {flashProducts.map((product) => (
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
      </div>
    </section>
  );
};

export default FlashDeals;
