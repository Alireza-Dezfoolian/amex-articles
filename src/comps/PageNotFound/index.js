import React from "react";
import {
	Icon
} from "antd";

import "./index.less";

/**
 * PageNotFound component, for not found router
 * @prop {object} location of rout
 */
export default ({location}) => (
	<div className={"not-found"}>
		<h1 style={{fontSize: "7rem"}}>
			<Icon type="exclamation-circle-o"/> 404
		</h1>
		<h2>Page not found <code>{location.pathname}</code></h2>
	</div>
);
