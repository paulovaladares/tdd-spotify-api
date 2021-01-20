import { API_URL, HEADER } from './config';
import toJson from './utils';

const getAlbum = id =>
  fetch(`${API_URL}/albums/${id}`, HEADER).then(toJson);

const getAlbums = ids =>
  fetch(`${API_URL}/albums/${ids}`, HEADER).then(toJson);

const getAlbumTracks = id =>
  fetch(`${API_URL}/albums/${id}/tracks`, HEADER).then(toJson);

export { getAlbum, getAlbums, getAlbumTracks };
