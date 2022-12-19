import axios from 'axios';
import { FETCH_MOVIES_STARTED, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILED, MOVIES_CHANGE_PROPS, FETCH_MOVIES_REFRESH, FETCH_MOVIES_PAGINATE } from '../types';

//params from screen
export const fetchMovieList = () => {
    //params from action creator 
    //getState to get any state from any other reducer
    return async (dispatch, getState) => {
        let { searchValue, pageIndex } = getState().SearchScreen;
        try {
            let MovieListResponse = await axios.get(`https://www.omdbapi.com/?apikey=7560df15&s=${searchValue}&page=${pageIndex}`);
            if (MovieListResponse?.data?.Response) {
                dispatch({
                    type: FETCH_MOVIES_SUCCESS,
                    movies: MovieListResponse?.data?.Search,
                    records: MovieListResponse?.data?.totalResults,
                })
            } else {
                dispatch({
                    type: FETCH_MOVIES_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: FETCH_MOVIES_FAILED
            })
        }
    }
}


export const getMovieList = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_MOVIES_STARTED
        })
        //to fire action from another action use dispatch(action())
        dispatch(fetchMovieList())
    }
}


export const refreshMovieList = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_MOVIES_REFRESH
        })
        //to fire action from another action use dispatch(action())
        dispatch(fetchMovieList())
    }
}

export const paginateMovieList = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_MOVIES_PAGINATE
        })
        //to fire action from another action use dispatch(action())
        dispatch(fetchMovieList())
    }
}

export const changePropMovieList = (prop, value) => {
    return {
        type: MOVIES_CHANGE_PROPS,
        prop,
        value
    }
}


