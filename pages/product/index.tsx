import Head from "next/head";
import Navbar from "@/components/common/navbar";
import Heading from "@/components/home/heading";
import CategoryScroll from "@/components/common/category-scroll";

export default function Products() {
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
        </div>
      </div>
    </>
  );
}
