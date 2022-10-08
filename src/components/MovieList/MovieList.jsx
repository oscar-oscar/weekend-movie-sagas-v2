import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
// dispatching action = FETCH MOVIES which triggers root saga listening for FETCH MOVIES
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //movie that we clicked on
    const displayMovie = (movieToDisplay) => {
        // we want to know that it's actually an object
        // with properties not something unexpected
        // should see object with properties of movie clicked
        console.log(movieToDisplay);

    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {/* movies is an array */}
                {movies.map(movie => {
                    // loop over array and for each movie
                    // in array, display on the DOM
                    // movie is an object w/various properties. Can check array in console for
                    // movies reducer to see whats in the object 
                    // or server side code to see what will be returned
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            {/* //arrow function needed because onClick needs
                            function to call when clicked on img
                            function needs to know what movie it's diplaying
                            this is done by passing movie from map into displayMovie .
                            if using comp, selected movie will be the prop 
                            function below is passed and event. not necess to
                            do anything with event
                                          event              argument */}
                            <img onClick={(event) => displayMovie(movie)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;