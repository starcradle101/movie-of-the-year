import downloadImage from "../assets/icons/image-download-icon.svg";
import kakaoMedium from "../assets/icons/kakaotalk_sharing_btn_medium.png";
import linkIcon from "../assets/icons/link-icon.svg";

export const SHARE_IMAGES = {
  KAKAO: {
    MEDIUM: kakaoMedium,
  },
  URL: linkIcon,
  DOWNLOADIMAGE: downloadImage,
} as const;

export const getShareButtons = (
  handleKakaoShare: () => void,
  handleCopyUrl: () => void,
  handleDownloadImage: () => void,
) => [
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
