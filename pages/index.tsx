import Head from "next/head";
import Form from "@/components/home/form";
import Categories from "@/components/home/categories";
import Banner from "@/components/home/banner";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import FeaturedProducts from "@/components/home/featured-products";
import BestSellingProducts from "@/components/home/best-selling-products";
import OurServices from "@/components/home/our-services";
import FloatingWAIcon from "@/components/common/floating-wa";
import SectionDivider from "@/components/common/section-divider";
import Articles from "@/components/home/articles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Impresi - Souvenir & Gifts</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem]">
          <Banner />
          <Categories />
          <SectionDivider />
          <FeaturedProducts />
          <SectionDivider />
          <BestSellingProducts />
          <SectionDivider />
          <Articles />
          <SectionDivider />
          <OurServices />
        </div>
        <Form />
        <Footer />
        <FloatingWAIcon />
      </div>
    </>
  );
}
