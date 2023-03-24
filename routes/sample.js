var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
          <head>
              <link rel="preload" as="style" href="https://localhost:3000/stylesheets/bar.css" >
              <link rel="preload" as="script" href="https://localhost:3000/js/bar.js" >

              <link rel="stylesheet" href="https://localhost:3000/stylesheets/bar.css" >
              <meta charset="UTF-8">
              <title>Bar Document</title>
             
          </head>
          <body>
              <h1>Sample Page</h1>
              <p>This is a bar document.</p>
              <p id="demo"></p>
              <script src="https://localhost:3000/js/bar.js"></script>
          </body>
      </html>`);
});

module.exports = router;
