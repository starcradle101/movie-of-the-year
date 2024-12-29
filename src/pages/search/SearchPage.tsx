import { MovieList } from "../../components/ui/MovieList";
import { useSearchParams } from "react-router";
import { useState } from "react";
import { fetchMovieData } from "../../api/fetchMovieData";
import searchIcon from "../../assets/icons/search-icon.svg";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const username = searchParams.get("username");
  const [fetchState, setFetchState] = useState<MovieDataFetchState>({
    data: [],
    loading: false,
    error: null,
    page: 1,
    totalPages: 1,
    hasMore: true,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setFetchState((prev) => ({
      ...prev,
      loading: true,
      page: 1,
      data: [],
    }));

    fetchMovieData(searchTerm, 1)
      .then((response) =>
        setFetchState({
          data: response.results,
          loading: false,
          error: null,
          page: 1,
          totalPages: response.total_pages,
          hasMore: response.page < response.total_pages,
        }),
      )
      .catch((error) =>
        setFetchState((prev) => ({
          ...prev,
          loading: false,
          error:
            error instanceof Error
              ? error
              : new Error("영화 검색에 실패했습니다."),
          hasMore: false,
        })),
      );
  };

  const loadMore = () => {
    if (fetchState.loading || !fetchState.hasMore) return;

    setFetchState((prev) => ({ ...prev, loading: true }));

    fetchMovieData(searchTerm, fetchState.page + 1)
      .then((response) =>
        setFetchState((prev) => ({
          ...prev,
          data: [...prev.data, ...response.results],
          loading: false,
          page: response.page,
          hasMore: response.page < response.total_pages,
        })),
      )
      .catch((error) =>
        setFetchState((prev) => ({
          ...prev,
          loading: false,
          error:
            error instanceof Error
              ? error
              : new Error("추가 데이터 로드에 실패했습니다."),
          hasMore: false,
        })),
      );
  };

  return (
    <div className='flex h-full flex-col overflow-hidden pb-4 pt-10'>
      <h1 className='text-center text-3xl leading-loose'>
        <span className='text-emerald-400'>{username}</span>님의{" "}
        <br aria-hidden='true' /> 올해의 영화는 무엇인가요?
      </h1>
      <form
        onSubmit={handleSubmit}
        className='flex items-center justify-center gap-4 py-8'
      >
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='영화 제목을 검색해 주세요 *'
          className='h-12 w-60 border-b-2 border-emerald-400 bg-transparent text-xl text-white focus:outline-none'
        />
        <button type='submit' className='rounded-xl bg-emerald-400 p-2'>
          <img src={searchIcon} alt='검색하기' className='h-5 w-5' />
        </button>
      </form>

      <div className='scrollbar-hide flex-1 overflow-y-scroll'>
        <MovieList
          movies={fetchState.data}
          isLoading={fetchState.loading}
          error={fetchState.error}
          hasMore={fetchState.hasMore}
          onLoadMore={loadMore}
        />
      </div>
    </div>
  );
}
