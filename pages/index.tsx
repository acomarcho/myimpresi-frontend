import Head from "next/head";
import Form from "@/components/home/form";
import Categories from "@/components/home/categories";
import Banner from "@/components/home/banner";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import Products from "@/components/home/products";
import Events from "@/components/home/events";
import FloatingWAIcon from "@/components/common/floating-wa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Impresi - Souvenir & Gifts</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem]">
          {/* Banner image */}
          <Banner />
          {/* Kategori Pilihan */}
          <Categories />
          {/* Products */}
          <Products />
        </div>
        {/* Contact field */}
        <Form />
        {/* Footer */}
        <Footer />
        {/* Floating WA Icon */}
        <FloatingWAIcon />
      </div>
    </>
  );
}
