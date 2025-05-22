
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import MainLayout from "@/components/layout/MainLayout";
import { mockProducts, formatCurrency } from "@/lib/utils";

interface CartItem {
  id: number;
  productId: number;
  quantity: number;
  product: typeof mockProducts[0];
}

const Cart = () => {
  // In a real app, this would be fetched from an API or context
  const initialCartItems: CartItem[] = [1, 3, 6].map((pid) => {
    const product = mockProducts.find((p) => p.id === pid)!;
    return {
      id: pid,
      productId: pid,
      quantity: 1,
      product,
    };
  });

  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const isAllSelected = selectedItems.length === cartItems.length && cartItems.length > 0;

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
    }
  };

  const handleSelectItem = (itemId: number) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleUpdateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    setSelectedItems(selectedItems.filter((id) => id !== itemId));
  };

  const totalItems = selectedItems.length;
  const totalPrice = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-2xl font-bold mb-6">Giỏ hàng</h1>
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Giỏ hàng trống</h2>
            <p className="text-gray-500 mb-6">
              Bạn chưa có sản phẩm nào trong giỏ hàng
            </p>
            <Link to="/">
              <Button className="bg-shopee-primary hover:bg-shopee-orange-dark">
                Tiếp tục mua sắm
              </Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Giỏ hàng</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="p-4 border-b flex items-center">
                <div className="flex items-center">
                  <Checkbox
                    checked={isAllSelected}
                    onCheckedChange={handleSelectAll}
                    className="mr-2"
                    id="select-all"
                  />
                  <label htmlFor="select-all" className="text-sm font-medium">
                    Chọn tất cả ({cartItems.length} sản phẩm)
                  </label>
                </div>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border-b flex flex-col sm:flex-row items-start sm:items-center"
                >
                  <div className="flex items-center mb-4 sm:mb-0">
                    <Checkbox
                      checked={selectedItems.includes(item.id)}
                      onCheckedChange={() => handleSelectItem(item.id)}
                      className="mr-4"
                    />
                    <div className="flex items-center">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div className="max-w-xs">
                        <Link
                          to={`/product/${item.productId}`}
                          className="text-sm hover:text-shopee-primary line-clamp-2"
                        >
                          {item.product.name}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-1 w-full sm:pl-4">
                    <div className="flex items-center mb-4 sm:mb-0">
                      <div className="text-shopee-primary font-semibold mr-2">
                        ₫{formatCurrency(item.product.price)}
                      </div>
                      {item.product.originalPrice && (
                        <span className="text-gray-400 text-xs line-through">
                          ₫{formatCurrency(item.product.originalPrice)}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <button
                          className="border border-gray-300 rounded-l-md px-2 py-1"
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleUpdateQuantity(
                              item.id,
                              parseInt(e.target.value) || 1
                            )
                          }
                          className="border-t border-b border-gray-300 px-2 py-1 w-12 text-center"
                          min="1"
                        />
                        <button
                          className="border border-gray-300 rounded-r-md px-2 py-1"
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-20">
              <h2 className="font-semibold mb-4">Tóm tắt đơn hàng</h2>
              
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tổng sản phẩm:</span>
                <span>{totalItems}</span>
              </div>
              
              <div className="flex justify-between mb-4 pb-4 border-b">
                <span className="text-gray-600">Tạm tính:</span>
                <span>₫{formatCurrency(totalPrice)}</span>
              </div>
              
              <div className="flex justify-between mb-4 font-semibold">
                <span>Tổng tiền:</span>
                <span className="text-shopee-primary text-xl">
                  ₫{formatCurrency(totalPrice)}
                </span>
              </div>
              
              <Button 
                className="w-full bg-shopee-primary hover:bg-shopee-orange-dark"
                disabled={selectedItems.length === 0}
              >
                Thanh toán ({totalItems})
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
