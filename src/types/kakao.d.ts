// types/kakao.d.ts

interface KakaoShareButton {
  title: string;
  link: {
    webUrl?: string;
    mobileWebUrl?: string;
  };
}

interface KakaoContent {
  title: string;
  description: string;
  imageUrl: string;
  link: {
    webUrl?: string;
    mobileWebUrl?: string;
  };
}

interface KakaoDefaultOptions {
  objectType: "feed" | "list" | "commerce" | "text" | "location";
  content: KakaoContent;
  buttons?: KakaoShareButton[];
  social?: {
    likeCount?: number;
    commentCount?: number;
    sharedCount?: number;
  };
}

interface KakaoCustomOptions {
  templateId: number;
  templateArgs: Record<string, string>;
}

interface KakaoShareAPI {
  sendDefault: (options: KakaoDefaultOptions) => void;
  sendCustom: (options: KakaoCustomOptions) => void;
}

interface KakaoSDK {
  init: (appKey: string) => void;
  isInitialized: () => boolean;
  Share: KakaoShareAPI;
}

declare global {
  interface Window {
    Kakao: KakaoSDK;
  }
}

export {};
