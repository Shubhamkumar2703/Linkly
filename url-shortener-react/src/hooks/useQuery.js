import { useQuery } from "@tanstack/react-query";
import api from "../api/api";
/**
 * Fetch all shortened URLs of logged-in user
 */
export const useFetchMyShortUrls = (token, onError) => {
  return useQuery({
    queryKey: ["my-shorten-urls", token],
    enabled: !!token,
    queryFn: async () => {
      const response = await api.get("/api/urls/myurls", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    select: (data) =>
      [...data].sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      ),
    onError,
    staleTime: 5 * 1000,
  });
};

/**
 * Fetch total clicks analytics
 */
export const useFetchTotalClicks = (token, onError) => {
  const currentYear = new Date().getFullYear();

  return useQuery({
    queryKey: ["total-clicks", token, currentYear],
    enabled: !!token,
    queryFn: async () => {
      const response = await api.get(
        `/api/urls/totalClicks?startDate=${currentYear}-01-01&endDate=${currentYear}-12-31`
      );
      return response.data;
    },
    select: (data) =>
      Object.entries(data).map(([date, count]) => ({
        clickDate: date,
        count,
      })),
    onError,
    staleTime: 5000,
  });
};
