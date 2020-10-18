import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData, filterData, storeFilter } from '../store';
import Header from './Header/Header';
import Home from '../pages/Home';

class Layout extends React.Component {
    constructor( props ) {
      super( props );
      this.state = {};
    }

    render() {
        return (
            <div className="wrapper">
                <Header 
                    fetchData={ (searchString) => this.props.fetchData(searchString) } 
                    filterData={ (filterString) => this.props.filterData(filterString) } 
                    onFilter={ this.props.onFilter } activeFilter={ this.props.filter } 
                />
                {/* No need of router for this sample */}
                <Home />
            </div>
        );
    }
}

Layout.fetchData = fetchData;

const mapStateToProps = ( state ) => ( {
    filter: state.filter,
} );

const mapDispatchToProps = (dispatch) => ({
    filterData: (data) => filterData(dispatch, data),
    fetchData: (data) => fetchData(dispatch, data),
    onFilter: (data) => dispatch(storeFilter(data))
});

export default connect( mapStateToProps, mapDispatchToProps )( Layout );
