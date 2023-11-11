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

import { useEffect, useState } from "react";
import useCategories from "@/hooks/use-categories";
import useProducts from "@/hooks/use-products";
import { FindProductsFilter } from "@/types/requests";

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
  const [filter, setFilter] = useState<FindProductsFilter>({
    page: 1,
    pageSize: 4,
  });
  const [sortFilter, setSortFilter] = useState<string | null>("Rekomendasi");
  const [activePage, setActivePage] = useState(1);
  const { categories } = useCategories();
  const { products, pagination } = useProducts(filter);

  useEffect(() => {
    setFilter((f) => {
      return {
        ...f,
        page: activePage,
      };
    });
  }, [activePage]);

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
            pageCount={pagination?.totalPages ?? 1}
          />
          <DesktopProducts
            filterData={categories?.categories}
            products={products}
          />
          <MobileProducts
            filterData={categories?.categories}
            products={products}
          />
          <BottomPagination
            activePage={activePage}
            setActivePage={setActivePage}
            pageCount={pagination?.totalPages ?? 1}
          />
        </div>
        <FloatingWAIcon />
        <Footer />
      </div>
    </>
  );
}
