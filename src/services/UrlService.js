class UrlService {
  async check(url, options = {}) {
    if (!url) {
      throw new Error("'url' cannot be empty");
    }

    let regex;

    if (options && options.protocol === false) {
      regex = new RegExp('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.?|){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?');
    } else {
      regex = new RegExp('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?');
    }

    return regex.test(url);
  }
}

module.exports = UrlService;
