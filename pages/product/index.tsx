import Head from "next/head";
import Navbar from "@/components/common/navbar";
import Heading from "@/components/home/heading";
import CategoryScroll from "@/components/common/category-scroll";
import { Select, Pagination } from "@mantine/core";
import { useState } from "react";

export default function Products() {
  const [sortFilter, setSortFilter] = useState<string | null>("Rekomendasi");
  const [activePage, setActivePage] = useState(1);

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
          {/* Filter and pagination */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-[4rem] gap-[1rem]">
            <div className="flex items-center gap-[1rem]">
              <p className="font-inter font-bold">Urutkan: </p>
              <Select
                data={["Rekomendasi", "Harga Terendah", "Harga Tertinggi"]}
                value={sortFilter}
                onChange={setSortFilter}
                styles={{
                  input: {
                    borderRadius: "100px",
                  },
                }}
              />
            </div>
            <Pagination
              value={activePage}
              onChange={setActivePage}
              total={10}
              withControls={false}
              styles={{
                control: {
                  border: "none",
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
