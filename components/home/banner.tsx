import Slider from "react-slick";
import useBanners from "@/hooks/use-banners";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const { banners, isLoading } = useBanners();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {(!banners || !banners.banners || isLoading) && (
        <Image src="/dummy/banner.jpg" width={1200} height={400} alt="" />
      )}
      {banners?.banners.map((b) => {
        return (
          <Image
            key={b.id}
            src={b.imagePath}
            width={1200}
            height={400}
            alt=""
          />
        );
      })}
    </Slider>
  );
}
