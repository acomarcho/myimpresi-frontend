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
import { useRouter } from "next/router";
import useProduct from "@/hooks/use-product";

const SingleProduct = () => {
  const router = useRouter();
  const productId = router.query.id as string;

  const { product, isLoading } = useProduct(productId);

  return (
    <>
      <Head>
        <title>{product?.data?.name.toUpperCase() ?? "Detail Produk"}</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem]">
          <ProductDetail
            product={product?.data}
            isLoading={isLoading}
          />
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
