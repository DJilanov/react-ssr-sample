import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData, storeFilter } from '../store';
import Header from './Header/Header';
import routes from '../routes';

class Layout extends React.Component {
    constructor( props ) {
      super( props );
      this.state = {};
    }

    render() {
        return (
            <div className="wrapper">
                <Header fetchData={ (searchString) => this.props.fetchData(searchString) } onFilter={ this.props.onFilter } activeFilter={ this.props.filter } />
                <Switch>
                    { routes.map( route => <Route key={ route.path } { ...route } /> ) }
                </Switch>
            </div>
        );
    }
}

Layout.fetchData = fetchData;

const mapStateToProps = ( state ) => ( {
    filter: state.filter,
} );

const mapDispatchToProps = (dispatch) => ({
    fetchData: (data) => fetchData(dispatch, data),
    onFilter: (data) => dispatch(storeFilter(data))
});

export default connect( mapStateToProps, mapDispatchToProps )( Layout );
