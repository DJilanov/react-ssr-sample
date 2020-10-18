import React from 'react';
import PropTypes from 'prop-types';
import './BoxContainer.css';

export default function BoxContainer( props ) {
    return (
        <div className="box-container">
            <img src={ props.image } className={props.big ? 'big' : ''} />
            <div className="image-hover-text">
                <div className="image-hover-text-bubble">
                <span className="image-hover-text-title">{props.title}</span>
                </div>
            </div>
        </div>
    );
}

BoxContainer.proptypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    big: PropTypes.bool
}