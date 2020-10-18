import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

export default function Icon( props ) {
    return (
        <div onClick={() => props.onClick(props.title)} className={`icon-container ${ props.active ? 'active' : '' }`}>
            <div className="icon-image">
                <img src={ props.iconLink } />
            </div>
            <div className="icon-text">
                <span>{ props.title }</span>
            </div>
        </div>
    );
}

Icon.proptypes = {
    title: PropTypes.string,
    iconLink: PropTypes.string,
    active: PropTypes.bool
}