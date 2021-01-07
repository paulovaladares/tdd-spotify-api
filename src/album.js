import URL_API from './config';
import toJson from './utils';

const getAlbum = id =>
  fetch(`${URL_API}/albums/${id}`).then(toJson);

const getAlbums = ids =>
  fetch(`${URL_API}/albums/${ids}`).then(toJson);

const getAlbumTracks = id =>
  fetch(`${URL_API}/albums/${id}/tracks`).then(toJson);

export { getAlbum, getAlbums, getAlbumTracks };
