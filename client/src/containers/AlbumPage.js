import React, { Component } from 'react';
import CardAlbumPage from '../components/features/CardAlbumPage/CardAlbumPage';
import Loading from '../components/UIShared/loading/Loading';
import { connect } from 'react-redux';


class AlbumPage extends Component {
    state = {loading: true};
    UNSAFE_componentWillReceiveProps(newProps) {
        const { albums } = newProps;
        this.unLoading(albums);
    }
    unLoading = (albums) => {
        if (this.state.loading && albums[0].id) {
            this.setState({
                loading: false
            })
        }
    }

    componentDidMount() {
        this.unLoading(this.props.albums);
    }

    render() {
        const { loading } = this.state;
        if (loading) return <Loading />;
        return (
            <div className="container-right">
            <div className="album">
                {/* <div className="album-container"> */}

                    {this.showAlbumPages()}
                {/* </div> */}
            </div>
            </div>

        );
    }
    showAlbumPages() {
        let { albums } = this.props;
        let result = null;
        if (albums.length > 0) {
            result = albums.map(album => {
                return <CardAlbumPage key={album.id} album={album} />
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        albums: state.albumsReducer
    }
}
export default connect(mapStateToProps, null)(AlbumPage);