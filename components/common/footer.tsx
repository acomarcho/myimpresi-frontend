import useCategories from "@/hooks/use-categories";
import Image from "next/image";
import Link from "next/link";
import {
  IconMapPin,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const Footer = () => {
  const { categories } = useCategories();

  return (
    <div className="bg-gray py-[2.5rem]">
      <div className="max-w-[1200px] mx-auto px-[1.5rem]">
        <div className="flex flex-col gap-[1rem] lg:flex-row lg:justify-between">
          <Link href="/">
            <Image
              src="/assets/logo-impresi-blue.png"
              width={160}
              height={40}
              alt="MyImpresi logo"
            />
          </Link>
          <div className="flex flex-col gap-[0.5rem]">
            <p className="font-inter text-neutral-100">Temukan kami di:</p>
            <div className="flex items-center gap-[0.5rem]">
              <Link
                href="/"
                className="block p-[0.25rem] border-[1px] border-neutral-50 rounded-full"
              >
                <IconMapPin />
              </Link>
              <Link
                href="/"
                className="block p-[0.25rem] border-[1px] border-neutral-50 rounded-full"
              >
                <IconBrandInstagram />
              </Link>
              <Link
                href="/"
                className="block p-[0.25rem] border-[1px] border-neutral-50 rounded-full"
              >
                <IconBrandYoutube />
              </Link>
              <Link
                href="/"
                className="block p-[0.25rem] border-[1px] border-neutral-50 rounded-full"
              >
                <IconBrandWhatsapp />
              </Link>
            </div>
            <div>
              <p className="font-inter text-neutral-100">
                Permata Hijau Permai, Bekasi.
              </p>
              <p className="font-inter text-neutral-100">Indonesia</p>
              <p className="font-inter text-neutral-100">17125</p>
            </div>
          </div>
        </div>
        <p className="font-inter text-neutral-100 mt-[2.5rem]">
          &copy; 2023 Impresi
        </p>
      </div>
    </div>
  );
};

export default Footer;
