import Image from "next/image";
import Link from "next/link";
import { formatToRupiah } from "@/utils/format-to-rupiah";
import { Dispatch, SetStateAction } from "react";
import { ProductWithImages } from "@/types/responses/product";
import { IconZoomExclamation } from "@tabler/icons-react";
import { colors } from "@/utils/colors";

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
  if (wishlist.length === 0) {
    return (
      <div className="p-[1rem]">
        <IconZoomExclamation size={128} color={colors.redIcon} />
        <h1 className="font-inter font-bold text-[1.5rem] text-neutral-100 mt-[1rem]">
          Anda belum memiliki wishlist!
        </h1>
        <p className="font=inter text-neutral-60 mt-[1rem]">
          Cari produk yang Anda sukai, lalu klik tombol hati pada produk
          tersebut!
        </p>
        <Link
          href="/product"
          className="bg-primary-default px-[1rem] py-[0.5rem] font-bold font-inter text-neutral-10 mt-[1rem] transition-all hover:opacity-[0.9] inline-block"
        >
          Yuk, cari produk!
        </Link>
      </div>
    );
  }

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
              className="h-[200px] lg:h-[250px] object-cover"
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
                    width={24}
                    height={24}
                    alt="Remove from wishlist"
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
