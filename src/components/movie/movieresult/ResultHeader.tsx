interface ResultHeaderProps {
  username: string;
}

export function ResultHeader({ username }: ResultHeaderProps) {
  const currentYear = new Date().getFullYear();

  return (
    <header className='text-center'>
      <h1 className='mb-2 text-2xl font-bold md:text-3xl'>
        <span className='text-emerald-400'>{username}</span>님의 올해의 영화
      </h1>
      <p className='text-gray-400'>MOVIE OF THE YEAR {currentYear}</p>
    </header>
  );
}
