import { useNavigate } from "react-router";
import backIcon from "../../assets/icons/navigate-back-icon.svg";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header role='banner' className='py-6'>
      <button
        onClick={() => navigate(-1)}
        className='flex items-center rounded-lg p-3 transition-colors hover:bg-gray-800'
        aria-label='이전으로 돌아가기'
      >
        <img src={backIcon} alt='' className='h-6 w-6' aria-hidden='true' />
        <span className='ml-2 self-center text-center text-base'>이전으로</span>
      </button>
    </header>
  );
};
