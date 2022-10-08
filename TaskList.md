### Setup
- [x] setup db
- [x] check for existing dependencies
- [x] install necessary dependencies 
- [x] run server and client (check for avail ports, update server and package json if ncecessary
* you should now see the movie list appear

### Home/Movie List page

* Display of movie list has been completed 
- [x] user clicks movie and taken to `/details` view for movie
    - [x] add onClick handler & function to the movies in list

- [x] movie clicked logged in console
- Dispatch movie clicked to store in selectedMovie reducer
- [x] create dispatch - type: `SET_MOVIE_DETAILS` in displayMovie function and payload : movieToDisplay 
- [x] commit here
- (import useHistory and set history variable)
- history.push after dispatch to send user to `/details`

[] - once working, maybe refactor into MovieItem comp

### Details View page 
- [x] add new component MovieDetails
- [x] import into App.js and create Route w/in Router
- [x] history.push in MovieList or MovieItem will move use here. Remember to import useHistory and set history variable 
- [x] display tite, poster and description on  `/deatils` page
- [x] base mode complete
--
- [x] retreive data details on refresh 
- add ${movieToDisplay.id} into history.push url
- add :id param in Route url path in App.js
[x] display details on DOM on refresh
- will need useEffect to display on refresh
- [x]import useParams from react-router-dom in MovieDetails comp
- [x] in useEffect dispatch `FETCH_MOVIE_DETAILS` with payload of movieId

- [x] create saga to run when  `FETCH_MOVIE_DETAILS` is called
    - yield takeEvery  `FETCH_MOVIE_DETAILS` 
- [x] create axios get route via generator function*fetchMovieDetails 
- [x] create GET route in  movierouter.js for specefic movie 
