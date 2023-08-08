import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../redux/actions/movieAction";
import { baseImgUrl } from "../components/Hero";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState();

  useEffect(() => {
    axios
      .get(`/movie/${movieId}`, options)
      .then((res) => setMovieDetail(res.data));
  }, []);

  console.log("movieeee", movieDetail);

  if (!movieDetail) return "Loading...";

  return (
    <div className=" d-flex movie-detail bg-dark text-light ">
      <div className="d-flex justify-content-center">
        <img className="w-50" src={`${baseImgUrl}${movieDetail.poster_path}`} />
      </div>

      <div>
        <h1>{movieDetail.title}</h1>
        <p>{movieDetail.overview}</p>
        <div className="row row-cols-2 ">
          <div>
            <p>Budget: {movieDetail.budget}$</p>
            <p>Revenue: {movieDetail.revenue}$</p>
          </div>

          <div>
            <div>
              Languages:
              {movieDetail.spoken_languages.map((lang) => (
                <p key={lang.id} className="badge">
                  {lang.name}
                </p>
              ))}
            </div>
            <div>
              Category:
              {movieDetail.genres.map((genre) => (
                <p className="badge"> {genre.name} </p>
              ))}
            </div>
            <div>
              Production:
              {movieDetail.production_companies.map((comp) => (
                <p className="badge">{comp.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
