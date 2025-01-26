import downloadImage from "../../assets/icons/image-download-icon.svg";
import kakaoMedium from "../../assets/icons/kakaotalk_sharing_btn_medium.png";
import linkIcon from "../../assets/icons/link-icon.svg";
import { useEffect } from "react";
import { ResultHeader } from "./movieresult/ResultHeader";
import { MovieInfo } from "./movieresult/MovieInfo";
import { ShareSection } from "./movieresult/ShareSection";
import { BottomLink } from "./movieresult/BottomLink";
import html2canvas from "html2canvas";

const SHARE_IMAGES = {
  KAKAO: {
    MEDIUM: kakaoMedium,
  },
  URL: linkIcon,
  DOWNLOADIMAGE: downloadImage,
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

  const handleDownloadImage = async () => {
    const movieResultSection = document.querySelector("#movie-result");
    if (!movieResultSection) return;

    const header = movieResultSection.querySelector("header");
    const movieInfoSection = movieResultSection.querySelector(
      'section[aria-label="영화 정보"]',
    );

    if (!header || !movieInfoSection) return;

    const captureContainer = document.createElement("div");
    captureContainer.className =
      "mx-auto max-w-2xl px-4 py-8 text-white bg-[#121212]";
    captureContainer.appendChild(header.cloneNode(true));
    captureContainer.appendChild(movieInfoSection.cloneNode(true));

    const posterImg = captureContainer.querySelector("img");
    if (posterImg && posterPath) {
      posterImg.crossOrigin = "anonymous";
      posterImg.src = `https://image.tmdb.org/t/p/w500${posterPath}?timestamp=${Date.now()}`;
    }

    document.body.appendChild(captureContainer);

    try {
      const canvas = await html2canvas(captureContainer, {
        scale: 2,
        allowTaint: true,
        useCORS: true,
        logging: false,
        removeContainer: true,
        imageTimeout: 0,
      });

      const link = document.createElement("a");
      link.download = `${username}_movie_of_the_year.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("이미지 저장 중 오류 발생:", error);
      alert("이미지 저장에 실패했습니다.");
    } finally {
      document.body.removeChild(captureContainer);
    }
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
    {
      image: {
        src: SHARE_IMAGES.DOWNLOADIMAGE,
        alt: "이미지 다운로드 아이콘",
      },
      text: "이미지 저장",
      onClick: handleDownloadImage,
      bgColor: "bg-gray-700 hover:bg-gray-600",
    },
  ];

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

export default MovieResult;
