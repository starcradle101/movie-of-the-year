interface ShareButtonItem {
  image: {
    src: string;
    alt: string;
    isMobile?: boolean;
  };
  text: string;
  onClick: () => void;
  bgColor: string;
  disabled?: boolean;
}

interface UseShareButtonsProps {
  username: string;
  targetId: string;
  isCapturing: boolean;
  handleCapture: () => void;
}

interface ShareButtonListProps {
  buttons: ShareButtonItem[];
}
