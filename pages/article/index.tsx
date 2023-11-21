import Head from "next/head";
import Navbar from "@/components/common/navbar";
import Heading from "@/components/home/heading";
import FloatingWAIcon from "@/components/common/floating-wa";
import Footer from "@/components/common/footer";

import MainArticle from "@/components/articles/main-article";
import Articles from "@/components/articles/articles";

import _ from "lodash";
import useArticles from "@/hooks/use-articles";

const ArticlesPage = () => {
  const { articles } = useArticles();

  return (
    <>
      <Head>
        <title>Artikel Inspirasi Produk</title>
      </Head>
      <Navbar />
      <div className="relative pt-[8.5rem]">
        <div className="max-w-[1200px] mx-auto p-[1.5rem]">
          <Heading text="Artikel Inspirasi Produk" />
          {articles && (
            <>
              <MainArticle article={articles[0]} />
              <Articles articles={articles} />
            </>
          )}
          <div className="mt-[2rem]" />
        </div>
        <FloatingWAIcon />
        <Footer />
      </div>
    </>
  );
};

export default ArticlesPage;
