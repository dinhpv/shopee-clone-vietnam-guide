
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const mockCategories = [
  { id: 1, name: "Điện tử", slug: "electronics", image: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn" },
  { id: 2, name: "Thời trang", slug: "fashion", image: "https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn" },
  { id: 3, name: "Đồ gia dụng", slug: "home", image: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn" },
  { id: 4, name: "Mỹ phẩm", slug: "beauty", image: "https://cf.shopee.vn/file/ef1f336ecc6f97b790d5aae9916dcb72_tn" },
  { id: 5, name: "Đồ chơi", slug: "toys", image: "https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn" },
  { id: 6, name: "Thể thao", slug: "sports", image: "https://cf.shopee.vn/file/49119e891a44fa135f5f6f5fd4cfc747_tn" },
  { id: 7, name: "Sách", slug: "books", image: "https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn" },
  { id: 8, name: "Thực phẩm", slug: "food", image: "https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn" },
];

export const mockProducts = [
  {
    id: 1,
    name: "Điện thoại Samsung Galaxy S21 Ultra 5G",
    description: "Điện thoại Samsung Galaxy S21 Ultra 5G với camera chuyên nghiệp, màn hình Dynamic AMOLED 2X, pin 5000mAh và sạc nhanh 25W.",
    price: 24990000,
    originalPrice: 29990000,
    image: "https://cf.shopee.vn/file/0f89c022511a6a2307e0d4ed9c92c87b",
    rating: 4.8,
    sold: 1356,
    category: "electronics"
  },
  {
    id: 2,
    name: "Áo Thun Nam Nữ Form Rộng SADBOIZ New York Mặc Đi Chơi",
    description: "Áo thun unisex form rộng, chất liệu cotton cao cấp, thoáng mát, thấm hút mồ hôi tốt.",
    price: 79000,
    originalPrice: 150000,
    image: "https://cf.shopee.vn/file/91ecfa25f5e78c5883cf6d0922d613ce",
    rating: 4.6,
    sold: 5423,
    category: "fashion"
  },
  {
    id: 3,
    name: "Nồi Chiên Không Dầu Philips HD9200/90 4.1 Lít",
    description: "Nồi chiên không dầu Philips với công nghệ Rapid Air, dung tích 4.1L, công suất 1400W.",
    price: 1790000,
    originalPrice: 2490000,
    image: "https://cf.shopee.vn/file/d3de8749dfe1a4285956bcb0f1c1a306",
    rating: 4.9,
    sold: 872,
    category: "home"
  },
  {
    id: 4,
    name: "Son Kem Lì Black Rouge Air Fit Velvet Tint Ver.7",
    description: "Son kem lì với kết cấu mỏng nhẹ, lên màu chuẩn, lâu trôi, không khô môi.",
    price: 149000,
    originalPrice: 195000,
    image: "https://cf.shopee.vn/file/sg-11134201-22110-6givb44rt9jv3f",
    rating: 4.7,
    sold: 3210,
    category: "beauty"
  },
  {
    id: 5,
    name: "Laptop Apple MacBook Air M1 2020 13.3 inch",
    description: "MacBook Air với chip Apple M1, màn hình Retina 13.3 inch, 8GB RAM, 256GB SSD.",
    price: 19490000,
    originalPrice: 23990000,
    image: "https://cf.shopee.vn/file/fc5b3d9a81bef85e6a4816c9b7ea1b79",
    rating: 4.9,
    sold: 542,
    category: "electronics"
  },
  {
    id: 6,
    name: "Giày Thể Thao Nam Nike Air Force 1 '07 Low White",
    description: "Giày thể thao Nike Air Force 1 màu trắng cổ điển với chất liệu da cao cấp, đế đệm êm ái.",
    price: 1790000,
    originalPrice: 2290000,
    image: "https://cf.shopee.vn/file/sg-11134201-22110-97dwlnvhgfjv5f",
    rating: 4.8,
    sold: 2132,
    category: "fashion"
  },
  {
    id: 7,
    name: "Loa Bluetooth JBL Charge 4 Chống Nước IPX7",
    description: "Loa Bluetooth JBL Charge 4 với chất âm sống động, chống nước chuẩn IPX7, thời gian phát nhạc lên đến 20 giờ.",
    price: 2290000,
    originalPrice: 2690000,
    image: "https://cf.shopee.vn/file/6be9a212c5a3ab0a6e0e99911a9a24f7",
    rating: 4.7,
    sold: 765,
    category: "electronics"
  },
  {
    id: 8,
    name: "Sữa Rửa Mặt Cetaphil Gentle Skin Cleanser 500ml",
    description: "Sữa rửa mặt dịu nhẹ phù hợp cho mọi loại da, không gây kích ứng, làm sạch sâu.",
    price: 239000,
    originalPrice: 270000,
    image: "https://cf.shopee.vn/file/455e98cd6392b6526c83e7d16acb321b",
    rating: 4.9,
    sold: 4521,
    category: "beauty"
  },
  {
    id: 9,
    name: "Tai Nghe Bluetooth Apple AirPods Pro 2",
    description: "AirPods Pro với công nghệ khử tiếng ồn chủ động, chế độ xuyên âm, chuẩn chống nước IPX4.",
    price: 5390000,
    originalPrice: 6790000,
    image: "https://cf.shopee.vn/file/sg-11134201-22100-i1yrx18a1aiv0a",
    rating: 4.9,
    sold: 1230,
    category: "electronics"
  },
  {
    id: 10,
    name: "Nước Hoa Nam Dior Sauvage EDP 100ml",
    description: "Nước hoa nam Dior Sauvage với hương thơm mạnh mẽ, nam tính kết hợp giữa hương cam Bergamot và hương gỗ.",
    price: 2550000,
    originalPrice: 3150000,
    image: "https://cf.shopee.vn/file/sg-11134201-22100-ldhfj9vcfriv15",
    rating: 4.8,
    sold: 648,
    category: "beauty"
  }
];
