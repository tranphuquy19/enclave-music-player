

import Track from "./Track";

class Player {
    belongTo = {id: null, type: ''};
    current = Track;
    currentTime = 0;
    isPlaying = false;
    loop = false;
    next = Track;
    playingIndex = 0;
    previous = Track;
    queue = [];
    volume = 1;
}

export default new Player();
