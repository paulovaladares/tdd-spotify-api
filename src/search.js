import { API_URL, HEADER } from './config';
import toJson from './utils';

const search = (query, type) =>
  fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADER)
    .then(toJson);

const searchArtists = query => search(query, 'artist');
const searchAlbums = query => search(query, 'album');
const searchTracks = query => search(query, 'track');
const searchPlaylists = query => search(query, 'playlist');

export { search, searchAlbums, searchArtists, searchTracks, searchPlaylists };
