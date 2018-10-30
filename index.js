'use strict';

var fs = require('fs');
var path = require('path');

exports.get = function(event, context, callback) {
  var contents = fs.readFileSync(`public${path.sep}index.html`);
  var body = contents.toString();
  body = body
    .replace("Seattle.", "Seattle. Modified in Jerusalem.")
    .replace("Seattle", "Washington State")
  var result = {
    statusCode: 200,
    body: body,
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};
