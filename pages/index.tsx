import Head from "next/head";
import Image from "next/image";
import Heading from "@/components/home/heading";
import Subheading from "@/components/home/subheading";
import Link from "next/link";
import Event from "@/components/home/event";
import Form from "@/components/home/form";
import Categories from "@/components/home/categories";
import Banner from "@/components/home/banner";
import ScrollContainer from "react-indiana-drag-scroll";
import { formatToRupiah } from "@/utils/format-to-rupiah";
import Navbar from "@/components/home/navbar";
import useCategories from "@/hooks/use-categories";
import Footer from "@/components/home/footer";

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

const dummyProducts = [
  {
    id: 1,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci A",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 2,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci B",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 3,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci C",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 5,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci D",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 6,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci E",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 7,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci F",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 8,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci G",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 4,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci H",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
];

export default function Home() {
  const { categories } = useCategories();

  return (
    <>
      <Head>
        <title>Impresi - Souvenir & Gifts</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem]">
          {/* Banner image */}
          <Banner />
          {/* Kategori Pilihan */}
          <Categories />
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
          {/* Products */}
          <div className="mt-[2rem] lg:mt-[5rem] mb-[2rem] lg:mb-[5rem]">
            <Heading text="Produk Best Selling Tahun Ini" />
            <ScrollContainer className="flex flex-row gap-[1rem] lg:gap-[1.25rem] mt-[2rem] px-[0.5rem] pb-[1rem]">
              {dummyProducts.map((p) => {
                return (
                  <div
                    key={p.id}
                    className="shadow-md rounded-xl bg-neutral-10 w-[280px] flex-shrink-0 transition-all cursor-pointer hover:scale-[1.05] relative"
                  >
                    <Image
                      src={p.imagePath}
                      width={280}
                      height={280}
                      alt={p.name}
                      className="object-cover"
                    />
                    <div className="p-[0.75rem]">
                      <p className="h-[42px] font-inter text-neutral-100 text-[0.875rem]">
                        {p.name}
                      </p>
                      <p className="font-inter text-neutral-100">
                        <span className="font-bold text-[1.125rem]">
                          {formatToRupiah(p.price)}
                        </span>
                        <span className="text-neutral-60">
                          /{p.minQuantity} pcs
                        </span>
                      </p>
                      <p className="font-inter text-neutral-60">
                        {p.soldAmount}+ terjual
                      </p>
                    </div>
                    <div className="absolute w-[2rem] h-[2rem] bg-neutral-10 rounded-full top-[1rem] right-[1rem] flex items-center justify-center">
                      <Image
                        src="/assets/heart.svg"
                        height={16}
                        width={16}
                        alt="Heart"
                        className="transition-all hover:scale-[1.2]"
                      />
                    </div>
                  </div>
                );
              })}
            </ScrollContainer>
          </div>
        </div>
        {/* Contact field */}
        <Form />
        {/* Footer */}
        <Footer />
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
    </>
  );
}
