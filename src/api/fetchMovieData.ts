export const fetchMovieData = async (
  query: string,
  page: number = 1,
): Promise<MovieFetchResponse> => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=true&language=ko-KR&page=${page}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
    },
  };
  const response = await fetch(url, options);

  if (!response.ok) throw new Error("영화 정보 불러오기에 실패했습니다");
  return response.json();
};
