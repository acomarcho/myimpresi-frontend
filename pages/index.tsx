import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import Heading from "@/components/home/heading";
import Subheading from "@/components/home/subheading";

const dummySelectedCategories = [
  {
    id: 1,
    imagePath: "/dummy/clock.png",
    name: "Jam",
    featured: false,
  },
  {
    id: 2,
    imagePath: "/dummy/clock.png",
    name: "Payung",
    featured: false,
  },
  {
    id: 3,
    imagePath: "/dummy/mug.png",
    name: "Drinkwater",
    featured: true,
  },
  {
    id: 4,
    imagePath: "/dummy/clock.png",
    name: "Pakaian",
    featured: false,
  },
  {
    id: 5,
    imagePath: "/dummy/clock.png",
    name: "Stationary",
    featured: false,
  },
  {
    id: 6,
    imagePath: "/dummy/clock.png",
    name: "Office Kit",
    featured: false,
  },
  {
    id: 7,
    imagePath: "/dummy/clock.png",
    name: "Others",
    featured: false,
  },
];

const events = [
  {
    id: 2,
    imagePath: "/dummy/ev-2.png",
    name: "Seminar Kit",
  },
  {
    id: 1,
    imagePath: "/dummy/ev-1.png",
    name: "Pameran Kit",
  },
  {
    id: 3,
    imagePath: "/dummy/ev-3.png",
    name: "Rapat Formal",
  },
  {
    id: 4,
    imagePath: "/dummy/ev-4.png",
    name: "Corporate Starterpack",
  },
  {
    id: 5,
    imagePath: "/dummy/ev-5.png",
    name: "Other",
  },
];

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto p-[1rem]">
      {/* Banner image */}
      <Image src="/dummy/banner.png" width={1200} height={400} alt="" />
      {/* Kategori Pilihan */}
      <div className="mt-[2rem] lg:mt-[5rem]">
        <Heading text="Kategori Pilihan" />
        <Subheading text="Temukan produk pilihan Anda dengan harga terjangkau" />
        <ScrollContainer className="flex flex-row gap-[1.25rem] mt-[2rem]">
          {dummySelectedCategories.map((c) => {
            return (
              <div
                key={c.id}
                className="flex flex-col gap-[0.75rem] items-center flex-shrink-0 relative"
              >
                {c.featured && (
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
      </div>
      {/* Events */}
      <div className="mt-[2rem] lg:mt-[5rem]">
        <Heading text="Events" />
        <Subheading text="Temukan produk kit sesuai dengan kebutuhanmu" />
        <div className="grid grid-cols-1 auto-rows-[180px] gap-[1rem] mt-[2rem] lg:event-grid">
          {events.map((e, i) => {
            console.log(i);
            switch (i) {
              case 0:
                return (
                  <div
                    key={e.id}
                    className="relative lg:grid-main rounded-xl overflow-hidden"
                  >
                    <Image
                      src={e.imagePath}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-full h-full object-cover"
                      alt={e.name}
                    />
                    <p className="font-inter font-bold text-[1rem] lg:text-[1.25rem] text-neutral-10 absolute left-[1.5rem] bottom-[1.5rem]">
                      {e.name}
                    </p>
                  </div>
                );
              case 1:
                return (
                  <div
                    key={e.id}
                    className="relative lg:grid-ev1 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={e.imagePath}
                      width="0"
                      height="0"
                      sizes="33vw"
                      className="w-full h-full object-cover"
                      alt={e.name}
                    />
                    <p className="font-inter font-bold text-[1rem] lg:text-[1.25rem] text-neutral-10 absolute left-[1.5rem] bottom-[1.5rem]">
                      {e.name}
                    </p>
                  </div>
                );
              case 2:
                return (
                  <div
                    key={e.id}
                    className="relative lg:grid-ev2 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={e.imagePath}
                      width="0"
                      height="0"
                      sizes="33vw"
                      className="w-full h-full object-cover"
                      alt={e.name}
                    />
                    <p className="font-inter font-bold text-[1rem] lg:text-[1.25rem] text-neutral-10 absolute left-[1.5rem] bottom-[1.5rem]">
                      {e.name}
                    </p>
                  </div>
                );
              case 3:
                return (
                  <div
                    key={e.id}
                    className="relative lg:grid-ev3 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={e.imagePath}
                      width="0"
                      height="0"
                      sizes="33vw"
                      className="w-full h-full object-cover"
                      alt={e.name}
                    />
                    <p className="font-inter font-bold text-[1rem] lg:text-[1.25rem] text-neutral-10 absolute left-[1.5rem] bottom-[1.5rem]">
                      {e.name}
                    </p>
                  </div>
                );
              default:
                return (
                  <div
                    key={e.id}
                    className="relative lg:grid-ev4 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={e.imagePath}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-full h-full object-cover"
                      alt={e.name}
                    />
                    <p className="font-inter font-bold text-[1rem] lg:text-[1.25rem] text-neutral-10 absolute left-[1.5rem] bottom-[1.5rem]">
                      {e.name}
                    </p>
                  </div>
                );
            }
          })}
        </div>
      </div>
    </div>
  );
}
