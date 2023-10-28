import Head from "next/head";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import FloatingWAIcon from "@/components/common/floating-wa";
import { formatToRupiah } from "@/utils/format-to-rupiah";

import { useState } from "react";
import { Modal } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { colors } from "@/utils/colors";

import Image from "next/image";

const dummyWishlists = [
  {
    id: 1,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci A ini tes nama yang super panjang untuk melihat truncatenya",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 2,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci B ini tes nama yang super panjang untuk melihat truncatenya",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 3,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci C ini tes nama yang super panjang untuk melihat truncatenya",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
  {
    id: 4,
    imagePath: "/dummy/produk.png",
    name: "Gantungan Kunci D ini tes nama yang super panjang untuk melihat truncatenya",
    price: 12000,
    minQuantity: 10,
    soldAmount: 200,
  },
];

export default function Wishlist() {
  const wishlist = dummyWishlists;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Wishlist Saya</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem] min-h-[calc(100vh-8.5rem)]">
          <h1 className="font-inter font-bold text-[1.125rem] lg:text-[1.75rem]">
            Wishlist Saya ({wishlist.length})
          </h1>
          <div className="grid grid-cols-2 gap-[1rem] mt-[2.5rem] lg:mt-[5rem] lg:grid-cols-4">
            {wishlist.map((w) => {
              return (
                <div
                  key={w.id}
                  className="bg-neutral-10 w-[100%] flex-shrink-0 transition-all cursor-pointer relative"
                >
                  <Image
                    src={w.imagePath}
                    width={280}
                    height={280}
                    alt={w.name}
                    className="object-cover"
                  />
                  <div className="p-[0.75rem]">
                    <p className="h-[3rem] font-inter text-neutral-100 text-[0.875rem] truncate-two">
                      {w.name}
                    </p>
                    <p className="font-inter text-neutral-100 text-[0.875rem]">
                      <span className="font-bold lg:text-[1.125rem]">
                        {formatToRupiah(w.price)}
                      </span>
                      <span className="text-neutral-60">
                        /Min {w.minQuantity} pcs
                      </span>
                    </p>
                    <p className="font-inter text-neutral-60 mt-[0.5rem]">
                      {w.soldAmount}+ terjual
                    </p>
                    <button className="bg-primary-default w-full p-[0.75rem] text-white font-inter mt-[0.5rem] font-bold rounded-xl transition-all hover:opacity-[0.8]">
                      Pesan Sekarang
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                    className="absolute w-[2rem] h-[2rem] bg-neutral-10 rounded-full top-[1rem] right-[1rem] flex items-center justify-center"
                  >
                    <Image
                      src="/assets/heart-filled.svg"
                      height={16}
                      width={16}
                      alt="Heart"
                      className="transition-all hover:scale-[1.2]"
                    />
                  </button>
                </div>
              );
            })}
          </div>
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
