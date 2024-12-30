import searchIcon from "../../assets/icons/search-icon.svg";

interface SearchFormProps {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function SearchForm({
  searchTerm,
  onSearchTermChange,
  onSubmit,
}: SearchFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className='flex items-center justify-center gap-4 py-8'
    >
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        placeholder='영화 제목을 검색해 주세요 *'
        className='h-12 w-64 border-b-2 border-emerald-400 bg-transparent text-xl text-white focus:outline-none'
      />
      <button type='submit' className='rounded-xl bg-emerald-400 p-2'>
        <img src={searchIcon} alt='검색하기' className='h-5 w-5' />
      </button>
    </form>
  );
}
