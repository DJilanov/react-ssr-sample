import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Search from '../Search/Search';
import './Header.css';

export default function Header( props ) {
    const handleIconClick = (event) => {
        props.onFilter(event);
    }
    const handleSearchClick = (event) => {
        props.fetchData(event);
    }
    return (
        <div className="header-container">
            <div className="left-box">
                <span className="title">SLOTS</span>
            </div>
            <div className="right-box text-right">
                <div className="controlls-container">
                    <Icon onClick={handleIconClick.bind(this)} title="ALL" iconLink="/assets/icons/ico_all.svg" active={ props.activeFilter === 'ALL' } />
                    <Icon onClick={handleIconClick.bind(this)} title="NEW" iconLink="/assets/icons/ico_new.svg" active={ props.activeFilter === 'NEW' } />
                    <Icon onClick={handleIconClick.bind(this)} title="TOP" iconLink="/assets/icons/ico_top.svg" active={ props.activeFilter === 'TOP' } />
                </div>
                <Search onClick={ handleSearchClick.bind(this) } />
            </div>
        </div>
    );
}

Header.proptypes = {
    activeFilter: PropTypes.string,
    fetchData: PropTypes.func,
    onFilter: PropTypes.func,
}