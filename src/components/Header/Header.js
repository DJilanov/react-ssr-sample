import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Search from '../Search/Search';
import './Header.css';

export default function Header(props) {
    return (
        <div className="header-container">
            <div className="left-box">
                <span className="title">SLOTS</span>
            </div>
            <div className="right-box text-right">
                <div className="icon-container">
                    <Icon title="ALL" iconLink="/assets/icons/ico_all.svg" active={props.activeFilter==='ALL'} />
                    <Icon title="NEW" iconLink="/assets/icons/ico_new.svg" active={props.activeFilter==='NEW'} />
                    <Icon title="TOP" iconLink="/assets/icons/ico_top.svg" active={props.activeFilter==='TOP'} />
                </div>
                <div className="search-container">
                    <Search fetchData={props.fetchData}></Search>
                </div>
            </div>
        </div>
    );
}

Header.proptypes = {
    activeFilter: PropTypes.string,
    fetchData: PropTypes.func
}