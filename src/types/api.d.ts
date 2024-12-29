declare type Movie = {
  poster_path: string | null;
  title: string;
  release_date: string;
  id: number;
};

declare type MovieFetchResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
};

declare type MovieDataFetchState = {
  data: Movie[];
  loading: boolean;
  error: Error | null;
  page: number;
  totalPages: number;
  hasMore: boolean;
};
