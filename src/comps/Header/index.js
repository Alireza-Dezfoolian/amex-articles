import React from "react";
import PropTypes from "prop-types";

/**
 * Header component to render header of the page
 * @prop {object} style to use
 */
const Header = ({
    style = {
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: "10px",
        background: "grey"
    }
}) => {
    return (
        <header style={style}>
            <h1
                style={{
                color: "white",
                fontSize: "20px",
                marginBottom: 0
            }}><img
                alt="AMEX logo"
                style={{
            width: "60px",
            margin: "0 10px"
        }}
                src={`${process.env.PUBLIC_URL}/img/amex.jpg`}/>AMEX Articles</h1>
        </header>
    )
};

Header.propTypes = {
    style: PropTypes.object.isRequired
};

export default Header;
