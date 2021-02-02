/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
  let stubbedFetch, spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });
    stubbedFetch = sinon.stub(global, 'fetch');
    stubbedFetch.resolves({ json: () => ({}) });
  });

  afterEach(() => {
    stubbedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('Should have getAlbum', () => {
      expect(spotify.album.getAlbum).to.exist;
    });
    it('Should have getTracks', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('Should call fetch method', () => {
      const album = spotify.album.getAlbum();
      expect(stubbedFetch).to.have.been.calledOnce;
    });
    it('Should call fetch with correct url', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

      const album2 = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTk')
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk');
    });
    it('should return the correct data from Promise', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      album.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbums', () => {
    it('Should call fetch method', () => {
      const albums = spotify.album.getAlbums();
      expect(stubbedFetch).to.have.been.calledOnce;
    });
    it('Should call fetch with correct url', () => {
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');
    });
    it('should return the correct data from Promise', () => {
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      albums.then((data) => {
        expect(data).to.be.eql({ albums: 'name' });
      });
    });
  });

  describe('getTracks', () => {
    it('Should call fetch method', () => {
      const tracks = spotify.album.getTracks();
      expect(stubbedFetch).to.have.been.calledOnce;
    });
    it('Should call fetch with correct url', () => {
      const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });
    it('should return the correct data from Promise', () => {
      const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
      tracks.then((data) => {
        expect(data).to.be.eql({ albums: 'name' });
      });
    });
  });
});
