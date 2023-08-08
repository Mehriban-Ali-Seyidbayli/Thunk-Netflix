import { useSelector } from "react-redux";

export const baseImgUrl = "https://image.tmdb.org/t/p/original/";

const Hero = () => {
  const state = useSelector((store) => store.movieReducer);

  const index = Math.round(Math.random() * 19);

  const film = state.popularFilms[index];

  return (
    <div className="row bg-dark text-light p-4">
      <div className="col-md-6 gap-3 mb-3 d-flex flex-column justify-content-center">
        <h1>{film?.title}</h1>
        <p className="text-warning">IMDB: {film?.vote_average}</p>
        <p>{film?.overview}</p>

        <div className="d-flex gap-3 justify-content-center">
          <button className="btn btn-danger">Watch Now</button>
          <button className="btn btn-info">Add List</button>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-center">
        <img
          className="img-fluid rounded"
          src={`${baseImgUrl}${film?.backdrop_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
