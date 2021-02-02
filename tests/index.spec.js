/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('SpotifyWrapper', () => {
  it('should be an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  });

  it('should receive api url as an option ', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'url.com',
    });
    expect(spotify.apiURL).to.equal('url.com');
  });

  it('should use the default api URL if not provided', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.equal('https://api.spotify.com/v1');
  });

  it('should receive TOKEN as anm option', () => {
    const spotify = new SpotifyWrapper({
      token: 'foo',
    });
    expect(spotify.token).to.equal('foo');
  });

  describe('Request Methods', () => {
    let stubbedFetch;

    beforeEach(() => {
      stubbedFetch = sinon.stub(global, 'fetch');
      stubbedFetch.resolves({ json: () => ({}) });
    });

    afterEach(() => {
      stubbedFetch.restore();
    });

    it('should have a request method ', () => {
      const spotify = new SpotifyWrapper({});
      expect(spotify.request).to.exist;
    });

    it('should call fetch when requests', () => {
      const spotify = new SpotifyWrapper({});
      spotify.request('url');
      expect(stubbedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct passed url', () => {
      const spotify = new SpotifyWrapper({});
      spotify.request('the-url.com');
      expect(stubbedFetch).to.have.been.calledWith('the-url.com');
    });

    it('should call fetch with the headers passed', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });
      const headers = {
        headers: {
          Authorization: 'Bearer foo',
        },
      };
      spotify.request('url');
      expect(stubbedFetch).to.have.been.calledWith('url', headers);
    });
  });
});
