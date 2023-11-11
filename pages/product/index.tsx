import Head from "next/head";
import Navbar from "@/components/common/navbar";
import Heading from "@/components/home/heading";
import Footer from "@/components/common/footer";
import FloatingWAIcon from "@/components/common/floating-wa";
import CategoryScroll from "@/components/common/category-scroll";
import FilterAndPagination from "@/components/products/filter-and-pagination";
import DesktopProducts from "@/components/products/desktop-products";
import MobileProducts from "@/components/products/mobile-products";
import BottomPagination from "@/components/products/bottom-pagination";

import { useState } from "react";
import useCategories from "@/hooks/use-categories";

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
  const { categories } = useCategories();

  return (
    <>
      <Head>
        <title>Semua Produk</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem]">
          <Heading text="Semua Produk" />
          <CategoryScroll />
          <FilterAndPagination
            sortFilter={sortFilter}
            setSortFilter={setSortFilter}
            activePage={activePage}
            setActivePage={setActivePage}
          />
          <DesktopProducts
            filterData={categories?.categories}
            products={dummyProducts}
          />
          <MobileProducts
            filterData={categories?.categories}
            products={dummyProducts}
          />
          <BottomPagination
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
        <FloatingWAIcon />
        <Footer />
      </div>
    </>
  );
}
