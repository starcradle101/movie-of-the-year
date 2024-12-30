import { useSearchParams } from "react-router";
import { EmptyResult } from "../../components/movie/EmptyResult";
import { MovieResult } from "../../components/movie/MovieResult";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        <title>{`${username}님의 올해의 영화는 ${movieTitle}`}</title>
        <meta name='description' content={quote} />
        <meta
          property='og:title'
          content={`${username}님의 올해의 영화는 ${movieTitle}`}
        />
        <meta property='og:description' content={quote} />
        <meta
          property='og:image'
          content={
            posterPath
              ? `https://image.tmdb.org/t/p/w300${posterPath}`
              : "/images/default-poster.png"
          }
        />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='ko_KR' />
      </Helmet>
      <MovieResult
        username={username}
        movieTitle={movieTitle}
        posterPath={posterPath}
        quote={quote}
      />
    </>
  );
}
