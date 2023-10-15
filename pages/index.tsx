import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto p-[1rem]">
      {/* Banner image */}
      <Image src="/dummy/banner.png" width={1200} height={400} alt="" />
      {/* Kategori Pilihan */}
      <div className="mt-[1rem] lg:mt-[5rem]">
        <h1 className="font-inter font-bold text-neutral-100 text-[1.25rem] lg:text-[1.5rem]">
          Kategori Pilihan
        </h1>
        <p className="font-inter text-neutral-60 text-[1rem] lg:text-[1.125rem]">
          Temukan produk pilihan Anda dengan harga terjangkau
        </p>
      </div>
    </div>
  );
}
