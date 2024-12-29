import { useNavigate } from "react-router";
import backIcon from "../../assets/icons/navigate-back-icon.svg";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header role='banner' className='py-4'>
      <button
        onClick={() => navigate(-1)}
        className='flex items-center rounded-lg transition-colors hover:bg-gray-800'
        aria-label='이전으로 돌아가기'
      >
        <img src={backIcon} alt='' className='h-5 w-5' aria-hidden='true' />
        <span className='ml-1 self-center text-center text-base'>이전으로</span>
      </button>
    </header>
  );
};
