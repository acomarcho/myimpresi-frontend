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

import { Autocomplete, Menu } from "@mantine/core";
import { IconSearch, IconCaretDownFilled } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <div className="w-screen fixed top-0 left-0 z-[100] bg-white shadow-md">
      <div className="max-w-[1200px] mx-auto p-[1.5rem]">
        <div className="grid grid-cols-[auto_1fr_auto] gap-[2rem] items-center">
          <Link href="/">
            <Image
              src="/assets/logo-impresi-blue.png"
              width={132}
              height={33}
              alt="Logo MyImpresi"
            />
          </Link>
          <Autocomplete
            leftSection={<IconSearch size={16} stroke={4} />}
            styles={{
              section: {
                paddingLeft: "1rem",
              },
              input: {
                borderRadius: "100px",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                height: "auto",
                paddingLeft: "2.75rem",
                fontFamily: "var(--font-inter)",
                color: "var(--neutral-100)",
                fontSize: "1rem",
              },
            }}
            placeholder="Mau cari produk apa...?"
          />
          <Link href="/" className="transition-all hover:scale-[1.05]">
            <Image src="/assets/heart.svg" width={28} height={32} alt="Love" />
          </Link>
        </div>
        <div className="flex gap-[2rem] mt-[1.5rem]">
          <Link href="/" className="font-inter text-neutral-60 font-bold">
            Home
          </Link>
          <Menu shadow="md" width={100}>
            <Menu.Target>
              <p className="font-inter text-neutral-60 font-bold cursor-pointer flex gap-[0.25rem] items-center">
                Product <IconCaretDownFilled />
              </p>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>
                <Link href="/" className="font-inter text-neutral-60 font-bold">
                  Jam
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/" className="font-inter text-neutral-60 font-bold">
                  Pakaian
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/" className="font-inter text-neutral-60 font-bold">
                  Payung
                </Link>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Menu shadow="md" width={100}>
            <Menu.Target>
              <p className="font-inter text-neutral-60 font-bold cursor-pointer flex gap-[0.25rem] items-center">
                Events <IconCaretDownFilled />
              </p>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>
                <Link href="/" className="font-inter text-neutral-60 font-bold">
                  Seminar Kit
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/" className="font-inter text-neutral-60 font-bold">
                  Pameran Kit
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/" className="font-inter text-neutral-60 font-bold">
                  Rapat Formal
                </Link>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
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
    </>
  );
}
