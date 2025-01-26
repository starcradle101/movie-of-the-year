import defaultPoster from "/images/default-poster.png";
import motyLogo from "../../../assets/moty-logo.svg";

interface MovieInfoProps {
  movieTitle: string;
  posterPath: string | null;
  quote: string;
}

export function MovieInfo({ movieTitle, posterPath, quote }: MovieInfoProps) {
  return (
    <section aria-label='영화 정보' className='mx-auto my-8 max-w-sm'>
      <div className='relative mx-4 rounded-2xl bg-gradient-to-br from-white to-gray-100 p-6 shadow-xl'>
        <div className='border-b border-dashed border-gray-300 pb-4'>
          <img
            src={
              posterPath
                ? `https://image.tmdb.org/t/p/w342${posterPath}`
                : defaultPoster
            }
            alt={`${movieTitle} 포스터`}
            className='mx-auto mb-4 aspect-[2/3] w-full rounded-lg object-cover shadow-md'
            loading='eager'
          />
          <h2 className='text-center text-xl font-bold text-gray-800'>
            {movieTitle}
          </h2>
        </div>

        <div className='mt-4 space-y-4'>
          <div className='text-center'>
            <p className='text-xs text-gray-500'>한줄평</p>
            <p className='mt-1 text-sm italic text-gray-700'>"{quote}"</p>
          </div>

          <img
            src={motyLogo}
            alt='MOTY 로고'
            className='mx-auto mt-6 h-16 w-16'
          />
        </div>
      </div>
    </section>
  );
}

export default MovieInfo;
