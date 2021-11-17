import Player from "@vimeo/player";
import Throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds)
    console.log(onPlay)
};

player.on('timeupdate', Throttle(onPlay, 1000));


const playerCurrenTime = localStorage.getItem('videoplayer-current-time');



if (playerCurrenTime) {
    player.setCurrentTime(playerCurrenTime);
}
else {
    player.setCurrentTime(0);

}