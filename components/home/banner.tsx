import useBanners from "@/hooks/use-banners";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner() {
  const { banners } = useBanners();

  return (
    <Swiper
      modules={[Scrollbar, Navigation, Pagination, Autoplay]}
      scrollbar={{ hide: true }}
      loop={true}
      navigation={true}
      className="mySwiper"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {banners?.banners.map((b) => {
        return (
          <SwiperSlide key={b.id}>
            <Image
              key={b.id}
              src={b.imagePath}
              width={1200}
              height={400}
              alt=""
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
