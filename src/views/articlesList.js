import React from "react";
import {
    withRouter
} from "react-router-dom";
import {
    connect
} from "react-redux";
import actions from "../store/actions";
import {
    message
} from "antd";
import GenericButton from "../comps/GenericButton";
import {
    ActionTypes,
    Constants
} from "../constants";
import
    Article
from "comps/Article";
import PropTypes from "prop-types";

message.config({
    top: 20,
    duration: 1.2,
    maxCount: 1
});

/**
 * Show all articles
*/
export class ArticlesList extends React.Component {

    constructor() {
        super();

        this.goToAddArticle = this
            .goToAddArticle
            .bind(this);
    };

    componentDidMount() {
        if (!this.props.loading) {
            this
                .props
                .getAllArticles();
        };
    };

    goToAddArticle() {
        this
            .props
            .history
            .push(Constants.addArticle);
    };

    render() {

        const {
            articles,
            loading
        } = this.props;

        return (
            <div>
                <div
                    style={{
                    display: "flex",
                    justifyContent: "flex-end"
                }}>
                    <GenericButton
                        type="link"
                        style={{
                        background: "white",
                        color: "#006ecf",
                        margin: "20px 20px 10px 0",
                        width: "170px",
                        padding: "0 10px",
                        border: "1px solid #006ecf"
                    }}
                    onClick={this.goToAddArticle}/>
                </div>
                {/* Map all articles to api the view */}
                {articles.map(data => 
                    <Article loading={loading}
                        key={data._id}
                        data={data}/>)}
            </div>
        )
    }
};

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    articles: state[Constants.ARTICLE_STORE] ?
        state[Constants.ARTICLE_STORE][Constants.ALL_ARTICLES] :
        [],
    loading: state[Constants.ARTICLE_STORE] ?
        state[Constants.ARTICLE_STORE][Constants.LOADING] :
        false
});

const mapDispatchToProps = dispatch => ({
    getAllArticles: () => dispatch(actions[ActionTypes.GET_ALL_ARTICLES]())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticlesList));