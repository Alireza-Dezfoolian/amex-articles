import React from "react";
import PropTypes from "prop-types";

/**
 * Footer component
 * @prop {style} style
 */
const Footer = ({
    style = {
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: "16px 20px",
        height: "24px",
        background: "#006fcf",
        color: "white"
    }
}) => {
    return (
        <footer style={style}>
            <p style={{
                marginBottom: 0,
                fontSize: ".9em"
            }}>Copyright © 2019 American Express Company</p>
        </footer>
    )
};

Footer.propTypes = {
    style: PropTypes.object.isRequired
};

export default Footer;
