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
    <section aria-labelledby='share-heading' className='mb-8'>
      <h2 id='share-heading' className='mb-4 text-center text-lg'>
        공유하기
      </h2>
      <div className='mx-auto grid max-w-sm grid-cols-3 gap-4'>
        {shareButtons.map((button) => (
          <button
            key={button.text}
            onClick={button.onClick}
            className={`flex flex-col items-center justify-center gap-2 rounded-xl p-2 transition-colors ${button.bgColor}`}
          >
            <img
              aria-hidden='true'
              src={button.image.src}
              alt=''
              className='h-6 w-6'
            />
            <span className='text-sm'>{button.text}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
