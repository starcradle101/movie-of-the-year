import { useEffect, useRef } from "react";
import { MovieItem } from "./MovieItem";
import { MovieListSkeleton } from "./MovieSkeletons";
import { EmptySearchResult } from "./EmptySearchResult";

interface MovieListProps {
  movies: Movie[];
  isLoading: boolean;
  error: Error | null;
  hasMore: boolean;
  onLoadMore: () => void;
  onMovieSelect: (movie: Movie) => void;
}

export const MovieList = ({
  movies,
  isLoading,
  error,
  hasMore,
  onLoadMore,
  onMovieSelect,
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

  if (!isLoading && movies.length === 0) {
    return <EmptySearchResult />;
  }

  return (
    <section className='grid grid-cols-2 gap-4 p-2 md:grid-cols-3'>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onClick={() => onMovieSelect(movie)}
        />
      ))}

      {isLoading && <MovieListSkeleton />}

      {movies.length > 0 && (
        <div
          ref={observerRef}
          className='col-span-2 py-4 text-center text-gray-400 md:col-span-3'
        >
          {hasMore ? "스크롤하여 더보기" : "모든 영화를 불러왔어요!"}
        </div>
      )}
    </section>
  );
};
