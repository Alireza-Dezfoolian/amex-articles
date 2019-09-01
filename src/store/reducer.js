import {
    Constants,
    ReducerTypes
} from "../constants";
import _initialState from "./initialState";

// copy of initialise state
export const initialState = {
    ..._initialState
};

const reducerFunctions = {

    [ReducerTypes.ADD_ARTICLES_LOADING](state, data) {
        return {
            ...state,
            [Constants.LOADING]: data
        }
    },

    [ReducerTypes.ADD_ARTICLES_LOADED](state, data) {
        return {
            ...state,
            [Constants.ALL_ARTICLES]: data,
            [Constants.LOADING]: false
        }
    },

    [ReducerTypes.ADD_ARTICLES_ERROR](state) {
        return {
            ...state,
            [Constants.LOADING]: false
        }
    },
    
    [ReducerTypes.GET_ALL_ARTICLES_LOADING](state, data) {
        return {
            ...state,
            [Constants.LOADING]: data
        }
    },

    [ReducerTypes.GET_ALL_ARTICLES_LOADED](state, data) {
        return {
            ...state,
            [Constants.ALL_ARTICLES]: data,
            [Constants.LOADING]: false
        }
    },

    [ReducerTypes.GET_ALL_ARTICLES_ERROR](state, data) {
        return {
            ...state,
            [Constants.LOADING]: false
        }
    }

};

export default function reducer(state = initialState, action) {
    if (reducerFunctions[action.type]) {
        return reducerFunctions[action.type](state, action.payload);
    }
    return state;
};