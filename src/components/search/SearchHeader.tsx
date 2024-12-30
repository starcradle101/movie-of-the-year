export const SearchHeader = ({ username }: { username: string | null }) => {
  return (
    <h1 className='text-center text-2xl leading-loose'>
      <span className='text-emerald-400'>{username}</span>님의{" "}
      <br aria-hidden='true' /> 올해의 영화는 무엇인가요?
    </h1>
  );
};
