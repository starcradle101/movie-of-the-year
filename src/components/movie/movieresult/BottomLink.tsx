import { Link } from "react-router";

export function BottomLink() {
  return (
    <div className='space-y-4 text-center'>
      <p className='text-lg'>내가 뽑은 올해의 영화는?</p>
      <Link
        to='/'
        className='inline-block rounded-lg bg-emerald-500 px-8 py-3 text-[#121212] transition-colors hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2'
        role='button'
      >
        지금 바로 골라보기
      </Link>
    </div>
  );
}
