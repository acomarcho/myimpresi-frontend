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

import { useState, useEffect } from "react";
import useCategories from "@/hooks/use-categories";
import useProducts from "@/hooks/use-products";
import { FindProductsFilter } from "@/types/requests";
import Router from "next/router";
import { useRouter } from "next/router";
import _ from "lodash";

const defaultFilters: FindProductsFilter = {
  page: 1,
  pageSize: 4,
  sort: "RECOMMENDED",
};

export default function Products() {
  const [filter, setFilter] = useState<FindProductsFilter>(defaultFilters);
  const { categories } = useCategories();
  const { products, pagination } = useProducts(filter);

  const router = useRouter();

  useEffect(() => {
    let newFilter = defaultFilters;

    const { page, pageSize, categoryId, subcategoryId, sort, search } =
      router.query;

    if (page) {
      newFilter = {
        ...newFilter,
        page: Number(page),
      };
    }
    if (pageSize) {
      newFilter = {
        ...newFilter,
        pageSize: Number(pageSize),
      };
    }
    if (sort) {
      newFilter = {
        ...newFilter,
        sort: sort as string,
      };
    }

    setFilter(newFilter);
  }, [router]);

  const changeSortFilter = (value: string) => {
    const newFilter = {
      ...filter,
      sort: value,
    };

    router.push(`/product?${generateParams(newFilter)}`, undefined, {
      shallow: true,
    });
  };

  const changeActivePage = (page: number) => {
    const newFilter = {
      ...filter,
      page: page,
    };

    router.push(`/product?${generateParams(newFilter)}`, undefined, {
      shallow: true,
    });
  };

  const generateParams = (filter: FindProductsFilter) => {
    let urlFilter: {
      [name: string]: string;
    } = {};

    if (filter.page) {
      urlFilter.page = `${filter.page}`;
    }
    if (filter.pageSize) {
      urlFilter.pageSize = `${filter.pageSize}`;
    }
    if (filter.sort) {
      urlFilter.sort = filter.sort;
    }

    return new URLSearchParams(urlFilter).toString();
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
