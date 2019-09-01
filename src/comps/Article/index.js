import React from "react";
import "./index.less";
import {
    Card,
    Avatar
} from "antd";
import moment from "moment";
import PropTypes from "prop-types";

const {
    Meta
} = Card;

/**
 * Article Component to render each article on the page
 * @prop {object} data including article, title, imgUrl
 * @prop {boolean} loading
 */
const Article = ({data, loading}) => {

    const {
        article,
        title,
        imgUrl = `${process.env.PUBLIC_URL}/img/amex.jpg`,
        updateTime       
    } = data;

    return (
        <article className="amex-article">
            <Card
                style={{
                width: "100%",
                border: "1px solid #006ecf"
            }}
            loading = {
                loading
            }>
                <Meta
                    avatar={<Avatar src = {
                    imgUrl
                } />}
                    title={title}
                    description={article}/>
                    { /* last update time of article*/}
                    {updateTime &&
                    <div className="last-updated">
                        <strong>Last article update at: </strong> 
                        {moment(updateTime).format("DD/MM/YYYY, h:mm a")}
                    </div>}
            </Card>
        </article>
    )
};

Article.propTypes = {
    data: PropTypes.objectOf(PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        article: PropTypes.string,
        imgUrl: PropTypes.string
    })),
    loading: PropTypes.bool.isRequired
};

export default Article;
