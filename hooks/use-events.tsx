import useSWR from "swr";
import { GetAllEventsResponse } from "@/types/responses";

export default function useEvents() {
  const fetcher = async (path: string): Promise<GetAllEventsResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}${path}`);
    return res.json();
  };

  const { data, error, isLoading } = useSWR("/event", fetcher);

  return {
    events: data,
    isLoading,
    error,
  };
}
