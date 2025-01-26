import { API } from "../constants/api";

export const fetchMovieData = async (
  query: string,
  page: number = 1,
): Promise<MovieFetchResponse> => {
  const url = `${API.BASE_URL}${API.ENDPOINTS.SEARCH_MOVIE}?query=${encodeURIComponent(query)}&include_adult=${API.PARAMS.INCLUDE_ADULT}&language=${API.PARAMS.LANGUAGE}&page=${page}`;

  const response = await fetch(url, {
    method: "GET",
    headers: API.OPTIONS.headers,
  });

  if (!response.ok) throw new Error("영화 정보 불러오기에 실패했습니다");
  return response.json();
};
