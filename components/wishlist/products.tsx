import Image from "next/image";
import Link from "next/link";
import { formatToRupiah } from "@/utils/format-to-rupiah";
import { Dispatch, SetStateAction } from "react";
import { ProductWithImages } from "@/types/responses/product";

type Props = {
  wishlist: ProductWithImages[];
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedProduct: Dispatch<SetStateAction<ProductWithImages | null>>;
};

const WishlistProducts = ({
  wishlist,
  setIsModalOpen,
  setSelectedProduct,
}: Props) => {
  return (
    <div className="grid grid-cols-2 gap-[1rem] mt-[2rem] lg:grid-cols-4">
      {wishlist.map((w) => {
        return (
          <Link
            key={w.id}
            className="bg-neutral-10 transition-all cursor-pointer hover:scale-[1.05] relative block"
            href={`/product/${w.id}`}
          >
            <Image
              src={w.productImage[0].path}
              width={280}
              height={280}
              alt={w.name}
              className="object-cover"
            />
            <div className="p-[0.75rem]">
              <p className="font-inter font-bold">{w.name.toUpperCase()}</p>
              <p className="font-inter text-neutral-60 text-[0.875rem] truncate-two h-[44px]">
                {`${w.material}, ${w.size}`}
              </p>
              <div className="flex justify-between items-center mt-[0.5rem]">
                <p className="font-inter font-bold text-neutral-100 text-[0.8rem] lg:text-[1rem]">
                  {formatToRupiah(w.price)}
                </p>
                <button
                  className="transition-all hover:scale-[1.2]"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedProduct(w);
                    setIsModalOpen(true);
                  }}
                >
                  <Image
                    src="/assets/heart-filled.svg"
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
    </div>
  );
};

export default WishlistProducts;
