import { useEffect } from "react";
import html2canvas from "html2canvas";

interface UseShareProps {
  username: string;
  movieTitle: string;
  posterPath: string | null;
  quote: string;
}

export function useResultShare({
  username,
  movieTitle,
  posterPath,
  quote,
}: UseShareProps) {
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
    alert("URL이 복사되었습니다!\n친구에게 공유해 보세요 😆");
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

  return {
    handleKakaoShare,
    handleCopyUrl,
    handleDownloadImage,
  };
}
