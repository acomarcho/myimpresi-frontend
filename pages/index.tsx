import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";

const dummySelectedCategories = [
  {
    id: 1,
    imagePath: "/dummy/clock.png",
    name: "Jam",
  },
  {
    id: 2,
    imagePath: "/dummy/clock.png",
    name: "Payung",
  },
  {
    id: 3,
    imagePath: "/dummy/mug.png",
    name: "Drinkwater",
  },
  {
    id: 4,
    imagePath: "/dummy/clock.png",
    name: "Pakaian",
  },
  {
    id: 5,
    imagePath: "/dummy/clock.png",
    name: "Stationary",
  },
  {
    id: 6,
    imagePath: "/dummy/clock.png",
    name: "Office Kit",
  },
  {
    id: 7,
    imagePath: "/dummy/clock.png",
    name: "Others",
  },
];

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto p-[1rem]">
      {/* Banner image */}
      <Image src="/dummy/banner.png" width={1200} height={400} alt="" />
      {/* Kategori Pilihan */}
      <div className="mt-[1rem] lg:mt-[5rem]">
        <h1 className="font-inter font-bold text-neutral-100 text-[1.25rem] lg:text-[1.5rem]">
          Kategori Pilihan
        </h1>
        <p className="font-inter text-neutral-60 text-[1rem] lg:text-[1.125rem]">
          Temukan produk pilihan Anda dengan harga terjangkau
        </p>
        <ScrollContainer className="flex flex-row gap-[1.25rem] mt-[2rem]">
          {dummySelectedCategories.map((c) => {
            return (
              <div
                key={c.id}
                className="flex flex-col gap-[0.75rem] items-center flex-shrink-0"
              >
                <Image
                  src={c.imagePath}
                  width={150}
                  height={150}
                  alt={c.name}
                />
                <p className="font-inter font-bold text-neutral-100 text-[1rem]">
                  {c.name}
                </p>
              </div>
            );
          })}
        </ScrollContainer>
      </div>
    </div>
  );
}
