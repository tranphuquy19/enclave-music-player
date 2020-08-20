import React, { Component } from 'react';
import CardArtistPage from '../components/features/CardArtistPage/CardArtistPage';
import Loading from '../components/UIShared/loading/Loading';
import { connect } from 'react-redux';


class ArtistPage extends Component {
    state = {loading: true};
    UNSAFE_componentWillReceiveProps(newProps) {
        const { artists } = newProps;
        this.unLoading(artists);
    }
    unLoading = (artists) => {
        if (this.state.loading && artists[0].id) {
            this.setState({
                loading: false
            })
        }
    }

    componentDidMount() {
        this.unLoading(this.props.artists);
    }

    render() {
        const { loading } = this.state;
        if (loading) return <Loading />;
        return (
            <div className="container-right">
            <div className="Artist">
                {/* <div className="Artist-container"> */}

                    {this.showArtistPages()}
                {/* </div> */}
            </div>
            </div>

        );
    }
    showArtistPages() {
        let { artists } = this.props;
        let result = null;
        if (artists.length > 0) {
            result = artists.map(artist => {
                return <CardArtistPage key={artist.id} artist={artist} />
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        artists: state.artistsReducer
    }
}
export default connect(mapStateToProps, null)(ArtistPage);