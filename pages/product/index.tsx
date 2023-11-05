import Head from "next/head";
import Navbar from "@/components/common/navbar";
import Heading from "@/components/home/heading";
import Footer from "@/components/common/footer";
import FloatingWAIcon from "@/components/common/floating-wa";
import CategoryScroll from "@/components/common/category-scroll";
import { Select, Pagination, Accordion, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatToRupiah } from "@/utils/format-to-rupiah";
import { IconAdjustments } from "@tabler/icons-react";

const dummyData = [
  {
    id: 1,
    name: "Jam",
    subcategories: [
      {
        id: 1,
        name: "Jam Dinding",
      },
      {
        id: 2,
        name: "Jam Meja",
      },
      {
        id: 3,
        name: "Jam Tangan",
      },
    ],
  },
  {
    id: 2,
    name: "Payung",
    subcategories: [
      {
        id: 1,
        name: "Payung Golf",
      },
      {
        id: 2,
        name: "Payung Lipat",
      },
      {
        id: 3,
        name: "Payung Standard",
      },
    ],
  },
  {
    id: 3,
    name: "Pakaian",
    subcategories: [
      {
        id: 1,
        name: "Kaos",
      },
      {
        id: 2,
        name: "Kaos dan kerah",
      },
      {
        id: 3,
        name: "Kemeja",
      },
    ],
  },
];

const dummyProducts = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  imagePath: "/dummy/produk.png",
  name: "BANUM",
  price: 120000,
  minQuantity: 10,
  soldAmount: 200,
}));

