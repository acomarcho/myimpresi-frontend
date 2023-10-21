import Head from "next/head";

import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

const dummyWishlists = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

export default function Wishlist() {
  return (
    <>
      <Head>
        <title>Wishlist Saya</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem] min-h-[calc(100vh-8.5rem)]">
          <h1 className="font-inter font-bold text-[1.125rem] lg:text-[1.75rem]">
            Wishlist Saya ({dummyWishlists.length})
          </h1>
        </div>
        <Footer />
      </div>
    </>
  );
}
