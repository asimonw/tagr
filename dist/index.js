'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

app.use(_express2.default.static('public', {
  extensions: ['html']
}));

app.use('/api', _api2.default);

app.listen(port, function () {
  console.log('Server running at port ' + port);
});