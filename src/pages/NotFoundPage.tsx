import { useNavigate } from "react-router";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className='flex min-h-screen flex-col items-center justify-center gap-6'
      role='alert'
      aria-live='assertive'
    >
      <h1 className='text-4xl font-bold' id='not-found-title'>
        404 오류
      </h1>
      <p className='mt-2 text-center text-xl' id='not-found-description'>
        죄송합니다.
        <br aria-hidden='true' />
        요청하신 페이지를 찾을 수 없습니다.
      </p>
      <button
        onClick={() => navigate("/")}
        aria-describedby='not-found-title not-found-description'
        className='mt-4 rounded bg-emerald-500 px-4 py-2 text-lg text-[#121212] hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300'
      >
        메인 페이지로 돌아가기
      </button>
    </div>
  );
};
