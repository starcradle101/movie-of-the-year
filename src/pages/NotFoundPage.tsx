import { useNavigate } from "react-router";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold'>404</h1>
      <p className='mt-2'>페이지를 찾을 수 없습니다</p>
      <button
        onClick={() => navigate("/")}
        className='mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
      >
        메인으로
      </button>
    </div>
  );
};
