
import React from "react";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-shopee-primary to-orange-400 text-white">
        <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Sale lớn tháng 6
            </h1>
            <p className="text-lg mb-6 max-w-md">
              Ưu đãi lên đến 90% cho hàng ngàn sản phẩm. Cơ hội săn sale không thể bỏ lỡ!
            </p>
            <Button className="bg-white text-shopee-primary hover:bg-gray-100">
              Mua ngay
            </Button>
          </div>
          <div className="w-full max-w-sm md:max-w-md">
            <img
              src="https://cf.shopee.vn/file/f334018598b402e5d5b9ace05113adf4"
              alt="Banner Sale"
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default Banner;
