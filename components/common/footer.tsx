import useCategories from "@/hooks/use-categories";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { categories } = useCategories();

  return (
    <div className="bg-primary-pressed py-[2.5rem]">
      <div className="max-w-[1200px] mx-auto px-[1.5rem]">
        <div className="flex flex-col gap-[2rem] lg:flex-row lg:justify-between">
          <div className="lg:w-[50%]">
            <Image
              src="/assets/logo-impresi.png"
              width={157}
              height={39}
              alt="Impresi"
            />
            <p className="font-inter text-neutral-10 mt-[1rem]">
              Permata Hijau
              <br />
              Permai Kaliabang Tengah Bekasi Utara, Kota Bekasi, 17125
            </p>
          </div>
          <div className="lg:w-[50%]">
            <div className="flex flex-col gap-[2.5rem] lg:flex-row justify-between">
              <div>
                <p className="font-inter font-bold text-neutral-10">Produk</p>
                <div className="grid grid-cols-2 gap-x-[5rem] mt-[1rem] gap-y-[0.75rem]">
                  {categories?.categories?.map((c) => {
                    return (
                      <Link
                        key={c.id}
                        href="/"
                        className="font-inter text-neutral-10"
                      >
                        {c.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="font-inter font-bold text-neutral-10">Info</p>
                <div className="flex flex-col items-start mt-[1rem] gap-[0.75rem]">
                  <Link href="/" className="font-inter text-neutral-10">
                    Kontak Kami
                  </Link>
                  <Link href="/" className="font-inter text-neutral-10">
                    Kebijakan Privasi
                  </Link>
                  <Link href="/" className="font-inter text-neutral-10">
                    Syarat & Ketentuan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="font-inter text-neutral-10 mt-[2.5rem]">
          &copy; 2023 PT Tama Impresi Baik
        </p>
      </div>
    </div>
  );
};

export default Footer;
