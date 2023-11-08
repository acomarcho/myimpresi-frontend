import Head from "next/head";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import FloatingWAIcon from "@/components/common/floating-wa";

import { useState } from "react";

import WishlistTitle from "@/components/wishlist/title";
import WishlistPagination from "@/components/wishlist/pagination";
import WishlistProducts from "@/components/wishlist/products";
import DeleteWishlistConfirmationModal from "@/components/wishlist/confirmation-modal";

const dummyWishlists = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  imagePath: "/dummy/produk.png",
  name: "BANUM",
  price: 120000,
  minQuantity: 10,
  soldAmount: 200,
}));

export default function Wishlist() {
  const wishlist = dummyWishlists;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePage, setActivePage] = useState(1);

  return (
    <>
      <Head>
        <title>Wishlist Saya</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem] min-h-[calc(100vh-8.5rem)]">
          <WishlistTitle />
          <div className="flex justify-start lg:justify-end mt-[2rem]">
            <WishlistPagination
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </div>
          <WishlistProducts
            wishlist={wishlist}
            setIsModalOpen={setIsModalOpen}
          />
          <div className="flex justify-start lg:justify-end mt-[2rem]">
            <WishlistPagination
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </div>
          <div className="mt-[2rem]" />
          <DeleteWishlistConfirmationModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
        <FloatingWAIcon />
        <Footer />
      </div>
    </>
  );
}
