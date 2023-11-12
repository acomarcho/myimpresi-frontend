import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import { formatToRupiah } from "@/utils/format-to-rupiah";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { useRef } from "react";
import Link from "next/link";
import { ProductWithImages } from "@/types/responses/product";

import { addProduct, removeProduct } from "@/redux/slices/wishlist-slice";
import { useAppSelector, useAppDispatch } from "@/hooks/use-redux";

type Props = {
  products: ProductWithImages[];
};

const ProductScroll = ({ products }: Props) => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const wishlistProducts = useAppSelector((state) => state.wishlist.value);
  const dispatch = useAppDispatch();

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
              className="bg-neutral-10 w-[180px] lg:w-[280px] flex-shrink-0 transition-all cursor-pointer hover:scale-[1.05] relative"
              href={`/product/${p.id}`}
            >
              {p.productImage && (
                <Image
                  src={p.productImage[0].path}
                  sizes="100%"
                  width={0}
                  height={0}
                  alt={p.name}
                  className="w-[180px] h-[180px] lg:w-[280px] lg:h-[280px] object-cover"
                />
              )}
              <div className="p-[0.75rem]">
                <p className="font-inter font-bold">{p.name.toUpperCase()}</p>
                <p className="font-inter text-neutral-60 text-[0.875rem] truncate-two h-[44px]">
                  {`${p.material}, ${p.size}`}
                </p>
                <div className="flex justify-between items-center mt-[0.5rem]">
                  <p className="font-inter font-bold text-neutral-100 text-[0.9rem] lg:text-[1rem]">
                    {formatToRupiah(p.price)}
                  </p>
                  <button
                    className="transition-all hover:scale-[1.2]"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();

                      if (wishlistProducts.find((wp) => wp.id === p.id)) {
                        dispatch(removeProduct(p));
                      } else {
                        dispatch(addProduct(p));
                      }
                    }}
                  >
                    {wishlistProducts.find((wp) => wp.id === p.id) ? (
                      <Image
                        src="/assets/heart-filled.svg"
                        width={16}
                        height={16}
                        alt="Remove from wishlist"
                      />
                    ) : (
                      <Image
                        src="/assets/heart.svg"
                        width={16}
                        height={16}
                        alt="Add to wishlist"
                      />
                    )}
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
