import ProductScroll from "../common/product-scroll";
import Heading from "../home/heading";
import usePromoProducts from "@/hooks/use-promo-products";
import _ from "lodash";

const BestSellingProducts = () => {
  const { promoProducts } = usePromoProducts();

  return (
    <div className="mt-[2rem]">
      <Heading text="Produk Terlaris" />
      <ProductScroll
        products={(promoProducts?.data && _.shuffle(promoProducts.data)) ?? []}
      />
    </div>
  );
};

export default BestSellingProducts;
