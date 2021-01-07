import { searchAlbums } from '../src/main';

global.fetch = require('node-fetch');

const albums = searchAlbums('u2');

albums.then(data => console.log(data));
