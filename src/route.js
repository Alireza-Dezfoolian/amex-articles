import React from "react";
import {
    Redirect,
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import {
    injectReducer
} from "redux-injector";
import {
    Constants
} from "./constants";
import AsyncComponent from "comps/AsyncComponent";
import PageNotFound from "comps/PageNotFound";
import reducer from "./store/reducer";

const AddArticlePage = AsyncComponent(() => import (/* webpackChunkName: "add-article" */
"./views/addArticle"));

const ArticlesListPage = AsyncComponent(() => import (/* webpackChunkName: "articles-list" */
"./views/articlesList"));

/**
 * Component to act as route 
 */
export class Layout extends React.Component {

    constructor(options) {
        super(options);

        // dynamically inject reducer
        injectReducer(Constants.ARTICLE_STORE, reducer);

        this.handleDataViewTabsChange = this
            .handleDataViewTabsChange
            .bind(this);
    };

    handleDataViewTabsChange(newTab) {
        this
            .props
            .history
            .push(`${newTab}`);
    };

    render() {
        const getEnvURL = path => `${process.env.PUBLIC_URL}${path}`;
        return (
            <span>
                <div>
                    <Switch>
                        <Redirect exact from={getEnvURL("/")} to={getEnvURL(Constants.articleList)}/>
                        <Route path={getEnvURL(Constants.addArticle)} component={AddArticlePage}/>
                        <Route path={getEnvURL(Constants.articleList)} component={ArticlesListPage}/>
                        <Route path="*" component={PageNotFound}/>
                    </Switch>
                </div>
            </span>
        );
    }
};

export default withRouter(Layout);
