import React, { Component } from "react";

// import NotYet from "../components/Others/NotYet";
// import CardSong from "../components/CardTracks/CardSong";

class YourFavoriteSongs extends Component {
  render() {
    // const { favoritesSongs } = this.props;

    return (
      <>
        <h1>Your Songs</h1>
        {/* <div className="top-songs-container">
          {favoritesSongs.length === 0 || favoritesSongs === null ? (
            <NotYet
              type={"songs"}
              message={"Find your favorite songs and mark them with your heart"}
              imgSrc={NotesEmoji}
            />
          ) : (
            favoritesSongs.map((track) => (
              <CardSong key={track.id} song={track} />
            ))
          )}
        </div> */}
      </>
    );
  }
}

export default YourFavoriteSongs;