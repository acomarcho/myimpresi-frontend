import Image from "next/image";
import { useEffect, useState } from "react";
import { ProductWithImages } from "@/types/responses/product";
import { useRouter } from "next/router";

type Props = {
  product: ProductWithImages;
};

const ImageSelector = ({ product }: Props) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const router = useRouter();
  useEffect(() => {
    setActiveImageIndex(0);
  }, [router]);

  return (
    <>
      <Image
        src={product.productImage[activeImageIndex]?.path}
        width={0}
        height={0}
        sizes="100%"
        className="w-full h-full object-cover"
        alt={product.name}
      />
      <div className="grid grid-cols-4 gap-[1rem] mt-[1rem]">
        {product.productImage
          .filter((_, idx) => idx !== activeImageIndex)
          .map((img) => {
            return (
              <button
                key={img.id}
                className="transition-all hover:opacity-[0.8]"
                onClick={() =>
                  setActiveImageIndex(
                    product.productImage.findIndex((v) => v.id === img.id)
                  )
                }
              >
                <Image
                  src={img.path}
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
