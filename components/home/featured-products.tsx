import Heading from "./heading";
import ProductScroll from "../common/product-scroll";
import useFeaturedProducts from "@/hooks/use-featured-products";

const Products = () => {
  const { featuredProducts } = useFeaturedProducts();

  return (
    <div>
      <Heading text="Produk Pilihan" />
      <ProductScroll products={featuredProducts?.data ?? []} />
    </div>
  );
};

export default Products;
