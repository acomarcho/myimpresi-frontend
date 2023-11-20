import useSWR from "swr";
import { GetAllArticlesResponse } from "@/types/responses";

export default function useArticles() {
  const fetcher = async (path: string): Promise<GetAllArticlesResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}${path}`);
    return res.json();
  };

  const { data, error, isLoading } = useSWR("/article", fetcher);

  return {
    articles: data?.articles,
    isLoading,
    error,
  };
}
