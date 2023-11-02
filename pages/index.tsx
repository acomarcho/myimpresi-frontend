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

import Heading from "@/components/home/heading";
import Image from "next/image";

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
          <div>
            <Heading text="Temukan Inspirasi Produk yang Cocok" />
            <div className="mt-[2rem] grid inspiration-grid-mobile lg:inspiration-grid-desktop gap-[1rem] lg:gap-[2rem]">
              <div className="grid-ins1 relative cursor-pointer transition-all hover:scale-[1.05]">
                <Image
                  src="/assets/inspo-1.png"
                  fill
                  className="object-cover"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 bg-whitetransparent p-[1rem] w-full">
                  <p className="font-inter font-bold text-neutral-100">
                    Rekomendasi event luar ruangan
                  </p>
                  <p className="font-inter text-neutral-100">Cek sekarang!</p>
                </div>
              </div>
              <div className="grid-ins2 relative cursor-pointer transition-all hover:scale-[1.05]">
                <Image
                  src="/assets/inspo-2.png"
                  fill
                  className="object-cover"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 bg-whitetransparent p-[1rem] w-full">
                  <p className="font-inter font-bold text-neutral-100">
                    Sambut karyawan baru dengan OfficeKit
                  </p>
                  <p className="font-inter text-neutral-100">Cek sekarang!</p>
                </div>
              </div>
              <div className="grid-ins3 relative cursor-pointer transition-all hover:scale-[1.05]">
                <Image
                  src="/assets/inspo-3.png"
                  fill
                  className="object-cover"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 bg-whitetransparent p-[1rem] w-full">
                  <p className="font-inter font-bold text-neutral-100">
                    Menyambut musim hujan yang dirindukan
                  </p>
                  <p className="font-inter text-neutral-100">Cek sekarang!</p>
                </div>
              </div>
              <div className="grid-ins4 relative cursor-pointer transition-all hover:scale-[1.05]">
                <Image
                  src="/assets/inspo-4.png"
                  fill
                  className="object-cover"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 bg-whitetransparent p-[1rem] w-full">
                  <p className="font-inter font-bold text-neutral-100">
                    Menyambut musim hujan yang dirindukan
                  </p>
                  <p className="font-inter text-neutral-100">Cek sekarang!</p>
                </div>
              </div>
            </div>
          </div>
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
