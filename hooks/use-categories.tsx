import useSWR from "swr";
import { GetCategoriesResponse } from "@/types/responses";

export default function useCategories() {
  const fetcher = async (path: string): Promise<GetCategoriesResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}${path}`);
    return res.json();
  };

  const { data, error, isLoading } = useSWR("/category", fetcher);

  return {
    categories: data,
    isLoading,
    error,
  };
}
