import React, {Component} from "react";
import {ArtistItemComponent} from "./ArtistItemComponent";
import {connect} from "react-redux";

class ArtistListComponent extends Component {
    render() {
        const {artists} = this.props;
        const artistList = artists.map((artist, index) => <ArtistItemComponent {...artist} key={index}/>);
        return (
            <ul className="artist_list">
                {artistList}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        artists: state.artistsReducer,
    };
}

export default connect(mapStateToProps, null)(ArtistListComponent);
