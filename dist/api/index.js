'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _tag = require('./models/tag');

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/tags', function (req, res) {
  res.send(_tag2.default.find());
});

router.get('/tags/:id', function (req, res) {
  var id = parseInt(req.params.id, 10);
  var tag = _tag2.default.findById(id);
  if (tag) {
    res.send(tag);
  } else {
    res.status(404).send();
  }
});

exports.default = router;