import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findTracks, fetchTracks } from '../store/actions/FindTrackActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends Component {
    handleChange = (e) => {
        this.props.findTracks(e.target.value)
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.fetchTracks(this.props.text)
    }
    render() {
        return (
            <form className="search-box" onSubmit={this.onSubmit}>
                <input className="search-txt" type="text" placeholder='Search for artists, songs & album' onChange={this.handleChange} />
                <FontAwesomeIcon type="submit" className="search-btn" icon={faSearch} />
            </form>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        text: state.tracks.text
    }
}

export default connect(mapStateToProps, { findTracks, fetchTracks })(SearchBar);