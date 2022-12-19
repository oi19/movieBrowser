import {
    FETCH_MOVIES_FAILED, FETCH_MOVIES_STARTED, FETCH_MOVIES_SUCCESS, MOVIES_CHANGE_PROPS, FETCH_MOVIES_REFRESH, FETCH_MOVIES_PAGINATE
} from '../types';

const initialState = {
    movieList: [],
    pageLoading: false,
    pageError: false,
    pageRefresh: false,
    pagePaginate: false,
    moreData: true,
    pageIndex: 1,
    searchValue: null
}


const SearchScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_STARTED:
            return { ...state, pageLoading: true, movieList: [], pageRefresh: false, pagePaginate: false, moreData: true, pageIndex: 1, }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state, movieList: state.pageRefresh ? action.movies : [...state.movieList, ...action.movies], pageError: false, pageLoading: false, pageRefresh: false, pagePaginate: false,
                moreData: (state.movieList.length + action.movies.length) >= action.records ? false : true
            }
        case FETCH_MOVIES_FAILED:
            return { ...state, pageError: true, pageLoading: false, pageRefresh: false, pagePaginate: false }
        case FETCH_MOVIES_REFRESH:
            return { ...state, pageRefresh: true, pageError: false, pageIndex: 1 }
        case FETCH_MOVIES_PAGINATE:
            return { ...state, pagePaginate: true, pageIndex: state.pageIndex + 1 }
        case MOVIES_CHANGE_PROPS:
            return { ...state, [action.prop]: action.value }
        default:
            return state;
    }
}

export default SearchScreenReducer;