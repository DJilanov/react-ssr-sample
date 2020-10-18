import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store';

import BoxContainer from '../components/BoxContainer/BoxContainer';
import './Home.css';

class Home extends React.Component {
    componentDidMount( ) {
        if ( this.props.games.length <= 0 ) {
            this.props.fetchData( '' );
        }
    }

    groupImages() {
        let resp = [];
        for(let counter = 0; counter < this.props.games.length; counter++) {
            if(!resp[resp.length -1]) {
                resp.push([]);
            }
            if(resp[resp.length -1].length === 4) {
                resp.push([]);
            }
            if(this.props.games[counter].big) {
                resp.splice(resp.length - 1, 0, [this.props.games[counter]]);
            } else {
                resp[resp.length - 1].push(this.props.games[counter]);
            }
        }
        if((resp.length%2 === 1) && (resp.length > 6) && (window.innerWidth > 1024)) {
            resp.splice(Math.abs(resp.length/2), 0, [resp[resp.length - 1][0], resp[resp.length - 1][1]]);
            resp[resp.length - 1].splice(0, 1);
            resp[resp.length - 1].splice(1, 1);
        }
        return resp;
    }

    render( ) {
        const { games } = this.props;
        let groupedGames = this.groupImages(games);
        return (
            <div className="home-container">
                { groupedGames.map( ( box, index ) => (
                    <div key={index} className={`${((box.length > 2) || box[0].big) ? "home-group" : "home-group half"} ${box[0].big ? 'big' : ''}`}>
                        { box.map( ( { title, image, big }, index ) => {
                            return <BoxContainer key={ index } title={ title } image={ image } big={ big } />
                        } ) }
                    </div>
                ) ) }
            </div>
        );
    }
}
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
    games: state.data,
} );

const mapDispatchToProps = (dispatch) => ({
    fetchData: (data) => fetchData(dispatch, data),
});

export default connect( mapStateToProps, mapDispatchToProps )( Home );
