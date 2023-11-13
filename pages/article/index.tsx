import Head from "next/head";
import Navbar from "@/components/common/navbar";
import Heading from "@/components/home/heading";
import FloatingWAIcon from "@/components/common/floating-wa";
import Footer from "@/components/common/footer";
import Image from "next/image";

import MainArticle from "@/components/articles/main-article";
import Articles from "@/components/articles/articles";

import _ from "lodash";

const dummyArticles = [
  {
    id: 1,
    title:
      "REKOR 1 juta Produk terjual dalam 60 Menit!! Keseruan Launching Produk terbaru Beautyme bertajuk “Honest Skin”",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus, voluptatem cupiditate nobis sint pariatur? Culpa temporibus illum vitae vel quia sequi eius! Eveniet tempore tenetur velit sint natus molestias!

    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore corrupti vel beatae aut fugit inventore quia dicta provident, blanditiis tempore voluptatem non dignissimos nemo totam. Perferendis asperiores delectus molestiae tempore.

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur dolor voluptatum exercitationem. Facere placeat reprehenderit ex minus porro, sequi voluptates inventore corrupti provident nemo dicta amet illo earum voluptas!

    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas dolore necessitatibus officiis sit repellendus ex ipsum expedita tenetur doloribus. Odio molestiae quidem culpa alias. Vero labore nulla nesciunt quidem doloremque? Perferendis, iusto eaque odio amet doloremque enim provident doloribus?`,
    imagePath: "/dummy/article-1.png",
  },
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

const ArticlesPage = () => {
  const articles = dummyArticles;

  return (
    <>
      <Head>
        <title>Artikel Inspirasi Produk</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem]">
          <Heading text="Artikel Inspirasi Produk" />
          <MainArticle article={articles[0]} />
          <Articles articles={articles} />
          <div className="mt-[2rem]" />
        </div>
        <FloatingWAIcon />
        <Footer />
      </div>
    </>
  );
};

export default ArticlesPage;
