export const API = {
  BASE_URL: "https://api.themoviedb.org/3",
  ENDPOINTS: {
    SEARCH_MOVIE: "/search/movie",
  },
  PARAMS: {
    LANGUAGE: "ko-KR",
    INCLUDE_ADULT: true,
  },
  OPTIONS: {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
    },
  },
} as const;
