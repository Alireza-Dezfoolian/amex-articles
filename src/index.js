import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import {
    Provider
} from "react-redux";
import {
    LocaleProvider
} from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import {
    Router
} from "react-router-dom";
import Layout from "./layout";
import Store, {
    history
} from "./store/store";

// render app wrapper by router, redux and antdesign internationalization
// provider
ReactDOM.render(
    <LocaleProvider locale={enUS}>
    <Provider store={Store}>
        <Router history={history}>
            <Layout/>
        </Router>
    </Provider>
</LocaleProvider>, document.getElementById("app"));
registerServiceWorker();

// only enable hot deployment in development
if (process.env.NODE_ENV === "development" && module.hot) {
    module
        .hot
        .accept("./layout", () => {
            ReactDOM.render(
                <LocaleProvider locale={enUS}>
                <Provider store={Store}>
                    <Router history={history}>
                        <Layout/>
                    </Router>
                </Provider>
            </LocaleProvider>, document.getElementById("app"));
            registerServiceWorker();
        });
}
