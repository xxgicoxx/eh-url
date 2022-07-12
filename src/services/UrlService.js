class UrlService {
  async check(url, options = {}) {
    if (!url) {
      throw new Error("'url' cannot be empty");
    }

    const regex = this.getRegex(options.protocol);

    return regex.test(url);
  }

  getRegex(protocol = false) {
    if (protocol === false) {
      return /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.?|){1}([0-9A-Za-z-.@:%_+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/;
    }

    return /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-.@:%_+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/;
  }
}

module.exports = UrlService;
