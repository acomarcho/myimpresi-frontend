import Heading from "./heading";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import { formatToRupiah } from "@/utils/format-to-rupiah";

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

const Products = () => {
  return (
    <div>
      <Heading text="Produk Terlaris" />
      <ScrollContainer className="flex flex-row gap-[1rem] lg:gap-[1.25rem] mt-[2rem] px-[0.5rem] pb-[1rem]">
        {dummyProducts.map((p) => {
          return (
            <div
              key={p.id}
              className="bg-neutral-10 w-[50%] min-w-[180px] lg:w-[280px] flex-shrink-0 transition-all cursor-pointer hover:scale-[1.05] relative"
            >
              <Image
                src={p.imagePath}
                width={280}
                height={280}
                alt={p.name}
                className="object-cover"
              />
              <div className="p-[0.75rem]">
                <p className="font-inter font-bold">{p.name.toUpperCase()}</p>
                <p className="font-inter text-neutral-60 text-[0.875rem] truncate-two">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsum numquam reprehenderit et, earum deleniti nostrum tempore
                  enim nihil corporis optio!
                </p>
                <div className="flex justify-between items-center mt-[0.5rem]">
                  <p className="font-inter font-bold text-neutral-100 text-[0.9rem] lg:text-[1rem]">
                    {formatToRupiah(p.price)}
                  </p>
                  <button className="transition-all hover:scale-[1.2]">
                    <Image
                      src="/assets/heart.svg"
                      width={16}
                      height={16}
                      alt="Add to wishlist"
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </ScrollContainer>
    </div>
  );
};

export default Products;
