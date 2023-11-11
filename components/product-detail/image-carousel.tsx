import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { ProductWithImages } from "@/types/responses/product";

type Props = {
  product: ProductWithImages;
};

const ImageCarousel = ({ product }: Props) => {
  return (
    <Carousel swipeable emulateTouch infiniteLoop showThumbs={false}>
      {product.productImage.map((img) => {
        return (
          <div key={img.id} className="w-full cursor-pointer">
            <Image
              src={img.path}
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
  );
};

export default ImageCarousel;
