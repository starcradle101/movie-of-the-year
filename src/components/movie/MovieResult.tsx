import { ResultHeader } from "./movieresult/ResultHeader";
import { MovieInfo } from "./movieresult/MovieInfo";
import { ShareSection } from "./movieresult/ShareSection";
import { BottomLink } from "./movieresult/BottomLink";
import { useResultShare } from "../../hooks/useResultShare";
import { getShareButtons } from "../../constants/share";

interface MovieResultProps {
  username: string;
  movieTitle: string;
  posterPath: string | null;
  quote: string;
}

export function MovieResult({
  username,
  movieTitle,
  posterPath,
  quote,
}: MovieResultProps) {
  const { handleKakaoShare, handleCopyUrl, handleDownloadImage } =
    useResultShare({
      username,
      movieTitle,
      posterPath,
      quote,
    });

  const shareButtons = getShareButtons(
    handleKakaoShare,
    handleCopyUrl,
    handleDownloadImage,
  );

  return (
    <section
      className='h-full overflow-y-auto py-8 scrollbar-hide'
      id='movie-result'
    >
      <ResultHeader username={username} />
      <MovieInfo
        movieTitle={movieTitle}
        posterPath={posterPath}
        quote={quote}
      />
      <ShareSection shareButtons={shareButtons} />
      <BottomLink />
    </section>
  );
}
