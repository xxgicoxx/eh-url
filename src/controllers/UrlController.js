const { UrlService } = require('../services');

class UrlController {
  constructor() {
    this._service = new UrlService();
  }

  /**
   * Check url
   *
   * @param {string} url URL to check
   * @param {Object} [options] Options
   * @param {boolean} [options.protocol = true] Check protocol
   *
   * @returns {Promise} Promise
   */
  async check(url, options = {}) {
    return this._service.check(url, options);
  }
}

module.exports = UrlController;
