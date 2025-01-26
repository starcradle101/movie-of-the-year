export const EmptySearchResult = () => {
  return (
    <div
      role='alert'
      aria-live='assertive'
      className='flex h-full flex-col items-center gap-4 pt-16 text-white'
    >
      <h2
        className='mb-3 text-xl font-medium lg:text-2xl'
        id='empty-results-title'
      >
        검색 결과가 없습니다
      </h2>
      <div className='space-y-2 text-sm text-gray-200 lg:text-base'>
        <p className='mt-4'>
          <span aria-hidden='true' className='mr-1'>
            💡
          </span>
          <span className='sr-only'>팁</span>
          검색이 잘 되지 않나요? 다음과 같이 검색해 보세요:
        </p>
        <ul className='list-inside list-disc'>
          <li>영화 제목을 정확하게 입력해주세요 (예: "인사이드 아웃")</li>
          <li>띄어쓰기를 포함하여 검색해주세요</li>
        </ul>
      </div>
    </div>
  );
};
