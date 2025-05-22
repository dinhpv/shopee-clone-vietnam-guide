
import React from "react";
import { Link } from "react-router-dom";
import { mockCategories } from "@/lib/utils";

const CategorySection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-6">Danh mục</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {mockCategories.map((category) => (
            <Link
              to={`/categories/${category.slug}`}
              key={category.id}
              className="bg-white rounded-md p-2 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="aspect-square rounded-md overflow-hidden mb-2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-800">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
