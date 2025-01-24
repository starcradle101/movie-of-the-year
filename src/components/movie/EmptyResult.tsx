import { Link } from "react-router";

export function EmptyResult() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-2 py-8 text-white'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold md:text-4xl'>앗!</h1>
        <p className='mt-4 text-xl text-gray-300'>
          아직 올해의 영화를 선택하지 않으셨네요.
        </p>
        <p className='mt-2 text-gray-400'>
          모티와 함께 나만의 올해의 영화를 골라보세요!
        </p>
        <Link
          to='/'
          className='mt-8 inline-block rounded-xl bg-emerald-500 px-8 py-3 text-[#121212] transition-colors hover:bg-emerald-400'
        >
          영화 선택하러 가기
        </Link>
      </div>
    </div>
  );
}
