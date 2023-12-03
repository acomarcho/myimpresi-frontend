import Heading from "./heading";
import ProductScroll from "../common/product-scroll";
import usePromoProducts from "@/hooks/use-promo-products";

const Products = () => {
  const { promoProducts, isLoading, error } = usePromoProducts();

  return (
    <div>
      <Heading text="Berdasarkan Promosi" />
      <ProductScroll
        products={promoProducts?.data ?? []}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default Products;
