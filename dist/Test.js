"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Test = _ref => {
  let {
    content
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "styled-component"
  }, content);
};
var _default = exports.default = Test;