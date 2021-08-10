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

ehUrl('https://google.com.br/').then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});

ehUrl('google.com').then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});

ehUrl('google.com', { protocol: false }).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [FlatIcon](https://www.flaticon.com/)