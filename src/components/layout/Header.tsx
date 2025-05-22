
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-shopee-primary text-white">
      {/* Top header - with search */}
      <div className="container mx-auto flex items-center justify-between py-2 px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold mr-6 whitespace-nowrap">Shopee Clone</Link>
          <div className="hidden md:flex">
            <Input
              type="text"
              placeholder="Tìm sản phẩm..."
              className="w-[300px] lg:w-[400px] bg-white text-black"
            />
            <Button size="icon" variant="default" className="bg-shopee-orange-dark hover:bg-shopee-orange-dark/90">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="flex items-center">
            <ShoppingCart className="h-6 w-6" />
            <span className="ml-1 hidden sm:inline">Giỏ hàng</span>
          </Link>
          <Link to="/profile" className="flex items-center">
            <User className="h-6 w-6" />
            <span className="ml-1 hidden sm:inline">Tài khoản</span>
          </Link>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="bg-white p-2 md:hidden">
        <div className="relative flex items-center">
          <Input
            type="text"
            placeholder="Tìm sản phẩm..."
            className="w-full pr-10 text-black"
          />
          <Search className="absolute right-3 h-4 w-4 text-gray-500" />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 bg-shopee-primary text-white">
            <span className="text-lg font-bold">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <Link
              to="/"
              className="block py-2 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              to="/categories"
              className="block py-2 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Danh mục sản phẩm
            </Link>
            <Link
              to="/cart"
              className="block py-2 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Giỏ hàng
            </Link>
            <Link
              to="/profile"
              className="block py-2 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tài khoản
            </Link>
          </div>
        </div>
      </div>

      {/* Categories navbar */}
      <nav className="bg-white text-gray-800 shadow-md hidden md:block">
        <div className="container mx-auto px-4 py-2">
          <ul className="flex space-x-6 overflow-x-auto">
            <li>
              <Link to="/categories/electronics" className="whitespace-nowrap hover:text-shopee-primary">
                Điện tử
              </Link>
            </li>
            <li>
              <Link to="/categories/fashion" className="whitespace-nowrap hover:text-shopee-primary">
                Thời trang
              </Link>
            </li>
            <li>
              <Link to="/categories/home" className="whitespace-nowrap hover:text-shopee-primary">
                Đồ gia dụng
              </Link>
            </li>
            <li>
              <Link to="/categories/beauty" className="whitespace-nowrap hover:text-shopee-primary">
                Mỹ phẩm
              </Link>
            </li>
            <li>
              <Link to="/categories/toys" className="whitespace-nowrap hover:text-shopee-primary">
                Đồ chơi
              </Link>
            </li>
            <li>
              <Link to="/categories/sports" className="whitespace-nowrap hover:text-shopee-primary">
                Thể thao
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
