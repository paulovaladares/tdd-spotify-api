/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from 'sinon'; // trabalha com promises
import sinonChai from 'sinon-chai';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/search';

chai.use(sinonChai); /* chai use all interfaces from sinonChai */
global.fetch = require('node-fetch'); /* enable the global fetch in our interface node */

describe('Search', () => {
  /* Lets use hook to avoid create and restore the techedStub in every test case */
  let stubedFetch;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch'); /* method fetch will be observed by sinon sutb */
    stubedFetch.resolves({ json: () => ({}) }); /* it will trigger a result to the 'promise' */
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('Should exist `search` method', () => {
      expect(search).to.exist;
    });
    it('Should exist `searchAlbum` method', () => {
      expect(searchAlbums).to.exist;
    });
    it('Should exist `searchArtist` method', () => {
      expect(searchArtists).to.exist;
    });
    it('Should exist `searchTracks` method', () => {
      expect(searchTracks).to.exist;
    });
    it('Should exist `searchPlayList` method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {
    it('Should call fetch function', () => {
      const artists = search();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      /* Lets create scenarios (context) to test this it */
      context('passing one type', () => {
        const artists = search('u2', 'artist');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=u2&type=artist');

        const albums = search('u2', 'album');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=u2&type=album');
      });

      context('passing more than one type', () => {
        const artistsAndAlbuns = search('u2', ['artist', 'album']);
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=u2&type=artist,album');
      });
    });

    it('should return the JSON data from the Promise', () => {
      const artists = search('u2', 'artist');
      artists.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('searchArtists', () => {
    it('Should call fetch function ', () => {
      const artists = searchArtists('u2');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('Should call fetch with the correct url ', () => {
      const artists = searchArtists('u2');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=u2&type=artist`);
      const artists2 = searchArtists('muse');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=muse&type=artist`);
    });
  });

  describe('searchAlbums', () => {
    it('Should call fetch function ', () => {
      const albums = searchAlbums('u2');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('Should call fetch with the correct url ', () => {
      const albums = searchAlbums('u2');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=u2&type=album`);
      const albums2 = searchAlbums('muse');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=muse&type=album`);
    });
  });

  describe('searchTracks', () => {
    it('Should call fetch function ', () => {
      const tracks = searchTracks('u2');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('Should call fetch with the correct url ', () => {
      const tracks = searchTracks('u2');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=u2&type=track`);
      const tracks2 = searchTracks('muse');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=muse&type=track`);
    });
  });

  describe('searchPlaylists', () => {
    it('Should call fetch function ', () => {
      const playlist = searchPlaylists('u2');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('Should call fetch with the correct url ', () => {
      const playlist = searchPlaylists('u2');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=u2&type=playlist`);
      const playlist2 = searchPlaylists('muse');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=muse&type=playlist`);
    });
  });
});
