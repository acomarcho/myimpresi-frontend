import Head from "next/head";
import Image from "next/image";
import Form from "@/components/home/form";
import Categories from "@/components/home/categories";
import Banner from "@/components/home/banner";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import Products from "@/components/home/products";
import Events from "@/components/home/events";

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
          {/* Events */}
          <Events />
          {/* Products */}
          <Products />
        </div>
        {/* Contact field */}
        <Form />
        {/* Footer */}
        <Footer />
        {/* Floating WA Icon */}
        <a
          href="https:/wa.me"
          target="_blank"
          rel="noreferrer"
          className="fixed right-[1.5rem] bottom-[1.5rem] lg:right-[3.75rem] lg:bottom-[3.75rem]"
        >
          <Image
            src="/assets/icon-wa.png"
            width={72}
            height={72}
            className="w-[36px] h-[36px] lg:w-[72px] lg:h-[72px]"
            alt="WhatsApp"
          />
        </a>
      </div>
    </>
  );
}
