import { useSearchParams } from "react-router";
import { MovieList } from "../../components/movie/MovieList";
import { SearchHeader } from "../../components/search/SearchHeader";
import { SearchForm } from "../../components/search/SearchForm";
import { MovieSelectionModal } from "../../components/movie/MovieSelectionModal";
import { useMovieSearch } from "../../hooks/useMovieSearch";
import { useMovieSelection } from "../../hooks/useMovieSelection";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");

  const { searchTerm, setSearchTerm, fetchState, handleSearch, loadMore } =
    useMovieSearch();

  const {
    selectedMovie,
    setSelectedMovie,
    userQuote,
    setUserQuote,
    handleMovieConfirm,
  } = useMovieSelection(username);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <div className='flex h-full flex-col overflow-hidden py-4'>
      <SearchHeader username={username} />

      <SearchForm
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSubmit={handleSubmit}
      />

      <div className='flex-1 overflow-y-scroll scrollbar-hide'>
        <MovieList
          movies={fetchState.data}
          isLoading={fetchState.loading}
          error={fetchState.error}
          hasMore={fetchState.hasMore}
          onLoadMore={loadMore}
          onMovieSelect={setSelectedMovie}
        />
      </div>

      {selectedMovie && (
        <MovieSelectionModal
          movie={selectedMovie}
          username={username}
          userQuote={userQuote}
          onQuoteChange={setUserQuote}
          onConfirm={handleMovieConfirm}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
