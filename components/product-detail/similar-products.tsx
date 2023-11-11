import ProductScroll from "../common/product-scroll";
import Heading from "../home/heading";
import useFeaturedProducts from "@/hooks/use-featured-products";

const SimilarProducts = () => {
  const { featuredProducts } = useFeaturedProducts();

  return (
    <div className="mt-[2rem]">
      <Heading text="Produk Serupa" />
      <ProductScroll products={featuredProducts?.data ?? []} />
    </div>
  );
};

export default SimilarProducts;
