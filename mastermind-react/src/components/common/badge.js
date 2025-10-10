import React from "react";
import PropTypes from 'prop-types';

export default function Badge({isVisible = true, label, value, color = "default"}) {
    if (!isVisible) return null;

    return (
        <h4>{label}: <span className={`badge ${color}`}>{value}</span></h4>
    );
}

Badge.propTypes = {
    isVisible: PropTypes.bool,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    color: PropTypes.string,
};

Badge.defaultProps = {
    isVisible: true,
    color: "default",
};