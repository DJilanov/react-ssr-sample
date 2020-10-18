import fetch from 'isomorphic-fetch';

const API_URL = 'http://localhost:2048';

export function getApiUrl( ) {
    return API_URL;
}

export function fetchItems( searchString = '', filter = '' ) {
    return fetch( `${ API_URL }/api/games?search=${ searchString }&filter=${ filter }` )
        .then( res => res.json( ) );
}
