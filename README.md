# eh-url
Node.js package for check whether a string is a URL.

<p align="center">
  <img src="https://i.imgur.com/EfqDfb3.png">
</p>

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Installation
````
npm install eh-url
````

### Example
```javascript
const ehUrl = require('eh-url');

(async () => {
    const url = await ehUrl('https://google.com.br/');
    console.log(url);
})();
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [FlatIcon](https://www.flaticon.com/)