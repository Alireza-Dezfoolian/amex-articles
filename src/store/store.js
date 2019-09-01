import {
	applyMiddleware,
	compose
} from "redux";
import {
	createInjectStore
} from "redux-injector";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import {
	connectRouter,
	routerMiddleware
} from "connected-react-router";

export const history = createHistory();

let reducersObject = {
	routing: connectRouter(history)((state={}, action) => {
		return state
	})
};

const initialState = {};

//enhancers to be added to the store like offline store persistence if needed
const enhancers = [];
//Apply thunk middleware
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
	//only activate devtools on dev
	const devToolsExtension = window.devToolsExtension;

	if (typeof devToolsExtension === "function") {
		enhancers.push(devToolsExtension());
	}
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

//create store
let store = createInjectStore(reducersObject, initialState, composedEnhancers);


export default store;
