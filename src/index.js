import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, take } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
// 1: listening for actions to call function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE_DETAILS',fetchMovieDetails )
}

function* fetchMovieDetails(action){
    try{
        // the action.payload here == movieId in payload from the dispatch
        // in useEffect. 
        // we want the movie id from url "movieId" dispatch with the action to fetch
        // specific movie from server - check movierouter.js if route exists
        const movie = yield axios.get(`/api/movie/${action.payload}`);
        yield put({ type: 'SET_MOVIE_DETAILS', payload: movie.data});
        // can add multiple yields w/in a generator function since the genre is technically
        // part of the movie details. Non related aspects should be in seperate saga (generator function)
        // fetch genres
        // check to see if you need query in genrerouter.js
        // this will be populating in genres reducer
        const genres = yield axios.get(`/api/genre/${action.payload}`);
        yield put({ type: 'SET_GENRES', payload: genres.data}); //genres.data is response from server
    }catch (error){
        console.log('get details error', error);
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    // 2.axios GET request. response is passed through reducer: SET MOVIES
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
    //                                  data from the server (is an object)
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
// listens for SET MOVIES from axios and adds movies into 
// reducer and replaces empty array w/ action payload return
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

//reducer for selectedMovie
// initial state set to empty object
// remember to add to combineReducers list
// we want selectedMovie(reducer) to match  movieToDisplay
// action payload is new selectedMovie value
const selectedMovie = (state = {}, action) => {
    switch (action.type) {
        //listen for SET MOVIE DETAILS
        case 'SET_MOVIE_DETAILS':
            //return replaces selected movie
            // data fetched in saga is replacing action.payload in return below
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
