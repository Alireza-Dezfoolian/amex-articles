import {
    message
} from "antd";
import {
    ReducerTypes,
    ActionTypes,
    Constants
} from "../constants";
import {
    postData
} from "../utils/rest/post";
import {
    fetchData
} from "../utils/rest/fetch";
import {
    uriGenerator
} from "../utils/rest/urigenerator";

/**
 * All actions and api call happening here
 */
const actions = {

    [ActionTypes.ADD_ARTICLE](article) {
        return dispatch => {
            dispatch({type: ReducerTypes.ADD_ARTICLE_LOADING, payload: true});

            return postData(uriGenerator(Constants.ARTICLE), article)
                .then(response => response.data)
                .then(response => {
                    if (response) {
                        message.success(Constants.newArticleAdded);
                        dispatch(actions[ActionTypes.GET_ALL_ARTICLES]());
                        dispatch({type: ReducerTypes.ADD_ARTICLE_LOADED, payload: response});
                    } else {
                        dispatch({type: ReducerTypes.ADD_ARTICLE_ERROR, payload: response});
                    }
                })
                .catch(error => {
                    dispatch({type: ReducerTypes.ADD_ARTICLE_ERROR, payload: error});
                });
        }
    },

    [ActionTypes.GET_ALL_ARTICLES]() {
        return dispatch => {
            dispatch({type: ReducerTypes.GET_ALL_ARTICLES_LOADING, payload: true});

            return fetchData(uriGenerator(Constants.ARTICLES))
                .then(response => response.data)
                .then(response => {
                    if (response) {
                        dispatch({type: ReducerTypes.GET_ALL_ARTICLES_LOADED, payload: response});
                    } else {
                        dispatch({type: ReducerTypes.GET_ALL_ARTICLES_ERROR, payload: response});
                    }
                })
                .catch(error => {
                    dispatch({type: ReducerTypes.GET_ALL_ARTICLES_ERROR, payload: error});
                });
        }
    }
};

export default actions;
