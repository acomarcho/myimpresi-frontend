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
import { useRouter } from "next/router";
import _ from "lodash";

const defaultFilters: FindProductsFilter = {
  page: 1,
  pageSize: 20,
  sort: "RECOMMENDED",
};

export default function Products() {
  const [filter, setFilter] = useState<FindProductsFilter>(defaultFilters);
  const { categories } = useCategories();
  const { products, pagination, isLoading } = useProducts(filter);

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
    if (categoryId) {
      newFilter = {
        ...newFilter,
        categoryId: categoryId as string,
      };
    }
    if (subcategoryId) {
      newFilter = {
        ...newFilter,
        subcategoryId: subcategoryId as string,
      };
      delete newFilter.categoryId;
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

  const changeSubcategoryId = (subcategoryId: string) => {
    const filterCopy = { ...filter };
    delete filterCopy.categoryId;
    delete filterCopy.subcategoryId;

    let newFilter = {
      ...filterCopy,
      page: 1, // Reset page to 1
    };

    if (subcategoryId !== filter.subcategoryId) {
      newFilter.subcategoryId = subcategoryId;
    }

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
    if (filter.categoryId) {
      urlFilter.categoryId = filter.categoryId;
    }
    if (filter.subcategoryId) {
      urlFilter.subcategoryId = filter.subcategoryId;
    }

    return new URLSearchParams(urlFilter).toString();
  };

  const pageCount = pagination?.totalPages ?? 1;

  const getPageTitle = () => {
    if (filter.subcategoryId) {
      const category = categories?.categories.find((c) =>
        c.subcategory.find((s) => s.id === filter.subcategoryId)
      );
      return (
        category?.subcategory.find((s) => s.id === filter.subcategoryId)
          ?.name || "Loading ..."
      );
    }

    if (filter.categoryId) {
      return (
        categories?.categories.find((c) => c.id === filter.categoryId)?.name ||
        "Loading ..."
      );
    }

    return "Semua Produk";
  };

  return (
    <>
      <Head>
        <title>{getPageTitle()}</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem]">
          <Heading text={getPageTitle()} />
          <CategoryScroll />
          <FilterAndPagination
            filter={filter}
            changeSortFilter={changeSortFilter}
            changeActivePage={changeActivePage}
            pageCount={pageCount}
          />
          <DesktopProducts
            filter={filter}
            changeSubcategoryId={changeSubcategoryId}
            filterData={categories?.categories}
            products={products}
            isLoading={isLoading}
          />
          <MobileProducts
            filter={filter}
            changeSubcategoryId={changeSubcategoryId}
            filterData={categories?.categories}
            products={products}
            isLoading={isLoading}
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
