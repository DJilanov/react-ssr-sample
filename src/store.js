import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { fetchItems } from './api';

export const initializeSession = ( ) => ( {
    type: 'INITIALIZE_SESSION',
} );

const sessionReducer = ( state = false, action ) => {
    switch ( action.type ) {
        case 'INITIALIZE_SESSION':
            return true;
        default: return state;
    }
};

export const storeFilter = ( data ) => ( {
    type: 'SET_FILTER',
    data,
} );

const storeData = ( data ) => ( {
    type: 'STORE_DATA',
    data,
} );

export const fetchData = ( dispatch, string ) => {
    fetchItems( string ).then( res => dispatch( storeData( res ) ) );
}

export const filterData = ( dispatch, filter ) => {
    fetchItems( '', filter ).then( res => dispatch( storeData( res ) ) );
}

const filterReducer = ( state = false, action ) => {
    switch ( action.type ) {
        case 'SET_FILTER':
            return action.data;
        default: return state;
    }
};

const dataReducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case 'STORE_DATA':
            return action.data;
        default: return state;
    }
};

const reducer = combineReducers( {
    filter: filterReducer,
    data: dataReducer,
    loggedIn: sessionReducer,
} );

export default ( initialState ) =>
    createStore( reducer, initialState, applyMiddleware( thunkMiddleware ) );
