import Image from "next/image";
import Link from "next/link";
import { formatToRupiah } from "@/utils/format-to-rupiah";
import { Dispatch, SetStateAction } from "react";

type Props = {
  wishlist: Product[];
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

type Product = {
  id: number;
  imagePath: string;
  name: string;
  price: number;
  minQuantity: number;
  soldAmount: number;
};
const WishlistProducts = ({ wishlist, setIsModalOpen }: Props) => {
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
              src={w.imagePath}
              width={280}
              height={280}
              alt={w.name}
              className="object-cover"
            />
            <div className="p-[0.75rem]">
              <p className="font-inter font-bold">{w.name.toUpperCase()}</p>
              <p className="font-inter text-neutral-60 text-[0.875rem] truncate-two">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                numquam reprehenderit et, earum deleniti nostrum tempore enim
                nihil corporis optio!
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
