'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jmdalmasso/Desktop/my_dev_hub/hello-next/pages/post.js?entry';


var Post = function Post(props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, props.show.name), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.show.summary.replace(/<[/]?p>/g, '')), _react2.default.createElement('img', { src: props.show.image.medium, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

Post.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var id, res, show;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/shows/' + id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;

            console.log('Fetched show: ' + show.name);

            return _context.abrupt('return', { show: show });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiZmV0Y2giLCJQb3N0IiwicHJvcHMiLCJzaG93IiwibmFtZSIsInN1bW1hcnkiLCJyZXBsYWNlIiwiaW1hZ2UiLCJtZWRpdW0iLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiaWQiLCJxdWVyeSIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxPQUFPLFNBQVAsQUFBTyxZQUFBO3lCQUNYLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSztBQUFMO0FBQUEsV0FBSyxBQUFNLEtBRGIsQUFDRSxBQUFnQixBQUNoQix1QkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxXQUFJLEFBQU0sS0FBTixBQUFXLFFBQVgsQUFBbUIsUUFBbkIsQUFBMkIsWUFGakMsQUFFRSxBQUFJLEFBQXVDLEFBQzNDLDZDQUFLLEtBQUssTUFBQSxBQUFNLEtBQU4sQUFBVyxNQUFyQixBQUEyQjtnQkFBM0I7a0JBSlMsQUFDWCxBQUdFO0FBQUE7O0FBSko7O0FBUUEsS0FBQSxBQUFLLDhCQUFMO3NGQUF1QixpQkFBQSxBQUFlLFNBQWY7aUJBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFDYjtBQURhLGlCQUNOLFFBRE0sQUFDRSxNQURGLEFBQ2I7NEJBRGE7bUJBRUgsbUVBRkcsQUFFSCxBQUFzQzs7ZUFBbEQ7QUFGZSwyQkFBQTs0QkFBQTttQkFHRixJQUhFLEFBR0YsQUFBSTs7ZUFBakI7QUFIZSw0QkFLckI7O29CQUFBLEFBQVEsdUJBQXFCLEtBTFIsQUFLckIsQUFBa0M7OzZDQUUzQixFQUFFLE1BUFksQUFPZDs7ZUFQYztlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQXZCOzt1QkFBQTs0QkFBQTtBQUFBO0FBVUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoicG9zdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1kYWxtYXNzby9EZXNrdG9wL215X2Rldl9odWIvaGVsbG8tbmV4dCJ9