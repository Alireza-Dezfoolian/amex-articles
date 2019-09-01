import axios from "axios";

/**
 * post data using post axios
*/
export const postData = (endpoint, data = {}, cache = true, headers={}) => {

	const _cache = cache ?
		null :
		(new Date()).getTime();

	return axios({
		method: "post",
		url: `${endpoint}?${_cache}`,
		responseType: "json",
		data,
		headers
	});
};
