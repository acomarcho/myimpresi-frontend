import useSWR from "swr";
import { GetSingleArticleResponse } from "@/types/responses";

export default function useArticle(articleId: string) {
  const fetcher = async (path: string): Promise<GetSingleArticleResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}${path}`);
    return res.json();
  };

  const { data, error, isLoading } = useSWR(
    articleId ? `/article/${articleId}` : null,
    articleId ? fetcher : null
  );

  return {
    article: data?.data,
    isLoading,
    error,
  };
}
