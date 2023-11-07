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

const ImageSelector = ({ product }: Props) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <>
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
    </>
  );
};

export default ImageSelector;