export default function Products() {
  const [sortFilter, setSortFilter] = useState<string | null>("Rekomendasi");
  const [activePage, setActivePage] = useState(1);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Head>
        <title>Semua produk</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem]">
          <Heading text="Semua produk" />
          <CategoryScroll />
          {/* Filter and pagination */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-[4rem] gap-[1rem]">
            <div className="flex items-center gap-[1rem]">
              <p className="font-inter font-bold">Urutkan: </p>
              <Select
                data={["Rekomendasi", "Harga Terendah", "Harga Tertinggi"]}
                value={sortFilter}
                onChange={setSortFilter}
                styles={{
                  input: {
                    borderRadius: "100px",
                  },
                }}
              />
            </div>
            <Pagination
              value={activePage}
              onChange={setActivePage}
              total={10}
              withControls={false}
              styles={{
                control: {
                  border: "none",
                },
              }}
            />
          </div>
          {/* Sidebar and products >> DESKTOP ONLY */}
          <div className="hidden items-start gap-[1rem] mt-[2rem] relative hidden lg:flex">
            {/* Sidebar */}
            <div className="w-[10rem] sticky top-[10rem] flex-shrink-0">
              <p className="font-inter font-bold text-neutral-100">
                Semua Kategori
              </p>
              <hr className="text-neutral-20 mt-[0.5rem]" />
              <Accordion
                styles={{
                  control: {
                    border: "none",
                  },
                  item: {
                    border: "none",
                  },
                }}
              >
                {dummyData.map((d) => {
                  return (
                    <Accordion.Item key={d.id} value={d.name}>
                      <Accordion.Control>
                        <p className="font-bold font-inter text-neutral-100">
                          {d.name}
                        </p>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="flex flex-col gap-[0.5rem]">
                          {d.subcategories.map((s) => {
                            return (
                              <Link
                                href="/product"
                                key={s.id}
                                className="font-inter text-neutral-100 transition-all hover:pl-[0.5rem]"
                              >
                                {s.name}
                              </Link>
                            );
                          })}
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
            {/* Products */}
            <div className="grid grid-cols-4 gap-[1rem]">
              {dummyProducts.map((p) => {
                return (
                  <div
                    key={p.id}
                    className="bg-neutral-10 transition-all cursor-pointer hover:scale-[1.05] relative"
                  >
                    <Image
                      src={p.imagePath}
                      width={280}
                      height={280}
                      alt={p.name}
                      className="object-cover"
                    />
                    <div className="p-[0.75rem]">
                      <p className="font-inter font-bold">
                        {p.name.toUpperCase()}
                      </p>
                      <p className="font-inter text-neutral-60 text-[0.875rem] truncate-two">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsum numquam reprehenderit et, earum deleniti
                        nostrum tempore enim nihil corporis optio!
                      </p>
                      <div className="flex justify-between items-center mt-[0.5rem]">
                        <p className="font-inter font-bold text-neutral-100 text-[0.9rem] lg:text-[1rem]">
                          {formatToRupiah(p.price)}
                        </p>
                        <button className="transition-all hover:scale-[1.2]">
                          <Image
                            src="/assets/heart.svg"
                            width={16}
                            height={16}
                            alt="Add to wishlist"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Products >> MOBILE ONLY */}
          <div className="relative lg:hidden mt-[2rem]">
            <button
              className="sticky top-[8.5rem] z-[10] bg-gray p-[0.5rem] rounded-full shadow-md transition-all hover:scale-[1.2]"
              onClick={() => open()}
            >
              <IconAdjustments />
            </button>
            <div className="grid grid-cols-2 gap-[0.5rem] mt-[1rem]">
              {dummyProducts.map((p) => {
                return (
                  <div
                    key={p.id}
                    className="bg-neutral-10 transition-all cursor-pointer hover:scale-[1.05] relative"
                  >
                    <Image
                      src={p.imagePath}
                      width={280}
                      height={280}
                      alt={p.name}
                      className="object-cover"
                    />
                    <div className="p-[0.75rem]">
                      <p className="font-inter font-bold">
                        {p.name.toUpperCase()}
                      </p>
                      <p className="font-inter text-neutral-60 text-[0.875rem] truncate-two">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsum numquam reprehenderit et, earum deleniti
                        nostrum tempore enim nihil corporis optio!
                      </p>
                      <div className="flex justify-between items-center mt-[0.5rem]">
                        <p className="font-inter font-bold text-neutral-100 text-[0.8rem] lg:text-[1rem]">
                          {formatToRupiah(p.price)}
                        </p>
                        <button className="transition-all hover:scale-[1.2]">
                          <Image
                            src="/assets/heart.svg"
                            width={16}
                            height={16}
                            alt="Add to wishlist"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <Drawer
                opened={opened}
                onClose={close}
                position="bottom"
                size="80%"
              >
                <div className="flex flex-col">
                  <p className="font-inter font-bold text-neutral-100">
                    Semua Kategori
                  </p>
                  <hr className="text-neutral-20 mt-[0.5rem]" />
                  <Accordion
                    styles={{
                      control: {
                        border: "none",
                      },
                      item: {
                        border: "none",
                      },
                    }}
                  >
                    {dummyData.map((d) => {
                      return (
                        <Accordion.Item key={d.id} value={d.name}>
                          <Accordion.Control>
                            <p className="font-bold font-inter text-neutral-100">
                              {d.name}
                            </p>
                          </Accordion.Control>
                          <Accordion.Panel>
                            <div className="flex flex-col gap-[0.5rem]">
                              {d.subcategories.map((s) => {
                                return (
                                  <Link
                                    href="/product"
                                    key={s.id}
                                    className="font-inter text-neutral-100 transition-all hover:pl-[0.5rem]"
                                  >
                                    {s.name}
                                  </Link>
                                );
                              })}
                            </div>
                          </Accordion.Panel>
                        </Accordion.Item>
                      );
                    })}
                  </Accordion>
                </div>
              </Drawer>
            </div>
          </div>
          {/* Bottom pagination */}
          <div className="flex justify-start lg:justify-end mt-[2rem]">
            <Pagination
              value={activePage}
              onChange={setActivePage}
              total={10}
              withControls={false}
              styles={{
                control: {
                  border: "none",
                },
              }}
            />
          </div>
        </div>
        <FloatingWAIcon />
        <Footer />
      </div>
    </>
  );
}
