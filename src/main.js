const search = (query, type) => {
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then(data => data.json());
};
const searchAlbum = () => {};
const searchArtist = () => {};
const searchTracks = () => {};
const searchPlayList = () => {};

export { search, searchAlbum, searchArtist, searchTracks, searchPlayList };
