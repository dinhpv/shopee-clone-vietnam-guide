
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainLayout from "@/components/layout/MainLayout";
import { mockProducts, formatCurrency } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const product = mockProducts.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Sản phẩm không tồn tại</h2>
          <Link to="/" className="text-shopee-primary hover:underline">
            Quay lại trang chủ
          </Link>
        </div>
      </MainLayout>
    );
  }

  const handleAddToCart = () => {
    // In a real app, this would add the product to the cart
    toast({
      title: "Thêm vào giỏ hàng thành công",
      description: `Đã thêm ${quantity} sản phẩm vào giỏ hàng`,
    });
  };

  const handleBuyNow = () => {
    // In a real app, this would add the product to the cart and redirect to checkout
    toast({
      title: "Mua ngay",
      description: `Đang chuyển đến trang thanh toán cho ${quantity} sản phẩm`,
    });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 mb-4 md:mb-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-md"
              />
            </div>
            <div className="md:w-3/5 md:pl-8">
              <h1 className="text-xl md:text-2xl font-bold mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <span className="text-lg font-semibold mr-1">{product.rating}</span>
                  <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                </div>
                <div className="border-l border-gray-300 pl-4">
                  <span className="text-lg font-semibold">{product.sold}</span>
                  <span className="text-gray-500 ml-1">Đã bán</span>
                </div>
              </div>
              
              <div className="bg-shopee-light p-4 rounded-md mb-6">
                <div className="flex items-baseline">
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through mr-2">
                      ₫{formatCurrency(product.originalPrice)}
                    </span>
                  )}
                  <span className="text-shopee-primary text-3xl font-bold">
                    ₫{formatCurrency(product.price)}
                  </span>
                  {discount > 0 && (
                    <span className="ml-2 bg-shopee-primary text-white text-xs font-bold px-2 py-1 rounded">
                      {discount}% GIẢM
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-gray-700 mb-2">Số lượng</div>
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    className="border border-gray-300 rounded-l-md px-3 py-1 hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="border-t border-b border-gray-300 px-3 py-1 w-16 text-center"
                    min="1"
                  />
                  <button
                    onClick={increaseQuantity}
                    className="border border-gray-300 rounded-r-md px-3 py-1 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="border-shopee-primary text-shopee-primary hover:bg-shopee-light flex-1"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Thêm vào giỏ hàng
                </Button>
                <Button
                  className="bg-shopee-primary hover:bg-shopee-orange-dark flex-1"
                  onClick={handleBuyNow}
                >
                  Mua ngay
                </Button>
              </div>
              
              <div className="flex items-center mt-6 text-gray-500 text-sm">
                <Heart className="h-5 w-5 mr-2" />
                <span>Thêm vào danh sách yêu thích</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <Tabs defaultValue="description">
            <TabsList className="mb-4">
              <TabsTrigger value="description">Mô tả sản phẩm</TabsTrigger>
              <TabsTrigger value="specs">Thông số kỹ thuật</TabsTrigger>
              <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="p-4">
              <p>{product.description}</p>
            </TabsContent>
            <TabsContent value="specs" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-b pb-2">
                  <span className="font-medium">Danh mục:</span> {product.category}
                </div>
                <div className="border-b pb-2">
                  <span className="font-medium">Thương hiệu:</span> Shopee
                </div>
                <div className="border-b pb-2">
                  <span className="font-medium">Xuất xứ:</span> Việt Nam
                </div>
                <div className="border-b pb-2">
                  <span className="font-medium">Kho hàng:</span> 1000
                </div>
                <div className="border-b pb-2">
                  <span className="font-medium">Gửi từ:</span> TP. Hồ Chí Minh
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="p-4">
              <div className="flex items-center mb-6">
                <div className="text-5xl font-bold text-shopee-primary mr-4">
                  {product.rating}
                </div>
                <div className="flex flex-col">
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 stroke-yellow-400"
                            : "fill-gray-200 stroke-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    {product.sold} đánh giá
                  </div>
                </div>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-500">Chưa có đánh giá nào</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
