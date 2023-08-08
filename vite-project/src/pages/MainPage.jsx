import Hero from "../components/Hero";
import MovieCtagories from "../components/MovieCtagories";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilms, getGenres } from "../redux/actions/movieAction";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);

  console.log(state.genres);

  useEffect(() => {
    dispatch(getFilms());

    dispatch(getGenres());
  }, []);
  return (
    <div className="bg-dark text-light">
      <Hero />
      {state.genres.slice(0, 10).map((genre) => (
        <MovieCtagories
          key={genre.id}
          title={genre.name}
          fetchUrl={`discover/movie?with_genres=${genre.id}`}
        />
      ))}
    </div>
  );
};

export default MainPage;

// acde0e6ef95c33a1cb9b329f73222a01 --- API key
