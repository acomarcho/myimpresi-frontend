import useSWR from "swr";
import { GetProductsResponse } from "@/types/responses/product";
import { FindProductsFilter } from "@/types/requests";

export default function useProducts(filter: FindProductsFilter) {
  const fetcher = async (path: string): Promise<GetProductsResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}${path}`);
    return res.json();
  };

  let queryData = {};
  if (filter.page) {
    queryData = { ...queryData, page: filter.page };
  }
  if (filter.pageSize) {
    queryData = { ...queryData, pageSize: filter.pageSize };
  }

  const { data, error, isLoading } = useSWR(
    filter.page && filter.pageSize
      ? `/product?${new URLSearchParams(queryData).toString()}`
      : null,
    filter.page && filter.pageSize ? fetcher : null
  );

  return {
    products: data?.data,
    pagination: data?.pagination,
    isLoading,
    error,
  };
}