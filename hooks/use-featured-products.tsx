import useSWR from "swr";
import { GetFeaturedProductsResponse } from "@/types/responses/product";

export default function useFeaturedProducts() {
  const fetcher = async (
    path: string
  ): Promise<GetFeaturedProductsResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}${path}`);
    return res.json();
  };

  const { data, error, isLoading } = useSWR("/product/featured", fetcher);

  return {
    featuredProducts: data,
    isLoading,
    error,
  };
}
