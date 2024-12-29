import { useNavigate } from "react-router";
import motyLogo from "../../assets/moty-logo.svg";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <section
      className='flex h-full flex-col items-center justify-between py-16'
      aria-labelledby='page-title'
    >
      <h1 className='text-center text-4xl' id='page-title'>
        모티: 올해의 영화
      </h1>
      <div
        className='flex flex-col gap-4'
        role='banner'
        aria-labelledby='page-title'
      >
        <img
          src={motyLogo}
          alt='MOTY - Movie Of The Year 로고'
          className='mx-auto block h-48 w-48'
          width={192}
          height={192}
        />
        <p className='break-all text-center text-xl'>
          특별했던 그 영화,
          <br aria-hidden='true' />
          <span className='text-emerald-400'>모티</span>와 함께 나누어 보세요
        </p>
      </div>

      <button
        onClick={() => navigate("/user")}
        className='h-14 w-72 rounded-xl bg-emerald-400 px-6 py-4 text-center font-medium transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2'
        aria-label='영화 선택 페이지로 이동하기'
      >
        영화 모티하기
      </button>
    </section>
  );
}
