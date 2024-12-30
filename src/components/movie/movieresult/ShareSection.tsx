interface ShareButtonItem {
  image: {
    src: string;
    alt: string;
    isMobile?: boolean;
  };
  text: string;
  onClick: () => void;
  bgColor: string;
}

interface ShareSectionProps {
  shareButtons: ShareButtonItem[];
}

export function ShareSection({ shareButtons }: ShareSectionProps) {
  return (
    <div className='mb-12'>
      <p className='mb-4 text-center text-lg text-gray-400'>공유하기</p>
      <div className='grid grid-cols-2 gap-4'>
        {shareButtons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className={`flex flex-col items-center justify-center gap-2 rounded-xl p-4 transition-colors ${button.bgColor}`}
          >
            <img
              src={button.image.src}
              alt={button.image.alt}
              className='h-6 w-6'
            />
            <span className='text-sm'>{button.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
