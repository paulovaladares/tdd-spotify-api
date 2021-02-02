import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

// https://developer.spotify.com/console/get-search-item/?q=&type=&market=&limit=&offset=&include_external=

const spotify = new SpotifyWrapper({
  token: 'BQCDR0gYh8Lwo6F84zJAPJbdJLXCTa7sfJmOF_nVOE5f-0UmdoepuQkWugsWsLiCvVrLM_iIokj2fGGNhObjaDjIMQ6oic6t7AQuFQYsE8-Ik-CKfrbSSoOSzV7SEusb-A8DaXRwJkJ62SZqEBv3In0rRGNKZffx-o_U9V8v-KJWNQv7ywQJ-_xe7Yj1ppt5uEpmaGoOW3CzcK47ojmdQW2rwTWlDK5f3m3BRpIyrTfv3XZe8ypRsAAQTxAGIZL4acfJglZjg5GpAAUF4kbN',
});
const albums = spotify.search.albums('u2');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
