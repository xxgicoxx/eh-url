# eh-url
Node package to check whether a string is a URL.

### Installation
````
npm install eh-url
````

### Example
```javascript
var ehUrl = require('eh-url');

await ehUrl('https://google.com.br/'); //true
await ehUrl('https://google.c/'); //false
await ehUrl('www.google.com/'); //true
await ehUrl('www.google.x/'); //false
await ehUrl('google.com'); //false
await ehUrl('google.com', { protocol: false }); //true
```

### Built With
* [Node.js](https://nodejs.org/en/)

### Authors
* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)