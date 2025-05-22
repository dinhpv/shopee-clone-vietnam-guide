
import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  sold?: number;
}

const ProductCard = ({
  id,
  name,
  image,
  price,
  originalPrice,
  rating,
  sold = 0,
}: ProductCardProps) => {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${id}`}>
      <div className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden h-full flex flex-col">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full aspect-square object-cover"
            loading="lazy"
          />
          {discount > 0 && (
            <div className="absolute top-0 right-0 bg-shopee-primary text-white text-xs font-bold px-2 py-1">
              {discount}% GIẢM
            </div>
          )}
        </div>
        <div className="p-3 flex flex-col flex-grow">
          <h3 className="text-sm line-clamp-2 mb-2 flex-grow">{name}</h3>
          <div className="flex justify-between items-baseline mb-1">
            <div className="text-shopee-primary font-semibold">
              ₫{formatCurrency(price)}
            </div>
            {originalPrice && (
              <span className="text-gray-400 text-xs line-through">
                ₫{formatCurrency(originalPrice)}
              </span>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Star className="h-3 w-3 fill-yellow-400 stroke-yellow-400" />
              <span className="text-xs ml-1">{rating}</span>
            </div>
            <span className="text-xs text-gray-500">Đã bán {sold}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
