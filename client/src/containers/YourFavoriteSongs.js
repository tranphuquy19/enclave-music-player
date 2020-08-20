import React, { Component } from "react";
import { connect } from "react-redux";

import CardTrack from "../components/features/CardTrack/CardTrack";
import NotYet from "../components/UIShared/NotYet/NotYet";

class YourFavoriteSongs extends Component {
  state = {
    favoritesSongs: []
  }

  componentDidMount() {
    const { tracks, user } = this.props;
    const _tracks = tracks.filter(track => track.upVotes.some(_user => _user.id === user.id));
    console.log(_tracks);
    this.setState({
      favoritesSongs: _tracks
    })
  }

  render() {
    const { player } = this.props;
    const { favoritesSongs } = this.state;

    return (
      <>
        <h1>Your Songs</h1>
        <div className="top-songs-container">
          {favoritesSongs.length === 0 ? (
            <NotYet
              type={"songs"}
              message={"Find your favorite songs and mark them with your heart"}
            />
          ) : (
              favoritesSongs.map((track) => (
                <CardTrack key={track.id} track={track} player={player} />
              ))
            )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  tracks: state.tracksReducer,
  user: state.userReducer,
  player: state.playerReducer
});

export default connect(mapStateToProps)(YourFavoriteSongs);
