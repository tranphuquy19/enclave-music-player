/*
 * Created by @tranphuquy19 on 14/08/2020
 * @author: tranphuquy19@gmail.com
 */

class Track {
    id = '';
    readable = '';
    titleShort = '';
    titleVersion = '';
    link = '';
    duration = 0;
    rank = 0;
    releaseDate = '';
    preview = '';
    contributors = [];
    artist = {};
    album = '';
    type='track';
    upVoteLink = '';
    downVoteLink = '';
    upVotes = [];
    downVotes = [];
    nbUpVotes = 0;
    nbDownVotes = 0;
}

export default new Track();
