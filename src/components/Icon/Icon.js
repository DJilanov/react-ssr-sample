import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

export default function Icon(props) {
    return (
        <div className="icon-container">
            <div className="icon">
                <span className="title"></span>
            </div>
            <div className="text">
                <span className="title">{props.title}</span>
            </div>
        </div>
    );
}

Icon.proptypes = {
    title: PropTypes.string,
    iconLink: PropTypes.string,
    active: PropTypes.bool
}