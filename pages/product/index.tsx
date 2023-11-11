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
import useProducts from "@/hooks/use-products";
import { FindProductsFilter } from "@/types/requests";

export default function Products() {
  const [filter, setFilter] = useState<FindProductsFilter>({
    page: 1,
    pageSize: 4,
    sort: "RECOMMENDED",
  });
  const { categories } = useCategories();
  const { products, pagination } = useProducts(filter);

  const changeSortFilter = (value: string) => {
    setFilter((f) => {
      return {
        ...f,
        sort: value,
      };
    });
  };

  const changeActivePage = (page: number) => {
    setFilter((f) => {
      return {
        ...f,
        page: page,
      };
    });
  };

  const pageCount = pagination?.totalPages ?? 1;

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
            filter={filter}
            changeSortFilter={changeSortFilter}
            changeActivePage={changeActivePage}
            pageCount={pageCount}
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
            filter={filter}
            changeActivePage={changeActivePage}
            pageCount={pageCount}
          />
        </div>
        <FloatingWAIcon />
        <Footer />
      </div>
    </>
  );
}
