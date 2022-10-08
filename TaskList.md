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
- [x] import into App.js and create Route in Router
- [] history.push in MovieList or MovieItem will move user here
  (import useHistory and set history variable)
