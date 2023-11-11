import useSWR from "swr";
import { GetSingleProductResponse } from "@/types/responses/product";

export default function useProduct(productId: string) {
  const fetcher = async (path: string): Promise<GetSingleProductResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}${path}`);
    return res.json();
  };

  const { data, error, isLoading } = useSWR(
    productId ? `/product/${productId}` : null,
    productId ? fetcher : null
  );

  return {
    product: data,
    isLoading,
    error,
  };
}
