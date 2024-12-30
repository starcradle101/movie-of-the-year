import { useNavigate } from "react-router";
import { useState } from "react";
import { validateName } from "../../utils/validation";

export default function UserPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, message } = validateName(name);
    if (!isValid) {
      setError(message || "입력이 올바르지 않습니다");
      return;
    }

    navigate(`/search?username=${encodeURIComponent(name)}`);
  };

  return (
    <div className='flex h-full flex-col py-10'>
      <h1 className='text-center text-2xl leading-loose'>
        크레딧의 첫 장면을 장식할
        <br />
        당신의 <span className='text-emerald-400'>이름</span>을 알려주세요
      </h1>

      <form
        onSubmit={handleSubmit}
        className='flex flex-1 flex-col items-center justify-between pt-8'
      >
        <div role='group' aria-labelledby='name-label'>
          <label id='name-label' htmlFor='name-input' className='sr-only'>
            이름 <span aria-label='필수 입력'>*</span>
          </label>
          <input
            id='name-input'
            type='text'
            value={name}
            onChange={handleNameChange}
            placeholder='이름을 입력해 주세요 *'
            className='h-12 w-72 border-b-2 border-emerald-400 bg-transparent text-xl text-white focus:outline-none'
            aria-required='true'
            aria-invalid={!!error}
            aria-describedby={error ? "name-error" : undefined}
          />
          {error && (
            <div
              className='pt-2 text-sm text-red-400'
              id='name-error'
              role='alert'
            >
              {error}
            </div>
          )}
        </div>
        <button
          type='submit'
          className='h-14 w-72 rounded-xl bg-emerald-400 px-6 py-4 text-center font-medium transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2'
        >
          다음으로
        </button>
      </form>
    </div>
  );
}
