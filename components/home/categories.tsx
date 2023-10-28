import useCategories from "@/hooks/use-categories";
import Heading from "./heading";
import Subheading from "./subheading";
import Image from "next/image";

export default function Categories() {
  const { categories } = useCategories();

  return (
    <div className="mt-[2rem] lg:mt-[5rem]">
      <Heading text="Kategori Pilihan" />
      <Subheading text="Temukan produk pilihan Anda dengan harga terjangkau" />
      <div className="grid grid-cols-2 gap-[1rem] lg:grid-cols-4">
        {categories?.categories?.slice(0, 8).map((c) => {
          return (
            <div
              key={c.id}
              className="cursor-pointer flex flex-col gap-[0.75rem] items-center flex-shrink-0 relative transition-all hover:scale-[1.05] hover:shadow-md p-[1rem]"
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
                width={600}
                height={600}
                alt={c.name}
                className="object-cover rounded-xl"
              />
              <p className="font-inter font-bold text-neutral-100 text-[1rem]">
                {c.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
