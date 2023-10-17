import useCategories from "@/hooks/use-categories";
import ScrollContainer from "react-indiana-drag-scroll";
import Heading from "./heading";
import Subheading from "./subheading";
import Image from "next/image";
import { Skeleton } from "@mantine/core";

export default function Categories() {
  const { categories, isLoading } = useCategories();

  return (
    <div className="mt-[2rem] lg:mt-[5rem]">
      <Heading text="Kategori Pilihan" />
      <Subheading text="Temukan produk pilihan Anda dengan harga terjangkau" />
      <Skeleton height={200} visible={isLoading}>
        <ScrollContainer className="flex flex-row gap-[1rem] lg:gap-[1.25rem] mt-[2rem]">
          {categories?.categories.map((c) => {
            return (
              <div
                key={c.id}
                className="cursor-pointer flex flex-col gap-[0.75rem] items-center flex-shrink-0 relative transition-all hover:scale-[1.05]"
              >
                {c.isFeatured && (
                  <>
                    <div className="bg-red px-[0.25rem] h-[22px] flex items-center absolute left-[-6px] top-[12px]">
                      <p className="font-inter text-bold text-[0.75rem] text-neutral-10">
                        Terlaris
                      </p>
                    </div>
                    <div className="bg-red clip-triangle absolute left-[-6px] top-[34px]" />
                  </>
                )}
                <Image
                  src={c.imagePath}
                  width={150}
                  height={150}
                  alt={c.name}
                  className="object-cover rounded-xl"
                />
                <p className="font-inter font-bold text-neutral-100 text-[1rem]">
                  {c.name}
                </p>
              </div>
            );
          })}
        </ScrollContainer>
      </Skeleton>
    </div>
  );
}
