import React from "react";
import { connect } from "react-redux";
import { searchData } from "../store";

class Search extends React.Component {
    componentDidMount( ) {
        if ( this.props.circuits.length <= 0 ) {
            this.props.searchData();
        }
    }

    render( ) {
        const { circuits } = this.props;

        return (
            <div className="wrapper">
                <h2>F1 2018 Season Calendar</h2>
                <ul>
                    { circuits.map( ( { circuitId, circuitName, Location } ) => (
                        <li key={ circuitId } >{ circuitName } - { Location.locality }, { Location.country }</li>
                    ) ) }
                </ul>
            </div>
        );
    }
}
Search.serverFetch = searchData; // static declaration of data requirements

const mapDispatchToProps = {
    searchData,
};

export default connect( null, mapDispatchToProps )( Search );
