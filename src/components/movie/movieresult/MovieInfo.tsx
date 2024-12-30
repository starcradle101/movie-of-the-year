import defaultPoster from "/images/default-poster.png";

interface MovieInfoProps {
  movieTitle: string;
  posterPath: string | null;
  quote: string;
}

export function MovieInfo({ movieTitle, posterPath, quote }: MovieInfoProps) {
  return (
    <div className='mb-8 rounded-xl bg-gray-800 p-6'>
      <div className='flex flex-col gap-6 md:flex-row'>
        <div className='w-full md:w-1/2'>
          <img
            src={
              posterPath
                ? `https://image.tmdb.org/t/p/w500${posterPath}`
                : defaultPoster
            }
            alt={movieTitle}
            className='aspect-[2/3] w-full rounded-xl object-cover shadow-lg'
          />
        </div>
        <div className='flex w-full flex-col justify-between md:w-1/2'>
          <div>
            <h2 className='mb-6 break-words break-keep text-2xl font-bold'>
              {movieTitle}
            </h2>
            <div className='space-y-4'>
              <div>
                <p className='text-sm text-gray-400'>한줄평</p>
                <p className='break-words break-keep text-lg italic leading-relaxed'>
                  "{quote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
