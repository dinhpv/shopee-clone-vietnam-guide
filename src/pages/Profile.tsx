
import React from "react";
import { User, Package, Heart, Clock, CreditCard, Settings } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import MainLayout from "@/components/layout/MainLayout";

const Profile = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Tài khoản của tôi</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <User className="h-8 w-8 text-gray-500" />
                </div>
                <div>
                  <h2 className="font-semibold">Người dùng Shopee</h2>
                  <p className="text-sm text-gray-500">user@example.com</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                  <User className="h-5 w-5 mr-3 text-shopee-primary" />
                  <span>Hồ sơ</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                  <Package className="h-5 w-5 mr-3 text-shopee-primary" />
                  <span>Đơn mua</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                  <Heart className="h-5 w-5 mr-3 text-shopee-primary" />
                  <span>Yêu thích</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                  <CreditCard className="h-5 w-5 mr-3 text-shopee-primary" />
                  <span>Thanh toán</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                  <Settings className="h-5 w-5 mr-3 text-shopee-primary" />
                  <span>Cài đặt</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Tabs defaultValue="profile">
                <TabsList className="mb-6">
                  <TabsTrigger value="profile">Hồ sơ</TabsTrigger>
                  <TabsTrigger value="orders">Đơn hàng</TabsTrigger>
                  <TabsTrigger value="addresses">Địa chỉ</TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile">
                  <h2 className="text-lg font-semibold mb-4">Hồ sơ của tôi</h2>
                  <p className="text-gray-500 mb-6">
                    Quản lý thông tin hồ sơ để bảo mật tài khoản
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tên đăng nhập
                      </label>
                      <input
                        type="text"
                        value="shopeeclone_user"
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tên
                      </label>
                      <input
                        type="text"
                        placeholder="Nhập tên"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value="user@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        placeholder="Nhập số điện thoại"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Giới tính
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            className="mr-2"
                          />
                          Nam
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            className="mr-2"
                          />
                          Nữ
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            className="mr-2"
                          />
                          Khác
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ngày sinh
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="px-4 py-2 bg-shopee-primary text-white rounded-md hover:bg-shopee-orange-dark">
                      Lưu
                    </button>
                  </div>
                </TabsContent>
                
                <TabsContent value="orders">
                  <h2 className="text-lg font-semibold mb-4">Đơn hàng của tôi</h2>
                  
                  <div className="flex border-b mb-4">
                    <button className="px-4 py-2 text-shopee-primary border-b-2 border-shopee-primary">
                      Tất cả
                    </button>
                    <button className="px-4 py-2">Chờ xác nhận</button>
                    <button className="px-4 py-2">Đang giao</button>
                    <button className="px-4 py-2">Đã giao</button>
                    <button className="px-4 py-2">Đã hủy</button>
                  </div>
                  
                  <div className="text-center py-10">
                    <Clock className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Chưa có đơn hàng</h3>
                    <p className="text-gray-500">Bạn chưa có đơn hàng nào</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="addresses">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">Địa chỉ của tôi</h2>
                    <button className="px-3 py-1 border border-shopee-primary text-shopee-primary rounded hover:bg-shopee-light">
                      + Thêm địa chỉ mới
                    </button>
                  </div>
                  
                  <div className="text-center py-10">
                    <p className="text-gray-500">Bạn chưa có địa chỉ nào</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
