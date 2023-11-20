import ProductScroll from "../common/product-scroll";
import Heading from "../home/heading";
import _ from "lodash";
import useSimilarProducts from "@/hooks/use-similar-products";

type Props = {
  productId: string;
};

const BestSellingProducts = ({ productId }: Props) => {
  const { similarProducts } = useSimilarProducts(productId);

  return (
    <div className="mt-[2rem]">
      <Heading text="Produk Terlaris" />
      <ProductScroll
        products={
          (similarProducts?.data &&
            _.shuffle(similarProducts.data).slice(0, 5)) ??
          []
        }
      />
    </div>
  );
};

export default BestSellingProducts;
