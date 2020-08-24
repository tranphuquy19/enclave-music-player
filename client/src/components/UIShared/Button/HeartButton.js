import React, { Component } from "react";
import "./HeartButton.css";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { voteTrack } from "../../../store/actions/TracksActions";
import { Redirect } from 'react-router-dom';

class HeartButton extends Component {
  constructor(props){
    super(props);
    this.state = {toggle: false}
  }

  state = {
    checkRedirect: false
  }

  handleToogle = () => {
    const { id, _voteTrack, upVotes, userId } = this.props;
    if(!userId) 
    this.setState({
      checkRedirect: true
    }); 
    else {
      const isFavorite = this.isFavorite(upVotes, userId);
      isFavorite ? _voteTrack(id, false) : _voteTrack(id, true);
    }
    this.setState((state) => ({toggle: !state.toggle}));

  };

  isFavorite = (voteUps, userId) => {
    if(typeof userId === 'undefined') return false;
    return voteUps.some(vote => vote.id === userId);
  }

  render() {
    const { upVotes, userId } = this.props;
    const { checkRedirect } = this.state;
    const _isFavorite = this.isFavorite(upVotes, userId);

    return (
      <>
        {checkRedirect ? <Redirect to="/signin" /> : <></>}
        <FontAwesomeIcon
          icon={faHeart}
          // className={
          //   "Heart" +
          //   (favorites.find((trackSaved) => trackSaved.id === track.id)
          //     ? " isFollow"
          //     : "")
          // }
          className={_isFavorite ? "isFollow" : ""}
          onClick={this.handleToogle}
        />
        <span className={"Feedback" + (this.state.toggle ? " Press" : "")}>
          <FontAwesomeIcon title="WishList " icon={faHeart} />
        </span>
      </>
    );
  }
}

const mapDispatchToprops = (dispatch, props) => {
  return {
    _voteTrack: (id, isUp) => {
      dispatch(voteTrack(id, isUp));
    }
  }
}

export default connect(null, mapDispatchToprops)(HeartButton);
