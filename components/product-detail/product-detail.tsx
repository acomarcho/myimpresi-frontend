import { formatToRupiah } from "@/utils/format-to-rupiah";
import { IconHeart } from "@tabler/icons-react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useState } from "react";

type Props = {
  product: Product;
};

type Product = {
  name: string;
  subtitle: string;
  price: number;
  soldAmount: number;
  colors: string[];
  material: string;
  size: string;
  minimalOrder: number;
  images: string[];
  description: string;
};

const ProductDetail = ({ product }: Props) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="grid grid-cols-1 gap-[0rem] lg:gap-[2rem] lg:grid-cols-2">
      <div>
        <div className="block lg:hidden">
          <Carousel swipeable emulateTouch infiniteLoop showThumbs={false}>
            {product.images.map((img) => {
              return (
                <div key={img} className="w-full cursor-pointer">
                  <Image
                    src={img}
                    width={0}
                    height={0}
                    sizes="100%"
                    className="w-full h-full object-cover"
                    alt={product.name}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="hidden lg:block">
          <Image
            src={product.images[activeImageIndex]}
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full object-cover"
            alt={product.name}
          />
          <div className="grid grid-cols-4 gap-[1rem] mt-[1rem]">
            {product.images
              .filter((_, idx) => idx !== activeImageIndex)
              .map((img) => {
                return (
                  <button
                    key={img}
                    className="transition-all hover:opacity-[0.8]"
                    onClick={() =>
                      setActiveImageIndex(
                        product.images.findIndex((v) => v === img)
                      )
                    }
                  >
                    <Image
                      src={img}
                      width={0}
                      height={0}
                      sizes="100%"
                      className="w-full h-full object-cover"
                      alt={product.name}
                    />
                  </button>
                );
              })}
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-inter font-bold text-[2rem] text-neutral-100">
          {product.name}
        </h1>
        <p className="font-inter text-[1rem] text-neutral-60">
          {product.subtitle}
        </p>
        <p className="font-inter text-[1.25rem] text-neutral-100 font-bold mt-[1rem]">
          {formatToRupiah(product.price)}
        </p>
        <p className="font-inter text-[1rem] text-neutral-60">
          {product.soldAmount} membeli produk ini
        </p>
        <hr className="text-neutral-20 mt-[0.5rem]" />
        <p className="font-inter text-[1rem] text-neutral-60 font-bold mt-[0.5rem]">
          Warna:
        </p>
        <div className="flex gap-[0.5rem] flex-wrap">
          {product.colors.map((c) => {
            return (
              <div
                className="w-[30px] h-[30px] rounded-full shadow-md"
                style={{
                  backgroundColor: c,
                }}
                key={c}
              />
            );
          })}
        </div>
        <hr className="text-neutral-20 mt-[1rem]" />
        <p className="font-inter text-[1rem] text-neutral-60 font-bold mt-[0.5rem]">
          Bahan:
        </p>
        <p className="font-inter text-[1rem] text-neutral-60 mt-[0.5rem]">
          {product.material}
        </p>
        <hr className="text-neutral-20 mt-[1rem]" />
        <p className="font-inter text-[1rem] text-neutral-60 font-bold mt-[0.5rem]">
          Ukuran:
        </p>
        <p className="font-inter text-[1rem] text-neutral-60 mt-[0.5rem]">
          {product.size}
        </p>
        <hr className="text-neutral-20 mt-[1rem]" />
        <p className="font-inter text-[1rem] text-neutral-60 font-bold mt-[0.5rem]">
          Minimal order hanya:
        </p>
        <p className="font-inter text-[1rem] text-neutral-60 mt-[0.5rem]">
          {product.minimalOrder} pcs
        </p>
        <hr className="text-neutral-20 mt-[1rem]" />
        <p className="font-inter text-[1rem] text-neutral-60 mt-[0.5rem]">
          {product.description}
        </p>
        <div className="fixed bg-neutral-10 bottom-0 left-0 w-screen grid grid-cols-[auto_1fr] p-[1.5rem] gap-[1rem] z-[20] lg:static lg:w-full">
          <button className="p-[1rem] rounded-full border-[1px] border-neutral-20 transition-all hover:scale-[1.1]">
            <IconHeart />
          </button>
          <button className="p-[0.75rem] bg-primary-default font-inter font-bold text-neutral-10 rounded-full transition-all hover:opacity-[0.9]">
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
