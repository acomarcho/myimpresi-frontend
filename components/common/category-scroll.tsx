import useCategories from "@/hooks/use-categories";
import ScrollContainer from "react-indiana-drag-scroll";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useRef } from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

const CategoryScroll = () => {
  const { categories, isLoading } = useCategories();
  const scrollContainer = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <button
        onClick={() => {
          scrollContainer.current?.scrollTo({
            left:
              scrollContainer.current?.scrollLeft -
              2 * scrollContainer.current?.children[0].clientWidth,
            behavior: "smooth",
          });
        }}
        className="absolute left-[-1rem] top-[50%] translate-y-[-50%] z-[10] bg-gray p-[1rem] rounded-full transition-all hover:scale-[1.2] shadow-md"
      >
        <IconChevronLeft />
      </button>
      <ScrollContainer
        className="flex flex-row gap-[1rem] lg:gap-[1.25rem] mt-[2rem] px-[0.5rem]"
        innerRef={scrollContainer}
      >
        {isLoading && <Skeleton containerClassName="flex-1" count={5} />}
        {!isLoading &&
          categories?.categories?.map((c) => {
            return (
              <Link
                href={`/product?categoryId=${c.id}`}
                key={c.id}
                className="cursor-pointer flex flex-col w-[50%] lg:w-[25%] gap-[0.75rem] items-center flex-shrink-0 relative transition-all hover:scale-[1.02] block"
              >
                <Image
                  src={c.imagePath}
                  width={0}
                  height={0}
                  sizes="100%"
                  alt={c.name}
                  className="w-full object-cover"
                />
                <p className="font-inter font-bold text-neutral-100 text-[1rem]">
                  {c.name}
                </p>
              </Link>
            );
          })}
      </ScrollContainer>
      <button
        onClick={() => {
          scrollContainer.current?.scrollTo({
            left:
              scrollContainer.current?.scrollLeft +
              2 * scrollContainer.current?.children[0].clientWidth,
            behavior: "smooth",
          });
        }}
        className="absolute right-[-1rem] top-[50%] translate-y-[-50%] z-[10] bg-gray p-[1rem] rounded-full transition-all hover:scale-[1.2] shadow-md"
      >
        <IconChevronRight />
      </button>
    </div>
  );
};

export default CategoryScroll;
