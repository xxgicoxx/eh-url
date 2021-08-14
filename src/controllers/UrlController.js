const { UrlService } = require('../services');

class UrlController {
  constructor() {
    this._service = new UrlService();
  }

  /**
   * Check url
   *
   * @param {string} url url to check
   * @param {Object} [options] options
   * @param {boolean} [options.protocol = true] check protocol
   * @returns {Promise} return Promise
   */
  async check(url, options = {}) {
    return this._service.check(url, options);
  }
}

module.exports = UrlController;
