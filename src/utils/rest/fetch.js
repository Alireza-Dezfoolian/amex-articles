import axios from "axios";

/**
 * fetch data using get axios
*/
export const fetchData = (endpoint, params = {}, cache = true) => {

	const _cache = cache ?
		null :
		(new Date()).getTime();

	return axios({
		method: "get",
		url: `${endpoint}?${_cache}`,
		responseType: "json",
		params
	});
};
