import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import CustomMarkdown from "@/components/common/markdown";
import { Article } from "@/types/responses";

type Props = {
  article: Article;
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
      <CustomMarkdown>
        {_.truncate(article.content, {
          length: 200,
        })}
      </CustomMarkdown>
    </Link>
  );
};

export default MainArticle;
