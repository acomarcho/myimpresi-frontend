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
        </div>
      </div>
      <FloatingWAIcon />
      <Footer />
    </>
  );
};

export default SingleProduct;
