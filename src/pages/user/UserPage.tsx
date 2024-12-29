import { useState } from "react";
import { useNavigate } from "react-router";

export default function UserPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?username=${encodeURIComponent(name)}`);
  };

  return (
    <>
      <h1 className='text-center text-3xl leading-loose'>
        주연은 바로 당신!
        <br />
        <span className='text-emerald-400'>이름</span>을 알려주세요
      </h1>
      <form onSubmit={handleSubmit}>
        <div role='group' aria-labelledby='name-label'>
          <label id='name-label' htmlFor='name-input' className='sr-only'>
            이름
          </label>
          <input
            id='name-input'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='이름을 입력해 주세요'
            className='text-black'
            aria-required='true'
            autoComplete='name'
          />
        </div>
        <button type='submit' aria-label='다음 페이지로 이동'>
          다음
        </button>
      </form>
    </>
  );
}
