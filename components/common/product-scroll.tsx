import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import { formatToRupiah } from "@/utils/format-to-rupiah";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { useRef } from "react";
import Link from "next/link";

type Product = {
  id: number;
  imagePath: string;
  name: string;
  price: number;
  minQuantity: number;
  soldAmount: number;
};

type Props = {
  products: Product[];
};

const ProductScroll = ({ products }: Props) => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <button
        onClick={() => {
          scrollContainer.current?.scrollTo({
            left:
              scrollContainer.current?.scrollLeft -
              2 * scrollContainer.current?.children[0].clientWidth,
            behavior: "smooth",
          });
        }}
        className="absolute left-[-1rem] top-[50%] translate-y-[-50%] z-[10] bg-gray p-[1rem] rounded-full transition-all hover:scale-[1.2] shadow-md"
      >
        <IconChevronLeft />
      </button>
      <ScrollContainer
        className="flex flex-row gap-[1rem] lg:gap-[1.25rem] mt-[2rem] px-[0.5rem] pb-[1rem]"
        innerRef={scrollContainer}
      >
        {products.map((p) => {
          return (
            <Link
              key={p.id}
              className="bg-neutral-10 w-[50%] min-w-[180px] lg:w-[280px] flex-shrink-0 transition-all cursor-pointer hover:scale-[1.05] relative block"
              href={`/product/${p.id}`}
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
            </Link>
          );
        })}
      </ScrollContainer>
      <button
        onClick={() => {
          scrollContainer.current?.scrollTo({
            left:
              scrollContainer.current?.scrollLeft +
              2 * scrollContainer.current?.children[0].clientWidth,
            behavior: "smooth",
          });
        }}
        className="absolute right-[-1rem] top-[50%] translate-y-[-50%] z-[10] bg-gray p-[1rem] rounded-full transition-all hover:scale-[1.2] shadow-md"
      >
        <IconChevronRight />
      </button>
    </div>
  );
};

export default ProductScroll;
