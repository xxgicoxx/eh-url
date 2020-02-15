/**
 * Check url
 *
 * @param {!string} url url to check
 * @param {Object} [options] options
 * @param {boolean} [options.protocol = true] check protocol
 * @returns {Promise} return Promise
 */
async function ehUrl(url = '', options = {}) {
  try {
    let regex = new RegExp('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?');

    if (options && options.protocol === false) {
      regex = new RegExp('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.?|){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?');
    }

    return regex.test(url);
  } catch (ex) {
    throw new Error(ex);
  }
}

module.exports = ehUrl;
