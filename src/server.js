import express from 'express';
import path from 'path';

import React from 'react';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Helmet from 'react-helmet';
import routes from './routes';
import Layout from './components/Layout';
import createStore, { initializeSession } from './store';

import games from './games.json';

const app = express();
// Serve react app
app.use( express.static( path.resolve( __dirname, '../dist' ) ) );
// Serve assets
app.use( '/assets/', express.static( path.join( __dirname, '/../assets/' ) ) );
// Handle data serving
app.get( '/api/games', ( req, res ) => {
    if(req.query.search && req.query.search.length > 0) {
        res.json(games.filter((el) => el.title.includes(req.query.search)));
    } else {
        res.json(games);
    }
});
// Handle SSR
app.get( '/*', ( req, res ) => {
    const context = { };
    const store = createStore( );

    store.dispatch( initializeSession( ) );

    const dataRequirements =
        routes
            .filter( route => matchPath( req.url, route ) ) // filter matching paths
            .map( route => route.component ) // map to components
            .filter( comp => comp.fetchData ) // check if components have data requirement
            .map( comp => store.dispatch( comp.fetchData( ) ) ); // dispatch data requirement

    Promise.all( dataRequirements ).then( ( ) => {
        const jsx = (
            <ReduxProvider store={ store }>
                <StaticRouter context={ context } location={ req.url }>
                    <Layout />
                </StaticRouter>
            </ReduxProvider>
        );
        const reactDom = renderToString( jsx );
        const reduxState = store.getState( );
        const helmetData = Helmet.renderStatic( );

        res.writeHead( 200, { 'Content-Type': 'text/html' } );
        res.end( htmlTemplate( reactDom, reduxState, helmetData ) );
    } );
} );

app.listen( 2048 );

// Build the HTML template
function htmlTemplate( reactDom, reduxState, helmetData ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            ${ helmetData.title.toString( ) }
            ${ helmetData.meta.toString( ) }
            <title>React SSR</title>
            <link rel="stylesheet" type="text/css" href="./styles.css" />
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
            <script>
                window.REDUX_DATA = ${ serialize( reduxState, { isJSON: true } ) }
            </script>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}
