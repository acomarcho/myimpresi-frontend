import useBanners from "@/hooks/use-banners";
import { Skeleton } from "@mantine/core";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner() {
  const { banners, isLoading, error } = useBanners();

  const shouldShowSkeleton = !banners || isLoading || !!error;

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
      {shouldShowSkeleton && (
        <SwiperSlide>
          <Skeleton>
            <Image src="/dummy/banner.jpg" width={1200} height={400} alt="" />
          </Skeleton>
        </SwiperSlide>
      )}
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
