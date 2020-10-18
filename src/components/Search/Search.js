import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

export default function Search( props ) {
    const [input, setInput] = React.useState(''); // '' is the initial state value
    return (
        <div className="search-container">
            <input value={input} onChange={e => setInput(e.target.value)} className="search-txt" type="text" placeholder="Search" />
            <span className="search-btn">
                <img onClick={() => props.onClick(input)} src="/assets/icons/ico_search.svg" />
            </span>
        </div>
    );
}

Search.proptypes = {
    onClick: PropTypes.func
}