import Heading from "./heading";
import ProductScroll from "../common/product-scroll";
import usePromoProducts from "@/hooks/use-promo-products";

const Products = () => {
  const { promoProducts } = usePromoProducts();

  return (
    <div>
      <Heading text="Produk Promo" />
      <ProductScroll products={promoProducts?.data ?? []} />
    </div>
  );
};

export default Products;
