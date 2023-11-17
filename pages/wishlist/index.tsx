import Head from "next/head";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import FloatingWAIcon from "@/components/common/floating-wa";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/hooks/use-redux";

import { ProductWithImages } from "@/types/responses/product";

import WishlistTitle from "@/components/wishlist/title";
import WishlistPagination from "@/components/wishlist/pagination";
import WishlistProducts from "@/components/wishlist/products";
import DeleteWishlistConfirmationModal from "@/components/wishlist/confirmation-modal";
import { Button } from "@mantine/core";

type WishlistFilter = {
  page: number;
  pageSize: number;
};

const defaultFilters: WishlistFilter = {
  page: 1,
  pageSize: 20,
};

export default function Wishlist() {
  const wishlistProducts = useAppSelector(
    (state) => state.wishlist.wishlistProducts
  );

  const [filter, setFilter] = useState(defaultFilters);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductWithImages | null>(null);

  const router = useRouter();

  useEffect(() => {
    let newFilter = defaultFilters;

    const { page, pageSize } = router.query;

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

    setFilter(newFilter);
  }, [router]);

  const changeActivePage = (page: number) => {
    const newFilter = {
      ...filter,
      page: page,
    };

    router.push(`/wishlist?${generateParams(newFilter)}`, undefined, {
      shallow: true,
    });
  };

  const generateParams = (filter: WishlistFilter) => {
    let urlFilter: {
      [name: string]: string;
    } = {};

    if (filter.page) {
      urlFilter.page = `${filter.page}`;
    }
    if (filter.pageSize) {
      urlFilter.pageSize = `${filter.pageSize}`;
    }

    return new URLSearchParams(urlFilter).toString();
  };

  const shownProducts = wishlistProducts.slice(
    (filter.page - 1) * filter.pageSize,
    filter.page * filter.pageSize
  );
  const pageCount = Math.ceil(wishlistProducts.length / filter.pageSize);

  return (
    <>
      <Head>
        <title>Wishlist Saya</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem] min-h-[calc(100vh-8.5rem)]">
          <WishlistTitle />
          {wishlistProducts.length > 0 && (
            <button className="bg-primary-default px-[1rem] py-[0.5rem] font-bold font-inter text-neutral-10 mt-[1rem] transition-all hover:opacity-[0.9] inline-block">
              Pesan Sekarang
            </button>
          )}
          <div className="flex justify-start lg:justify-end mt-[2rem]">
            <WishlistPagination
              filter={filter}
              changeActivePage={changeActivePage}
              pageCount={pageCount}
            />
          </div>
          <WishlistProducts
            wishlist={shownProducts}
            setIsModalOpen={setIsModalOpen}
            setSelectedProduct={setSelectedProduct}
          />
          <div className="flex justify-start lg:justify-end mt-[2rem]">
            <WishlistPagination
              filter={filter}
              changeActivePage={changeActivePage}
              pageCount={pageCount}
            />
          </div>
          <div className="mt-[2rem]" />
          <DeleteWishlistConfirmationModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            selectedProduct={selectedProduct}
          />
        </div>
        <FloatingWAIcon />
        <Footer />
      </div>
    </>
  );
}
