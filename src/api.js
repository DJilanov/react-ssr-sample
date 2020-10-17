import fetch from 'isomorphic-fetch';

const API_URL = 'http://localhost:2048'

export function getApiUrl( ) {
    return API_URL;
}

export function fetchItems( searchString = '' ) {
    return fetch( `${API_URL}/api/games?search=${searchString}` )
        .then( res => res.json( ) );
}
