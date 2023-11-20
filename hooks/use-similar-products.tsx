import useSWR from "swr";
import { GetSimilarProductsResponse } from "@/types/responses/product";

export default function useSimilarProducts(productId: string) {
  const fetcher = async (path: string): Promise<GetSimilarProductsResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}${path}`);
    return res.json();
  };

  const { data, error, isLoading } = useSWR(
    productId ? `/product/${productId}/similar-products` : null,
    productId ? fetcher : null
  );

  return {
    similarProducts: data,
    isLoading,
    error,
  };
}
