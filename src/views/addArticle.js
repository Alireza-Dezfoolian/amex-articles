import React from "react";
import {
    withRouter
} from "react-router-dom";
import {
    Icon
} from "antd";
import {
    connect
} from "react-redux";
import actions from "../store/actions";
import {
    ActionTypes,
    Constants
} from "../constants";
import AddArticle from "comps/AddArticle";
import GenericButton from "../comps/GenericButton";
import PropTypes from "prop-types";

/**
 * Add article page
*/
export class AddArticlePage extends React.Component {

    constructor() {
        super();

        this.goToArticlesList = this
            .goToArticlesList
            .bind(this);
    };

    goToArticlesList() {
        this
            .props
            .history
            .push(Constants.articleList);
    };

    render() {
        
        const {
            addArticle
        } = this.props;

        return (
            <div>
                <GenericButton
                    type="link"
                    text={<span>
                        <Icon type="left-circle"
                        style={{
                                verticalAlign: "middle",
                                margin: "20px 4px"
                            }}
                        /><span>Back to Articles</span>
                        </span>}
                    onClick={this.goToArticlesList}
                    style={{
                    width: "100px",
                    padding: "0 20px"
                }}/>
                <AddArticle addArticle={addArticle}/>
            </div>
        )
    }
};

AddArticlePage.propTypes = {
    addArticle: PropTypes.func.isReqiured
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    addArticle: article => dispatch(actions[ActionTypes.ADD_ARTICLE](article))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddArticlePage));