import useSWR from "swr";
import { GetBannersResponse } from "@/types/responses";

export default function useBanners() {
  const fetcher = async (path: string): Promise<GetBannersResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}${path}`);
    return res.json();
  };

  const { data, error, isLoading } = useSWR("/banner", fetcher);

  return {
    banners: data,
    isLoading,
    error,
  };
}
