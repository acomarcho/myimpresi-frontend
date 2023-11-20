import Image from "next/image";
import Heading from "./heading";
import Link from "next/link";

import useArticles from "@/hooks/use-articles";
import SectionDivider from "../common/section-divider";

const Articles = () => {
  const { articles } = useArticles();
  if (!articles || articles.length < 4) {
    return <></>;
  }

  return (
    <>
      <div>
        <Heading text="Temukan Inspirasi Produk yang Cocok" />
        <div className="mt-[2rem] grid inspiration-grid-mobile lg:inspiration-grid-desktop gap-[1rem] lg:gap-[2rem]">
          <Link
            href={`/article/${articles[0].id}`}
            className="grid-ins1 relative cursor-pointer transition-all hover:scale-[1.05]"
          >
            <Image
              src={articles[0].imagePath}
              fill
              className="object-cover"
              alt=""
            />
            <div className="absolute bottom-0 left-0 bg-whitetransparent p-[1rem] w-full">
              <p className="font-inter font-bold text-neutral-100">
                {articles[0].title}
              </p>
              <p className="font-inter text-neutral-100">Cek sekarang!</p>
            </div>
          </Link>
          <Link
            href={`/article/${articles[1].id}`}
            className="grid-ins2 relative cursor-pointer transition-all hover:scale-[1.05]"
          >
            <Image
              src={articles[1].imagePath}
              fill
              className="object-cover"
              alt=""
            />
            <div className="absolute bottom-0 left-0 bg-whitetransparent p-[1rem] w-full">
              <p className="font-inter font-bold text-neutral-100">
                {articles[1].title}
              </p>
              <p className="font-inter text-neutral-100">Cek sekarang!</p>
            </div>
          </Link>
          <Link
            href={`/article/${articles[2].id}`}
            className="grid-ins3 relative cursor-pointer transition-all hover:scale-[1.05]"
          >
            <Image
              src={articles[2].imagePath}
              fill
              className="object-cover"
              alt=""
            />
            <div className="absolute bottom-0 left-0 bg-whitetransparent p-[1rem] w-full">
              <p className="font-inter font-bold text-neutral-100">
                {articles[2].title}
              </p>
              <p className="font-inter text-neutral-100">Cek sekarang!</p>
            </div>
          </Link>
          <Link
            href={`/article/${articles[3].id}`}
            className="grid-ins4 relative cursor-pointer transition-all hover:scale-[1.05]"
          >
            <Image
              src={articles[3].imagePath}
              fill
              className="object-cover"
              alt=""
            />
            <div className="absolute bottom-0 left-0 bg-whitetransparent p-[1rem] w-full">
              <p className="font-inter font-bold text-neutral-100">
                {articles[3].title}
              </p>
              <p className="font-inter text-neutral-100">Cek sekarang!</p>
            </div>
          </Link>
        </div>
      </div>
      <SectionDivider />
    </>
  );
};

export default Articles;
