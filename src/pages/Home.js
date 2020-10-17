import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store';

class Home extends React.Component {
    componentDidMount( ) {
        if ( this.props.games.length <= 0 ) {
            this.props.fetchData( );
        }
    }

    render( ) {
        const { games } = this.props;

        return (
            <div>
                <ul>
                    {/* { games.map( ( { circuitId, circuitName, Location } ) => (
                        <li key={ circuitId } >{ circuitName } - { Location.locality }, { Location.country }</li>
                    ) ) } */}
                </ul>
            </div>
        );
    }
}
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
    games: state.data,
} );

const mapDispatchToProps = {
    fetchData,
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
