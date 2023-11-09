import Head from "next/head";
import Navbar from "@/components/common/navbar";
import FloatingWAIcon from "@/components/common/floating-wa";
import Footer from "@/components/common/footer";
import Image from "next/image";
import Link from "next/link";

const dummyArticle = {
  id: 1,
  title:
    "REKOR 1 juta Produk terjual dalam 60 Menit!! Keseruan Launching Produk terbaru Beautyme bertajuk “Honest Skin”",
  description: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    "book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more",
    "recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  ],
  imagePath: "/dummy/article-1.png",
};

const dummyOtherArticles = [
  {
    id: 2,
    title: "Rekomendasi event luar ruangan memberi kesan yang dalam",
    description: ["Cek sekarang!"],
    imagePath: "/dummy/article-2.png",
  },
  {
    id: 3,
    title: "Sambut karyawan baru dengan OfficeKit tanpa ribet!",
    description: ["Cek sekarang!"],
    imagePath: "/dummy/article-3.png",
  },
  {
    id: 4,
    title: "Menyambut musim hujan yang dirindukan",
    description: ["Cek sekarang!"],
    imagePath: "/dummy/article-4.png",
  },
  {
    id: 5,
    title: "Kenalkan merekmu dengan detail terkecil!",
    description: ["Cek sekarang!"],
    imagePath: "/dummy/article-5.png",
  },
  {
    id: 6,
    title: "Rekomendasi event luar ruangan memberi kesan yang dalam",
    description: ["Cek sekarang!"],
    imagePath: "/dummy/article-6.png",
  },
];

const ArticleDetailPage = () => {
  const article = dummyArticle;
  const otherArticles = dummyOtherArticles;

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
              {article.description.map((d, i) => {
                return (
                  <p key={i} className="font-inter text-neutral-60 mt-[1rem]">
                    {d}
                  </p>
                );
              })}
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
                        <p className="font-inter font-bold">{a.title}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <FloatingWAIcon />
        <Footer />
      </div>
    </>
  );
};

export default ArticleDetailPage;
