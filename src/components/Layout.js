import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from '../store';
import Header from './Header/Header';
import routes from '../routes';

class Layout extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header fetchData={fetchData} />
                <Switch>
                    { routes.map( route => <Route key={ route.path } { ...route } /> ) }
                </Switch>
            </div>
        );
    }
}

Layout.serverFetch = fetchData;

const mapDispatchToProps = {
    fetchData,
};

export default connect( null, mapDispatchToProps )( Layout );
