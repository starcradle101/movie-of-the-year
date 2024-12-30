interface MovieListSkeletonProps {
  count?: number;
}

export const MovieListSkeleton = ({ count = 6 }: MovieListSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <MovieItemSkeleton key={index} />
      ))}
    </>
  );
};

const MovieItemSkeleton = () => {
  return (
    <div className='relative w-full overflow-hidden rounded-xl bg-gray-800'>
      <div className='aspect-[2/3] w-full animate-pulse bg-gray-700' />

      <div className='absolute bottom-0 w-full bg-black/60 p-4 backdrop-blur-sm'>
        <div className='mb-1 h-6 w-3/4 animate-pulse rounded bg-gray-700' />
        <div className='h-4 w-1/2 animate-pulse rounded bg-gray-700' />
      </div>
    </div>
  );
};
