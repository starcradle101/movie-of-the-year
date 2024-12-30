import { useSearchParams } from "react-router";
import { EmptyResult } from "../../components/movie/EmptyResult";
import { MovieResult } from "../../components/movie/MovieResult";

export default function ResultPage() {
  const [searchParams] = useSearchParams();

  const username = searchParams.get("username");
  const movieTitle = searchParams.get("movieTitle");
  const posterPath = searchParams.get("poster");
  const quote = searchParams.get("quote");

  if (!username || !movieTitle || !quote) {
    return <EmptyResult />;
  }

  return (
    <MovieResult
      username={username}
      movieTitle={movieTitle}
      posterPath={posterPath}
      quote={quote}
    />
  );
}
