import Head from "next/head";
import Navbar from "@/components/common/navbar";
import FloatingWAIcon from "@/components/common/floating-wa";
import Footer from "@/components/common/footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductDetail from "@/components/product-detail/product-detail";
import SimilarProducts from "@/components/product-detail/similar-products";
import BestSellingProducts from "@/components/product-detail/best-selling-products";
import CustomLogoSection from "@/components/product-detail/custom-logo-section";
import SelectedCategories from "@/components/product-detail/selected-categories";

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
          <ProductDetail product={dummyProduct} />
          <hr className="text-neutral-20 mt-[1rem]" />
          <SimilarProducts />
          <hr className="text-neutral-20 mt-[1rem]" />
          <BestSellingProducts />
          <hr className="text-neutral-20 mt-[1rem]" />
          <CustomLogoSection />
          <hr className="text-neutral-20 mt-[2rem]" />
          <SelectedCategories />
        </div>
      </div>
      <FloatingWAIcon customBottomHeight="7rem" />
      <Footer />
    </>
  );
};

export default SingleProduct;