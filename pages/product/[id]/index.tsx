import Head from "next/head";
import Navbar from "@/components/common/navbar";
import FloatingWAIcon from "@/components/common/floating-wa";
import Footer from "@/components/common/footer";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { formatToRupiah } from "@/utils/format-to-rupiah";

const dummyProduct = {
  name: "TAWIRI",
  subtitle: "Tumbler grafir, 500ml, menahan panas maupun dingin",
  price: 99000,
  soldAmount: 675,
  colors: ["#000000", "#eeeeee", "#ff0000"],
  material: "Besi & Plastik Rubber",
  size: "500ml",
  minimalOrder: 10,
  images: [
    "/dummy/produk.png",
    "/dummy/produk2.png",
    "/dummy/produk3.png",
    "/dummy/produk4.png",
    "/dummy/produk5.png",
  ],
  description:
    "Unik, stylish dan fungsional merupakan kesan yang ditampilkan oleh TAWIRI, tumbler premium ini cocok untuk anda yang menginginkan kreativitas dan dinamis menjadi kesan yang ditinggalkan oleh souvenir dari perusahaan / instansi anda.",
};

const SingleProduct = () => {
  return (
    <>
      <Head>
        <title>TAWIRI</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem]">
          <Carousel swipeable emulateTouch infiniteLoop>
            {dummyProduct.images.map((img) => {
              return (
                <div key={img} className="w-full cursor-pointer">
                  <Image
                    src={img}
                    width={0}
                    height={0}
                    sizes="100%"
                    className="w-full h-full object-cover"
                    alt={dummyProduct.name}
                  />
                </div>
              );
            })}
          </Carousel>
          <h1 className="font-inter font-bold text-[2rem] text-neutral-100">
            {dummyProduct.name}
          </h1>
          <p className="font-inter text-[1rem] text-neutral-60">
            {dummyProduct.subtitle}
          </p>
          <p className="font-inter text-[1.25rem] text-neutral-100 font-bold mt-[1rem]">
            {formatToRupiah(dummyProduct.price)}
          </p>
          <p className="font-inter text-[1rem] text-neutral-60">
            {dummyProduct.soldAmount} membeli produk ini
          </p>
          <hr className="text-neutral-20 mt-[0.5rem]" />
          <p className="font-inter text-[1rem] text-neutral-60 font-bold mt-[0.5rem]">
            Warna:
          </p>
          <div className="flex gap-[0.5rem] flex-wrap">
            {dummyProduct.colors.map((c) => {
              return (
                <div
                  className="w-[30px] h-[30px] rounded-full shadow-md"
                  style={{
                    backgroundColor: c,
                  }}
                  key={c}
                />
              );
            })}
          </div>
          <hr className="text-neutral-20 mt-[1rem]" />
          <p className="font-inter text-[1rem] text-neutral-60 font-bold mt-[0.5rem]">
            Bahan:
          </p>
          <p className="font-inter text-[1rem] text-neutral-60 mt-[0.5rem]">
            {dummyProduct.material}
          </p>
          <hr className="text-neutral-20 mt-[1rem]" />
          <p className="font-inter text-[1rem] text-neutral-60 font-bold mt-[0.5rem]">
            Ukuran:
          </p>
          <p className="font-inter text-[1rem] text-neutral-60 mt-[0.5rem]">
            {dummyProduct.size}
          </p>
          <hr className="text-neutral-20 mt-[1rem]" />
          <p className="font-inter text-[1rem] text-neutral-60 font-bold mt-[0.5rem]">
            Minimal order hanya:
          </p>
          <p className="font-inter text-[1rem] text-neutral-60 mt-[0.5rem]">
            {dummyProduct.minimalOrder} pcs
          </p>
          <hr className="text-neutral-20 mt-[1rem]" />
          <p className="font-inter text-[1rem] text-neutral-60 mt-[0.5rem]">
            {dummyProduct.description}
          </p>
        </div>
      </div>
      <FloatingWAIcon />
      <Footer />
    </>
  );
};

export default SingleProduct;
