import kakaoMedium from "../../assets/icons/kakaotalk_sharing_btn_medium.png";
import linkIcon from "../../assets/icons/link-icon.svg";
import { useEffect } from "react";
import { ResultHeader } from "./movieresult/ResultHeader";
import { MovieInfo } from "./movieresult/MovieInfo";
import { ShareSection } from "./movieresult/ShareSection";
import { BottomLink } from "./movieresult/BottomLink";

const SHARE_IMAGES = {
  KAKAO: {
    MEDIUM: kakaoMedium,
  },
  URL: linkIcon,
} as const;

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
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_KEY);
    }
  }, []);

  const handleKakaoShare = () => {
    if (!window.Kakao) return;

    const imageUrl = posterPath
      ? `https://image.tmdb.org/t/p/w500${posterPath}`
      : "/images/default-poster.png";

    window.Kakao.Share.sendCustom({
      templateId: 115794,
      templateArgs: {
        USERNAME: username,
        TITLE: movieTitle,
        THUMB: imageUrl,
        QUOTE: quote,
      },
    });
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("URL이 복사되었습니다!");
  };

  const shareButtons = [
    {
      image: {
        src: SHARE_IMAGES.KAKAO.MEDIUM,
        alt: "카카오톡 공유 아이콘",
        isMobile: false,
      },
      text: "카카오톡",
      onClick: handleKakaoShare,
      bgColor: "bg-yellow-500 hover:bg-yellow-400 text-black",
    },
    {
      image: {
        src: SHARE_IMAGES.URL,
        alt: "URL 복사 아이콘",
      },
      text: "링크 복사",
      onClick: handleCopyUrl,
      bgColor: "bg-gray-700 hover:bg-gray-600",
    },
  ];

  return (
    <section className='h-full overflow-y-auto py-8'>
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

export default MovieResult;
