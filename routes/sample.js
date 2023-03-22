var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', (req, res) => {
  res.push(['/js/bar.js', '/stylesheets/bar.css'], express.static(path.join(__dirname, 'public')))
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
          <head>
              <link rel="stylesheet" href="/stylesheets/bar.css">
              <meta charset="UTF-8">
              <title>Bar Document</title>
          </head>
          <body>
              <h1>Sample Page</h1>
              <p>This is a bar document.</p>
              <p id="demo"></p>
              <script src="/js/bar.js"></script>
          </body>
      </html>`);
})

module.exports = router;