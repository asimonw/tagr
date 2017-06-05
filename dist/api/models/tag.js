'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// mock data
var tags = [{
  id: 1,
  text: 'JavaScript'
}, {
  id: 2,
  text: 'CSS'
}];

var find = function find() {
  return tags;
};

var findById = function findById(id) {
  return _lodash2.default.find(tags, { id: id });
};

exports.default = { find: find, findById: findById };