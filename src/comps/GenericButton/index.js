import React from "react";
import {
    Button,
    Icon
} from "antd";
import PropTypes from "prop-types";

import "./index.less";

/**
 * GenericButton component
 * @prop {text} JXS element
 * @prop {onClick} func
 * @prop {type} type of button
 * @prop {style} style
 */
const GenericButton = ({
    text = <span>
        <Icon type="plus-circle"
        style={{
                verticalAlign: "middle",
                marginRight: 6
            }}
        /><span>Add a new article</span>
        </span>,
    onClick,
    type = "primary",
    style = {
        width: "100%"
    }
}) => {
    return (
        <Button
            style={style}
            onClick={onClick}
            type={type}
            htmlType="submit">
            {text}
        </Button>
    )
};

GenericButton.propTypes = {
    text: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired
};

export default GenericButton;
