import Image from "next/image";
import Link from "next/link";
import _ from "lodash";

type Props = {
  article: Article;
};

type Article = {
  id: number;
  title: string;
  description: string[];
  imagePath: string;
};

const MainArticle = ({ article }: Props) => {
  return (
    <Link
      href={`/article/${article.id}`}
      className="block mt-[2rem] cursor-pointer transition-all hover:scale-[1.05]"
    >
      <Image
        src={article.imagePath}
        alt={article.title}
        sizes="100"
        width={0}
        height={0}
        className="w-full max-h-[412px] object-cover"
      />
      <h1 className="font-inter font-bold text-[1.125rem] lg:text-[1.25rem] mt-[1rem] text-neutral-100">
        {article.title}
      </h1>
      <p className="font-inter mt-[1rem] text-neutral-60">
        {_.truncate(article.description[0], {
          length: 200,
        })}
      </p>
    </Link>
  );
};

export default MainArticle;
