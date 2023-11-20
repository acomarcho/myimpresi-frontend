import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import CustomMarkdown from "@/components/common/markdown";
import { Article } from "@/types/responses";

type Props = {
  articles: Article[];
};

const Articles = ({ articles }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-[1rem] lg:grid-cols-3 gap-[2rem] mt-[2rem]">
      {articles.slice(1).map((article) => {
        return (
          <Link
            href={`/article/${article.id}`}
            key={article.id}
            className="block"
          >
            <div className="cursor-pointer transition-all hover:scale-[1.05]">
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
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Articles;
