import Head from "next/head";
import Form from "@/components/home/form";
import Categories from "@/components/home/categories";
import Banner from "@/components/home/banner";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import FeaturedProducts from "@/components/home/featured-products";
import BestSellingProducts from "@/components/home/best-selling-products";
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
          {/* Banner image */}
          <Banner />
          {/* Kategori Pilihan */}
          <Categories />
          <SectionDivider />
          {/* Products */}
          <FeaturedProducts />
          <SectionDivider />
          <BestSellingProducts />
          <SectionDivider />
          <div className="mb-[2rem]">
            <Heading text="Layanan Kami Meliputi" />
            <div className="flex flex-col gap-[2rem] mt-[2rem] lg:grid lg:grid-cols-3">
              <div>
                <Image
                  src="/assets/layanan-1.png"
                  width={389}
                  height={341}
                  className="w-full"
                  alt=""
                />
                <div className="mt-[0.5rem] bg-serviceorange-500 p-[2rem] flex justify-between items-center gap-[2rem]">
                  <Image
                    src="/assets/icon-chat.png"
                    width={78}
                    height={81}
                    alt=""
                  />
                  <div className="flex flex-col gap-[0.5rem]">
                    <p className="text-neutral-10 font-bold text-[1.5rem]">
                      Beritahu kami kebutuhanmu
                    </p>
                    <p className="text-neutral-10">
                      agar kami dapat memberi rekomendasi yang tepat
                    </p>
                  </div>
                </div>
                <div className="mt-[0.5rem] bg-serviceorange-300 p-[2rem]">
                  <p className="font-inter text-serviceorange-900 font-bold">
                    Tim Impresi senang membantu menyelesaikan kebutuhan souvenir
                    yang terkadang merepotkanmu
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/assets/layanan-2.png"
                  width={389}
                  height={341}
                  className="w-full"
                  alt=""
                />
                <div className="mt-[0.5rem] bg-servicered-500 p-[2rem] flex justify-between items-center gap-[2rem]">
                  <Image
                    src="/assets/icon-chat.png"
                    width={78}
                    height={81}
                    alt=""
                  />
                  <div className="flex flex-col gap-[0.5rem]">
                    <p className="text-neutral-10 font-bold text-[1.5rem]">
                      Bebas biaya sample
                    </p>
                    <p className="text-neutral-10">
                      tidak perlu khawatir lagi untuk melihat contoh produkmu
                    </p>
                  </div>
                </div>
                <div className="mt-[0.5rem] bg-servicered-300 p-[2rem]">
                  <p className="font-inter text-servicered-900 font-bold">
                    Tim Impresi ingin memastikan kamu mendapat produk ayng
                    sesuai seperti yang kamu inginkan
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/assets/layanan-2.png"
                  width={389}
                  height={341}
                  className="w-full"
                  alt=""
                />
                <div className="mt-[0.5rem] bg-servicegreen-500 p-[2rem] flex justify-between items-center gap-[2rem]">
                  <Image
                    src="/assets/icon-chat.png"
                    width={78}
                    height={81}
                    alt=""
                  />
                  <div className="flex flex-col gap-[0.5rem]">
                    <p className="text-neutral-10 font-bold text-[1.5rem]">
                      Pengaturan pengantaran
                    </p>
                    <p className="text-neutral-10">
                      Pengantaran dalam jumlah besar atau satu-satu ke alamat
                      tertentu
                    </p>
                  </div>
                </div>
                <div className="mt-[0.5rem] bg-servicegreen-300 p-[2rem]">
                  <p className="font-inter text-servicegreen-900 font-bold">
                    Tim Impresi ingin memastikan souvenir sampai dengan baik dan
                    dalam keadaan yang prima
                  </p>
                </div>
              </div>
            </div>
          </div>
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
