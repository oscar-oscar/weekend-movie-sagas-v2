import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      ≈
      <Router>
        <h1>The Movies Saga!</h1>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page 
        -we added the  movie id parameter to retrieve details
        upon page refresh
        -should now see id number in url*/}
        <Route path="/details/:id" exact>
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
