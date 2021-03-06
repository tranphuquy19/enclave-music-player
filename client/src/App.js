import './App.css';
import 'rc-slider/assets/index.css';
import routerRendering from './components/commons/routerRendering';
import { masterRoutes } from './routes/masterRoute';
import { BrowserRouter } from 'react-router-dom';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from './store/actions/TracksActions';
import { fetchAlbums } from './store/actions/AlbumActions';

class App extends Component {

  UNSAFE_componentWillMount() {
    const { _fetchTracks, _fetchAlbums } = this.props;
    _fetchTracks();
    _fetchAlbums();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {routerRendering(masterRoutes, true)}
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    _fetchTracks: () => {
      dispatch(fetchTracks())
    },
    _fetchAlbums: () => {
      dispatch(fetchAlbums());
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
