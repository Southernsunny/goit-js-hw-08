import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const getCurrentTime = throttle(function (event) {
  localStorage.setItem(TIME_KEY, event.seconds);
}, 1000);

player.on('timeupdate', getCurrentTime);

const savedTime = localStorage.getItem(TIME_KEY);

if (savedTime) {
  player.setCurrentTime(savedTime);
}
