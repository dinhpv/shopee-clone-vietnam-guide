
import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Chăm sóc khách hàng</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-shopee-primary">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shopee-primary">Hướng dẫn mua hàng</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shopee-primary">Thanh toán</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shopee-primary">Vận chuyển</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shopee-primary">Trả hàng & Hoàn tiền</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Về chúng tôi</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-shopee-primary">Giới thiệu</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shopee-primary">Tuyển dụng</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shopee-primary">Điều khoản</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shopee-primary">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shopee-primary">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Thanh toán</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white p-2 rounded shadow-sm">Visa</div>
              <div className="bg-white p-2 rounded shadow-sm">Master</div>
              <div className="bg-white p-2 rounded shadow-sm">JCB</div>
              <div className="bg-white p-2 rounded shadow-sm">COD</div>
              <div className="bg-white p-2 rounded shadow-sm">Banking</div>
              <div className="bg-white p-2 rounded shadow-sm">ShopeePay</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-shopee-primary" />
                <span>1800-1234</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-shopee-primary" />
                <span>cskh@shopee.vn</span>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <a href="#" className="text-shopee-primary hover:text-shopee-orange-dark">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-shopee-primary hover:text-shopee-orange-dark">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-shopee-primary hover:text-shopee-orange-dark">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© 2023 Shopee Clone. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
