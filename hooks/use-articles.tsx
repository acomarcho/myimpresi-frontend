import useSWR from "swr";
import { GetAllArticlesResponse } from "@/types/responses";

export default function useEvents() {
  const fetcher = async (path: string): Promise<GetAllArticlesResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}${path}`);
    return res.json();
  };

  const { data, error, isLoading } = useSWR("/article", fetcher);

  return {
    articles: data,
    isLoading,
    error,
  };
}
