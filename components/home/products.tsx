import Heading from "./heading";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import { formatToRupiah } from "@/utils/format-to-rupiah";

const dummyProducts = [
  {
    id: 1,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci A ini tes nama yang super panjang untuk melihat truncatenya",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 2,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci B",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 3,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci C",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 5,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci D",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 6,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci E",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 7,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci F",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 8,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci G",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 4,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci H",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
];

const Products = () => {
  return (
    <div className="mt-[2rem] lg:mt-[5rem] mb-[2rem] lg:mb-[5rem]">
      <Heading text="Produk Best Selling Tahun Ini" />
      <ScrollContainer className="flex flex-row gap-[1rem] lg:gap-[1.25rem] mt-[2rem] px-[0.5rem] pb-[1rem]">
        {dummyProducts.map((p) => {
          return (
            <div
              key={p.id}
              className="bg-neutral-10 w-[50%] lg:w-[280px] flex-shrink-0 transition-all cursor-pointer hover:scale-[1.05] relative"
            >
              <Image
                src={p.imagePath}
                width={280}
                height={280}
                alt={p.name}
                className="object-cover"
              />
              <div className="p-[0.75rem]">
                <p className="h-[3rem] font-inter text-neutral-100 text-[0.875rem] truncate-two">
                  {p.name}
                </p>
                <p className="font-inter text-neutral-100">
                  <span className="font-bold text-[1.125rem]">
                    {formatToRupiah(p.price)}
                  </span>
                  <span className="text-neutral-60">/{p.minQuantity} pcs</span>
                </p>
                <p className="font-inter text-neutral-60">
                  {p.soldAmount}+ terjual
                </p>
              </div>
              <div className="absolute w-[2rem] h-[2rem] bg-neutral-10 rounded-full top-[1rem] right-[1rem] flex items-center justify-center">
                <Image
                  src="/assets/heart.svg"
                  height={16}
                  width={16}
                  alt="Heart"
                  className="transition-all hover:scale-[1.2]"
                />
              </div>
            </div>
          );
        })}
      </ScrollContainer>
    </div>
  );
};

export default Products;
