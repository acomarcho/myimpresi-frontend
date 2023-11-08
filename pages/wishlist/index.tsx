import Head from "next/head";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import FloatingWAIcon from "@/components/common/floating-wa";
import { formatToRupiah } from "@/utils/format-to-rupiah";
import Link from "next/link";

import { useState } from "react";
import { Modal, Pagination } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { colors } from "@/utils/colors";

import Image from "next/image";

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
          <h1 className="font-inter font-bold text-[1.125rem] lg:text-[1.75rem]">
            Wishlist Kamu
          </h1>
          <div className="flex justify-start lg:justify-end mt-[2rem]">
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
          <div className="grid grid-cols-2 gap-[1rem] mt-[2rem] lg:grid-cols-4">
            {wishlist.map((w) => {
              return (
                <Link
                  key={w.id}
                  className="bg-neutral-10 transition-all cursor-pointer hover:scale-[1.05] relative block"
                  href={`/product/${w.id}`}
                >
                  <Image
                    src={w.imagePath}
                    width={280}
                    height={280}
                    alt={w.name}
                    className="object-cover"
                  />
                  <div className="p-[0.75rem]">
                    <p className="font-inter font-bold">
                      {w.name.toUpperCase()}
                    </p>
                    <p className="font-inter text-neutral-60 text-[0.875rem] truncate-two">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ipsum numquam reprehenderit et, earum deleniti nostrum
                      tempore enim nihil corporis optio!
                    </p>
                    <div className="flex justify-between items-center mt-[0.5rem]">
                      <p className="font-inter font-bold text-neutral-100 text-[0.8rem] lg:text-[1rem]">
                        {formatToRupiah(w.price)}
                      </p>
                      <button
                        className="transition-all hover:scale-[1.2]"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setIsModalOpen(true);
                        }}
                      >
                        <Image
                          src="/assets/heart-filled.svg"
                          width={16}
                          height={16}
                          alt="Add to wishlist"
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="flex justify-start lg:justify-end mt-[2rem]">
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
          <div className="mt-[2rem]" />
          <Modal
            opened={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            centered
          >
            <div className="flex flex-col justify-center gap-[0.5rem] text-[1.5rem] p-[1rem]">
              <IconTrash size={60} color={colors.redIcon} className="mx-auto" />
              <h1 className="font-inter text-neutral-100 font-bold text-center">
                Hapus Produk?
              </h1>
              <p className="font-inter text-neutral-60 text-center text-[1rem]">
                Apakah Anda yakin ingin menghapus item ini dari wishlist?
              </p>
              <div className="grid grid-cols-2 items-center gap-[1.5rem] mt-[0.5rem]">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="border-[1px] border-secondary-red rounded-xl p-[0.75rem] text-[1rem] font-bold text-secondary-red font-inter"
                >
                  Batal
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl bg-red text-white font-bold text-[1rem] p-[0.75rem] font-inter"
                >
                  Ya, Hapus
                </button>
              </div>
            </div>
          </Modal>
        </div>
        <FloatingWAIcon />
        <Footer />
      </div>
    </>
  );
}
