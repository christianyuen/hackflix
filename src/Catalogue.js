import { useState, useEffect } from "react";
import axios from "axios";
// import the link component to allow us to build out new links
import { Link } from "react-router-dom";

const Catalogue = () => {
  // Set up movie state
  const [movies, setMovies] = useState([]);

  // On component mount (useEffect...)
  useEffect( () => {
  // Fetch list of popular movies for a specific year from TMDB API with Axios
    axios({
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
          api_key:'b8fc23a253fdef96105bf51ae9934de6',
          language: 'en-US',
          sort_by: 'popularity.desc',
          include_adult: 'false',
          include_video: 'false',
          page: 1,
          primary_release_year: 1999,
      }
      }).then( (res) => {
      console.log(res.data.results);
      // Store those movies in state (useState)
      setMovies(res.data.results);
      });
  }, []);

  return (
    // Map through the movies state to render JSX with the movie posters (movie component?)
    <ul className="catalogue">
      {
      movies.map( (movie) => 
      // We are using the ES6 function's implicit return here instead of writing the whole function block
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster for ${movie.original_title}`} />
          </Link>
        </li>
      ) 
      }
    </ul>
  )
}

export default Catalogue;