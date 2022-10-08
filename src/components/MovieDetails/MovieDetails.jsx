//dispatch sent info into redux
//useSelector will pull out info from redux
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// params will allow us to get id out of url onto details page
import { useParams } from 'react-router-dom'


function MovieDetails() {
    //get movie details out and assign to reducer
    // saving movieDetails into selectedMovie
    // now we can movie properties in return move.poster ect.
    const movieDetails = useSelector(store => store.selectedMovie)
    //client side url param 
    // destructuring syntax
    // whatever is after ":" in Route path is what's
    // pulled out below in params 
    const { movieId } = useParams();
    const dispatch = useDispatch();

    // useEffect dispatches FETCH_MOVIE_DETAILS whenever movieId changes
    // not soley upon page refresh
    //useEffect runs when movieId changes and dispatches action
    //FETCH_MOVIE_DETAILS
    // to know which movie to fetch deails for we need to pass movieId 
    // into the payload. This is the "/details/:movieId" url and that's
    // why we use movieId via useParams
    // a saga in index.js will be neeeded to run when we call FETCH_MOVIE_DETAILS

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: movieId });
    }, [movieId])

    return (
        <div>
            {/* h1: to test params is working. Should see id# displayed when refreshed */}
            <h1>{movieId}</h1>
            <h3> Movie Title</h3>
            <img src={movieDetails.poster} alt={movieDetails.title} />
            <h3>Movie Description </h3>
            <br />
            <p>
                {movieDetails.description}
            </p>
        </div>
    )
}

//check router in App and/or create if necessary.
export default MovieDetails;