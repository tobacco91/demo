'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _unoconv = require('unoconv');

var _unoconv2 = _interopRequireDefault(_unoconv);

var server = _http2['default'].createServer(function (req, res) {
    _unoconv2['default'].convert('word.docx', 'pdf', function (err, result) {
        // result is returned as a Buffer
        _fs2['default'].writeFile('converted.pdf', result);
    });
});
server.listen(8080);
