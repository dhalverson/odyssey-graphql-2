const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  // GET
  getTracksForHome() {
    return this.get(
      'tracks'
    );
  }

  // GET AUTHOR
  getAuthor(authorId) {
    return this.get(
      `author/${encodeURIComponent(authorId)}`
    );
  }
}

module.exports = TrackAPI;