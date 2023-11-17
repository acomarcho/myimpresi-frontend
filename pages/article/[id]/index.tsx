import Head from "next/head";
import Navbar from "@/components/common/navbar";
import FloatingWAIcon from "@/components/common/floating-wa";
import Footer from "@/components/common/footer";
import Image from "next/image";
import Link from "next/link";
import { formatToRupiah } from "@/utils/format-to-rupiah";
import CustomMarkdown from "@/components/common/markdown";

import useProducts from "@/hooks/use-products";
import _ from "lodash";

const dummyArticle = {
  id: 1,
  title:
    "REKOR 1 juta Produk terjual dalam 60 Menit!! Keseruan Launching Produk terbaru Beautyme bertajuk “Honest Skin”",
  description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus, voluptatem cupiditate nobis sint pariatur? Culpa temporibus illum vitae vel quia sequi eius! Eveniet tempore tenetur velit sint natus molestias!

  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore corrupti vel beatae aut fugit inventore quia dicta provident, blanditiis tempore voluptatem non dignissimos nemo totam. Perferendis asperiores delectus molestiae tempore.

  <a href="https://www.google.com">Buka link ini untuk membuka Google!</a>

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur dolor voluptatum exercitationem. Facere placeat reprehenderit ex minus porro, sequi voluptates inventore corrupti provident nemo dicta amet illo earum voluptas!

  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas dolore necessitatibus officiis sit repellendus ex ipsum expedita tenetur doloribus. Odio molestiae quidem culpa alias. Vero labore nulla nesciunt quidem doloremque? Perferendis, iusto eaque odio amet doloremque enim provident doloribus?`,
  imagePath: "/dummy/article-1.png",
};

const dummyOtherArticles = [
  {
    id: 2,
    title: "Rekomendasi event luar ruangan memberi kesan yang dalam",
    description: "Cek sekarang!",
    imagePath: "/dummy/article-2.png",
  },
  {
    id: 3,
    title: "Sambut karyawan baru dengan OfficeKit tanpa ribet!",
    description: "Cek sekarang!",
    imagePath: "/dummy/article-3.png",
  },
  {
    id: 4,
    title: "Menyambut musim hujan yang dirindukan",
    description: "Cek sekarang!",
    imagePath: "/dummy/article-4.png",
  },
  {
    id: 5,
    title: "Kenalkan merekmu dengan detail terkecil!",
    description: "Cek sekarang!",
    imagePath: "/dummy/article-5.png",
  },
  {
    id: 6,
    title: "Rekomendasi event luar ruangan memberi kesan yang dalam",
    description: "Cek sekarang!",
    imagePath: "/dummy/article-6.png",
  },
];

const dummyProducts = Array.from({ length: 3 }, (_, index) => ({
  id: index + 1,
  imagePath: "/dummy/produk.png",
  name: "BANUM",
  price: 120000,
  minQuantity: 10,
  soldAmount: 200,
}));

const ArticleDetailPage = () => {
  const article = dummyArticle;
  const otherArticles = dummyOtherArticles;
  const { products } = useProducts({
    page: 1,
    pageSize: 20,
  });

  const shuffledProducts = _.shuffle(products || []).slice(0, 3);

  return (
    <>
      <Head>
        <title>Artikel</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem]">
          <div className="flex flex-col gap-[2rem] lg:flex-row">
            <div>
              <h1 className="font-inter font-bold text-[1.5rem] text-neutral-100">
                {article.title}
              </h1>
              <Image
                src={article.imagePath}
                sizes="100%"
                width="0"
                height="0"
                className="w-full mt-[2rem]"
                alt={article.title}
              />
              <CustomMarkdown>{article.description}</CustomMarkdown>
            </div>
            <div className="lg:w-[400px] flex-shrink-0">
              <div>
                <h1 className="font-inter font-bold text-[1.25rem] text-neutral-100">
                  Artikel yang membantu
                </h1>
                <div className="flex flex-col gap-[1rem] mt-[1rem]">
                  {otherArticles.map((a) => {
                    return (
                      <Link
                        href={`/article/${a.id}`}
                        key={a.id}
                        className="block grid grid-cols-2 gap-[1rem] transition-all hover:scale-[1.05]"
                      >
                        <Image
                          src={a.imagePath}
                          sizes="100%"
                          height={0}
                          width={0}
                          className="w-full max-h-[100px] object-cover"
                          alt={a.title}
                        />
                        <div>
                          <p className="font-inter font-bold text-neutral-100 truncate-two">
                            {a.title}
                          </p>
                          <p className="font-inter text-neutral-60 truncate-two text-[0.9rem]">
                            {a.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <hr className="text-neutral-20 mt-[2rem]" />
              <div className="mt-[1rem]">
                <div>
                  <h1 className="font-inter font-bold text-[1.25rem] text-neutral-100">
                    Produk terkait artikel
                  </h1>
                  <div className="flex flex-col gap-[2rem] mt-[1rem]">
                    {shuffledProducts.map((p) => {
                      return (
                        <Link
                          href={`/product/${p.id}`}
                          key={p.id}
                          className="block grid grid-cols-2 gap-[1rem] transition-all hover:scale-[1.05]"
                        >
                          <Image
                            src={p.productImage[0].path}
                            sizes="100%"
                            height={0}
                            width={0}
                            className="w-full max-h-[160px] object-cover"
                            alt={p.name}
                          />
                          <div className="flex flex-col justify-between">
                            <div>
                              <h1 className="font-inter font-bold text-neutral-100 text-[1.25rem]">
                                {p.name.toUpperCase()}
                              </h1>
                              <p className="font-inter text-neutral-60 text-[0.875rem] truncate-two mt-[1rem]">
                                {`${p.material}, ${p.size}`}
                              </p>
                            </div>
                            <div>
                              <div className="flex justify-between items-center mt-[0.5rem]">
                                <p className="font-inter font-bold text-neutral-100 text-[0.9rem] lg:text-[1rem]">
                                  {formatToRupiah(p.price)}
                                </p>
                                <button className="transition-all hover:scale-[1.2]">
                                  <Image
                                    src="/assets/heart.svg"
                                    width={24}
                                    height={24}
                                    alt="Add to wishlist"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[2rem]" />
        <FloatingWAIcon />
        <Footer />
      </div>
    </>
  );
};

export default ArticleDetailPage;
