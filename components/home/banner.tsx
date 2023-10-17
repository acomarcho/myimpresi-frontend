import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import useBanners from "@/hooks/use-banners";
import Image from "next/image";

export default function Banner() {
  const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  const { banners, isLoading } = useBanners();

  return (
    <Carousel
      slideSize="100%"
      withControls={false}
      loop
      plugins={[autoplay.current]}
    >
      {(!banners || !banners.banners || isLoading) && (
        <Carousel.Slide>
          <Image src="/dummy/banner.jpg" width={1200} height={400} alt="" />
        </Carousel.Slide>
      )}
      {banners?.banners.map((b) => {
        return (
          <Carousel.Slide key={b.id}>
            <Image src={b.imagePath} width={1200} height={400} alt="" />
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
}
