//dispatch sent info into redux
//useSelector will pull out info from redux
import { useDispatch, useSelector } from 'react-redux'


function MovieDetails() {
    //get movie details out and assign to reducer
    // saving movieDetails into selectedMovie
    // now we can movie properties in return move.poster ect.
    const movieDetails = useSelector(store => store.selectedMovie)

    return (
        <div>
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