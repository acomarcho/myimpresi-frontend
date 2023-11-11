import useSWR from "swr";
import { GetPromoProductsResponse } from "@/types/responses/product";

export default function useFeaturedProducts() {
  const fetcher = async (path: string): Promise<GetPromoProductsResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}${path}`);
    return res.json();
  };

  const { data, error, isLoading } = useSWR("/product/promo", fetcher);

  return {
    promoProducts: data,
    isLoading,
    error,
  };
}
