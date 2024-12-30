import defaultPoster from "/images/default-poster.png";

type MovieItemProps = {
  movie: Movie;
  onClick?: () => void;
};

export const MovieItem = ({ movie, onClick }: MovieItemProps) => {
  const formattedDate = movie?.release_date
    ? movie.release_date.slice(0, 7).replace("-", ". ")
    : "개봉일 미정";

  return (
    <button
      onClick={onClick}
      type='button'
      className='group relative w-full cursor-pointer overflow-hidden rounded-xl bg-gray-800 text-left transition-all hover:ring-2 hover:ring-emerald-400'
    >
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
            : defaultPoster
        }
        alt={movie.title}
        className='aspect-[2/3] w-full object-cover transition-opacity group-hover:opacity-75'
        loading='lazy'
      />
      <div className='absolute bottom-0 w-full bg-black/60 p-4 backdrop-blur-sm'>
        <h3 className='mb-1 truncate text-base font-medium text-white'>
          {movie.title}
        </h3>
        <p className='text-sm text-gray-300'>{formattedDate}</p>
      </div>
    </button>
  );
};
