export const SearchHeader = ({ username }: { username: string | null }) => {
  const displayName = username || "사용자";

  return (
    <h1
      aria-label={`${displayName}님의 올해의 영화 검색`}
      className='text-center text-2xl leading-loose'
    >
      <span className='text-emerald-400'>{displayName}</span>님의{" "}
      <br aria-hidden='true' /> 올해의 영화는 무엇인가요?
    </h1>
  );
};
