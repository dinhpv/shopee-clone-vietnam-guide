
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Banner from "@/components/home/Banner";
import CategorySection from "@/components/home/CategorySection";
import FlashDeals from "@/components/home/FlashDeals";
import PopularProducts from "@/components/home/PopularProducts";

const Index = () => {
  return (
    <MainLayout>
      <Banner />
      <CategorySection />
      <FlashDeals />
      <PopularProducts />
    </MainLayout>
  );
};

export default Index;
