import Head from "next/head";
import Navbar from "@/components/common/navbar";
import Heading from "@/components/home/heading";

const Articles = () => {
  return (
    <>
      <Head>
        <title>Artikel Inspirasi Produk</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem]">
          <Heading text="Artikel Inspirasi Produk" />
        </div>
      </div>
    </>
  );
};

export default Articles;
