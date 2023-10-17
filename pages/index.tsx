import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import Heading from "@/components/home/heading";
import Subheading from "@/components/home/subheading";
import Link from "next/link";
import Event from "@/components/home/event";
import Form from "@/components/home/form";

import useCategories from "@/hooks/use-categories";

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
    name: "Others",
  },
];

export default function Home() {
  const { categories, isLoading: isCategoryLoading } = useCategories();

  return (
    <div className="relative">
      <div className="max-w-[1200px] mx-auto p-[1.5rem]">
        {/* Banner image */}
        <Image src="/dummy/banner.png" width={1200} height={400} alt="" />
        {/* Kategori Pilihan */}
        <div className="mt-[2rem] lg:mt-[5rem]">
          <Heading text="Kategori Pilihan" />
          <Subheading text="Temukan produk pilihan Anda dengan harga terjangkau" />
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
        </div>
        {/* Events */}
        <div className="mt-[2rem] lg:mt-[5rem]">
          <Heading text="Events" />
          <Subheading text="Temukan produk kit sesuai dengan kebutuhanmu" />
          <div className="grid event-grid-mobile gap-[1rem] mt-[2rem] lg:event-grid-desktop">
            {events.slice(0, 5).map((e, i) => {
              switch (i) {
                case 0:
                  return (
                    <div
                      key={e.id}
                      className="relative grid-main rounded-xl overflow-hidden transition-all cursor-pointer hover:scale-[1.05]"
                    >
                      <Event imagePath={e.imagePath} name={e.name} />
                    </div>
                  );
                case 1:
                  return (
                    <div
                      key={e.id}
                      className="relative grid-ev1 rounded-xl overflow-hidden transition-all cursor-pointer hover:scale-[1.05]"
                    >
                      <Event imagePath={e.imagePath} name={e.name} />
                    </div>
                  );
                case 2:
                  return (
                    <div
                      key={e.id}
                      className="relative grid-ev2 rounded-xl overflow-hidden transition-all cursor-pointer hover:scale-[1.05]"
                    >
                      <Event imagePath={e.imagePath} name={e.name} />
                    </div>
                  );
                case 3:
                  return (
                    <div
                      key={e.id}
                      className="relative grid-ev3 rounded-xl overflow-hidden transition-all cursor-pointer hover:scale-[1.05]"
                    >
                      <Event imagePath={e.imagePath} name={e.name} />
                    </div>
                  );
                default:
                  return (
                    <div
                      key={e.id}
                      className="relative grid-ev4 rounded-xl overflow-hidden transition-all cursor-pointer hover:scale-[1.05]"
                    >
                      <Event imagePath={e.imagePath} name={e.name} />
                    </div>
                  );
              }
            })}
          </div>
        </div>
      </div>
      {/* Contact field */}
      <Form />
      {/* Footer */}
      <div className="bg-primary-pressed py-[2.5rem]">
        <div className="max-w-[1200px] mx-auto px-[1.5rem]">
          <div className="flex flex-col gap-[2rem] lg:flex-row lg:justify-between">
            <div className="lg:w-[50%]">
              <Image
                src="/assets/logo-impresi.png"
                width={157}
                height={39}
                alt="Impresi"
              />
              <p className="font-inter text-neutral-10 mt-[1rem]">
                Your natural candle made for your home and for your wellness.
              </p>
              <div className="hidden lg:flex lg:gap-[1rem] lg:items-center lg:mt-[2rem]">
                <Link href="/">
                  <Image
                    src="/assets/icon-facebook.png"
                    width={32}
                    height={32}
                    alt="Facebook"
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/assets/icon-twitter.png"
                    width={32}
                    height={32}
                    alt="Twitter"
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/assets/icon-linkedin.png"
                    width={32}
                    height={32}
                    alt="LinkedIn"
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/assets/icon-dribbble.png"
                    width={32}
                    height={32}
                    alt="Dribbble"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:w-[50%]">
              <div className="flex justify-between">
                <div>
                  <p className="font-inter font-bold text-neutral-10">Sell</p>
                  <div className="flex flex-col items-start mt-[1rem] gap-[0.75rem]">
                    <Link href="/" className="font-inter text-neutral-10">
                      Products
                    </Link>
                    <Link href="/" className="font-inter text-neutral-10">
                      Events
                    </Link>
                    <Link href="/" className="font-inter text-neutral-10">
                      Wishlist
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="font-inter font-bold text-neutral-10">Info</p>
                  <div className="flex flex-col items-start mt-[1rem] gap-[0.75rem]">
                    <Link href="/" className="font-inter text-neutral-10">
                      Kontak Kami
                    </Link>
                    <Link href="/" className="font-inter text-neutral-10">
                      Kebijakan Privasi
                    </Link>
                    <Link href="/" className="font-inter text-neutral-10">
                      Syarat & Ketentuan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[1rem] items-center mt-[0.5rem] lg:hidden">
              <Link href="/">
                <Image
                  src="/assets/icon-facebook.png"
                  width={32}
                  height={32}
                  alt="Facebook"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/icon-twitter.png"
                  width={32}
                  height={32}
                  alt="Twitter"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/icon-linkedin.png"
                  width={32}
                  height={32}
                  alt="LinkedIn"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/icon-dribbble.png"
                  width={32}
                  height={32}
                  alt="Dribbble"
                />
              </Link>
            </div>
          </div>
          <p className="font-inter text-neutral-10 mt-[1.25rem] lg:mt-[2.5rem]">
            &copy; 2023 PT Mencari Cinta Sejati
          </p>
        </div>
      </div>
      {/* Floating WA Icon */}
      <a
        href="https:/wa.me"
        target="_blank"
        rel="noreferrer"
        className="fixed right-[1.5rem] bottom-[1.5rem] lg:right-[3.75rem] lg:bottom-[3.75rem]"
      >
        <Image
          src="/assets/icon-wa.png"
          width={72}
          height={72}
          className="w-[36px] h-[36px] lg:w-[72px] lg:h-[72px]"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}
