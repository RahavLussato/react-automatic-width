/*!
 * Copyright 2015 Zalando SE
 * 
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["react-automatic-width"]=t(require("react")):e["react-automatic-width"]=t(e.react)}(this,function(__WEBPACK_EXTERNAL_MODULE_2__){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(1);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?")},function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AutomaticWidth = function (_React$Component) {\n    _inherits(AutomaticWidth, _React$Component);\n\n    function AutomaticWidth() {\n        _classCallCheck(this, AutomaticWidth);\n\n        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AutomaticWidth).call(this));\n\n        _this.state = {\n            listener: null,\n            width: 0\n        };\n        return _this;\n    }\n\n    _createClass(AutomaticWidth, [{\n        key: '_resizeHandler',\n        value: function _resizeHandler() {\n            var dom = this.refs.autowidthWrapper;\n            var clientWidth = dom.clientWidth;\n\n            if (clientWidth !== this.state.width && clientWidth > 0) {\n                this.setState({\n                    width: clientWidth\n                });\n            }\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var boundListener = this._resizeHandler.bind(this);\n            boundListener();\n            window.addEventListener('resize', boundListener);\n            this.setState({\n                listener: boundListener\n            });\n        }\n    }, {\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n            window.removeEventListener('resize', this.state.listener);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var width = this.state.width;\n\n            return _react2.default.createElement(\n                'div',\n                _extends({ ref: 'autowidthWrapper' }, this.props),\n                _react2.default.Children.map(this.props.children, function (c) {\n                    return _react2.default.cloneElement(c, { width: width });\n                })\n            );\n        }\n    }]);\n\n    return AutomaticWidth;\n}(_react2.default.Component);\n\nAutomaticWidth.displayName = 'AutomaticWidth';\nexports.default = AutomaticWidth;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/react-automatic-width.jsx\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/react-automatic-width.jsx?")},function(module,exports){eval('module.exports = __WEBPACK_EXTERNAL_MODULE_2__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external "react"\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22react%22?')}])});