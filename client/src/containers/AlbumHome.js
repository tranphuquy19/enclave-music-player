import React, { Component } from 'react';
import CardAlbumHome from '../components/features/CardAlbumHome/CardAlbumHome';
import { connect } from 'react-redux';
import Loading from '../components/UIShared/loading/Loading';


class AlbumHome extends Component {
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
            <div className="album-list">
                <div className="album-list-title">
                    <span className="album-list-span">Album</span>
                </div >
                <div className="album-list-content">
                    {this.showAlbums()}
                </div>
            </div>
        );
    }
    showAlbums() {
        let { albums } = this.props;
        let result = null;
        if (albums.length > 0) {
            result = albums.slice(0, 6).map(album => {
                return <CardAlbumHome key={album.id} album={album} />
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

export default connect(mapStateToProps, null) (AlbumHome);