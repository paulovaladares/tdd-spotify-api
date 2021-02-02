/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from 'sinon'; // trabalha com promises
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai); /* chai use all interfaces from sinonChai */
global.fetch = require('node-fetch'); /* enable the global fetch in our interface node */

describe('Search', () => {
  /* Lets use hook to avoid create and restore the techedStub in every test case */
  let stubedFetch, spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });
    stubedFetch = sinon.stub(global, 'fetch'); /* method fetch will be observed by sinon sutb */
    stubedFetch.resolves({ json: () => ({}) }); /* it will trigger a result to the 'promise' */
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('Should exist `searchAlbum` method', () => {
      expect(spotify.search.albums).to.exist;
    });
    it('Should exist `searchArtist` method', () => {
      expect(spotify.search.artists).to.exist;
    });
    it('Should exist `tracks` method', () => {
      expect(spotify.search.tracks).to.exist;
    });
    it('Should exist `searchPlayList` method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('artists', () => {
    it('Should call fetch function ', () => {
      const artists = spotify.search.artists('u2');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('Should call fetch with the correct url ', () => {
      const artists = spotify.search.artists('u2');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=u2&type=artist`);
      const artists2 = spotify.search.artists('muse');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=muse&type=artist`);
    });
  });

  describe('albums', () => {
    it('Should call fetch function ', () => {
      const albums = spotify.search.albums('u2');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('Should call fetch with the correct url ', () => {
      const albums = spotify.search.albums('u2');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=u2&type=album`);
      const albums2 = spotify.search.albums('muse');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=muse&type=album`);
    });
  });

  describe('tracks', () => {
    it('Should call fetch function ', () => {
      const tracks = spotify.search.tracks('u2');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('Should call fetch with the correct url ', () => {
      const tracks = spotify.search.tracks('u2');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=u2&type=track`);
      const tracks2 = spotify.search.tracks('muse');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=muse&type=track`);
    });
  });

  describe('playlists', () => {
    it('Should call fetch function ', () => {
      const playlist = spotify.search.playlists('u2');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('Should call fetch with the correct url ', () => {
      const playlist = spotify.search.playlists('u2');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=u2&type=playlist`);
      const playlist2 = spotify.search.playlists('muse');
      expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=muse&type=playlist`);
    });
  });
});
