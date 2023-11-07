import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

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

const ImageCarousel = ({ product }: Props) => {
  return (
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
  );
};

export default ImageCarousel;
