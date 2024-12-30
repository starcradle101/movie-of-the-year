import { useState } from "react";
import { useNavigate } from "react-router";

export const useMovieSelection = (username: string | null) => {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [userQuote, setUserQuote] = useState("");

  const handleMovieConfirm = () => {
    if (!selectedMovie) return;

    const params = new URLSearchParams();
    params.set("username", username || "");
    params.set("movieId", selectedMovie.id.toString());
    params.set("movieTitle", selectedMovie.title);
    params.set("poster", selectedMovie.poster_path || "");
    params.set("quote", userQuote.trim());

    navigate(`/result?${params.toString()}`);
  };

  return {
    selectedMovie,
    setSelectedMovie,
    userQuote,
    setUserQuote,
    handleMovieConfirm,
  };
};
