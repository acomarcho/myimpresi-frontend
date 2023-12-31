import Head from "next/head";
import Navbar from "@/components/common/navbar";
import FloatingWAIcon from "@/components/common/floating-wa";
import Footer from "@/components/common/footer";
import Image from "next/image";
import Link from "next/link";
import { formatToRupiah } from "@/utils/format-to-rupiah";
import CustomMarkdown from "@/components/common/markdown";

import { addProduct, removeProduct } from "@/redux/slices/wishlist-slice";
import { useAppSelector, useAppDispatch } from "@/hooks/use-redux";
import useProducts from "@/hooks/use-products";
import _ from "lodash";
import { useEffect, useState } from "react";
import { ProductWithImages } from "@/types/responses/product";
import useArticle from "@/hooks/use-article";
import useArticles from "@/hooks/use-articles";
import { useRouter } from "next/router";
import { Article } from "@/types/responses";

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

const ArticleDetailPage = () => {
  const router = useRouter();
  const articleId = router.query.id as string;
  const { article } = useArticle(articleId);
  const { articles } = useArticles();
  const { products } = useProducts({
    page: 1,
    pageSize: 20,
  });
  const [shuffledProducts, setShuffledProducts] = useState<ProductWithImages[]>(
    []
  );
  const [shuffledArticles, setShuffledArticles] = useState<Article[]>([]);

  const wishlistProducts = useAppSelector(
    (state) => state.wishlist.wishlistProducts
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    setShuffledProducts(_.shuffle(products || []).slice(0, 3));
  }, [products]);

  useEffect(() => {
    setShuffledArticles(
      _.shuffle(articles?.filter((a) => a.id !== articleId) || []).slice(0, 3)
    );
  }, [articles, articleId]);

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
                {article?.title}
              </h1>
              <Image
                src={article?.imagePath || ""}
                sizes="100%"
                width="0"
                height="0"
                className="w-full mt-[2rem]"
                alt={article?.title || ""}
              />
              <CustomMarkdown>{article?.content || ""}</CustomMarkdown>
            </div>
            <div className="lg:w-[400px] flex-shrink-0">
              {shuffledArticles.length > 0 && (
                <>
                  <div>
                    <h1 className="font-inter font-bold text-[1.25rem] text-neutral-100">
                      Artikel yang membantu
                    </h1>
                    <div className="flex flex-col gap-[1rem] mt-[1rem]">
                      {shuffledArticles.map((a) => {
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
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  <hr className="text-neutral-20 mt-[2rem]" />
                </>
              )}
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
                            className="w-full h-[160px] object-cover"
                            alt={p.name}
                          />
                          <div className="flex flex-col justify-between">
                            <div>
                              <h1 className="font-inter font-bold text-neutral-100 text-[1.25rem]">
                                {p.name.toUpperCase()}
                              </h1>
                              <p className="font-inter text-neutral-60 text-[0.875rem] truncate-two mt-[0.5rem]">
                                {`${p.material}, ${p.size}`}
                              </p>
                            </div>
                            <div>
                              <div className="flex justify-between items-center mt-[0.5rem]">
                                <p className="font-inter font-bold text-neutral-100 text-[0.9rem] lg:text-[1rem]">
                                  {formatToRupiah(p.price)}
                                </p>
                                <button
                                  className="transition-all hover:scale-[1.2]"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();

                                    if (
                                      wishlistProducts.find(
                                        (wp) => wp.id === p.id
                                      )
                                    ) {
                                      dispatch(removeProduct(p));
                                    } else {
                                      dispatch(addProduct(p));
                                    }
                                  }}
                                >
                                  {wishlistProducts.find(
                                    (wp) => wp.id === p.id
                                  ) ? (
                                    <Image
                                      src="/assets/heart-filled.svg"
                                      width={24}
                                      height={24}
                                      alt="Remove from wishlist"
                                    />
                                  ) : (
                                    <Image
                                      src="/assets/heart.svg"
                                      width={24}
                                      height={24}
                                      alt="Add to wishlist"
                                    />
                                  )}
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
