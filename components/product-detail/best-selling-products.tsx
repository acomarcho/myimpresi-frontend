import ProductScroll from "../common/product-scroll";
import Heading from "../home/heading";

const dummyProducts = [
  {
    id: 1,
    imagePath: "/dummy/produk.png",
    name: "BANUM",
    price: 120000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 2,
    imagePath: "/dummy/produk.png",
    name: "HATIVE",
    price: 120000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 3,
    imagePath: "/dummy/produk.png",
    name: "HATIVE",
    price: 120000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 4,
    imagePath: "/dummy/produk.png",
    name: "HATIVE",
    price: 120000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 5,
    imagePath: "/dummy/produk.png",
    name: "HATIVE",
    price: 120000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 6,
    imagePath: "/dummy/produk.png",
    name: "HATIVE",
    price: 120000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 7,
    imagePath: "/dummy/produk.png",
    name: "HATIVE",
    price: 120000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 8,
    imagePath: "/dummy/produk.png",
    name: "HATIVE",
    price: 120000,
    minQuantity: 10,
    soldAmount: 200,
  },
];

const BestSellingProducts = () => {
  const products = dummyProducts;

  return (
    <div className="mt-[2rem]">
      <Heading text="Produk Terlaris" />
      <ProductScroll products={products} />
    </div>
  );
};

export default BestSellingProducts;
