import { useRef, useState } from "react";
import { useFocusTrap } from "../../hooks/useFocusTrap";

interface MovieSelectionModalProps {
  movie: Movie;
  username: string | null;
  userQuote: string;
  onQuoteChange: (quote: string) => void;
  onConfirm: () => void;
  onClose: () => void;
}

export const MovieSelectionModal = ({
  movie,
  username,
  userQuote,
  onQuoteChange,
  onConfirm,
  onClose,
}: MovieSelectionModalProps) => {
  const [error, setError] = useState("");
  const maxLength = 50;
  const modalRef = useRef<HTMLDivElement>(null);

  useFocusTrap({ containerRef: modalRef, onClose });

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      onQuoteChange(value);
      setError("");
    }
  };

  const handleConfirm = () => {
    if (!userQuote.trim()) {
      setError("한줄평을 입력해주세요");
      return;
    }
    onConfirm();
  };

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black/50'
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
    >
      <div
        className='w-[90%] max-w-md rounded-2xl bg-gray-800 p-6'
        ref={modalRef}
        tabIndex={-1}
      >
        <h2 className='mb-6 text-center text-xl text-white'>
          <span className='text-emerald-400'>{username}</span>
          <span className='whitespace-pre-wrap'>님은</span>
          <br aria-hidden='true' />
          <span className='break-words break-keep text-emerald-400'>
            {movie.title}
          </span>
          <span className='whitespace-pre-wrap'>을(를)</span>
          <br aria-hidden='true' />
          <span className='whitespace-pre-wrap'>
            올해의 영화로 선택해 주셨군요!
          </span>
        </h2>

        <div className='space-y-2'>
          <p className='text-gray-300'>이 영화에 대한 한줄평을 입력해 주세요</p>
          <input
            type='text'
            value={userQuote}
            onChange={handleQuoteChange}
            placeholder='한줄평을 입력해 주세요'
            className='w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white'
            aria-invalid={!!error}
            aria-describedby={error ? "quote-error" : undefined}
          />
          <div className='flex justify-between px-1 text-sm'>
            {error && (
              <div className='text-red-400' id='quote-error' role='alert'>
                {error}
              </div>
            )}
            <div
              className={`ml-auto text-gray-400 ${userQuote.length > maxLength && "text-red-400"}`}
            >
              {userQuote.length}/{maxLength}
            </div>
          </div>
        </div>

        <div className='mt-6 flex justify-center gap-3'>
          <button
            onClick={onClose}
            className='rounded-lg border border-gray-600 px-4 py-2 text-gray-300 hover:bg-gray-700'
          >
            다시 선택하기
          </button>
          <button
            onClick={handleConfirm}
            className='rounded-lg bg-emerald-500 px-4 py-2 text-[#121212] hover:bg-emerald-600'
          >
            결과 확인하기
          </button>
        </div>
      </div>
    </div>
  );
};
