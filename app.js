const http = require('http');
const httpProxy = require('http-proxy');
const url = require('url');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});


// Create server
var server = http.createServer(function (req, res) {
  console.log('Receiving reverse proxy request for:' + req.url)
  var parsedUrl = url.parse(req.url);
  var target = 'https://' + parsedUrl.hostname;
  console.log('aaàaaaa',target)
  proxy.web(req, res, {target: target, secure: false});
})

console.log("listening on port 8000")
server.listen(443)
