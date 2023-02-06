import './App.css';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './Catalogue';
import MovieDetails from './MovieDetails';
import ErrorPage from './ErrorPage';

function App() {

  return (
    <div className="wrapper">
      <header>
        <h1>Hackflix</h1>
      </header>
      {/* {create paths allowing us to reneder things depending on the url} */}
      <Routes>
        {/* Show catalogue on defualt path / */}
        <Route path="/" element={ <Catalogue /> } />
        {/* show the MovieDetails component on /movie/:movieID */}
        <Route path="/movie/:movieID" element={ <MovieDetails />} />
        {/* show the error page for routes that don't exist */}
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </div>
  );
}

export default App;

// load /movies/movieID (where movie ID is the movie's ID)
// load a component that calls our API with the movie's ID to get details about that movie
// put those details on the page