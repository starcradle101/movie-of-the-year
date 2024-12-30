import { useState } from "react";
import { fetchMovieData } from "../api/fetchMovieData";

export const useMovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchState, setFetchState] = useState<MovieDataFetchState>({
    data: [],
    loading: false,
    error: null,
    page: 1,
    totalPages: 1,
    hasMore: true,
  });

  const handleSearch = async (term: string) => {
    if (!term.trim()) return;

    setFetchState((prev) => ({
      ...prev,
      loading: true,
      page: 1,
      data: [],
    }));

    try {
      const response = await fetchMovieData(term, 1);
      setFetchState({
        data: response.results,
        loading: false,
        error: null,
        page: 1,
        totalPages: response.total_pages,
        hasMore: response.page < response.total_pages,
      });
    } catch (error) {
      setFetchState((prev) => ({
        ...prev,
        loading: false,
        error:
          error instanceof Error
            ? error
            : new Error("영화 검색에 실패했습니다."),
        hasMore: false,
      }));
    }
  };

  const loadMore = async () => {
    if (fetchState.loading || !fetchState.hasMore) return;

    setFetchState((prev) => ({ ...prev, loading: true }));

    try {
      const response = await fetchMovieData(searchTerm, fetchState.page + 1);
      setFetchState((prev) => ({
        ...prev,
        data: [...prev.data, ...response.results],
        loading: false,
        page: response.page,
        hasMore: response.page < response.total_pages,
      }));
    } catch (error) {
      setFetchState((prev) => ({
        ...prev,
        loading: false,
        error:
          error instanceof Error
            ? error
            : new Error("추가 데이터 로드에 실패했습니다."),
        hasMore: false,
      }));
    }
  };

  return {
    searchTerm,
    setSearchTerm,
    fetchState,
    handleSearch,
    loadMore,
  };
};
