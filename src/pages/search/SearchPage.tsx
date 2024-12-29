import { useSearchParams } from "react-router";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");

  return (
    <>
      <h1>{username}님, 올해의 영화를 선택해주세요.</h1>
      <form action=''></form>
    </>
  );
}
