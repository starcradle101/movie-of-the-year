export const EmptySearchResult = () => {
  return (
    <div
      role='alert'
      aria-live='polite'
      className='bg-vio flex h-48 flex-col items-center justify-center gap-4 p-4 text-white'
    >
      <div className='text-center'>
        <h2 className='mb-2 text-lg font-medium' id='empty-results-title'>
          검색 결과가 없습니다
        </h2>
        <p className='text-sm'>
          <span className='sr-only'>제안:</span>
          다른 검색어로 다시 시도해보세요
        </p>
      </div>
    </div>
  );
};
