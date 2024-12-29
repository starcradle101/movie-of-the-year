import { useEffect, useRef } from "react";
import { MovieItem } from "./MovieItem";

interface MovieListProps {
  movies: Movie[];
  isLoading: boolean;
  error: Error | null;
  hasMore: boolean;
  onLoadMore: () => void;
}

export const MovieList = ({
  movies,
  isLoading,
  error,
  hasMore,
  onLoadMore,
}: MovieListProps) => {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          onLoadMore();
        }
      },
      { threshold: 1.0 },
    );

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasMore, isLoading, onLoadMore]);

  if (error) {
    return <div className='text-center text-red-500'>{error.message}</div>;
  }

  return (
    <section className='grid grid-cols-2 gap-4 p-2 md:grid-cols-3'>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}

      <div
        ref={observerRef}
        className='col-span-2 py-4 text-center md:col-span-3'
      >
        {isLoading
          ? "불러오는 중..."
          : hasMore
            ? "스크롤하여 더보기"
            : movies.length > 0
              ? "모든 영화를 불러왔어요!"
              : null}
      </div>
    </section>
  );
};
