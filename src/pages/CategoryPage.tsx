
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ProductCard from "@/components/product/ProductCard";
import { mockCategories, mockProducts } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

type SortOption = "popular" | "newest" | "price-asc" | "price-desc";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [priceRange, setPriceRange] = useState<number[]>([0, 30000000]);
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const category = mockCategories.find((c) => c.slug === slug);
  const categoryProducts = mockProducts.filter((p) => p.category === slug);

  useEffect(() => {
    let filtered = categoryProducts.length > 0 ? categoryProducts : mockProducts;

    // Filter by price range
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort products
    switch (sortBy) {
      case "newest":
        // In a real app, you would sort by date
        filtered = [...filtered].sort((a, b) => b.id - a.id);
        break;
      case "price-asc":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "popular":
      default:
        filtered = [...filtered].sort((a, b) => b.sold - a.sold);
        break;
    }

    setFilteredProducts(filtered);
  }, [slug, priceRange, sortBy, categoryProducts]);

  const handlePriceChange = (values: number[]) => {
    setPriceChange(values);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">
          {category ? category.name : "Tất cả sản phẩm"}
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <h2 className="font-semibold mb-4">Bộ lọc tìm kiếm</h2>

              <div className="border-t pt-4 mb-4">
                <h3 className="font-medium mb-3">Khoảng giá</h3>
                <div className="px-2 mb-4">
                  <Slider
                    defaultValue={[0, 30000000]}
                    max={30000000}
                    step={100000}
                    value={priceRange}
                    onValueChange={handlePriceChange}
                    className="mb-6"
                  />
                  <div className="flex justify-between items-center">
                    <div className="w-[45%]">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([
                            Number(e.target.value),
                            priceRange[1],
                          ])
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="₫ TỪ"
                      />
                    </div>
                    <div className="w-[10%] text-center">-</div>
                    <div className="w-[45%]">
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([
                            priceRange[0],
                            Number(e.target.value),
                          ])
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="₫ ĐẾN"
                      />
                    </div>
                  </div>
                  <button className="w-full mt-4 px-3 py-2 bg-shopee-primary text-white rounded-md hover:bg-shopee-orange-dark">
                    Áp dụng
                  </button>
                </div>
              </div>

              <div className="border-t pt-4 mb-4">
                <h3 className="font-medium mb-3">Đánh giá</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <Checkbox id={`rating-${rating}`} className="mr-2" />
                      <label
                        htmlFor={`rating-${rating}`}
                        className="flex items-center"
                      >
                        {Array(rating)
                          .fill(null)
                          .map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 fill-yellow-400 stroke-yellow-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l2.4 7.5H22l-6 4.5 2.3 7.5-6.3-4.5L5.7 21.5l2.3-7.5-6-4.5h7.6L12 2z" />
                            </svg>
                          ))}
                        {Array(5 - rating)
                          .fill(null)
                          .map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 fill-gray-200 stroke-gray-200"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l2.4 7.5H22l-6 4.5 2.3 7.5-6.3-4.5L5.7 21.5l2.3-7.5-6-4.5h7.6L12 2z" />
                            </svg>
                          ))}
                        <span className="ml-1">trở lên</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {filteredProducts.length} Kết quả
                </span>
                <div className="flex items-center">
                  <span className="mr-2 text-gray-600">Sắp xếp theo</span>
                  <Select
                    value={sortBy}
                    onValueChange={(value) => setSortBy(value as SortOption)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Phổ biến" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Phổ biến</SelectItem>
                      <SelectItem value="newest">Mới nhất</SelectItem>
                      <SelectItem value="price-asc">Giá: Thấp đến cao</SelectItem>
                      <SelectItem value="price-desc">Giá: Cao đến thấp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-10 text-center">
                <h3 className="text-lg font-medium mb-2">
                  Không tìm thấy sản phẩm
                </h3>
                <p className="text-gray-500">
                  Không có sản phẩm nào phù hợp với bộ lọc của bạn
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
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
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoryPage;
