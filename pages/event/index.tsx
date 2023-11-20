import Head from "next/head";
import Navbar from "@/components/common/navbar";
import Heading from "@/components/home/heading";
import Footer from "@/components/common/footer";
import FloatingWAIcon from "@/components/common/floating-wa";
import CategoryScroll from "@/components/common/category-scroll";
import FilterAndPagination from "@/components/events/filter-and-pagination";
import DesktopProducts from "@/components/events/desktop-products";
import MobileProducts from "@/components/events/mobile-products";
import BottomPagination from "@/components/events/bottom-pagination";

import { useState, useEffect } from "react";
import useEvents from "@/hooks/use-events";
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
  const { events } = useEvents();
  const { products, pagination, isLoading } = useProducts(filter);

  const router = useRouter();

  useEffect(() => {
    let newFilter = defaultFilters;

    const { page, pageSize, sort, search, eventId } = router.query;

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
    if (search) {
      newFilter = {
        ...newFilter,
        search: search as string,
      };
    }
    if (eventId) {
      newFilter = {
        ...newFilter,
        eventId: eventId as string,
      };
    }

    setFilter(newFilter);
  }, [router]);

  const changeSortFilter = (value: string) => {
    const newFilter = {
      ...filter,
      sort: value,
    };

    router.push(`/event?${generateParams(newFilter)}`, undefined, {
      shallow: true,
    });
  };

  const changeActivePage = (page: number) => {
    const newFilter = {
      ...filter,
      page: page,
    };

    router.push(`/event?${generateParams(newFilter)}`, undefined, {
      shallow: true,
    });
  };

  const changeEventId = (eventId: string) => {
    const newFilter = {
      ...filter,
      eventId: eventId,
    };

    router.push(`/event?${generateParams(newFilter)}`, undefined, {
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
    if (filter.search) {
      urlFilter.search = filter.search;
    }
    if (filter.eventId) {
      urlFilter.eventId = filter.eventId;
    }

    return new URLSearchParams(urlFilter).toString();
  };

  const pageCount = pagination?.totalPages ?? 1;

  const getPageTitle = () => {
    return "Semua Acara";
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
            changeEventId={changeEventId}
            filterData={events?.events}
            products={products}
            isLoading={isLoading}
          />
          {/* <MobileProducts
            filter={filter}
            changeSubcategoryId={changeSubcategoryId}
            filterData={categories?.categories}
            products={products}
            isLoading={isLoading}
          /> */}
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
