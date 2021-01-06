/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { search, searchAlbum, searchArtist, searchTracks, searchPlayList } from "../src/main.js";

chai.use(sinonChai); /* chai use all interfaces from sinonChai */
global.fetch = require('node-fetch'); /* enable the global fetch in our interface node */

describe('Spotify Wrapper', () => {
  describe('Smoke tests', () => {
    it('Should exist `search` method', () => {
      expect(search).to.exist;
    });
    it('Should exist `searchAlbum` method', () => {
      expect(searchAlbum).to.exist;
    });
    it('Should exist `searchArtist` method', () => {
      expect(searchArtist).to.exist;
    });
    it('Should exist `searchTracks` method', () => {
      expect(searchTracks).to.exist;
    });
    it('Should exist `searchPlayList` method', () => {
      expect(searchPlayList).to.exist;
    });
  });
  describe('Generic Search', () => {
    let fetchedStub;
    let promise;
    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.resolves({ json: () => ({ album: 'name' }) });
    });
    afterEach(() => {
      fetchedStub.restore();
    });
    it('Should call fetch function', () => {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it('Should call fetch with the correct url', () => {
      context('passing one type', () => {
        const artists = search('u2', 'artist');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=u2&type=artist');
        const albums = search('u2', 'album');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=u2&type=album');
      });
      context('passing more than one type', () => {
        const artistsAndAlbuns = search('u2', ['artist', 'album']);
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=u2&type=artist,album');
      });
    });
    it('Should retur a JSOn data', () => {
      const artists = search('u2', 'artist');
      expect(artists.resolveValue).to.be.eql({ album: 'name' });
    });
  });
});
