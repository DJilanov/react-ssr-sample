import React from 'react';
import PropTypes from 'prop-types';
import './BoxContainer.css';

export default function BoxContainer( props ) {
    return (
        <div className="box-container">
            <img src={ props.image } className={props.big ? 'big' : ''} />
        </div>
    );
}

BoxContainer.proptypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    big: PropTypes.bool
}