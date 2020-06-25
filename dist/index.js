'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactRouterDom = require('react-router-dom');
var fi = require('react-icons/fi');
var toaster = _interopDefault(require('toasted-notes'));
var Tippy = _interopDefault(require('@tippy.js/react'));

var AirflowLogo = function AirflowLogo(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 150 150",
    className: className
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "#017cee",
    d: "M3.586 147.805l70.469-72.23c.441-.454.523-1.153.156-1.669-4.285-5.984-12.191-7.02-15.121-11.039-8.68-11.906-10.883-18.648-14.613-18.23a1.15 1.15 0 00-.676.36L18.344 71.09C3.699 86.102 1.602 119.152 1.214 146.828c-.019 1.25 1.5 1.871 2.372.977zm0 0"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#00ad46",
    d: "M147.805 146.02l-72.23-70.465c-.454-.442-1.153-.528-1.669-.16-5.984 4.289-7.02 12.195-11.039 15.125-11.906 8.68-18.648 10.882-18.23 14.613.031.258.172.492.36.676l26.093 25.457c15.012 14.64 48.062 16.742 75.738 17.129 1.25.015 1.871-1.5.977-2.375zm0 0"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#04d659",
    fillRule: "evenodd",
    d: "M71.09 131.266c-8.203-8-12.008-23.828 3.715-56.461C49.254 86.223 40.3 101.23 44.707 105.527zm0 0"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#00c7d4",
    d: "M146.02 1.805l-70.465 72.23c-.442.453-.528 1.153-.16 1.668 4.285 5.984 12.19 7.02 15.12 11.04 8.684 11.905 10.887 18.648 14.614 18.23a1.1 1.1 0 00.676-.36l25.457-26.093c14.644-15.012 16.746-48.063 17.129-75.739.02-1.25-1.5-1.87-2.371-.976zm0 0"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#11e1ee",
    fillRule: "evenodd",
    d: "M131.262 78.52c-8 8.199-23.825 12.007-56.457-3.715 11.418 25.547 26.425 34.504 30.722 30.097zm0 0"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#e43921",
    d: "M1.8 3.59l72.235 70.465c.453.441 1.153.527 1.668.156 5.98-4.285 7.02-12.191 11.04-15.121 11.905-8.68 18.648-10.883 18.23-14.613a1.15 1.15 0 00-.36-.676L78.52 18.344C63.508 3.699 30.457 1.602 2.78 1.214 1.53 1.199.905 2.714 1.8 3.59zm0 0"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#ff7557",
    fillRule: "evenodd",
    d: "M78.52 18.344c8.199 8 12.003 23.824-3.715 56.46 25.547-11.417 34.5-26.425 30.097-30.722zm0 0"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#0cb6ff",
    fillRule: "evenodd",
    d: "M18.344 71.09c8-8.203 23.824-12.004 56.46 3.715-11.417-25.547-26.425-34.5-30.722-30.098zm0 0"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#4a4848",
    d: "M77.965 74.754a3.151 3.151 0 11-6.3.081 3.151 3.151 0 016.3-.081zm0 0"
  }));
};

AirflowLogo.propTypes = {
  className: PropTypes.string
};
AirflowLogo.defaultProps = {
  className: null
};
AirflowLogo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AirflowLogo",
  "props": {
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};

var AstroLogo = function AstroLogo(_ref) {
  var style = _ref.style,
      dark = _ref.dark;
  // Keeps gradient ID's from conflicting
  var random = Math.random().toString(36).substring(7);
  var id = "astro-gradient-".concat(random);
  return /*#__PURE__*/React__default.createElement("svg", {
    id: "light",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1092.9 618",
    className: style
  }, /*#__PURE__*/React__default.createElement("linearGradient", {
    id: id,
    x1: "13.6",
    x2: "960.989",
    y1: "331.301",
    y2: "331.301",
    gradientTransform: "matrix(1 0 0 -1 0 663.302)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__default.createElement("stop", {
    offset: "0",
    stopColor: "#F96024"
  }), /*#__PURE__*/React__default.createElement("stop", {
    offset: ".787",
    stopColor: "#FF9907"
  })), /*#__PURE__*/React__default.createElement("path", {
    fill: dark ? '#282632' : '#e2e0df',
    d: "M166.4 588.2c3.9 7.5 11.3 12.1 19.4 12.1h108.3c13.8 0 23.8-12.4 27.2-18.9l60.8-116.6c1.1-2 4.7-4.2 6.4-4.2h287.1c1.8 0 5.4 2.2 6.4 4.2l60.7 116.6c3.4 6.5 13.5 18.9 27.2 18.9h108.3c8.1 0 15.5-4.6 19.4-12.1 3.8-7.2 3.7-16.1-.3-23.3L602.2 29.4c-4-7.2-11.3-11.6-19.1-11.6h-102c-7.8 0-15.2 4.5-19.1 11.6L166.7 564.9c-4 7.1-4.1 16.1-.3 23.3zm291.7-269.6l74-142 74 142c.7 1.4 1.3 3.6 1.1 4.4-.3.1-.9.3-2.2.3H459.2c-1.3 0-1.9-.2-2.2-.3-.2-.8.4-2.9 1.1-4.4z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "#A39A8B",
    d: "M964.8 244.5c1.3-3.6 5.3-6.5 9.6-7.2l91.9-14.3c3.9-.6 7.2.7 8.5 3.4 1.3 2.7.3 6.2-2.7 8.8l-68.6 62.8c-3.2 3-8 4.2-11.6 3s-5.2-4.5-3.9-8.1l.9-2.4c2.2-7.8 1.7-15.4-1.6-22.2-3.4-7-9.4-12.3-17.4-15.4-.4-.1-.9-.3-1.3-.4-1.8-.6-3.1-1.7-3.8-3.1-.6-1.4-.7-3.1 0-4.9z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "url(#".concat(id, ")"),
    d: "M18 373.7c35.3-103.2 282.8-193.1 282.8-193.1.7-.2 1.5-.4 2.3-.4 4 0 7.3 3.3 7.3 7.3 0 2.9-1.7 5.4-4.1 6.6-40.3 19.7-221 111.1-240 180.8-2.8 8-3.4 16.1.4 23.2 15.3 29 95 40.9 213.4 31.9 110.9-8.4 246.7-23.9 413.7-75.2 77.5-23.8 151.5-50.5 220.1-79.5l2.3-.9 9-3.5c2.9-1.2 6.1-1.8 9.5-1.8 14.1 0 25.6 11.3 26 25.3.2 1.4.3 2.8.2 4.2-.5 9.1-6.7 16.9-16.5 20.8l-7.5 3.2c-69.4 28.9-141.5 54.7-220.4 79-148.6 45.7-286.6 70.5-447.3 80.3-21.4 1.3-41.7 2-60.8 2-13.9 0-27.1-.3-39.5-1-5.1-.3-10.1-.6-15-1-43.5-4.2-165-23.1-135.9-108.2z"
  }));
};

AstroLogo.propTypes = {
  style: PropTypes.string,
  dark: PropTypes.bool
};
AstroLogo.defaultProps = {
  style: null,
  dark: false
};
AstroLogo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AstroLogo",
  "props": {
    "style": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "dark": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    }
  }
};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n.styles-module_badge__3m7_p {\n  display: inline-block;\n  border-radius: 3px;\n  padding: 0.8px 4px;\n  padding: 0.8px 4px;\n  padding: 0.05rem 0.25rem;\n  font-size: 12px;\n  font-size: 12px;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  font-weight: 500;\n  white-space: nowrap;\n  color: #302c43;\n  background-color: rgba(48, 44, 67, .15)\n}\n\n.styles-module_badge__3m7_p.styles-module_error__3AvIL {\n  color: rgb(244, 68, 44);\n  background-color: rgba(244, 68, 44, .15);\n}\n\n.styles-module_badge__3m7_p.styles-module_warning__n3TNG {\n  color: rgb(255, 161, 26);\n  background-color: rgba(255, 161, 26, .15);\n}\n\n.styles-module_badge__3m7_p.styles-module_info__3eZOX {\n  color: rgb(4, 156, 241);\n  background-color: rgba(4, 156, 241, .15);\n}\n\n.styles-module_badge__3m7_p.styles-module_success__1KURQ {\n  color: rgb(0, 179, 93);\n  background-color: rgba(0, 179, 93, .15);\n}\n";
var s = {"badge":"styles-module_badge__3m7_p","error":"styles-module_error__3AvIL","warning":"styles-module_warning__n3TNG","info":"styles-module_info__3eZOX","success":"styles-module_success__1KURQ"};
styleInject(css_248z);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Badge = function Badge(_ref) {
  var className = _ref.className,
      status = _ref.status,
      text = _ref.text,
      otherProps = _objectWithoutProperties(_ref, ["className", "status", "text"]);

  return /*#__PURE__*/React__default.createElement("span", _extends({
    className: classnames(className, s[status], s.badge)
  }, otherProps), text);
};

Badge.propTypes = {
  className: PropTypes.string,
  status: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]).isRequired
};
Badge.defaultProps = {
  className: null,
  status: null
};
Badge.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Badge",
  "props": {
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "status": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "'error'",
          "computed": false
        }, {
          "value": "'warning'",
          "computed": false
        }, {
          "value": "'info'",
          "computed": false
        }, {
          "value": "'success'",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "text": {
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "element"
        }, {
          "name": "array"
        }]
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$1 = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n.styles-module_container__iwgTq {\n  border: 1px solid transparent;\n  width: 100%;\n  color: #fffefd;\n  padding: 4px 16px;\n  padding: 4px 16px;\n  padding: 0.25rem 1rem;\n  font-size: 13.6px;\n  font-size: 13.6px;\n  font-size: 0.85rem;\n  text-align: center\n}\n\n.styles-module_container__iwgTq.styles-module_error__2mqBO {\n  background-color: rgb(244, 68, 44);\n}\n\n.styles-module_container__iwgTq.styles-module_warning__23bru {\n  color: #252235;\n  background-color: rgb(255, 161, 26);\n}\n\n.styles-module_container__iwgTq.styles-module_info__3JQyH {\n  background-color: rgb(4, 156, 241);\n}\n\n.styles-module_container__iwgTq.styles-module_success__2y6GZ {\n  background-color: rgb(0, 179, 93);\n}\n";
var s$1 = {"container":"styles-module_container__iwgTq","error":"styles-module_error__2mqBO","warning":"styles-module_warning__23bru","info":"styles-module_info__3JQyH","success":"styles-module_success__2y6GZ"};
styleInject(css_248z$1);

var Banner = function Banner(_ref) {
  var type = _ref.type,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/React__default.createElement("div", {
    "data-name": "banner",
    "data-alert": type,
    className: classnames(className, s$1[type], s$1.container)
  }, /*#__PURE__*/React__default.createElement("div", null, children));
};

Banner.propTypes = {
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.node]).isRequired,
  className: PropTypes.string
};
Banner.defaultProps = {
  type: 'warning',
  className: null
};
Banner.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Banner",
  "props": {
    "type": {
      "defaultValue": {
        "value": "'warning'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "'error'",
          "computed": false
        }, {
          "value": "'warning'",
          "computed": false
        }, {
          "value": "'info'",
          "computed": false
        }, {
          "value": "'success'",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "union",
        "value": [{
          "name": "element"
        }, {
          "name": "array"
        }, {
          "name": "node"
        }]
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$2 = "@-webkit-keyframes styles-module_loadingDotBlink__1OqEJ {\n\n  0% {\n    opacity: 0.2;\n  }\n\n  40% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0.2;\n  }\n}\n\n@keyframes styles-module_loadingDotBlink__1OqEJ {\n\n  0% {\n    opacity: 0.2;\n  }\n\n  40% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0.2;\n  }\n}\n\n.styles-module_dots__Mqxrs {\n  display: inline-block;\n}\n\n.styles-module_dot__3N-S8 {\n\n  display: inline-block;\n  margin-left: 8px;\n  margin-left: 8px;\n  margin-left: 0.5rem;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  background-color: currentColor;\n  -webkit-animation: styles-module_loadingDotBlink__1OqEJ 1.2s infinite;\n          animation: styles-module_loadingDotBlink__1OqEJ 1.2s infinite;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  will-change: opacity\n}\n\n.styles-module_dot__3N-S8:first-child {\n  margin-left: 0;\n}\n\n.styles-module_dot__3N-S8:nth-child(2) {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\n.styles-module_dot__3N-S8:nth-child(3) {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n";
var s$2 = {"dots":"styles-module_dots__Mqxrs","dot":"styles-module_dot__3N-S8","loadingDotBlink":"styles-module_loadingDotBlink__1OqEJ"};
styleInject(css_248z$2);

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LoadingDots = function LoadingDots(_ref) {
  var className = _ref.className,
      otherProps = _objectWithoutProperties$1(_ref, ["className"]);

  return /*#__PURE__*/React__default.createElement("span", _extends$1({
    className: classnames(className, s$2.dots),
    "data-testid": "LoadingDots"
  }, otherProps), /*#__PURE__*/React__default.createElement("span", {
    className: s$2.dot
  }), /*#__PURE__*/React__default.createElement("span", {
    className: s$2.dot
  }), /*#__PURE__*/React__default.createElement("span", {
    className: s$2.dot
  }));
};

LoadingDots.propTypes = {
  className: PropTypes.string
};
LoadingDots.defaultProps = {
  className: null
};
LoadingDots.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LoadingDots",
  "props": {
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};

var css_248z$3 = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_button__3Sq9I {\n  position: relative;\n  display: inline-block;\n  font-family: 'GoodSans', 'SF Pro', 'Open Sans', sans;\n  font-weight: 500;\n  font-size: 16px;\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 24px;\n  line-height: 24px;\n  line-height: 1.5rem;\n  padding: 4px 14px;\n  padding: 4px 14px;\n  padding: 0.25rem 0.875rem;\n  white-space: nowrap;\n  text-align: center;\n  border-radius: 0.375em;\n  border: 2px solid transparent;\n  border: 2px solid transparent;\n  border: 0.125rem solid transparent;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition-timing-function: ease-in-out;\n          transition-timing-function: ease-in-out;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-property: color, background, border-color, -webkit-box-shadow;\n  transition-property: color, background, border-color, -webkit-box-shadow;\n  transition-property: box-shadow, color, background, border-color;\n  transition-property: box-shadow, color, background, border-color, -webkit-box-shadow\n}\n\n.styles-module_button__3Sq9I[disabled] {\n  cursor: not-allowed;\n}\n\n.styles-module_button__3Sq9I:focus,\n  .styles-module_button__3Sq9I:active {\n  outline: none;\n}\n\n.styles-module_button__3Sq9I.styles-module_displayAsBlockElement__2jj7n {\n  display: block;\n  width: 100%;\n}\n\n.styles-module_button__3Sq9I {\n  /* Styles */\n}\n\n.styles-module_button__3Sq9I.styles-module_link__1xBYG {\n  padding: 0;\n  height: auto;\n  line-height: inherit;\n  border-radius: 0;\n}\n\n.styles-module_button__3Sq9I.styles-module_primary__1c_aS:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(2, 126, 196, .4);\n          box-shadow: 0 0 0 3px rgba(2, 126, 196, .4);\n}\n\n.styles-module_button__3Sq9I.styles-module_primary__1c_aS {\n  border: 2px solid #027ec4;\n  border: 2px solid #027ec4;\n  border: 0.125rem solid #027ec4;\n  color: #fffefd;\n  background-color: #027ec4;\n}\n\n.styles-module_button__3Sq9I.styles-module_primary__1c_aS[disabled]:not([data-inflight='true']) {\n  color: #9e9e9c;\n  border-color: #e2e0df;\n  background-color: #e2e0df;\n}\n\n.styles-module_button__3Sq9I.styles-module_primary__1c_aS:not([disabled]):hover {\n  border-color: #049cf1;\n  color: #fffefd;\n  background-color: #049cf1;\n}\n\n.styles-module_button__3Sq9I.styles-module_secondary__3Q9XL:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(2, 126, 196, .4);\n          box-shadow: 0 0 0 3px rgba(2, 126, 196, .4);\n}\n\n.styles-module_button__3Sq9I.styles-module_secondary__3Q9XL {\n  border: 2px solid currentColor;\n  border: 2px solid currentColor;\n  border: 0.125rem solid currentColor;\n  color: #027ec4;\n  background-color: #fffefd;\n}\n\n.styles-module_button__3Sq9I.styles-module_secondary__3Q9XL[disabled]:not([data-inflight='true']) {\n  color: #c4c2c1;\n}\n\n.styles-module_button__3Sq9I.styles-module_secondary__3Q9XL:not([disabled]):hover {\n  background-color: rgba(2, 126, 196, .15);\n}\n\n.styles-module_button__3Sq9I.styles-module_primaryDestructive__3zJg0:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(244, 68, 44, .4);\n          box-shadow: 0 0 0 3px rgba(244, 68, 44, .4);\n}\n\n.styles-module_button__3Sq9I.styles-module_primaryDestructive__3zJg0 {\n  border: 2px solid #f4442c;\n  border: 2px solid #f4442c;\n  border: 0.125rem solid #f4442c;\n  color: #fffefd;\n  background-color: #f4442c;\n}\n\n.styles-module_button__3Sq9I.styles-module_primaryDestructive__3zJg0[disabled]:not([data-inflight='true']) {\n  color: #9e9e9c;\n  border-color: #e2e0df;\n  background-color: #e2e0df;\n}\n\n.styles-module_button__3Sq9I.styles-module_primaryDestructive__3zJg0:not([disabled]):hover {\n  border-color: #ff523a;\n  color: #fffefd;\n  background-color: #ff523a;\n}\n\n.styles-module_button__3Sq9I.styles-module_secondaryDestructive__2HGRZ:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(244, 68, 44, .4);\n          box-shadow: 0 0 0 3px rgba(244, 68, 44, .4);\n}\n\n.styles-module_button__3Sq9I.styles-module_secondaryDestructive__2HGRZ {\n  border: 2px solid currentColor;\n  border: 2px solid currentColor;\n  border: 0.125rem solid currentColor;\n  color: #f4442c;\n  background-color: #fffefd;\n}\n\n.styles-module_button__3Sq9I.styles-module_secondaryDestructive__2HGRZ[disabled]:not([data-inflight='true']) {\n  color: #c4c2c1;\n}\n\n.styles-module_button__3Sq9I.styles-module_secondaryDestructive__2HGRZ:not([disabled]):hover {\n  background-color: rgba(244, 68, 44, .15);\n}\n\n.styles-module_button__3Sq9I.styles-module_primaryAlt__3ACon:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(48, 44, 67, .4);\n          box-shadow: 0 0 0 3px rgba(48, 44, 67, .4);\n}\n\n.styles-module_button__3Sq9I.styles-module_primaryAlt__3ACon {\n  border: 2px solid #302c43;\n  border: 2px solid #302c43;\n  border: 0.125rem solid #302c43;\n  color: #fffefd;\n  background-color: #302c43;\n}\n\n.styles-module_button__3Sq9I.styles-module_primaryAlt__3ACon[disabled]:not([data-inflight='true']) {\n  color: #9e9e9c;\n  border-color: #e2e0df;\n  background-color: #e2e0df;\n}\n\n.styles-module_button__3Sq9I.styles-module_primaryAlt__3ACon:not([disabled]):hover {\n  border-color: #252235;\n  color: #fffefd;\n  background-color: #252235;\n}\n\n.styles-module_button__3Sq9I.styles-module_google__JzLlY:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(66, 133, 245, .4);\n          box-shadow: 0 0 0 3px rgba(66, 133, 245, .4);\n}\n\n.styles-module_button__3Sq9I.styles-module_google__JzLlY {\n  border: 2px solid #4285f5;\n  border: 2px solid #4285f5;\n  border: 0.125rem solid #4285f5;\n  color: #fffefd;\n  background-color: #4285f5;\n}\n\n.styles-module_button__3Sq9I.styles-module_google__JzLlY[disabled]:not([data-inflight='true']) {\n  color: #9e9e9c;\n  border-color: #e2e0df;\n  background-color: #e2e0df;\n}\n\n.styles-module_button__3Sq9I.styles-module_google__JzLlY:not([disabled]):hover {\n  border-color: #4285f5;\n  color: #fffefd;\n  background-color: #4285f5;\n}\n\n.styles-module_button__3Sq9I.styles-module_okta__3H2FK:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(0, 125, 193, .4);\n          box-shadow: 0 0 0 3px rgba(0, 125, 193, .4);\n}\n\n.styles-module_button__3Sq9I.styles-module_okta__3H2FK {\n  border: 2px solid #007dc1;\n  border: 2px solid #007dc1;\n  border: 0.125rem solid #007dc1;\n  color: #fffefd;\n  background-color: #007dc1;\n}\n\n.styles-module_button__3Sq9I.styles-module_okta__3H2FK[disabled]:not([data-inflight='true']) {\n  color: #9e9e9c;\n  border-color: #e2e0df;\n  background-color: #e2e0df;\n}\n\n.styles-module_button__3Sq9I.styles-module_okta__3H2FK:not([disabled]):hover {\n  border-color: #007dc1;\n  color: #fffefd;\n  background-color: #007dc1;\n}\n\n.styles-module_button__3Sq9I.styles-module_github__1_PIg:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(24, 23, 23, .4);\n          box-shadow: 0 0 0 3px rgba(24, 23, 23, .4);\n}\n\n.styles-module_button__3Sq9I.styles-module_github__1_PIg {\n  border: 2px solid #181717;\n  border: 2px solid #181717;\n  border: 0.125rem solid #181717;\n  color: #fffefd;\n  background-color: #181717;\n}\n\n.styles-module_button__3Sq9I.styles-module_github__1_PIg[disabled]:not([data-inflight='true']) {\n  color: #9e9e9c;\n  border-color: #e2e0df;\n  background-color: #e2e0df;\n}\n\n.styles-module_button__3Sq9I.styles-module_github__1_PIg:not([disabled]):hover {\n  border-color: #181717;\n  color: #fffefd;\n  background-color: #181717;\n}\n\n.styles-module_button__3Sq9I {\n  /* Sizes */\n}\n\n.styles-module_button__3Sq9I.styles-module_small__1wI1X {\n  padding: 0 10px;\n  padding: 0 10px;\n  padding: 0 0.625rem;\n  font-size: 14px;\n  font-size: 14px;\n  font-size: 0.875rem;\n  /* 14px */\n}\n\n.styles-module_button__3Sq9I.styles-module_large__3Wgdt {\n  padding: 8px 22px;\n  padding: 8px 22px;\n  padding: 0.5rem 1.375rem;\n  font-size: 18px;\n  font-size: 18px;\n  font-size: 1.125rem;\n  /* 18px */\n}\n\n.styles-module_inFlightDots__1SqFr {\n  position: absolute;\n  left: 0;\n  width: 100%;\n}\n\n.styles-module_inFlightText__1wkjX {\n  opacity: 0;\n}\n\n.styles-module_icon__3mtfe {/* arbitrary visual fix */\n\n  display: inline-block;\n  vertical-align: middle;\n  width: 1em;\n  height: 1em\n}\n\n.styles-module_icon__3mtfe.styles-module_left__2__o8 {\n  margin: -0.2em 0.5em 0 -0.25em;\n}\n\n.styles-module_icon__3mtfe.styles-module_right__2Df37 {\n  margin: -0.2em -0.25em 0 0.5em;\n}\n\n.styles-module_button__3Sq9I[data-inflight='true'] .styles-module_icon__3mtfe {\n  opacity: 0;\n}\n";
var s$3 = {"button":"styles-module_button__3Sq9I","displayAsBlockElement":"styles-module_displayAsBlockElement__2jj7n","link":"styles-module_link__1xBYG","primary":"styles-module_primary__1c_aS","secondary":"styles-module_secondary__3Q9XL","primaryDestructive":"styles-module_primaryDestructive__3zJg0","secondaryDestructive":"styles-module_secondaryDestructive__2HGRZ","primaryAlt":"styles-module_primaryAlt__3ACon","google":"styles-module_google__JzLlY","okta":"styles-module_okta__3H2FK","github":"styles-module_github__1_PIg","small":"styles-module_small__1wI1X","large":"styles-module_large__3Wgdt","inFlightDots":"styles-module_inFlightDots__1SqFr","inFlightText":"styles-module_inFlightText__1wkjX","icon":"styles-module_icon__3mtfe","left":"styles-module_left__2__o8","right":"styles-module_right__2Df37"};
styleInject(css_248z$3);

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ButtonIcon = function ButtonIcon(_ref) {
  var icon = _ref.icon,
      position = _ref.position;
  var Icon = icon;
  return /*#__PURE__*/React__default.createElement(Icon, {
    className: classnames(s$3[position], s$3.icon)
  });
};
ButtonIcon.propTypes = {
  icon: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['left', 'right']).isRequired
};
var Button = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var type = _ref2.type,
      to = _ref2.to,
      label = _ref2.label,
      buttonSize = _ref2.buttonSize,
      buttonStyle = _ref2.buttonStyle,
      iconLeft = _ref2.iconLeft,
      iconRight = _ref2.iconRight,
      isDisabled = _ref2.isDisabled,
      inFlight = _ref2.inFlight,
      displayBlock = _ref2.displayBlock,
      className = _ref2.className,
      otherProps = _objectWithoutProperties$2(_ref2, ["type", "to", "label", "buttonSize", "buttonStyle", "iconLeft", "iconRight", "isDisabled", "inFlight", "displayBlock", "className"]);

  var btnClasses = classnames(className, displayBlock && s$3.displayAsBlockElement, s$3[buttonStyle], s$3[buttonSize], s$3.button);

  var renderButtonContents = function renderButtonContents() {
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, iconLeft && /*#__PURE__*/React__default.createElement(ButtonIcon, {
      icon: iconLeft,
      position: "left"
    }), label, iconRight && /*#__PURE__*/React__default.createElement(ButtonIcon, {
      icon: iconRight,
      position: "right"
    }));
  };

  if (type === 'internal') {
    return /*#__PURE__*/React__default.createElement(reactRouterDom.Link, _extends$2({
      ref: ref,
      to: to,
      className: btnClasses
    }, otherProps), renderButtonContents());
  }

  if (type === 'external') {
    return /*#__PURE__*/React__default.createElement("a", _extends$2({
      ref: ref,
      href: to,
      className: btnClasses,
      target: "_blank",
      rel: "noreferrer noopener"
    }, otherProps), renderButtonContents());
  }

  return /*#__PURE__*/React__default.createElement("button", _extends$2({
    // eslint-disable-line
    ref: ref,
    type: type,
    className: btnClasses,
    disabled: isDisabled || inFlight,
    "data-inflight": inFlight ? 'true' : null
  }, otherProps), !inFlight && renderButtonContents(), inFlight && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(LoadingDots, {
    className: s$3.inFlightDots
  }), /*#__PURE__*/React__default.createElement("span", {
    className: s$3.inFlightText
  }, renderButtonContents())));
});
Button.displayName = 'Button';
Button.propTypes = {
  type: PropTypes.oneOf(['internal', 'external', 'button', 'submit', 'reset']),
  to: PropTypes.string,
  label: PropTypes.string.isRequired,
  buttonSize: PropTypes.oneOf(['small', 'large']),
  buttonStyle: PropTypes.oneOf(['link', 'primary', 'secondary', 'primaryDestructive', 'secondaryDestructive', 'primaryAlt', 'google', 'okta', 'github']),
  iconLeft: PropTypes.func,
  iconRight: PropTypes.func,
  isDisabled: PropTypes.bool,
  inFlight: PropTypes.bool,
  className: PropTypes.string,
  displayBlock: PropTypes.bool
};
Button.defaultProps = {
  to: null,
  type: 'button',
  buttonSize: null,
  buttonStyle: 'primary',
  iconLeft: null,
  iconRight: null,
  isDisabled: false,
  inFlight: false,
  className: null,
  displayBlock: false
};
Button.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Button",
  "props": {
    "to": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "type": {
      "defaultValue": {
        "value": "'button'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "'internal'",
          "computed": false
        }, {
          "value": "'external'",
          "computed": false
        }, {
          "value": "'button'",
          "computed": false
        }, {
          "value": "'submit'",
          "computed": false
        }, {
          "value": "'reset'",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "buttonSize": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "'small'",
          "computed": false
        }, {
          "value": "'large'",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "buttonStyle": {
      "defaultValue": {
        "value": "'primary'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "'link'",
          "computed": false
        }, {
          "value": "'primary'",
          "computed": false
        }, {
          "value": "'secondary'",
          "computed": false
        }, {
          "value": "'primaryDestructive'",
          "computed": false
        }, {
          "value": "'secondaryDestructive'",
          "computed": false
        }, {
          "value": "'primaryAlt'",
          "computed": false
        }, {
          "value": "'google'",
          "computed": false
        }, {
          "value": "'okta'",
          "computed": false
        }, {
          "value": "'github'",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "iconLeft": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "iconRight": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "inFlight": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "displayBlock": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "label": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};
ButtonIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ButtonIcon",
  "props": {
    "icon": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "position": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "'left'",
          "computed": false
        }, {
          "value": "'right'",
          "computed": false
        }]
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$4 = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_heading__2XhjI {\n  margin: 0;\n  font-family: 'GoodSans', 'SF Pro', 'Open Sans', sans;\n  font-weight: 700;\n  color: rgb(48, 44, 67);\n}\n\n.styles-module_h1__1ajMu {\n  font-size: 36px;\n  font-size: 36px;\n  font-size: 2.25rem;\n}\n\n.styles-module_h2__1GX8- {\n  font-size: 28px;\n  font-size: 28px;\n  font-size: 1.75rem;\n}\n\n.styles-module_h3__2iSoT {\n  font-size: 22px;\n  font-size: 22px;\n  font-size: 1.375rem;\n  font-weight: 500;\n}\n\n.styles-module_h4__1yVS8 {\n  font-size: 16px;\n  font-size: 16px;\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.styles-module_h5__1WOjM {\n  font-size: 13.6px;\n  font-size: 13.6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n\n.styles-module_h6__242JB {\n  font-size: 10.4px;\n  font-size: 10.4px;\n  font-size: 0.65rem;\n}\n";
var s$4 = {"heading":"styles-module_heading__2XhjI","h1":"styles-module_h1__1ajMu","h2":"styles-module_h2__1GX8-","h3":"styles-module_h3__2iSoT","h4":"styles-module_h4__1yVS8","h5":"styles-module_h5__1WOjM","h6":"styles-module_h6__242JB"};
styleInject(css_248z$4);

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Heading = function Heading(_ref) {
  var as = _ref.as,
      styleAs = _ref.styleAs,
      children = _ref.children,
      className = _ref.className,
      otherProps = _objectWithoutProperties$3(_ref, ["as", "styleAs", "children", "className"]);

  var HTag = as;
  return /*#__PURE__*/React__default.createElement(HTag, _extends$3({
    className: classnames(className, styleAs ? s$4[styleAs] : s$4[as], s$4.heading)
  }, otherProps), children);
};

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  styleAs: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.node]).isRequired,
  className: PropTypes.string
};
Heading.defaultProps = {
  styleAs: null,
  className: null
};
Heading.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Heading",
  "props": {
    "styleAs": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "'h1'",
          "computed": false
        }, {
          "value": "'h2'",
          "computed": false
        }, {
          "value": "'h3'",
          "computed": false
        }, {
          "value": "'h4'",
          "computed": false
        }, {
          "value": "'h5'",
          "computed": false
        }, {
          "value": "'h6'",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "as": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "'h1'",
          "computed": false
        }, {
          "value": "'h2'",
          "computed": false
        }, {
          "value": "'h3'",
          "computed": false
        }, {
          "value": "'h4'",
          "computed": false
        }, {
          "value": "'h5'",
          "computed": false
        }, {
          "value": "'h6'",
          "computed": false
        }]
      },
      "required": true,
      "description": ""
    },
    "children": {
      "type": {
        "name": "union",
        "value": [{
          "name": "element"
        }, {
          "name": "array"
        }, {
          "name": "node"
        }]
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$5 = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_card__1vc51 {\n  border-radius: 6px;\n  border: solid 4px #fffefd;\n  border: solid 4px #fffefd;\n  border: solid 0.25rem #fffefd;\n  width: 100%;\n  background-color: #fffefd;\n}\n\n.styles-module_cardHeader__3XrMj {\n  border-bottom: solid 2px #f5f5f5;\n  padding: 16px 16px 8px;\n  padding: 16px 16px 8px;\n  padding: 1rem 1rem 0.5rem;\n}\n\n.styles-module_cardBody__1NGAV {\n  padding: 16px;\n  padding: 16px;\n  padding: 1rem\n}\n\n.styles-module_cardBody__1NGAV.styles-module_noPadding__2AeY4 {\n  padding: 0;\n}\n\n.styles-module_cardFooter___p8J_ {\n  border-top: solid 2px #f5f5f5;\n  padding: 16px 16px 8px;\n  padding: 16px 16px 8px;\n  padding: 1rem 1rem 0.5rem;\n}\n";
var s$5 = {"card":"styles-module_card__1vc51","cardHeader":"styles-module_cardHeader__3XrMj","cardBody":"styles-module_cardBody__1NGAV","noPadding":"styles-module_noPadding__2AeY4","cardFooter":"styles-module_cardFooter___p8J_"};
styleInject(css_248z$5);

var Card = function Card(_ref) {
  var header = _ref.header,
      children = _ref.children,
      footer = _ref.footer,
      noPadding = _ref.noPadding,
      className = _ref.className;
  return /*#__PURE__*/React__default.createElement("div", {
    className: classnames(className, s$5.card),
    "data-testid": "Card"
  }, header && /*#__PURE__*/React__default.createElement("div", {
    className: s$5.cardHeader
  }, typeof header === 'string' && /*#__PURE__*/React__default.createElement(Heading, {
    as: "h4"
  }, header), typeof header !== 'string' && header), /*#__PURE__*/React__default.createElement("div", {
    className: classnames(s$5.cardBody, noPadding && s$5.noPadding)
  }, children), footer && /*#__PURE__*/React__default.createElement("div", {
    className: s$5.cardFooter
  }, footer));
};

Card.propTypes = {
  header: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.node, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.node]).isRequired,
  footer: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.node]),
  noPadding: PropTypes.bool,
  className: PropTypes.string
};
Card.defaultProps = {
  header: null,
  footer: null,
  noPadding: false,
  className: null
};
Card.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Card",
  "props": {
    "header": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "element"
        }, {
          "name": "array"
        }, {
          "name": "node"
        }, {
          "name": "string"
        }]
      },
      "required": false,
      "description": ""
    },
    "footer": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "element"
        }, {
          "name": "array"
        }, {
          "name": "node"
        }]
      },
      "required": false,
      "description": ""
    },
    "noPadding": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "union",
        "value": [{
          "name": "element"
        }, {
          "name": "array"
        }, {
          "name": "node"
        }]
      },
      "required": true,
      "description": ""
    }
  }
};

var CeleryLogo = function CeleryLogo(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "svg3392",
    viewBox: "0 0 137 137",
    className: className
  }, /*#__PURE__*/React__default.createElement("path", {
    id: "path4707-0",
    fill: "#ff9a09",
    d: "M95.913 22.228c-.129 0-.252.489-.34 1.465l-1.138 11.96a3.81 3.81 0 01-.378 1.313 3.953 3.953 0 01-.9-.532l-4.684-3.869c-1.526-1.242-1.74-.993-.533.534l3.904 4.862c.205.26.361.55.493.852-.54.32-1.14.533-1.77.567l-16.753 1.03c-1.952.106-1.952.355 0 .497l16.54 1.313c.614.045 1.2.257 1.73.57-.121.2-.258.39-.416.566l-4.721 5.146c-1.314 1.455-1.136 1.633.426.462l5.749-4.402a3.92 3.92 0 01.476-.3c.336.533.568 1.128.626 1.756l1.348 14.056c.178 1.952.496 1.952.674 0L97.63 45.84c.05-.557.24-1.089.514-1.575.193.11.379.228.55.368l4.687 3.833c1.49 1.243 1.74 1.03.497-.496l-3.835-4.686a3.643 3.643 0 01-.402-.596c.562-.357 1.194-.597 1.858-.646l9.974-.78c1.952-.142 1.952-.427 0-.64l-9.974-1.028c-.709-.08-1.396-.369-1.993-.798.15-.351.331-.687.573-.978l3.906-4.684c1.242-1.49 1.028-1.704-.498-.497l-4.792 3.833a3.9 3.9 0 01-.74.449 3.986 3.986 0 01-.36-1.23L96.28 23.693c-.106-.976-.24-1.465-.368-1.465z"
  }), /*#__PURE__*/React__default.createElement("style", {
    id: "style4689"
  }), /*#__PURE__*/React__default.createElement("g", {
    id: "g4984",
    transform: "translate(-1.836 -13)"
  }, /*#__PURE__*/React__default.createElement("path", {
    id: "rect3542-0",
    fill: "#00B35D",
    stroke: "#f48e06",
    strokeLinecap: "square",
    strokeWidth: ".217",
    d: "M28.834 62.424h102.052c-22.734 16.35-24.697 33.037 0 50.153H28.834c-14.182 0-25.6-11.184-25.6-25.077 0-13.892 11.418-25.076 25.6-25.076z"
  }), /*#__PURE__*/React__default.createElement("path", {
    id: "rect4161-7",
    fill: "#39b865",
    strokeLinecap: "round",
    strokeWidth: "22",
    d: "M28.834 62.424c-10.07 0-18.74 5.64-22.925 13.883H116.76c2.977-4.655 7.729-9.283 14.125-13.883H28.834zM3.235 87.501c0 4.028.965 7.826 2.675 11.193h110.62c-2.358-3.751-3.481-7.482-3.433-11.193H3.235z"
  }), /*#__PURE__*/React__default.createElement("path", {
    id: "path4174-4",
    fill: "none",
    stroke: "#0CBEDB",
    strokeLinecap: "round",
    strokeWidth: "2.798",
    d: "M131.25 62.316c-.77 0-1.528.04-2.278.108H28.834c-14.182 0-25.599 11.184-25.599 25.077 0 13.892 11.417 25.076 25.6 25.076h100.151a25.34 25.34 0 002.264.107 6.229 6.229 0 100-12.456c-7.653 0-12.473-5.318-12.473-12.727 0-7.41 4.82-12.73 12.473-12.73a6.229 6.229 0 100-12.455z"
  }), /*#__PURE__*/React__default.createElement("path", {
    id: "rect3544-7",
    fill: "#07D65B",
    stroke: "#0CBEDB",
    strokeLinecap: "round",
    strokeWidth: "2.798",
    d: "M131.25 62.316c-14.106 0-24.929 11.59-24.929 25.185 0 13.594 10.823 25.183 24.93 25.183a6.229 6.229 0 100-12.456c-7.654 0-12.474-5.318-12.474-12.727 0-7.41 4.82-12.73 12.473-12.73a6.229 6.229 0 100-12.455z",
    overflow: "visible"
  })), /*#__PURE__*/React__default.createElement("path", {
    id: "path4711-2",
    fill: "#09a6d1",
    d: "M66.908 37.07c0-.04 0-.04 0 0-1.709-.04-5.941-.39-7.999-2.486-2.097-2.097-2.485-6.368-2.563-8.115-.077 1.747-.466 6.018-2.562 8.115-2.097 2.097-6.29 2.407-8 2.446 1.71.04 5.942.389 8 2.447 2.096 2.096 2.485 6.367 2.562 8.115.078-1.748.466-6.019 2.563-8.115 2.097-2.02 6.29-2.369 7.999-2.408.039 0 0 0 0 0"
  }), /*#__PURE__*/React__default.createElement("circle", {
    id: "circle4705-4",
    cx: "28.734",
    cy: "27.947",
    r: "2.663",
    fill: "#00B35D"
  }), /*#__PURE__*/React__default.createElement("circle", {
    id: "circle4713-2",
    cx: "66.367",
    cy: "20.717",
    r: "2.446",
    fill: "#f4362c"
  }), /*#__PURE__*/React__default.createElement("path", {
    id: "path4372-06",
    fill: "#777572",
    d: "M17.812 14.414s0-.069 0 0c-1.165-.069-4.111-.274-5.482-1.713-1.439-1.44-1.713-4.385-1.781-5.55-.069 1.165-.343 4.11-1.782 5.55-1.439 1.439-4.317 1.644-5.481 1.713 1.164 0 4.042.274 5.481 1.713 1.44 1.439 1.713 4.385 1.782 5.55.068-1.165.342-4.111 1.781-5.55 1.44-1.44 4.317-1.713 5.482-1.713.068 0 0 0 0 0"
  }));
};

CeleryLogo.propTypes = {
  className: PropTypes.string
};
CeleryLogo.defaultProps = {
  className: null
};
CeleryLogo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CeleryLogo",
  "props": {
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};

var css_248z$6 = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n/* width & height */\n\n.styles-module_label__1Tvct {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer\n}\n\n.styles-module_label__1Tvct.styles-module_disabled__1V23_ {\n  cursor: not-allowed;\n}\n\n/* Visusally hidden inputs but still accessible */\n\n.styles-module_input__216MF {\n  position: absolute;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  border: 0;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  white-space: nowrap;\n  -webkit-clip-path: inset(50%);\n          clip-path: inset(50%);\n}\n\n.styles-module_checkbox__2zcaN {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  margin-right: 8px;\n  margin-right: 8px;\n  margin-right: 0.5rem;\n  border: solid 2px rgb(196, 194, 193);\n  border-radius: 6px;\n  width: 20px;\n  width: 20px;\n  width: 1.25rem;\n  height: 20px;\n  height: 20px;\n  height: 1.25rem;\n  background-color: #edecec;\n  -webkit-transition: border-color 0.25s ease-in-out;\n  transition: border-color 0.25s ease-in-out\n}\n\n.styles-module_checkbox__2zcaN::before {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  border-width: 0 0 3px 3px;\n  border-style: solid;\n  border-color: rgb(4, 156, 241);\n  width: 10px;\n  height: 5px;\n  content: '';\n  -webkit-transform: rotate(-45deg) scale(0);\n          transform: rotate(-45deg) scale(0);\n  -webkit-transform-origin: 50%;\n          transform-origin: 50%;\n  -webkit-transition: -webkit-transform 0.25s ease-in-out;\n  transition: -webkit-transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n  will-change: transform;\n}\n\n.styles-module_input__216MF:disabled + .styles-module_checkbox__2zcaN {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.styles-module_input__216MF.styles-module_checked__2XmlY + .styles-module_checkbox__2zcaN {\n  border-color: rgb(4, 156, 241);\n  background-color: rgb(255, 254, 253)\n}\n\n.styles-module_input__216MF.styles-module_checked__2XmlY + .styles-module_checkbox__2zcaN::before {\n  -webkit-transform: rotate(-45deg) scale(1);\n          transform: rotate(-45deg) scale(1);\n}\n\n.styles-module_input__216MF:enabled:focus + .styles-module_checkbox__2zcaN {\n  -webkit-box-shadow: 0 0 0 3px rgba(4, 156, 241, .4);\n          box-shadow: 0 0 0 3px rgba(4, 156, 241, .4);\n}\n\n.styles-module_input__216MF.styles-module_unchecked__E5Vqj:enabled + .styles-module_checkbox__2zcaN:hover {\n  border-color: rgb(158, 158, 156);\n  background-color: rgb(245, 245, 245);\n}\n";
var s$6 = {"label":"styles-module_label__1Tvct","disabled":"styles-module_disabled__1V23_","input":"styles-module_input__216MF","checkbox":"styles-module_checkbox__2zcaN","checked":"styles-module_checked__2XmlY","unchecked":"styles-module_unchecked__E5Vqj"};
styleInject(css_248z$6);

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Checkbox = function Checkbox(_ref) {
  var name = _ref.name,
      label = _ref.label,
      isChecked = _ref.isChecked,
      onChange = _ref.onChange,
      isDisabled = _ref.isDisabled,
      otherProps = _objectWithoutProperties$4(_ref, ["name", "label", "isChecked", "onChange", "isDisabled"]);

  return /*#__PURE__*/React__default.createElement("label", _extends$4({
    className: classnames(isDisabled && s$6.disabled, s$6.label),
    htmlFor: name
  }, otherProps), /*#__PURE__*/React__default.createElement("input", {
    type: "checkbox",
    id: name,
    name: name,
    className: classnames(isChecked ? s$6.checked : s$6.unchecked, s$6.input),
    checked: isChecked,
    onChange: onChange,
    disabled: isDisabled
  }), /*#__PURE__*/React__default.createElement("span", {
    "aria-hidden": "true",
    className: s$6.checkbox
  }), label);
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]).isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool
};
Checkbox.defaultProps = {
  isChecked: false,
  onChange: null,
  isDisabled: false
};
Checkbox.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Checkbox",
  "props": {
    "isChecked": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "onChange": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "label": {
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "element"
        }, {
          "name": "array"
        }]
      },
      "required": true,
      "description": ""
    }
  }
};

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutProperties$5(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$5(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CreditCardLogo = function CreditCardLogo(_ref) {
  var brand = _ref.brand,
      otherProps = _objectWithoutProperties$5(_ref, ["brand"]);

  var brandId = brand.replace(' ', '_').toLowerCase();
  var supportedBrands = ['american_express', 'visa', 'mastercard', 'discover'];
  var useBrandId = supportedBrands.includes(brandId) ? brandId : 'generic';
  return /*#__PURE__*/React__default.createElement("svg", _extends$5({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 38 25"
  }, otherProps), /*#__PURE__*/React__default.createElement("use", {
    xlinkHref: "#".concat(useBrandId)
  }), /*#__PURE__*/React__default.createElement("symbol", {
    id: "american_express",
    viewBox: "0 0 38 25"
  }, /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("path", {
    d: "M37.96875,21.875 C37.96875,23.59375 36.5625,25 34.84375,25 L3.59375,25 C1.875,25 0.46875,23.59375 0.46875,21.875 L0.46875,3.125 C0.46875,1.40625 1.875,0 3.59375,0 L34.84375,0 C36.5625,0 37.96875,1.40625 37.96875,3.125 L37.96875,21.875 Z",
    fill: "#5ec1ec"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M37.050625,0.918125 C37.616875,1.484375 37.96875,2.265625 37.96875,3.125 L37.96875,12.5 L37.96875,21.875 C37.96875,22.734375 37.6175,23.515625 37.050625,24.081875 C36.48375,24.648125 35.703125,25 34.84375,25 L19.21875,25 L3.59375,25 C2.734375,25 1.953125,24.64875 1.386875,24.081875 L37.050625,0.918125 Z",
    fill: "#5BBBE6"
  }), /*#__PURE__*/React__default.createElement("g", {
    transform: "translate(6.875000, 9.375000)",
    fill: "#fff"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M4.565625,6.20125 L4.28,5.11375 L2.395625,5.11375 L2.101875,6.20125 L0.38,6.20125 L2.2725,0.3775 L4.363125,0.3775 L6.27875,6.20125 L4.565625,6.20125 Z M3.955,3.828125 L3.705,2.87625 C3.64625,2.665 3.57625,2.391875 3.4925,2.055625 C3.409375,1.719375 3.354375,1.47875 3.3275,1.33375 C3.304375,1.46875 3.256875,1.690625 3.186875,2 C3.116875,2.309375 2.96125,2.919375 2.720625,3.82875 L3.955,3.828125 Z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M9.43375,6.20125 L8.2475,2.023125 L8.211875,2.023125 C8.2675,2.734375 8.295,3.286875 8.295,3.681875 L8.295,6.200625 L6.906875,6.200625 L6.906875,0.4 L8.993125,0.4 L10.20375,4.51875 L10.235625,4.51875 L11.42125,0.4 L13.5125,0.4 L13.5125,6.200625 L12.071875,6.200625 L12.071875,3.6575 C12.071875,3.525625 12.074375,3.379375 12.078125,3.2175 C12.081875,3.055625 12.1,2.660625 12.131875,2.03125 L12.09625,2.03125 L10.925625,6.20125 L9.43375,6.20125 Z"
  }), /*#__PURE__*/React__default.createElement("polygon", {
    points: "18.043125 6.20125 14.599375 6.20125 14.599375 0.400625 18.043125 0.400625 18.043125 1.65875 16.165625 1.65875 16.165625 2.57125 17.90375 2.57125 17.90375 3.82875 16.165625 3.82875 16.165625 4.92375 18.043125 4.92375"
  }), /*#__PURE__*/React__default.createElement("polygon", {
    points: "24.28375 6.20125 22.47125 6.20125 21.339375 4.38875 20.22125 6.20125 18.4475 6.20125 20.37125 3.23375 18.561875 0.400625 20.3 0.400625 21.3475 2.19375 22.354375 0.400625 24.14375 0.400625 22.306875 3.35625"
  })), /*#__PURE__*/React__default.createElement("g", {
    transform: "translate(6.875000, 9.375000)",
    fill: "#fff"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M4.565625,6.20125 L4.28,5.11375 L2.395625,5.11375 L2.101875,6.20125 L0.38,6.20125 L2.2725,0.3775 L4.363125,0.3775 L6.27875,6.20125 L4.565625,6.20125 Z M3.955,3.828125 L3.705,2.87625 C3.64625,2.665 3.57625,2.391875 3.4925,2.055625 C3.409375,1.719375 3.354375,1.47875 3.3275,1.33375 C3.304375,1.46875 3.256875,1.690625 3.186875,2 C3.116875,2.309375 2.96125,2.919375 2.720625,3.82875 L3.955,3.828125 Z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M9.43375,6.20125 L8.2475,2.023125 L8.211875,2.023125 C8.2675,2.734375 8.295,3.286875 8.295,3.681875 L8.295,6.200625 L6.906875,6.200625 L6.906875,0.4 L8.993125,0.4 L10.20375,4.51875 L10.235625,4.51875 L11.42125,0.4 L13.5125,0.4 L13.5125,6.200625 L12.071875,6.200625 L12.071875,3.6575 C12.071875,3.525625 12.074375,3.379375 12.078125,3.2175 C12.081875,3.055625 12.1,2.660625 12.131875,2.03125 L12.09625,2.03125 L10.925625,6.20125 L9.43375,6.20125 Z"
  }), /*#__PURE__*/React__default.createElement("polygon", {
    points: "18.043125 6.20125 14.599375 6.20125 14.599375 0.400625 18.043125 0.400625 18.043125 1.65875 16.165625 1.65875 16.165625 2.57125 17.90375 2.57125 17.90375 3.82875 16.165625 3.82875 16.165625 4.92375 18.043125 4.92375"
  }), /*#__PURE__*/React__default.createElement("polygon", {
    points: "24.28375 6.20125 22.47125 6.20125 21.339375 4.38875 20.22125 6.20125 18.4475 6.20125 20.37125 3.23375 18.561875 0.400625 20.3 0.400625 21.3475 2.19375 22.354375 0.400625 24.14375 0.400625 22.306875 3.35625"
  }))), /*#__PURE__*/React__default.createElement("path", {
    d: "M34.84375,0.625 C36.2225,0.625 37.34375,1.74625 37.34375,3.125 L37.34375,21.875 C37.34375,23.25375 36.2225,24.375 34.84375,24.375 L3.59375,24.375 C2.215,24.375 1.09375,23.25375 1.09375,21.875 L1.09375,3.125 C1.09375,1.74625 2.215,0.625 3.59375,0.625 L34.84375,0.625 Z M34.84375,0 L3.59375,0 C1.875,0 0.46875,1.40625 0.46875,3.125 L0.46875,21.875 C0.46875,23.59375 1.875,25 3.59375,25 L34.84375,25 C36.5625,25 37.96875,23.59375 37.96875,21.875 L37.96875,3.125 C37.96875,1.40625 36.5625,0 34.84375,0 Z",
    fill: "#9bcee0"
  })), /*#__PURE__*/React__default.createElement("symbol", {
    id: "visa",
    viewBox: "0 0 38 25"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M37.96875,21.875 C37.96875,23.59375 36.5625,25 34.84375,25 L3.59375,25 C1.875,25 0.46875,23.59375 0.46875,21.875 L0.46875,3.125 C0.46875,1.40625 1.875,0 3.59375,0 L34.84375,0 C36.5625,0 37.96875,1.40625 37.96875,3.125 L37.96875,21.875 Z",
    fill: "#f3f4f4"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M1.09375,6.25 L1.09375,3.125 C1.09375,1.40625 2.5,0 4.21875,0 L34.21875,0 C35.9375,0 37.34375,1.40625 37.34375,3.125 L37.34375,6.25",
    fill: "#5565af"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M37.34375,18.75 L37.34375,21.875 C37.34375,23.59375 35.9375,24.375 34.21875,24.375 L4.21875,24.375 C2.5,24.375 1.09375,23.59375 1.09375,21.875 L1.09375,18.75",
    fill: "#e6a124"
  }), /*#__PURE__*/React__default.createElement("g", {
    transform: "translate(9.375000, 8.750000)",
    fill: "#5565af"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M1.960625,5.861875 C2.214375,5.143125 2.3925,4.6825 2.4975,4.48 L4.606875,0.183125 L6.15,0.183125 L2.4975,7.321875 L0.866875,7.321875 L0.246875,0.183125 L1.6875,0.183125 L1.93625,4.48 C1.94875,4.62625 1.955625,4.84375 1.955625,5.129375 C1.948125,5.465 1.93875,5.709375 1.92625,5.861875 L1.960625,5.861875 Z"
  }), /*#__PURE__*/React__default.createElement("polygon", {
    points: "5.505625 7.321875 7.029375 0.183125 8.51875 0.183125 6.995 7.321875"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M13.08375,5.2125 C13.08375,5.89375 12.841875,6.430625 12.36125,6.82625 C11.879375,7.221875 11.22625,7.419375 10.403125,7.419375 C9.683125,7.419375 9.104375,7.273125 8.665,6.98 L8.665,5.641875 C9.2925,5.993125 9.87625,6.169375 10.413125,6.169375 C10.776875,6.169375 11.0625,6.10125 11.2675,5.961875 C11.4725,5.82375 11.575,5.635 11.575,5.393125 C11.575,5.25375 11.553125,5.130625 11.509375,5.024375 C11.465625,4.919375 11.401875,4.820625 11.32125,4.72875 C11.239375,4.6375 11.038125,4.4725 10.715625,4.230625 C10.26625,3.9075 9.95,3.59 9.768125,3.273125 C9.585,2.9575 9.494375,2.6175 9.494375,2.2525 C9.494375,1.8325 9.594375,1.458125 9.796875,1.126875 C9.998125,0.796875 10.285,0.54 10.65875,0.355625 C11.03125,0.171875 11.459375,0.08 11.945625,0.08 C12.65125,0.08 13.298125,0.24125 13.884375,0.563125 L13.351875,1.700625 C12.844375,1.46 12.375625,1.339375 11.945625,1.339375 C11.674375,1.339375 11.45375,1.4125 11.281875,1.559375 C11.10875,1.705625 11.023125,1.9 11.023125,2.140625 C11.023125,2.339375 11.076875,2.513125 11.184375,2.660625 C11.291875,2.80875 11.5325,3.005 11.906875,3.24875 C12.3,3.509375 12.595625,3.796875 12.790625,4.110625 C12.985625,4.42625 13.08375,4.7925 13.08375,5.2125 Z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M17.87375,5.6225 L15.564375,5.6225 L14.724375,7.321875 L13.161875,7.321875 L16.901875,0.15375 L18.723125,0.15375 L19.440625,7.321875 L17.990625,7.321875 L17.87375,5.6225 Z M17.8,4.353125 L17.673125,2.644375 C17.64,2.218125 17.624375,1.80625 17.624375,1.40875 L17.624375,1.233125 C17.480625,1.62375 17.303125,2.0375 17.091875,2.473125 L16.17375,4.353125 L17.8,4.353125 Z"
  })), /*#__PURE__*/React__default.createElement("path", {
    d: "M37.050625,0.918125 C37.616875,1.484375 37.96875,2.265625 37.96875,3.125 L37.96875,12.5 L37.96875,21.875 C37.96875,22.734375 37.6175,23.515625 37.050625,24.081875 C36.48375,24.648125 35.703125,25 34.84375,25 L19.21875,25 L3.59375,25 C2.734375,25 1.953125,24.64875 1.386875,24.081875 L37.050625,0.918125 Z",
    fill: "#fff",
    opacity: "0.04"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M34.84375,0.625 C36.2225,0.625 37.34375,1.74625 37.34375,3.125 L37.34375,21.875 C37.34375,23.25375 36.2225,24.375 34.84375,24.375 L3.59375,24.375 C2.215,24.375 1.09375,23.25375 1.09375,21.875 L1.09375,3.125 C1.09375,1.74625 2.215,0.625 3.59375,0.625 L34.84375,0.625 Z M34.84375,0 L3.59375,0 C1.875,0 0.46875,1.40625 0.46875,3.125 L0.46875,21.875 C0.46875,23.59375 1.875,25 3.59375,25 L34.84375,25 C36.5625,25 37.96875,23.59375 37.96875,21.875 L37.96875,3.125 C37.96875,1.40625 36.5625,0 34.84375,0 Z",
    fill: "#f8f8f9"
  })), /*#__PURE__*/React__default.createElement("symbol", {
    id: "mastercard",
    viewBox: "0 0 38 25"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M37.96875,21.875 C37.96875,23.59375 36.5625,25 34.84375,25 L3.59375,25 C1.875,25 0.46875,23.59375 0.46875,21.875 L0.46875,3.125 C0.46875,1.40625 1.875,0 3.59375,0 L34.84375,0 C36.5625,0 37.96875,1.40625 37.96875,3.125 L37.96875,21.875 Z",
    fill: "#5565af"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M37.050625,0.918125 C37.616875,1.484375 37.96875,2.265625 37.96875,3.125 L37.96875,12.5 L37.96875,21.875 C37.96875,22.734375 37.6175,23.515625 37.050625,24.081875 C36.48375,24.648125 35.703125,25 34.84375,25 L19.21875,25 L3.59375,25 C2.734375,25 1.953125,24.64875 1.386875,24.081875 L37.050625,0.918125 Z",
    fill: "#fff",
    opacity: "0.04"
  }), /*#__PURE__*/React__default.createElement("g", {
    transform: "translate(8.125000, 6.250000)",
    fill: "#EA564b"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M11.09375,2.125 C9.948125,0.825 8.275,0 6.40625,0 C2.955,0 0.15625,2.798125 0.15625,6.25 C0.15625,9.700625 2.955,12.5 6.40625,12.5 C8.275,12.5 9.948125,11.675 11.09375,10.374375 C10.12375,9.273125 9.53125,7.83375 9.53125,6.25 C9.53125,4.66625 10.12375,3.22625 11.09375,2.125 Z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M11.09375,2.125 C10.12375,3.22625 9.53125,4.666875 9.53125,6.25 C9.53125,7.833125 10.12375,9.273125 11.09375,10.374375 C12.06375,9.273125 12.65625,7.83375 12.65625,6.25 C12.65625,4.66625 12.06375,3.22625 11.09375,2.125 Z"
  })), /*#__PURE__*/React__default.createElement("path", {
    d: "M23.90625,6.25 C22.0375,6.25 20.364375,7.075 19.21875,8.375 C18.948125,8.6825 18.71125,9.01875 18.50375,9.375 L19.93375,9.375 C20.16125,9.765625 20.338125,10.186875 20.478125,10.625 L17.950625,10.625 C17.82375,11.026875 17.731875,11.443125 17.68875,11.875 L20.738125,11.875 C20.759375,12.08125 20.780625,12.2875 20.780625,12.5 C20.780625,12.71125 20.768125,12.919375 20.7475,13.125 L17.688125,13.125 C17.73125,13.556875 17.823125,13.973125 17.95,14.375 L20.485,14.375 C20.345625,14.815 20.15875,15.2325 19.93125,15.625 L18.503125,15.625 C18.71,15.98 18.9475,16.316875 19.218125,16.624375 C20.36375,17.925 22.036875,18.75 23.905625,18.75 C27.356875,18.75 30.155625,15.950625 30.155625,12.5 C30.15625,9.048125 27.3575,6.25 23.90625,6.25 Z",
    fill: "#e9d419"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M34.84375,0.625 C36.2225,0.625 37.34375,1.74625 37.34375,3.125 L37.34375,21.875 C37.34375,23.25375 36.2225,24.375 34.84375,24.375 L3.59375,24.375 C2.215,24.375 1.09375,23.25375 1.09375,21.875 L1.09375,3.125 C1.09375,1.74625 2.215,0.625 3.59375,0.625 L34.84375,0.625 Z M34.84375,0 L3.59375,0 C1.875,0 0.46875,1.40625 0.46875,3.125 L0.46875,21.875 C0.46875,23.59375 1.875,25 3.59375,25 L34.84375,25 C36.5625,25 37.96875,23.59375 37.96875,21.875 L37.96875,3.125 C37.96875,1.40625 36.5625,0 34.84375,0 Z",
    fill: "#7684b7"
  })), /*#__PURE__*/React__default.createElement("symbol", {
    id: "discover",
    viewBox: "0 0 38 25"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M37.96875,21.875 C37.96875,23.59375 36.5625,25 34.84375,25 L3.59375,25 C1.875,25 0.46875,23.59375 0.46875,21.875 L0.46875,3.125 C0.46875,1.40625 1.875,0 3.59375,0 L34.84375,0 C36.5625,0 37.96875,1.40625 37.96875,3.125 L37.96875,21.875 Z",
    fill: "#fff9f0"
  }), /*#__PURE__*/React__default.createElement("g", {
    transform: "translate(6.250000, 10.000000)"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M3.678125,2.464375 C3.678125,3.090625 3.5,3.57 3.144375,3.903125 C2.7875,4.235625 2.2725,4.4025 1.599375,4.4025 L0.521875,4.4025 L0.521875,0.599375 L1.715625,0.599375 C2.336875,0.599375 2.81875,0.76375 3.16125,1.09125 C3.50625,1.41875 3.678125,1.876875 3.678125,2.464375 Z M2.840625,2.485625 C2.840625,1.66875 2.479375,1.260625 1.759375,1.260625 L1.329375,1.260625 L1.329375,3.7362507 L1.675625,3.73625 C2.4525,3.736875 2.840625,3.319375 2.840625,2.485625 Z",
    fill: "#414042"
  }), /*#__PURE__*/React__default.createElement("polygon", {
    fill: "#414042",
    points: "4.36 4.4025 4.36 0.599375 5.16625 0.599375 5.16625 4.4025"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M8.369375,3.34625 C8.369375,3.690625 8.24625,3.96 7.998125,4.158125 C7.750625,4.355625 7.4075,4.455625 6.966875,4.455625 C6.561875,4.455625 6.201875,4.37875 5.889375,4.226875 L5.889375,3.4775 C6.14625,3.593125 6.36375,3.6725 6.54125,3.720625 C6.71875,3.766875 6.881875,3.79 7.029375,3.79 C7.205625,3.79 7.341875,3.755625 7.43625,3.68875 C7.52875,3.621875 7.578125,3.52 7.578125,3.3875 C7.578125,3.313125 7.5575,3.246875 7.515,3.18875 C7.474375,3.13 7.4125,3.07375 7.33125,3.020625 C7.250625,2.9675 7.08625,2.880625 6.83875,2.763125 C6.606875,2.65375 6.433125,2.548125 6.315625,2.448125 C6.19875,2.348125 6.106875,2.23125 6.0375,2.096875 C5.968125,1.9625 5.93375,1.80625 5.93375,1.628125 C5.93375,1.291875 6.0475,1.0275 6.275625,0.835 C6.504375,0.641875 6.81875,0.54625 7.221875,0.54625 C7.419375,0.54625 7.608125,0.569375 7.7875,0.61625 C7.966875,0.6625 8.155,0.729375 8.350625,0.81375 L8.090625,1.440625 C7.8875,1.3575 7.71875,1.298125 7.58625,1.26625 C7.453125,1.23375 7.3225,1.216875 7.195,1.216875 C7.041875,1.216875 6.924375,1.251875 6.84375,1.32375 C6.761875,1.395 6.72125,1.4875 6.72125,1.601875 C6.72125,1.673125 6.7375,1.734375 6.770625,1.788125 C6.80375,1.84125 6.85625,1.891875 6.928125,1.94125 C7,1.990625 7.17125,2.079375 7.439375,2.208125 C7.794375,2.378125 8.038125,2.54875 8.170625,2.719375 C8.303125,2.88875 8.369375,3.098125 8.369375,3.34625 Z",
    fill: "#414042"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M10.67375,1.215625 C10.37,1.215625 10.135625,1.330625 9.96875,1.5575 C9.80125,1.785625 9.719375,2.104375 9.719375,2.51125 C9.719375,3.35875 10.0375,3.783125 10.67375,3.783125 C10.94125,3.783125 11.263125,3.718125 11.644375,3.583125 L11.644375,4.259375 C11.331875,4.39 10.983125,4.454375 10.598125,4.454375 C10.045,4.454375 9.621875,4.285625 9.32875,3.95 C9.035625,3.615 8.889375,3.133125 8.889375,2.505 C8.889375,2.109375 8.961875,1.763125 9.10625,1.46625 C9.249375,1.1675 9.456875,0.940625 9.72625,0.781875 C9.996875,0.623125 10.3125,0.54375 10.675,0.54375 C11.044375,0.54375 11.41625,0.633125 11.788125,0.811875 L11.528125,1.4675 C11.385,1.4 11.243125,1.34125 11.098125,1.290625 C10.95375,1.24 10.8125,1.215625 10.67375,1.215625 Z",
    fill: "#414042"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M18.099375,0.599375 L18.91375,0.599375 L17.621875,4.4025 L16.7425,4.4025 L15.4525,0.599375 L16.2675,0.599375 L16.983125,2.8625 C17.0225,2.996875 17.065,3.15125 17.106875,3.33 C17.148125,3.508125 17.175,3.63 17.18625,3.7 C17.205,3.540625 17.27,3.263125 17.38125,2.8625 L18.099375,0.599375 Z",
    fill: "#414042"
  }), /*#__PURE__*/React__default.createElement("polygon", {
    fill: "#414042",
    points: "21.5825 4.4025 19.391875 4.4025 19.391875 0.599375 21.5825 0.599375 21.5825 1.260625 20.198125 1.260625 20.198125 2.095625 21.486875 2.095625 21.486875 2.75625 20.198125 2.75625 20.198125 3.73625 21.5825 3.73625"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M23.1825,2.943125 L23.1825,4.4025 L22.37625,4.4025 L22.37625,0.599375 L23.484375,0.599375 C24.00125,0.599375 24.383125,0.693125 24.631875,0.881875 C24.879375,1.07 25.00375,1.355 25.00375,1.73875 C25.00375,1.961875 24.941875,2.161875 24.819375,2.335625 C24.69625,2.51 24.521875,2.646875 24.296875,2.745625 C24.86875,3.599375 25.24125,4.1525 25.415,4.401875 L24.52,4.401875 L23.611875,2.9425 L23.1825,2.943125 Z M23.1825,2.2875 L23.443125,2.2875 C23.6975,2.2875 23.88625,2.245 24.0075,2.160625 C24.128125,2.075 24.189375,1.94125 24.189375,1.759375 C24.189375,1.57875 24.126875,1.45125 24.003125,1.374375 C23.879375,1.2975 23.6875,1.26 23.4275,1.26 L23.18125,1.26 L23.1825,2.2875 Z",
    fill: "#414042"
  }), /*#__PURE__*/React__default.createElement("circle", {
    fill: "#e6a124",
    cx: "13.635",
    cy: "2.50125",
    r: "1.901875"
  })), /*#__PURE__*/React__default.createElement("path", {
    d: "M37.96875,17.1875 L37.96875,21.875 C37.96875,22.305 37.880625,22.715 37.721875,23.088125 C37.5625,23.46125 37.33375,23.79875 37.050625,24.081875 C36.7675,24.365 36.430625,24.59375 36.056875,24.753125 C35.6825,24.911875 35.273125,25 34.84375,25 L20.808125,25 L6.7725,25 L37.96875,17.1875 Z",
    fill: "#e6a124"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M37.050625,0.918125 C37.616875,1.484375 37.96875,2.265625 37.96875,3.125 L37.96875,12.5 L37.96875,21.875 C37.96875,22.734375 37.6175,23.515625 37.050625,24.081875 C36.48375,24.648125 35.703125,25 34.84375,25 L19.21875,25 L3.59375,25 C2.734375,25 1.953125,24.64875 1.386875,24.081875 L37.050625,0.918125 Z",
    fill: "#fff",
    opacity: "0.08"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M34.84375,0.625 C36.2225,0.625 37.34375,1.74625 37.34375,3.125 L37.34375,21.875 C37.34375,23.25375 36.2225,24.375 34.84375,24.375 L3.59375,24.375 C2.215,24.375 1.09375,23.25375 1.09375,21.875 L1.09375,3.125 C1.09375,1.74625 2.215,0.625 3.59375,0.625 L34.84375,0.625 Z M34.84375,0 L3.59375,0 C1.875,0 0.46875,1.40625 0.46875,3.125 L0.46875,21.875 C0.46875,23.59375 1.875,25 3.59375,25 L34.84375,25 C36.5625,25 37.96875,23.59375 37.96875,21.875 L37.96875,3.125 C37.96875,1.40625 36.5625,0 34.84375,0 Z",
    fill: "#f7f5f2"
  })), /*#__PURE__*/React__default.createElement("symbol", {
    id: "generic",
    viewBox: "0 0 60 40"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M60,35 C60,37.75 57.75,40 55,40 L5,40 C2.25,40 0,37.75 0,35 L0,5 C0,2.25 2.25,0 5,0 L55,0 C57.75,0 60,2.25 60,5 L60,35 Z",
    fill: "#302c43"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M58.281,1.469 C59.187,2.375 59.75,3.625 59.75,5 L59.75,20 L59.75,35 C59.75,36.375 59.188,37.625 58.281,38.531 C57.374,39.437 56.125,40 54.75,40 L29.75,40 L4.75,40 C3.375,40 2.125,39.438 1.219,38.531 L58.281,1.469 Z",
    fill: "#edecec",
    opacity: "0.08"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M55.0458326,1 C57.2536709,1 59.0491659,2.794 59.0491659,5 L59.0491659,35 C59.0491659,37.206 57.2536709,39 55.0458326,39 L5.0041666,39 C2.7963283,39 1.00083332,37.206 1.00083332,35 L1.00083332,5 C1.00083332,2.794 2.7963283,1 5.0041666,1 L55.0458326,1 Z M55.0458326,0 L5.0041666,0 C2.25187497,0 0,2.25 0,5 L0,35 C0,37.75 2.25187497,40 5.0041666,40 L55.0458326,40 C57.7981243,40 60.0499992,37.75 60.0499992,35 L60.0499992,5 C60.0499992,2.25 57.7981243,0 55.0458326,0 Z",
    fill: "#f8f8f9"
  }), /*#__PURE__*/React__default.createElement("rect", {
    fillOpacity: "0.25",
    fill: "#000",
    x: "40",
    y: "9",
    width: "11",
    height: "8",
    rx: "1"
  }), /*#__PURE__*/React__default.createElement("g", {
    fillOpacity: "0.735535553",
    fill: "#edecec"
  }, /*#__PURE__*/React__default.createElement("rect", {
    x: "9",
    y: "26",
    width: "9",
    height: "5",
    rx: "1"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: "20",
    y: "26",
    width: "9",
    height: "5",
    rx: "1"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: "31",
    y: "26",
    width: "9",
    height: "5",
    rx: "1"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: "42",
    y: "26",
    width: "9",
    height: "5",
    rx: "1"
  }))));
};

CreditCardLogo.propTypes = {
  brand: PropTypes.string
};
CreditCardLogo.defaultProps = {
  brand: 'generic'
};
CreditCardLogo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreditCardLogo",
  "props": {
    "brand": {
      "defaultValue": {
        "value": "'generic'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};

var css_248z$7 = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_container__1c_LC {\n  display: none;\n  position: absolute;\n  background-color: #fffefd;\n  border-radius: 6px;\n  width: 300px;\n  -webkit-box-shadow: 0 1px 2px rgba(48, 44, 67, .03),\n     0 2px 4px rgba(48, 44, 67, .03),\n     0 4px 6px rgba(48, 44, 67, .03),\n     0 8px 8px rgba(48, 44, 67, .03);\n          box-shadow: 0 1px 2px rgba(48, 44, 67, .03),\n     0 2px 4px rgba(48, 44, 67, .03),\n     0 4px 6px rgba(48, 44, 67, .03),\n     0 8px 8px rgba(48, 44, 67, .03);\n  top: 72px;\n  top: 72px;\n  top: 4.5rem;\n  left: 8px;\n  left: 8px;\n  left: 0.5rem;\n  padding-bottom: 8px;\n  padding-bottom: 8px;\n  padding-bottom: 0.5rem;\n  z-index: 1\n}\n\n.styles-module_container__1c_LC a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 6.4px 24px;\n  padding: 6.4px 24px;\n  padding: 0.4rem 1.5rem;\n  font-size: 13.6px;\n  font-size: 13.6px;\n  font-size: 0.85rem;\n  color: #302c43\n}\n\n.styles-module_container__1c_LC a svg {\n  color: #8f8e8c;\n}\n\n.styles-module_container__1c_LC a:hover {\n  background-color: #049cf1;\n  color: #fffefd\n}\n\n.styles-module_container__1c_LC a:hover svg {\n  color: #fffefd;\n}\n\n.styles-module_container__1c_LC hr {\n  opacity: 0.15;\n}\n\n.styles-module_open__1VgoM {\n  display: block;\n}\n";
var s$7 = {"container":"styles-module_container__1c_LC","open":"styles-module_open__1VgoM"};
styleInject(css_248z$7);

var Dropdown = function Dropdown(_ref) {
  var isOpen = _ref.isOpen,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("div", {
    className: classnames(s$7.container, isOpen && s$7.open)
  }, children);
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.node]).isRequired
};
Dropdown.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Dropdown",
  "props": {
    "isOpen": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
    },
    "children": {
      "type": {
        "name": "union",
        "value": [{
          "name": "element"
        }, {
          "name": "array"
        }, {
          "name": "node"
        }]
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$8 = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n.styles-module_container__LXfZj {\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 608px;\n  max-width: 608px;\n  max-width: 38rem\n}\n\n.styles-module_container__LXfZj h3 {\n  margin-bottom: 8px;\n  margin-bottom: 8px;\n  margin-bottom: 0.5rem;\n}\n\n.styles-module_actions__xB9VF {\n  margin: 16px 0 32px;\n  margin: 16px 0 32px;\n  margin: 1rem 0 2rem;\n}\n\n.styles-module_footer__2kzbh {\n  text-align: left;\n}\n";
var s$8 = {"container":"styles-module_container__LXfZj","actions":"styles-module_actions__xB9VF","footer":"styles-module_footer__2kzbh"};
styleInject(css_248z$8);

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function _objectWithoutProperties$6(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$6(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Empty = function Empty(_ref) {
  var heading = _ref.heading,
      description = _ref.description,
      actions = _ref.actions,
      footer = _ref.footer,
      className = _ref.className,
      otherProps = _objectWithoutProperties$6(_ref, ["heading", "description", "actions", "footer", "className"]);

  return /*#__PURE__*/React__default.createElement("div", _extends$6({
    className: classnames(className, s$8.container)
  }, otherProps), /*#__PURE__*/React__default.createElement(Heading, {
    as: "h3"
  }, heading), description, actions && /*#__PURE__*/React__default.createElement("div", {
    className: s$8.actions
  }, actions), footer && /*#__PURE__*/React__default.createElement("div", {
    className: s$8.footer
  }, footer));
};

Empty.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.element.isRequired,
  actions: PropTypes.element,
  footer: PropTypes.element,
  className: PropTypes.string
};
Empty.defaultProps = {
  actions: null,
  footer: null,
  className: null
};
Empty.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Empty",
  "props": {
    "actions": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "element"
      },
      "required": false,
      "description": ""
    },
    "footer": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "element"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "heading": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "description": {
      "type": {
        "name": "element"
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$9 = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_container__3IJQ4 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 1px solid transparent;\n  width: 100%;\n  background-color: #fffefd;\n  padding: 10.4px 16px;\n  padding: 10.4px 16px;\n  padding: 0.65rem 1rem;\n  border-radius: 6px;\n  font-size: 22px;\n  font-size: 22px;\n  font-size: 1.375rem\n}\n\n.styles-module_container__3IJQ4.styles-module_error__1lNQn {\n  color: rgb(244, 68, 44);\n  background-color: rgba(244, 68, 44, .15);\n}\n\n.styles-module_container__3IJQ4.styles-module_warning__1pU-P {\n  color: rgb(255, 161, 26);\n  background-color: rgba(255, 161, 26, .15);\n}\n\n.styles-module_container__3IJQ4.styles-module_info__DlhKD {\n  color: rgb(4, 156, 241);\n  background-color: rgba(4, 156, 241, .15);\n}\n\n.styles-module_container__3IJQ4.styles-module_success__Qq1Pd {\n  color: rgb(0, 179, 93);\n  background-color: rgba(0, 179, 93, .15);\n}\n\n.styles-module_icon__3_TZs {\n  margin-right: 8px;\n  margin-right: 8px;\n  margin-right: 0.5rem;\n}\n\n.styles-module_content__30nyW {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-size: 13.6px;\n  font-size: 13.6px;\n  font-size: 0.85rem\n}\n\n.styles-module_content__30nyW a {\n  color: currentColor;\n  text-decoration: underline;\n  font-weight: 500\n}\n\n.styles-module_content__30nyW a:hover {\n  color: currentColor;\n  text-decoration: none;\n}\n\n.styles-module_closeBtn__3GTTc {\n  display: inline-block;\n  margin: 0 -8px 0 8px;\n  margin: 0 -8px 0 8px;\n  margin: 0 -0.5rem 0 0.5rem;\n  border-radius: 0.375em;\n  border: 0;\n  width: 28px;\n  width: 28px;\n  width: 1.75rem;\n  height: 28px;\n  height: 28px;\n  height: 1.75rem;\n  padding: 0;\n  line-height: 32px;\n  line-height: 32px;\n  line-height: 2rem;\n  text-align: center;\n  color: currentColor;\n  background: none;\n  cursor: pointer;\n  font-size: 19.2px;\n  font-size: 19.2px;\n  font-size: 1.2rem;\n  -webkit-transition: background-color 0.3s ease-in-out;\n  transition: background-color 0.3s ease-in-out\n}\n\n.styles-module_closeBtn__3GTTc:hover,\n  .styles-module_closeBtn__3GTTc:focus {\n  outline: none;\n  background-color: rgba(0, 0, 0, .1);\n}\n\n.styles-module_closeBtn__3GTTc:active {\n  background-color: rgba(0, 0, 0, .2);\n}\n";
var s$9 = {"container":"styles-module_container__3IJQ4","error":"styles-module_error__1lNQn","warning":"styles-module_warning__1pU-P","info":"styles-module_info__DlhKD","success":"styles-module_success__Qq1Pd","icon":"styles-module_icon__3_TZs","content":"styles-module_content__30nyW","closeBtn":"styles-module_closeBtn__3GTTc"};
styleInject(css_248z$9);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var icons = {
  error: /*#__PURE__*/React__default.createElement(fi.FiAlertTriangle, {
    className: s$9.icon
  }),
  warning: /*#__PURE__*/React__default.createElement(fi.FiZap, {
    className: s$9.icon
  }),
  info: /*#__PURE__*/React__default.createElement(fi.FiInfo, {
    className: s$9.icon
  }),
  success: /*#__PURE__*/React__default.createElement(fi.FiCheck, {
    className: s$9.icon
  })
};

var setStorage = function setStorage(key, value) {
  localStorage[key] = value;
  return localStorage[key];
};

var getStorage = function getStorage(key) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var value = localStorage[key] || defaultValue;
  return value;
};

var Flash = function Flash(_ref) {
  var type = _ref.type,
      children = _ref.children,
      className = _ref.className,
      isDismissable = _ref.isDismissable,
      dismissKey = _ref.dismissKey;

  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];
  /* istanbul ignore next */


  if (!show) return null;
  /* istanbul ignore next */

  if (dismissKey) {
    var currentStorage = getStorage(dismissKey);
    if (currentStorage) return null;
  }
  /* istanbul ignore next */


  var handleClose = function handleClose() {
    if (dismissKey) {
      setStorage(dismissKey, 'true');
    }

    setShow(false);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    "data-name": "flash",
    "data-alert": type,
    className: classnames(className, s$9.container, s$9[type])
  }, icons[type], /*#__PURE__*/React__default.createElement("span", {
    className: s$9.content
  }, children), isDismissable && /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    onClick: handleClose,
    className: s$9.closeBtn,
    title: "Dismiss message",
    "aria-label": "close"
  }, /*#__PURE__*/React__default.createElement(fi.FiX, null)));
};

Flash.propTypes = {
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.node]).isRequired,
  className: PropTypes.string,
  isDismissable: PropTypes.bool,
  dismissKey: PropTypes.string
};
Flash.defaultProps = {
  type: 'warning',
  className: null,
  isDismissable: false,
  dismissKey: null
};
Flash.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Flash",
  "props": {
    "type": {
      "defaultValue": {
        "value": "'warning'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "'error'",
          "computed": false
        }, {
          "value": "'warning'",
          "computed": false
        }, {
          "value": "'info'",
          "computed": false
        }, {
          "value": "'success'",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "isDismissable": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "dismissKey": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "union",
        "value": [{
          "name": "element"
        }, {
          "name": "array"
        }, {
          "name": "node"
        }]
      },
      "required": true,
      "description": ""
    }
  }
};

// Custom form errors - allows us to change the error text that displays
// by matching keys in the GraphQl error.message string to the `key` in the
// below list. This is integrated into all of the forms within the app. Simply
// add more mutationErrors to extend.
var mutationErrors = [{
  key: 'invalid password',
  error: 'Incorrect email or password.'
}, {
  key: 'not found',
  error: 'Incorrect email or password.'
}, {
  key: 'email address in use',
  error: 'That email is already taken'
}, {
  key: 'no password credentials found',
  error: 'No password found. Did you mean to login with OAuth?'
}, {
  key: 'awaiting email confirmation',
  error: 'Your email is not yet verified. Please check your inbox for a verification link.'
}, {
  key: 'permissions',
  error: 'Contact Workspace Admin to upgrade your permissions.'
}, {
  key: 'deployment named',
  error: 'Workspace already has a deployment with that name.'
}, {
  key: 'trial',
  error: 'Workspace is in trial. Enter your payment information to unlock this feature.'
}];
var customFormErrors = (function (error) {
  var message = error.message;
  var err = mutationErrors.find(function (e) {
    return message.toLowerCase().includes(e.key);
  });
  if (!err) return message.replace('GraphQL error: ', '');
  return err.error;
});

var css_248z$a = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_toast__16nbR {\n  margin: 0 16px 16px 0;\n  margin: 0 16px 16px 0;\n  margin: 0 1rem 1rem 0;\n  z-index: 9999;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border: 1px solid transparent;\n  background-color: #fffefd;\n  color: #fffefd;\n  padding: 10.4px 16px;\n  padding: 10.4px 16px;\n  padding: 0.65rem 1rem;\n  border-radius: 6px;\n  font-size: 22px;\n  font-size: 22px;\n  font-size: 1.375rem\n}\n\n.styles-module_toast__16nbR.styles-module_error__27BNe {\n  background-color: rgb(244, 68, 44);\n}\n\n.styles-module_toast__16nbR.styles-module_warning__2Tly4 {\n  background-color: rgb(255, 161, 26);\n}\n\n.styles-module_toast__16nbR.styles-module_info__2Cw6l {\n  background-color: rgb(4, 156, 241);\n}\n\n.styles-module_toast__16nbR.styles-module_success__XWUOD {\n  background-color: rgb(0, 179, 93);\n}\n\n.styles-module_toast__16nbR span {\n  margin-left: 8px;\n  margin-left: 8px;\n  margin-left: 0.5rem;\n  font-size: 13.6px;\n  font-size: 13.6px;\n  font-size: 0.85rem;\n}\n\n.styles-module_closeToast__3tb2S {\n  display: inline-block;\n  margin: 0 -8px 0 8px;\n  margin: 0 -8px 0 8px;\n  margin: 0 -0.5rem 0 0.5rem;\n  border-radius: 0.375em;\n  border: 0;\n  width: 24px;\n  width: 24px;\n  width: 1.5rem;\n  height: 24px;\n  height: 24px;\n  height: 1.5rem;\n  padding: 0;\n  line-height: 30.4px;\n  line-height: 30.4px;\n  line-height: 1.9rem;\n  text-align: center;\n  color: currentColor;\n  background: none;\n  cursor: pointer;\n  font-size: 17.6px;\n  font-size: 17.6px;\n  font-size: 1.1rem;\n  -webkit-transition: background 0.3s ease-in-out;\n  transition: background 0.3s ease-in-out\n}\n\n.styles-module_closeToast__3tb2S:hover,\n  .styles-module_closeToast__3tb2S:focus {\n  background: rgba(0, 0, 0, .2);\n}\n\n.styles-module_closeToast__3tb2S:focus {\n  outline: none;\n  background: rgba(0, 0, 0, .2);\n  -webkit-box-shadow: 0 0 0 3px rgba(0, 0, 0, .1);\n          box-shadow: 0 0 0 3px rgba(0, 0, 0, .1);\n}\n\n.styles-module_closeToast__3tb2S:active {\n  background: rgba(0, 0, 0, .3);\n}\n";
var s$a = {"toast":"styles-module_toast__16nbR","error":"styles-module_error__27BNe","warning":"styles-module_warning__2Tly4","info":"styles-module_info__2Cw6l","success":"styles-module_success__XWUOD","closeToast":"styles-module_closeToast__3tb2S"};
styleInject(css_248z$a);

/* istanbul ignore file */
var icons$1 = {
  error: /*#__PURE__*/React__default.createElement(fi.FiAlertTriangle, null),
  warning: /*#__PURE__*/React__default.createElement(fi.FiZap, null),
  info: /*#__PURE__*/React__default.createElement(fi.FiInfo, null),
  success: /*#__PURE__*/React__default.createElement(fi.FiCheck, null)
};
var Toast = function Toast(_ref) {
  var type = _ref.type,
      content = _ref.content,
      isClosable = _ref.isClosable,
      onClose = _ref.onClose;
  return /*#__PURE__*/React__default.createElement("div", {
    "data-name": "alert",
    "data-alert": type,
    className: classnames(s$a[type], s$a.toast)
  }, icons$1[type], /*#__PURE__*/React__default.createElement("span", null, content), isClosable && /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    onClick: onClose,
    className: s$a.closeToast,
    title: "Dismiss message",
    "aria-label": "close"
  }, /*#__PURE__*/React__default.createElement(fi.FiX, null)));
};
Toast.propTypes = {
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired,
  content: PropTypes.string.isRequired,
  isClosable: PropTypes.bool,
  onClose: PropTypes.func
};
Toast.defaultProps = {
  isClosable: true,
  onClose: null
};
var useToast = function useToast() {
  var notify = function notify(_ref2) {
    var type = _ref2.type,
        content = _ref2.content,
        isClosable = _ref2.isClosable,
        _ref2$duration = _ref2.duration,
        duration = _ref2$duration === void 0 ? 5000 : _ref2$duration,
        _ref2$position = _ref2.position,
        position = _ref2$position === void 0 ? 'bottom-right' : _ref2$position;
    var options = {
      position: position,
      duration: duration
    };
    toaster.notify(function (_ref3) {
      var onClose = _ref3.onClose,
          id = _ref3.id;
      return /*#__PURE__*/React__default.createElement(Toast, {
        onClose: onClose,
        id: id,
        type: type,
        content: content,
        isClosable: isClosable
      });
    }, options);
  };

  return notify;
};
Toast.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Toast",
  "props": {
    "isClosable": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "onClose": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "type": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "'error'",
          "computed": false
        }, {
          "value": "'warning'",
          "computed": false
        }, {
          "value": "'info'",
          "computed": false
        }, {
          "value": "'success'",
          "computed": false
        }]
      },
      "required": true,
      "description": ""
    },
    "content": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$b = ".styles-module_form__r342h {\n  width: 100%;\n}\n";
var s$b = {"form":"styles-module_form__r342h"};
styleInject(css_248z$b);

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function _objectWithoutProperties$7(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$7(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$7(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Form = function Form(_ref) {
  var handleSubmit = _ref.handleSubmit,
      isSuccess = _ref.isSuccess,
      successMsg = _ref.successMsg,
      errors = _ref.errors,
      children = _ref.children,
      className = _ref.className,
      otherProps = _objectWithoutProperties$7(_ref, ["handleSubmit", "isSuccess", "successMsg", "errors", "children", "className"]);

  var toast = useToast();
  React.useEffect(function () {
    if (errors) {
      toast({
        type: 'error',
        content: customFormErrors(errors),
        duration: null
      });
    }
  }, [errors]);
  React.useEffect(function () {
    if (isSuccess) {
      toast({
        type: 'success',
        content: successMsg
      });
    }
  }, [isSuccess]);
  return /*#__PURE__*/React__default.createElement("form", _extends$7({
    action: "",
    className: classnames(className, s$b.form),
    onSubmit: handleSubmit
  }, otherProps), children);
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
  isSuccess: PropTypes.bool,
  successMsg: PropTypes.string,
  errors: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  className: PropTypes.string
};
Form.defaultProps = {
  handleSubmit: function handleSubmit(e) {
    return e.preventDefault;
  },
  errors: null,
  isSuccess: false,
  successMsg: 'Saved!',
  className: null
};
Form.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Form",
  "props": {
    "handleSubmit": {
      "defaultValue": {
        "value": "e => e.preventDefault",
        "computed": false
      },
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "errors": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "objectOf",
        "value": {
          "name": "string"
        }
      },
      "required": false,
      "description": ""
    },
    "isSuccess": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "successMsg": {
      "defaultValue": {
        "value": "'Saved!'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "union",
        "value": [{
          "name": "element"
        }, {
          "name": "array"
        }]
      },
      "required": true,
      "description": ""
    }
  }
};

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

var Tooltip = function Tooltip(_ref) {
  var otherProps = _extends$8({}, _ref);

  return /*#__PURE__*/React__default.createElement(Tippy, _extends$8({
    arrow: true,
    placement: "right",
    flipBehavior: ['right', 'top'],
    animation: "shift-away",
    theme: "astro"
  }, otherProps));
};

Tooltip.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Tooltip"
};

var css_248z$c = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n.styles-module_iconWrapper__1qyT0 {\n  color: rgb(143, 142, 140);\n}\n\n.styles-module_icon__3GPzn {\n  width: 13.6px;\n  width: 13.6px;\n  width: 0.85rem;\n  height: 13.6px;\n  height: 13.6px;\n  height: 0.85rem;\n  color: currentColor;\n}\n";
var s$c = {"iconWrapper":"styles-module_iconWrapper__1qyT0","icon":"styles-module_icon__3GPzn"};
styleInject(css_248z$c);

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

function _objectWithoutProperties$8(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$8(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$8(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InfoTooltip = function InfoTooltip(_ref) {
  var className = _ref.className,
      content = _ref.content,
      otherProps = _objectWithoutProperties$8(_ref, ["className", "content"]);

  return /*#__PURE__*/React__default.createElement(Tooltip, {
    content: content
  }, /*#__PURE__*/React__default.createElement("span", _extends$9({
    className: classnames(className, s$c.iconWrapper)
  }, otherProps), /*#__PURE__*/React__default.createElement(fi.FiInfo, {
    className: s$c.icon
  })));
};

InfoTooltip.propTypes = {
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.string
};
InfoTooltip.defaultProps = {
  className: null
};
InfoTooltip.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "InfoTooltip",
  "props": {
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "content": {
      "type": {
        "name": "union",
        "value": [{
          "name": "element"
        }, {
          "name": "string"
        }]
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$d = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_formGroup__3lKOn {\n  display: block;\n  margin-bottom: 16px;\n  margin-bottom: 16px;\n  margin-bottom: 1rem;\n  max-width: 608px;\n  max-width: 608px;\n  max-width: 38rem;\n}\n\n.styles-module_formGroup__3lKOn:last-child {\n  margin-bottom: 0;\n}\n\n.styles-module_label__3bJBz {\n  display: block;\n  margin-bottom: 8px;\n  margin-bottom: 8px;\n  margin-bottom: 0.5rem;\n  font-size: 13.6px;\n  font-size: 13.6px;\n  font-size: 0.85rem\n}\n\n.styles-module_label__3bJBz.styles-module_visuallyHidden__36izm {\n  position: absolute;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  border: 0;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  white-space: nowrap;\n  -webkit-clip-path: inset(50%);\n          clip-path: inset(50%);\n}\n\n.styles-module_formGroup__3lKOn.styles-module_light__3t8lq > .styles-module_label__3bJBz {\n  color: #fffefd;\n}\n\n.styles-module_helperText__3XhkA {\n  font-size: 14px;\n  font-size: 14px;\n  font-size: 0.875rem;\n  color: rgb(196, 194, 193);\n\n  margin: 8px 0 0;\n  margin: 8px 0 0;\n  margin: 0.5rem 0 0;\n}\n";
var s$d = {"formGroup":"styles-module_formGroup__3lKOn","label":"styles-module_label__3bJBz","visuallyHidden":"styles-module_visuallyHidden__36izm","light":"styles-module_light__3t8lq","helperText":"styles-module_helperText__3XhkA"};
styleInject(css_248z$d);

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

function _objectWithoutProperties$9(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$9(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$9(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormGroup = function FormGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      helperText = _ref.helperText,
      helperInTooltip = _ref.helperInTooltip,
      inputStyle = _ref.inputStyle,
      label = _ref.label,
      name = _ref.name,
      isHiddenLabel = _ref.isHiddenLabel,
      otherProps = _objectWithoutProperties$9(_ref, ["children", "className", "helperText", "helperInTooltip", "inputStyle", "label", "name", "isHiddenLabel"]);

  return /*#__PURE__*/React__default.createElement("div", _extends$a({
    className: classnames(className, inputStyle && s$d[inputStyle], s$d.formGroup)
  }, otherProps), /*#__PURE__*/React__default.createElement("label", {
    className: classnames(isHiddenLabel && s$d.visuallyHidden, s$d.label),
    htmlFor: name
  }, label, helperText && helperInTooltip && /*#__PURE__*/React__default.createElement(InfoTooltip, {
    content: helperText,
    className: "uMl1"
  })), children, helperText && !helperInTooltip && /*#__PURE__*/React__default.createElement("div", {
    className: s$d.helperText
  }, helperText));
};

FormGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.node]).isRequired,
  className: PropTypes.string,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.object, PropTypes.node]),
  helperInTooltip: PropTypes.bool,
  inputStyle: PropTypes.string,
  isHiddenLabel: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
};
FormGroup.defaultProps = {
  className: null,
  helperText: null,
  helperInTooltip: false,
  inputStyle: null,
  isHiddenLabel: false,
  label: null
};
FormGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FormGroup",
  "props": {
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "helperText": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "element"
        }, {
          "name": "object"
        }, {
          "name": "node"
        }]
      },
      "required": false,
      "description": ""
    },
    "helperInTooltip": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "inputStyle": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "isHiddenLabel": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "label": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "union",
        "value": [{
          "name": "element"
        }, {
          "name": "array"
        }, {
          "name": "node"
        }]
      },
      "required": true,
      "description": ""
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$e = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_button__3rq1W {\n  position: relative;\n  display: inline-block;\n  font-family: 'GoodSans', 'SF Pro', 'Open Sans', sans;\n  font-weight: 500;\n  font-size: 16px;\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 24px;\n  line-height: 24px;\n  line-height: 1.5rem;\n  padding: 4px 14px;\n  padding: 4px 14px;\n  padding: 0.25rem 0.875rem;\n  white-space: nowrap;\n  text-align: center;\n  border-radius: 0.375em;\n  border: 2px solid transparent;\n  border: 2px solid transparent;\n  border: 0.125rem solid transparent;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition-timing-function: ease-in-out;\n          transition-timing-function: ease-in-out;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-property: color, background, border-color, -webkit-box-shadow;\n  transition-property: color, background, border-color, -webkit-box-shadow;\n  transition-property: box-shadow, color, background, border-color;\n  transition-property: box-shadow, color, background, border-color, -webkit-box-shadow\n}\n\n.styles-module_button__3rq1W[disabled] {\n  cursor: not-allowed;\n}\n\n.styles-module_button__3rq1W:focus,\n  .styles-module_button__3rq1W:active {\n  outline: none;\n}\n\n.styles-module_button__3rq1W.styles-module_displayAsBlockElement__GCh4m {\n  display: block;\n  width: 100%;\n}\n\n.styles-module_button__3rq1W {\n  /* Styles */\n}\n\n.styles-module_button__3rq1W.styles-module_primary__81J8A:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(2, 126, 196, .4);\n          box-shadow: 0 0 0 3px rgba(2, 126, 196, .4);\n}\n\n.styles-module_button__3rq1W.styles-module_primary__81J8A {\n  border: 2px solid #027ec4;\n  border: 2px solid #027ec4;\n  border: 0.125rem solid #027ec4;\n  color: #fffefd;\n  background-color: #027ec4;\n}\n\n.styles-module_button__3rq1W.styles-module_primary__81J8A[disabled]:not([data-inflight='true']) {\n  color: #9e9e9c;\n  border-color: #e2e0df;\n  background-color: #e2e0df;\n}\n\n.styles-module_button__3rq1W.styles-module_primary__81J8A:not([disabled]):hover {\n  border-color: #049cf1;\n  color: #fffefd;\n  background-color: #049cf1;\n}\n\n.styles-module_button__3rq1W.styles-module_secondary__W0v_L:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(2, 126, 196, .4);\n          box-shadow: 0 0 0 3px rgba(2, 126, 196, .4);\n}\n\n.styles-module_button__3rq1W.styles-module_secondary__W0v_L {\n  border: 2px solid currentColor;\n  border: 2px solid currentColor;\n  border: 0.125rem solid currentColor;\n  color: #027ec4;\n  background-color: #fffefd;\n}\n\n.styles-module_button__3rq1W.styles-module_secondary__W0v_L[disabled]:not([data-inflight='true']) {\n  color: #c4c2c1;\n}\n\n.styles-module_button__3rq1W.styles-module_secondary__W0v_L:not([disabled]):hover {\n  background-color: rgba(2, 126, 196, .15);\n}\n\n.styles-module_button__3rq1W.styles-module_primaryDestructive__ckqFg:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(244, 68, 44, .4);\n          box-shadow: 0 0 0 3px rgba(244, 68, 44, .4);\n}\n\n.styles-module_button__3rq1W.styles-module_primaryDestructive__ckqFg {\n  border: 2px solid #f4442c;\n  border: 2px solid #f4442c;\n  border: 0.125rem solid #f4442c;\n  color: #fffefd;\n  background-color: #f4442c;\n}\n\n.styles-module_button__3rq1W.styles-module_primaryDestructive__ckqFg[disabled]:not([data-inflight='true']) {\n  color: #9e9e9c;\n  border-color: #e2e0df;\n  background-color: #e2e0df;\n}\n\n.styles-module_button__3rq1W.styles-module_primaryDestructive__ckqFg:not([disabled]):hover {\n  border-color: #ff523a;\n  color: #fffefd;\n  background-color: #ff523a;\n}\n\n.styles-module_button__3rq1W.styles-module_secondaryDestructive__1_cWv:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(244, 68, 44, .4);\n          box-shadow: 0 0 0 3px rgba(244, 68, 44, .4);\n}\n\n.styles-module_button__3rq1W.styles-module_secondaryDestructive__1_cWv {\n  border: 2px solid currentColor;\n  border: 2px solid currentColor;\n  border: 0.125rem solid currentColor;\n  color: #f4442c;\n  background-color: #fffefd;\n}\n\n.styles-module_button__3rq1W.styles-module_secondaryDestructive__1_cWv[disabled]:not([data-inflight='true']) {\n  color: #c4c2c1;\n}\n\n.styles-module_button__3rq1W.styles-module_secondaryDestructive__1_cWv:not([disabled]):hover {\n  background-color: rgba(244, 68, 44, .15);\n}\n\n.styles-module_button__3rq1W.styles-module_primaryAlt__2hzh2:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(48, 44, 67, .4);\n          box-shadow: 0 0 0 3px rgba(48, 44, 67, .4);\n}\n\n.styles-module_button__3rq1W.styles-module_primaryAlt__2hzh2 {\n  border: 2px solid #302c43;\n  border: 2px solid #302c43;\n  border: 0.125rem solid #302c43;\n  color: #fffefd;\n  background-color: #302c43;\n}\n\n.styles-module_button__3rq1W.styles-module_primaryAlt__2hzh2[disabled]:not([data-inflight='true']) {\n  color: #9e9e9c;\n  border-color: #e2e0df;\n  background-color: #e2e0df;\n}\n\n.styles-module_button__3rq1W.styles-module_primaryAlt__2hzh2:not([disabled]):hover {\n  border-color: #252235;\n  color: #fffefd;\n  background-color: #252235;\n}\n\n.styles-module_button__3rq1W.styles-module_google__1GcLq:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(66, 133, 245, .4);\n          box-shadow: 0 0 0 3px rgba(66, 133, 245, .4);\n}\n\n.styles-module_button__3rq1W.styles-module_google__1GcLq {\n  border: 2px solid #4285f5;\n  border: 2px solid #4285f5;\n  border: 0.125rem solid #4285f5;\n  color: #fffefd;\n  background-color: #4285f5;\n}\n\n.styles-module_button__3rq1W.styles-module_google__1GcLq[disabled]:not([data-inflight='true']) {\n  color: #9e9e9c;\n  border-color: #e2e0df;\n  background-color: #e2e0df;\n}\n\n.styles-module_button__3rq1W.styles-module_google__1GcLq:not([disabled]):hover {\n  border-color: #4285f5;\n  color: #fffefd;\n  background-color: #4285f5;\n}\n\n.styles-module_button__3rq1W.styles-module_okta__17B68:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(0, 125, 193, .4);\n          box-shadow: 0 0 0 3px rgba(0, 125, 193, .4);\n}\n\n.styles-module_button__3rq1W.styles-module_okta__17B68 {\n  border: 2px solid #007dc1;\n  border: 2px solid #007dc1;\n  border: 0.125rem solid #007dc1;\n  color: #fffefd;\n  background-color: #007dc1;\n}\n\n.styles-module_button__3rq1W.styles-module_okta__17B68[disabled]:not([data-inflight='true']) {\n  color: #9e9e9c;\n  border-color: #e2e0df;\n  background-color: #e2e0df;\n}\n\n.styles-module_button__3rq1W.styles-module_okta__17B68:not([disabled]):hover {\n  border-color: #007dc1;\n  color: #fffefd;\n  background-color: #007dc1;\n}\n\n.styles-module_button__3rq1W.styles-module_github__2fXX2:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(24, 23, 23, .4);\n          box-shadow: 0 0 0 3px rgba(24, 23, 23, .4);\n}\n\n.styles-module_button__3rq1W.styles-module_github__2fXX2 {\n  border: 2px solid #181717;\n  border: 2px solid #181717;\n  border: 0.125rem solid #181717;\n  color: #fffefd;\n  background-color: #181717;\n}\n\n.styles-module_button__3rq1W.styles-module_github__2fXX2[disabled]:not([data-inflight='true']) {\n  color: #9e9e9c;\n  border-color: #e2e0df;\n  background-color: #e2e0df;\n}\n\n.styles-module_button__3rq1W.styles-module_github__2fXX2:not([disabled]):hover {\n  border-color: #181717;\n  color: #fffefd;\n  background-color: #181717;\n}\n\n.styles-module_button__3rq1W {\n  /* Sizes */\n}\n\n.styles-module_button__3rq1W.styles-module_small__wWA7Q {\n  padding: 0 10px;\n  padding: 0 10px;\n  padding: 0 0.625rem;\n  font-size: 14px;\n  font-size: 14px;\n  font-size: 0.875rem;\n  /* 14px */\n}\n\n.styles-module_button__3rq1W.styles-module_large__2aNbe {\n  padding: 8px 22px;\n  padding: 8px 22px;\n  padding: 0.5rem 1.375rem;\n  font-size: 18px;\n  font-size: 18px;\n  font-size: 1.125rem;\n  /* 18px */\n}\n\n.styles-module_icon__2esWq {/* arbitrary visual fix */\n\n  display: inline-block;\n  vertical-align: middle;\n  margin: -0.2em -0.25em 0;\n  width: 1em;\n  height: 1em;\n}\n";
var s$e = {"button":"styles-module_button__3rq1W","displayAsBlockElement":"styles-module_displayAsBlockElement__GCh4m","primary":"styles-module_primary__81J8A","secondary":"styles-module_secondary__W0v_L","primaryDestructive":"styles-module_primaryDestructive__ckqFg","secondaryDestructive":"styles-module_secondaryDestructive__1_cWv","primaryAlt":"styles-module_primaryAlt__2hzh2","google":"styles-module_google__1GcLq","okta":"styles-module_okta__17B68","github":"styles-module_github__2fXX2","small":"styles-module_small__wWA7Q","large":"styles-module_large__2aNbe","icon":"styles-module_icon__2esWq"};
styleInject(css_248z$e);

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

function _objectWithoutProperties$a(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$a(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$a(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var IconButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var type = _ref.type,
      ariaLabel = _ref.ariaLabel,
      buttonSize = _ref.buttonSize,
      buttonStyle = _ref.buttonStyle,
      icon = _ref.icon,
      isDisabled = _ref.isDisabled,
      displayBlock = _ref.displayBlock,
      className = _ref.className,
      otherProps = _objectWithoutProperties$a(_ref, ["type", "ariaLabel", "buttonSize", "buttonStyle", "icon", "isDisabled", "displayBlock", "className"]);

  var btnClasses = classnames(className, displayBlock && s$e.displayAsBlockElement, s$e[buttonStyle], s$e[buttonSize], s$e.button);
  var Icon = icon;
  return /*#__PURE__*/React__default.createElement("button", _extends$b({
    // eslint-disable-line
    ref: ref,
    type: type,
    "aria-label": ariaLabel,
    title: ariaLabel,
    className: btnClasses,
    disabled: isDisabled
  }, otherProps), /*#__PURE__*/React__default.createElement(Icon, {
    className: s$e.icon
  }));
});
IconButton.displayName = 'IconButton';
IconButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  ariaLabel: PropTypes.string.isRequired,
  buttonSize: PropTypes.oneOf(['small', 'large']),
  buttonStyle: PropTypes.oneOf(['primary', 'secondary', 'primaryDestructive', 'secondaryDestructive', 'primaryAlt', 'google', 'okta', 'github']),
  icon: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  displayBlock: PropTypes.bool
};
IconButton.defaultProps = {
  type: 'button',
  buttonSize: null,
  buttonStyle: 'primary',
  isDisabled: false,
  className: null,
  displayBlock: false
};
IconButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "IconButton",
  "props": {
    "type": {
      "defaultValue": {
        "value": "'button'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "'button'",
          "computed": false
        }, {
          "value": "'submit'",
          "computed": false
        }, {
          "value": "'reset'",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "buttonSize": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "'small'",
          "computed": false
        }, {
          "value": "'large'",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "buttonStyle": {
      "defaultValue": {
        "value": "'primary'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "'primary'",
          "computed": false
        }, {
          "value": "'secondary'",
          "computed": false
        }, {
          "value": "'primaryDestructive'",
          "computed": false
        }, {
          "value": "'secondaryDestructive'",
          "computed": false
        }, {
          "value": "'primaryAlt'",
          "computed": false
        }, {
          "value": "'google'",
          "computed": false
        }, {
          "value": "'okta'",
          "computed": false
        }, {
          "value": "'github'",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "displayBlock": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "ariaLabel": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "icon": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$f = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_input__1me90:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(4, 156, 241, .4);\n          box-shadow: 0 0 0 3px rgba(4, 156, 241, .4);\n}\n\n.styles-module_input__1me90 {\n  display: block;\n  padding: 0 8px;\n  padding: 0 8px;\n  padding: 0 0.5rem;\n  width: 100%;\n  height: 36px;\n  height: 36px;\n  height: 2.25rem;\n  line-height: 36px;\n  line-height: 36px;\n  line-height: 2.25rem;\n  outline: none;\n  border-radius: 6px;\n  border: 2px solid rgb(196, 194, 193);\n  border: 2px solid rgb(196, 194, 193);\n  border: 0.125rem solid rgb(196, 194, 193);\n  color: rgb(48, 44, 67);\n  background-color: rgb(237, 236, 236);\n  font-size: 16px;\n  font-size: 16px;\n  font-size: 1rem;\n  font-weight: 400;\n  font-family: inherit;\n  -webkit-transition-timing-function: ease-in-out;\n          transition-timing-function: ease-in-out;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-property: border-color, background, -webkit-box-shadow;\n  transition-property: border-color, background, -webkit-box-shadow;\n  transition-property: box-shadow, border-color, background;\n  transition-property: box-shadow, border-color, background, -webkit-box-shadow;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.styles-module_input__1me90::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n.styles-module_input__1me90:disabled {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  opacity: 0.4;\n}\n\n.styles-module_input__1me90:not([disabled]):hover {\n  border-color: rgb(158, 158, 156);\n  background-color: rgb(245, 245, 245);\n}\n\n.styles-module_input__1me90:not([disabled]):focus {\n  border-color: rgb(4, 156, 241);\n  background-color: rgb(255, 254, 253);\n}\n\n.styles-module_input__1me90::-moz-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_input__1me90::-ms-input-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_input__1me90:-ms-input-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_input__1me90::-webkit-input-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_input__1me90::placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_input__1me90.styles-module_light__3dnng {\n  background-color: #f5f5f5;\n  border-color: #f5f5f5;\n}\n";
var s$f = {"input":"styles-module_input__1me90","light":"styles-module_light__3dnng"};
styleInject(css_248z$f);

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

function _objectWithoutProperties$b(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$b(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$b(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Input = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var name = _ref.name,
      type = _ref.type,
      inputStyle = _ref.inputStyle,
      className = _ref.className,
      isDisabled = _ref.isDisabled,
      otherProps = _objectWithoutProperties$b(_ref, ["name", "type", "inputStyle", "className", "isDisabled"]);

  return /*#__PURE__*/React__default.createElement("input", _extends$c({
    ref: ref,
    type: type,
    name: name,
    className: classnames(className, inputStyle && s$f[inputStyle], s$f.input),
    disabled: isDisabled
  }, otherProps));
});
Input.displayName = 'Input';
Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  inputStyle: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool
};
Input.defaultProps = {
  type: 'text',
  inputStyle: null,
  className: null,
  isDisabled: false
};
Input.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Input",
  "props": {
    "type": {
      "defaultValue": {
        "value": "'text'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "inputStyle": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$g = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_wrapper__1yozk {\n  position: relative;\n}\n\n.styles-module_suggestions__3s1V5 {\n  z-index: 1;\n  position: absolute;\n  margin-top: 2px;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 1px 2px rgba(48, 44, 67, .03),\n     0 2px 4px rgba(48, 44, 67, .03),\n     0 4px 6px rgba(48, 44, 67, .03),\n     0 8px 8px rgba(48, 44, 67, .03);\n          box-shadow: 0 1px 2px rgba(48, 44, 67, .03),\n     0 2px 4px rgba(48, 44, 67, .03),\n     0 4px 6px rgba(48, 44, 67, .03),\n     0 8px 8px rgba(48, 44, 67, .03);\n  background-color: #fffefd;\n  max-height: 300px;\n  max-width: 600px;\n  overflow-y: auto;\n}\n\n.styles-module_suggestion__2GX6c {\n  padding: 4px 8px;\n  padding: 4px 8px;\n  padding: 0.25rem 0.5rem;\n  cursor: pointer;\n  font-size: 13.6px;\n  font-size: 13.6px;\n  font-size: 0.85rem;\n  white-space: nowrap\n}\n\n.styles-module_suggestion__2GX6c.styles-module_active__IYw0Q {\n  color: #fffefd;\n  background-color: #049cf1;\n}\n";
var s$g = {"wrapper":"styles-module_wrapper__1yozk","suggestions":"styles-module_suggestions__3s1V5","suggestion":"styles-module_suggestion__2GX6c","active":"styles-module_active__IYw0Q"};
styleInject(css_248z$g);

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties$c(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$c(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$c(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputAutocomplete = function InputAutocomplete(_ref) {
  var name = _ref.name,
      suggestions = _ref.suggestions,
      onChange = _ref.onChange,
      value = _ref.value,
      className = _ref.className,
      isDisabled = _ref.isDisabled,
      otherProps = _objectWithoutProperties$c(_ref, ["name", "suggestions", "onChange", "value", "className", "isDisabled"]);

  var _useState = React.useState({
    activeSuggestion: 0,
    filteredSuggestions: suggestions,
    showSuggestions: false,
    userInput: value
  }),
      _useState2 = _slicedToArray$1(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleOnBlur = function handleOnBlur() {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      showSuggestions: false
    }));
  };

  var handleOnFocus = function handleOnFocus() {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      showSuggestions: true
    }));
  };

  var handleOnChange = function handleOnChange(e) {
    var userEnteredInput = e.currentTarget.value; // Filter our suggestions that don't contain the user's input

    var filteredSuggestions = suggestions.filter(function (suggestion) {
      return suggestion.toLowerCase().indexOf(userEnteredInput.toLowerCase()) > -1;
    } // eslint-disable-line
    );
    setState({
      activeSuggestion: 0,
      filteredSuggestions: filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  React.useEffect(function () {
    onChange(state.userInput);
  }, [state.userInput]);
  React.useEffect(function () {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      userInput: value
    }));
  }, [value]);

  var handleClick = function handleClick(e) {
    setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  var onKeyDown = function onKeyDown(e) {
    if (e.keyCode === 27) {
      // User pressed the esc key
      setState(_objectSpread(_objectSpread({}, state), {}, {
        showSuggestions: false
      }));
    } else if (e.keyCode === 13) {
      // User pressed the enter key
      e.preventDefault();

      if (state.showSuggestions) {
        setState(_objectSpread(_objectSpread({}, state), {}, {
          activeSuggestion: 0,
          showSuggestions: false,
          userInput: state.filteredSuggestions[state.activeSuggestion]
        }));
      }
    } else if (e.keyCode === 38) {
      // User pressed the up arrow
      if (state.activeSuggestion === 0) return;
      setState(_objectSpread(_objectSpread({}, state), {}, {
        activeSuggestion: state.activeSuggestion - 1
      }));
    } else if (e.keyCode === 40) {
      // User pressed the down arrow
      if (state.activeSuggestion - 1 === state.filteredSuggestions.length) return;
      setState(_objectSpread(_objectSpread({}, state), {}, {
        activeSuggestion: state.activeSuggestion + 1
      }));
    }
  };

  return /*#__PURE__*/React__default.createElement("span", {
    className: classnames(className, s$g.wrapper)
  }, /*#__PURE__*/React__default.createElement(Input, _extends$d({
    name: name,
    onFocus: handleOnFocus,
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onKeyDown: onKeyDown,
    value: state.userInput,
    autoComplete: "off",
    isDisabled: isDisabled
  }, otherProps)), state.showSuggestions && /*#__PURE__*/React__default.createElement("ul", {
    className: s$g.suggestions
  }, state.filteredSuggestions.map(function (suggestion, index) {
    return /*#__PURE__*/React__default.createElement("li", {
      // eslint-disable-line
      key: suggestion,
      className: classnames(index === state.activeSuggestion && s$g.active, s$g.suggestion),
      onClick: handleClick,
      onMouseDown: function onMouseDown(e) {
        return e.preventDefault();
      } // don't blur the input until after onClick
      ,
      title: suggestion
    }, suggestion);
  })));
};

InputAutocomplete.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  suggestions: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  isDisabled: PropTypes.bool
};
InputAutocomplete.defaultProps = {
  value: '',
  suggestions: [],
  className: null,
  isDisabled: false
};
InputAutocomplete.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "InputAutocomplete",
  "props": {
    "value": {
      "defaultValue": {
        "value": "''",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "suggestions": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    }
  }
};

var KubesLogo = function KubesLogo(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 700 700",
    className: className
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "#326ce5",
    d: "M358.986 10.06a46.725 46.342 0 0 0-17.906 4.531L96.736 131.341a46.725 46.342 0 0 0-25.28 31.438l-60.282 262.25a46.725 46.342 0 0 0 6.344 35.531 46.725 46.342 0 0 0 2.656 3.688l169.125 210.28a46.725 46.342 0 0 0 36.531 17.438l271.219-.062a46.725 46.342 0 0 0 36.531-17.406l169.063-210.313a46.725 46.342 0 0 0 9.03-39.219L651.3 162.716a46.725 46.342 0 0 0-25.281-31.437L381.643 14.59a46.725 46.342 0 0 0-22.657-4.53z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M361.408 99.307c-8.077.001-14.626 7.276-14.625 16.25 0 .138.028.27.03.406-.011 1.22-.07 2.689-.03 3.75.192 5.176 1.32 9.138 2 13.907 1.23 10.206 2.26 18.667 1.625 26.531-.62 2.965-2.803 5.677-4.75 7.562l-.344 6.188a190.337 190.337 0 0 0-26.438 4.062c-37.974 8.623-70.67 28.184-95.562 54.594a245.167 245.167 0 0 1-5.281-3.75c-2.612.353-5.25 1.159-8.688-.844-6.545-4.405-12.506-10.486-19.719-17.812-3.305-3.504-5.698-6.841-9.625-10.219-.891-.767-2.252-1.804-3.25-2.594-3.07-2.447-6.69-3.724-10.187-3.843-4.496-.154-8.824 1.604-11.656 5.156-5.036 6.315-3.424 15.968 3.593 21.562.071.057.147.101.219.157.964.781 2.145 1.783 3.031 2.437 4.167 3.077 7.973 4.652 12.125 7.094 8.747 5.402 15.999 9.88 21.75 15.281 2.246 2.394 2.639 6.613 2.938 8.438l4.687 4.187c-25.093 37.764-36.707 84.41-29.843 131.938l-6.125 1.781c-1.615 2.085-3.896 5.365-6.282 6.344-7.525 2.37-15.994 3.24-26.218 4.312-4.8.4-8.943.161-14.032 1.125-1.12.212-2.68.619-3.906.906l-.125.032c-.067.015-.155.048-.219.062-8.62 2.083-14.157 10.006-12.375 17.813 1.783 7.808 10.203 12.556 18.875 10.687.063-.014.154-.017.219-.031.098-.022.184-.07.281-.094 1.21-.265 2.724-.56 3.782-.843 5.003-1.34 8.626-3.308 13.125-5.032 9.676-3.47 17.691-6.37 25.5-7.5 3.26-.255 6.697 2.012 8.406 2.969l6.375-1.094c14.67 45.483 45.414 82.245 84.344 105.313l-2.657 6.375c.958 2.475 2.014 5.824 1.3 8.27-2.838 7.36-7.7 15.13-13.237 23.792-2.681 4.002-5.425 7.108-7.844 11.688-.579 1.096-1.316 2.78-1.875 3.937-3.759 8.043-1.002 17.305 6.219 20.782 7.266 3.497 16.284-.192 20.187-8.25.006-.012.026-.02.031-.032.004-.009-.004-.022 0-.03.556-1.143 1.344-2.645 1.813-3.72 2.072-4.747 2.762-8.815 4.219-13.406 3.87-9.72 5.995-19.919 11.322-26.274 1.459-1.74 3.837-2.41 6.303-3.07l3.312-6c33.938 13.027 71.927 16.523 109.875 7.907a189.77 189.77 0 0 0 25.094-7.563c.93 1.651 2.661 4.826 3.125 5.625 2.506.815 5.24 1.236 7.469 4.531 3.985 6.81 6.71 14.865 10.031 24.594 1.457 4.591 2.178 8.66 4.25 13.406.472 1.082 1.256 2.605 1.812 3.75 3.895 8.085 12.943 11.787 20.22 8.282 7.219-3.478 9.979-12.74 6.218-20.782-.559-1.158-1.327-2.841-1.906-3.937-2.42-4.58-5.163-7.655-7.844-11.656-5.537-8.662-10.13-15.858-12.969-23.22-1.187-3.796.2-6.157 1.125-8.624-.554-.635-1.739-4.22-2.437-5.906 40.457-23.889 70.298-62.022 84.312-106.063 1.893.298 5.182.88 6.25 1.094 2.2-1.45 4.222-3.344 8.188-3.031 7.808 1.129 15.823 4.03 25.5 7.5 4.498 1.723 8.121 3.723 13.125 5.062 1.057.283 2.572.547 3.781.813.097.023.183.071.281.093.066.015.156.017.219.032 8.672 1.866 17.094-2.88 18.875-10.688 1.78-7.807-3.754-15.732-12.375-17.812-1.254-.286-3.032-.77-4.25-1-5.09-.964-9.231-.727-14.031-1.125-10.225-1.072-18.694-1.943-26.219-4.313-3.068-1.19-5.251-4.841-6.313-6.344l-5.906-1.718c3.062-22.155 2.237-45.212-3.062-68.282-5.349-23.284-14.8-44.58-27.407-63.343 1.515-1.378 4.377-3.911 5.188-4.657.237-2.624.033-5.375 2.75-8.281 5.751-5.4 13.003-9.879 21.75-15.281 4.152-2.443 7.99-4.017 12.156-7.094.942-.696 2.23-1.798 3.219-2.594 7.015-5.596 8.63-15.248 3.594-21.562-5.037-6.314-14.797-6.91-21.813-1.313-.998.791-2.353 1.823-3.25 2.594-3.926 3.378-6.351 6.714-9.656 10.219-7.213 7.326-13.174 13.438-19.719 17.844-2.836 1.65-6.99 1.08-8.875.968l-5.562 3.969c-31.72-33.26-74.905-54.525-121.406-58.656-.13-1.949-.3-5.471-.344-6.532-1.904-1.821-4.204-3.376-4.781-7.312-.637-7.864.426-16.325 1.656-26.531.679-4.769 1.807-8.73 2-13.907.044-1.176-.027-2.884-.031-4.156-.001-8.974-6.548-16.25-14.625-16.25zm-18.313 113.438l-4.344 76.718-.312.157c-.292 6.863-5.94 12.343-12.875 12.343-2.841 0-5.463-.912-7.594-2.468l-.125.062-62.906-44.594c19.333-19.01 44.063-33.06 72.562-39.53a154.125 154.125 0 0 1 15.594-2.688zm36.656 0c33.274 4.092 64.045 19.159 87.625 42.25l-62.5 44.312-.218-.093c-5.548 4.051-13.364 3.046-17.688-2.375a12.807 12.807 0 0 1-2.812-7.47l-.063-.03zM232.126 283.62l57.438 51.375-.063.312c5.185 4.507 5.95 12.328 1.625 17.75a12.892 12.892 0 0 1-6.687 4.406l-.063.25-73.625 21.25c-3.747-34.265 4.329-67.573 21.375-95.343zm258.157.03c8.534 13.833 14.996 29.283 18.843 46.032 3.801 16.548 4.755 33.067 3.188 49.031l-74-21.312-.063-.313c-6.626-1.81-10.699-8.551-9.156-15.312a12.786 12.786 0 0 1 4.094-6.844l-.031-.156 57.125-51.125zm-140.657 55.313h23.532l14.625 18.282-5.25 22.812-21.125 10.156-21.188-10.187-5.25-22.813zm75.438 62.563c1-.05 1.995.04 2.969.219l.125-.157 76.156 12.875c-11.146 31.314-32.473 58.44-60.969 76.594l-29.562-71.406.093-.125c-2.715-6.31.002-13.71 6.25-16.719 1.6-.77 3.271-1.197 4.938-1.281zm-127.906.312c5.811.082 11.024 4.116 12.375 10.032.632 2.77.324 5.513-.72 7.937l.22.281-29.25 70.688c-27.348-17.549-49.13-43.824-60.782-76.063l75.5-12.812.125.156c.845-.155 1.701-.23 2.532-.219zm63.78 30.97a12.764 12.764 0 0 1 6.032 1.28c2.56 1.233 4.537 3.174 5.781 5.5h.282l37.218 67.25a154.256 154.256 0 0 1-14.875 4.157c-28.464 6.463-56.838 4.504-82.53-4.25l37.124-67.125h.063a12.91 12.91 0 0 1 10.906-6.813z",
    fill: "#fff",
    stroke: "#fff",
    strokeWidth: ".25",
    overflow: "visible"
  }));
};

KubesLogo.propTypes = {
  className: PropTypes.string
};
KubesLogo.defaultProps = {
  className: null
};
KubesLogo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "KubesLogo",
  "props": {
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};

var css_248z$h = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_input__sD-2c:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(4, 156, 241, .4);\n          box-shadow: 0 0 0 3px rgba(4, 156, 241, .4);\n}\n\n.styles-module_input__sD-2c {\n  display: block;\n  padding: 0 8px;\n  padding: 0 8px;\n  padding: 0 0.5rem;\n  width: 100%;\n  height: 36px;\n  height: 36px;\n  height: 2.25rem;\n  line-height: 36px;\n  line-height: 36px;\n  line-height: 2.25rem;\n  outline: none;\n  border-radius: 6px;\n  border: 2px solid rgb(196, 194, 193);\n  border: 2px solid rgb(196, 194, 193);\n  border: 0.125rem solid rgb(196, 194, 193);\n  color: rgb(48, 44, 67);\n  background-color: rgb(237, 236, 236);\n  font-size: 16px;\n  font-size: 16px;\n  font-size: 1rem;\n  font-weight: 400;\n  font-family: inherit;\n  -webkit-transition-timing-function: ease-in-out;\n          transition-timing-function: ease-in-out;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-property: border-color, background, -webkit-box-shadow;\n  transition-property: border-color, background, -webkit-box-shadow;\n  transition-property: box-shadow, border-color, background;\n  transition-property: box-shadow, border-color, background, -webkit-box-shadow;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.styles-module_input__sD-2c::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n.styles-module_input__sD-2c:disabled {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  opacity: 0.4;\n}\n\n.styles-module_input__sD-2c:not([disabled]):hover {\n  border-color: rgb(158, 158, 156);\n  background-color: rgb(245, 245, 245);\n}\n\n.styles-module_input__sD-2c:not([disabled]):focus {\n  border-color: rgb(4, 156, 241);\n  background-color: rgb(255, 254, 253);\n}\n\n.styles-module_input__sD-2c::-moz-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_input__sD-2c::-ms-input-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_input__sD-2c:-ms-input-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_input__sD-2c::-webkit-input-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_input__sD-2c::placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_input__sD-2c.styles-module_light__2R293 {\n  background-color: #f5f5f5;\n  border-color: #f5f5f5;\n}\n";
var s$h = {"input":"styles-module_input__sD-2c","light":"styles-module_light__2R293"};
styleInject(css_248z$h);

function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

function _objectWithoutProperties$d(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$d(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$d(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NumberInput = function NumberInput(_ref) {
  var name = _ref.name,
      value = _ref.value,
      inputStyle = _ref.inputStyle,
      clampValueOnBlur = _ref.clampValueOnBlur,
      className = _ref.className,
      isDisabled = _ref.isDisabled,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      onChange = _ref.onChange,
      otherProps = _objectWithoutProperties$d(_ref, ["name", "value", "inputStyle", "clampValueOnBlur", "className", "isDisabled", "min", "max", "step", "onChange"]);

  var updateValue = function updateValue(newValue) {
    onChange(newValue);
  };

  var clamp = function clamp(newVal) {
    var maxExists = max != null;
    var minExists = min != null;

    if (maxExists && newVal > max) {
      updateValue(max);
    }

    if (minExists && newVal < min) {
      updateValue(min);
    }
  };

  var handleOnBlur = function handleOnBlur() {
    /* istanbul ignore next */
    if (clampValueOnBlur) {
      clamp(value);
    }
  };

  var handleOnChange = function handleOnChange(e) {
    updateValue(Number(e.target.value));
  };

  return /*#__PURE__*/React__default.createElement("input", _extends$e({
    type: "number",
    name: name,
    value: value,
    min: min,
    max: max,
    step: step,
    className: classnames(className, inputStyle && s$h[inputStyle], s$h.input),
    disabled: isDisabled,
    onBlur: handleOnBlur,
    onChange: handleOnChange
  }, otherProps));
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  inputStyle: PropTypes.string,
  className: PropTypes.string,
  clampValueOnBlur: PropTypes.bool,
  isDisabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired
};
NumberInput.defaultProps = {
  inputStyle: null,
  value: null,
  className: null,
  clampValueOnBlur: false,
  isDisabled: false,
  min: null,
  max: null,
  step: 1
};
NumberInput.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NumberInput",
  "props": {
    "inputStyle": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "value": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "clampValueOnBlur": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "min": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "max": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "step": {
      "defaultValue": {
        "value": "1",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$i = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_container__22usV {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-radius: 0.375em;\n  border: solid 2px rgb(196, 194, 193);\n  background-color: rgb(237, 236, 236);\n}\n\n.styles-module_option__1k7uJ {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  border-left: solid 2px rgb(196, 194, 193)\n}\n\n.styles-module_option__1k7uJ:first-child {\n  border: 0;\n  border-radius: 0.375em 0 0 0.375em;\n}\n\n.styles-module_option__1k7uJ:last-child {\n  border-radius: 0 0.375em 0.375em 0;\n}\n\n/* Visusally hidden inputs but still accessible */\n\n.styles-module_input__3pf8r {\n  position: absolute;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  border: 0;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  white-space: nowrap;\n  -webkit-clip-path: inset(50%);\n          clip-path: inset(50%);\n}\n\n.styles-module_label__1EhXj {\n  z-index: 1;\n  border-radius: inherit;\n  display: block;\n  width: 100%;\n  padding: 6px 8px;\n  padding: 6px 8px;\n  padding: 0.375rem 0.5rem;\n  text-align: center;\n  color: rgb(48, 44, 67);\n  font-size: 13.6px;\n  font-size: 13.6px;\n  font-size: 0.85rem;\n  -webkit-transition-timing-function: ease-in-out;\n          transition-timing-function: ease-in-out;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-property: background, -webkit-box-shadow;\n  transition-property: background, -webkit-box-shadow;\n  transition-property: box-shadow, background;\n  transition-property: box-shadow, background, -webkit-box-shadow;\n}\n\n.styles-module_input__3pf8r:not([disabled]) + label {\n  cursor: pointer\n}\n\n.styles-module_input__3pf8r:not([disabled]) + label:hover {\n  background-color: rgb(245, 245, 245);\n}\n\n.styles-module_input__3pf8r[disabled] + .styles-module_label__1EhXj {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  cursor: default;\n  color: rgb(196, 194, 193);\n}\n\n.styles-module_input__3pf8r:focus + .styles-module_label__1EhXj {\n  position: relative;\n  -webkit-box-shadow: 0 0 0 2px rgb(4, 156, 241), 0 0 0 5px rgba(4, 156, 241, .4);\n          box-shadow: 0 0 0 2px rgb(4, 156, 241), 0 0 0 5px rgba(4, 156, 241, .4);\n  background-color: rgb(255, 254, 253);\n}\n\n.styles-module_input__3pf8r:checked + .styles-module_label__1EhXj,\n.styles-module_input__3pf8r:checked + .styles-module_label__1EhXj:hover {\n  background-color: rgb(255, 254, 253);\n  font-weight: 700;\n}\n";
var s$i = {"container":"styles-module_container__22usV","option":"styles-module_option__1k7uJ","input":"styles-module_input__3pf8r","label":"styles-module_label__1EhXj"};
styleInject(css_248z$i);

var RadioButtonGroup = function RadioButtonGroup(_ref) {
  var name = _ref.name,
      options = _ref.options,
      active = _ref.active,
      _onChange = _ref.onChange,
      isDisabled = _ref.isDisabled,
      className = _ref.className;
  return /*#__PURE__*/React__default.createElement("div", {
    className: classnames(className, s$i.container)
  }, options.map(function (o) {
    return /*#__PURE__*/React__default.createElement("div", {
      key: o.value,
      className: s$i.option
    }, /*#__PURE__*/React__default.createElement("input", {
      type: "radio",
      id: o.value,
      name: name,
      value: o.value,
      onChange: function onChange() {
        return _onChange(o.value);
      },
      checked: active === o.value,
      className: s$i.input,
      disabled: isDisabled,
      "data-testid": name
    }), /*#__PURE__*/React__default.createElement("label", {
      htmlFor: o.value,
      className: s$i.label
    }, o.label));
  }));
};

RadioButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  className: PropTypes.string
};
RadioButtonGroup.defaultProps = {
  isDisabled: false,
  className: null
};
RadioButtonGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RadioButtonGroup",
  "props": {
    "isDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "options": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "value": {
              "name": "string",
              "required": true
            },
            "label": {
              "name": "string",
              "required": true
            }
          }
        }
      },
      "required": true,
      "description": ""
    },
    "active": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$j = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_searchWrapper__1fBCS {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative;\n  width: 100%;\n}\n\n.styles-module_searchIcon__3tpUr {\n  z-index: 1;\n  position: absolute;\n  top: 8px;\n  top: 8px;\n  top: 0.5rem;\n  left: 7.2px;\n  left: 7.2px;\n  left: 0.45rem;\n  width: 20px;\n  width: 20px;\n  width: 1.25rem;\n  height: auto;\n  pointer-events: none;\n  color: rgb(196, 194, 193)\n}\n\n.styles-module_searchIcon__3tpUr.styles-module_disabled__3Glhp {\n  opacity: 0.4;\n}\n\n.styles-module_searchInput__3OG3V {\n  padding-left: 28px;\n  padding-left: 28px;\n  padding-left: 1.75rem;\n}\n";
var s$j = {"searchWrapper":"styles-module_searchWrapper__1fBCS","searchIcon":"styles-module_searchIcon__3tpUr","disabled":"styles-module_disabled__3Glhp","searchInput":"styles-module_searchInput__3OG3V"};
styleInject(css_248z$j);

function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

function _objectWithoutProperties$e(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$e(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$e(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SearchInput = function SearchInput(_ref) {
  var name = _ref.name,
      className = _ref.className,
      isDisabled = _ref.isDisabled,
      otherProps = _objectWithoutProperties$e(_ref, ["name", "className", "isDisabled"]);

  return /*#__PURE__*/React__default.createElement("div", {
    className: s$j.searchWrapper
  }, /*#__PURE__*/React__default.createElement(fi.FiSearch, {
    className: classnames(isDisabled && s$j.disabled, s$j.searchIcon)
  }), /*#__PURE__*/React__default.createElement(Input, _extends$f({
    type: "search",
    name: name,
    className: s$j.searchInput,
    isDisabled: isDisabled
  }, otherProps)));
};

SearchInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool
};
SearchInput.defaultProps = {
  className: null,
  isDisabled: false
};
SearchInput.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SearchInput",
  "props": {
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$k = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_container__3WaOQ {\n  position: relative;\n}\n\n.styles-module_select__2ZcZd:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(4, 156, 241, .4);\n          box-shadow: 0 0 0 3px rgba(4, 156, 241, .4);\n}\n\n.styles-module_select__2ZcZd {\n  display: block;\n  padding: 0 8px;\n  padding: 0 8px;\n  padding: 0 0.5rem;\n  width: 100%;\n  height: 36px;\n  height: 36px;\n  height: 2.25rem;\n  line-height: 36px;\n  line-height: 36px;\n  line-height: 2.25rem;\n  outline: none;\n  border-radius: 6px;\n  border: 2px solid rgb(196, 194, 193);\n  border: 2px solid rgb(196, 194, 193);\n  border: 0.125rem solid rgb(196, 194, 193);\n  color: rgb(48, 44, 67);\n  background-color: rgb(237, 236, 236);\n  font-size: 16px;\n  font-size: 16px;\n  font-size: 1rem;\n  font-weight: 400;\n  font-family: inherit;\n  -webkit-transition-timing-function: ease-in-out;\n          transition-timing-function: ease-in-out;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-property: border-color, background, -webkit-box-shadow;\n  transition-property: border-color, background, -webkit-box-shadow;\n  transition-property: box-shadow, border-color, background;\n  transition-property: box-shadow, border-color, background, -webkit-box-shadow;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.styles-module_select__2ZcZd::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n.styles-module_select__2ZcZd:disabled {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  opacity: 0.4;\n}\n\n.styles-module_select__2ZcZd:not([disabled]):hover {\n  border-color: rgb(158, 158, 156);\n  background-color: rgb(245, 245, 245);\n}\n\n.styles-module_select__2ZcZd:not([disabled]):focus {\n  border-color: rgb(4, 156, 241);\n  background-color: rgb(255, 254, 253);\n}\n\n.styles-module_select__2ZcZd::-moz-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_select__2ZcZd::-ms-input-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_select__2ZcZd:-ms-input-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_select__2ZcZd::-webkit-input-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_select__2ZcZd::placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_select__2ZcZd {\n  position: relative;\n  padding-right: 40px;\n  padding-right: 40px;\n  padding-right: 2.5rem;\n}\n\n.styles-module_select__2ZcZd.styles-module_light__2JR9i {\n  background-color: #f5f5f5;\n  border-color: #f5f5f5;\n}\n\n.styles-module_iconWrapper__IKE_d {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 40px;\n  width: 40px;\n  width: 2.5rem;\n  height: 100%;\n  z-index: 2;\n  pointer-events: none;\n  color: rgb(196, 194, 193);\n}\n\n.styles-module_select__2ZcZd:hover + .styles-module_iconWrapper__IKE_d {\n  color: rgb(158, 158, 156);\n}\n\n.styles-module_select__2ZcZd:disabled + .styles-module_iconWrapper__IKE_d {\n  opacity: 0.4;\n}\n\n.styles-module_icon__noM9B {\n  font-size: 24px;\n  font-size: 24px;\n  font-size: 1.5rem;\n  color: currentColor;\n}\n";
var s$k = {"container":"styles-module_container__3WaOQ","select":"styles-module_select__2ZcZd","light":"styles-module_light__2JR9i","iconWrapper":"styles-module_iconWrapper__IKE_d","icon":"styles-module_icon__noM9B"};
styleInject(css_248z$k);

function _extends$g() { _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

function _objectWithoutProperties$f(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$f(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$f(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Select = function Select(_ref) {
  var inputStyle = _ref.inputStyle,
      className = _ref.className,
      placeholder = _ref.placeholder,
      children = _ref.children,
      isDisabled = _ref.isDisabled,
      otherProps = _objectWithoutProperties$f(_ref, ["inputStyle", "className", "placeholder", "children", "isDisabled"]);

  return /*#__PURE__*/React__default.createElement("div", {
    className: classnames(className, inputStyle, s$k.container)
  }, /*#__PURE__*/React__default.createElement("select", _extends$g({
    className: s$k.select,
    disabled: isDisabled
  }, otherProps), placeholder && /*#__PURE__*/React__default.createElement("option", {
    value: ""
  }, placeholder), children), /*#__PURE__*/React__default.createElement("span", {
    className: s$k.iconWrapper
  }, /*#__PURE__*/React__default.createElement(fi.FiChevronDown, {
    className: s$k.icon
  })));
};

Select.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  inputStyle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.node]).isRequired,
  isDisabled: PropTypes.bool
};
Select.defaultProps = {
  inputStyle: null,
  className: null,
  placeholder: null,
  isDisabled: false
};
Select.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Select",
  "props": {
    "inputStyle": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "placeholder": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "union",
        "value": [{
          "name": "element"
        }, {
          "name": "array"
        }, {
          "name": "node"
        }]
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$l = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_slider__1QSji {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  margin: 5px 0;\n  width: 100%;\n  background: none\n}\n\n.styles-module_slider__1QSji:focus {\n  outline: none;\n}\n\n.styles-module_slider__1QSji {\n  /* Styles the track of the input */\n}\n\n.styles-module_slider__1QSji::-webkit-slider-runnable-track {\n  outline: none;\n  width: 100%;\n  height: 6px;\n  border-radius: 3px;\n  border: 0;\n  background: rgb(196, 194, 193);\n}\n\n.styles-module_slider__1QSji::-moz-range-track {\n  outline: none;\n  width: 100%;\n  height: 6px;\n  border-radius: 3px;\n  border: 0;\n  background: rgb(196, 194, 193);\n}\n\n.styles-module_slider__1QSji::-ms-track {\n  outline: none;\n  width: 100%;\n  height: 6px;\n  border-radius: 3px;\n  border: 0;\n  background: rgb(196, 194, 193);\n}\n\n.styles-module_slider__1QSji {\n  /* Styles the thumb of the input */\n}\n\n.styles-module_slider__1QSji::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-box-shadow: 0 1px 2px rgba(48, 44, 67, .03),\n     0 2px 4px rgba(48, 44, 67, .03),\n     0 4px 6px rgba(48, 44, 67, .03),\n     0 8px 8px rgba(48, 44, 67, .03);\n          box-shadow: 0 1px 2px rgba(48, 44, 67, .03),\n     0 2px 4px rgba(48, 44, 67, .03),\n     0 4px 6px rgba(48, 44, 67, .03),\n     0 8px 8px rgba(48, 44, 67, .03);\n  width: 16px;\n  width: 16px;\n  width: 1rem;\n  height: 16px;\n  height: 16px;\n  height: 1rem;\n  background: #049cf1;\n  border-radius: 50%;\n  cursor: pointer;\n  -webkit-transition: background 200ms ease-in-out;\n  transition: background 200ms ease-in-out;\n}\n\n.styles-module_slider__1QSji::-webkit-slider-thumb:hover {\n  background: #027ec4;\n}\n\n.styles-module_slider__1QSji::-webkit-slider-thumb {\n  margin-top: -5px;\n}\n\n.styles-module_slider__1QSji::-moz-range-thumb {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  box-shadow: 0 1px 2px rgba(48, 44, 67, .03),\n     0 2px 4px rgba(48, 44, 67, .03),\n     0 4px 6px rgba(48, 44, 67, .03),\n     0 8px 8px rgba(48, 44, 67, .03);\n  width: 16px;\n  width: 16px;\n  width: 1rem;\n  height: 16px;\n  height: 16px;\n  height: 1rem;\n  background: #049cf1;\n  border-radius: 50%;\n  cursor: pointer;\n  -webkit-transition: background 200ms ease-in-out;\n  transition: background 200ms ease-in-out;\n}\n\n.styles-module_slider__1QSji::-moz-range-thumb:hover {\n  background: #027ec4;\n}\n\n.styles-module_slider__1QSji::-ms-thumb {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  box-shadow: 0 1px 2px rgba(48, 44, 67, .03),\n     0 2px 4px rgba(48, 44, 67, .03),\n     0 4px 6px rgba(48, 44, 67, .03),\n     0 8px 8px rgba(48, 44, 67, .03);\n  width: 16px;\n  width: 16px;\n  width: 1rem;\n  height: 16px;\n  height: 16px;\n  height: 1rem;\n  background: #049cf1;\n  border-radius: 50%;\n  cursor: pointer;\n  -webkit-transition: background 200ms ease-in-out;\n  transition: background 200ms ease-in-out;\n}\n\n.styles-module_slider__1QSji::-ms-thumb:hover {\n  background: #027ec4;\n}\n\n.styles-module_slider__1QSji:focus::-webkit-slider-thumb {\n  -webkit-box-shadow: 0 0 0 3px rgba(4, 156, 241, .4);\n          box-shadow: 0 0 0 3px rgba(4, 156, 241, .4);\n}\n\n.styles-module_slider__1QSji:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 3px rgba(4, 156, 241, .4);\n}\n\n.styles-module_slider__1QSji:focus::-ms-thumb {\n  box-shadow: 0 0 0 3px rgba(4, 156, 241, .4);\n}\n\n.styles-module_slider__1QSji {\n  /* Styles the progress/fill below the thumb */\n}\n\n.styles-module_slider__1QSji::-moz-range-progress {\n  border: 0;\n  border-radius: 3px 0 0 3px;\n  height: 6px;\n  background: #049cf1;\n}\n\n.styles-module_slider__1QSji::-ms-fill-lower {\n  border: 0;\n  border-radius: 3px 0 0 3px;\n  height: 6px;\n  background: #049cf1;\n}\n\n.styles-module_slider__1QSji:disabled {\n  opacity: 0.5\n}\n\n.styles-module_slider__1QSji:disabled:hover::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-box-shadow: 0 1px 2px rgba(48, 44, 67, .03),\n     0 2px 4px rgba(48, 44, 67, .03),\n     0 4px 6px rgba(48, 44, 67, .03),\n     0 8px 8px rgba(48, 44, 67, .03);\n          box-shadow: 0 1px 2px rgba(48, 44, 67, .03),\n     0 2px 4px rgba(48, 44, 67, .03),\n     0 4px 6px rgba(48, 44, 67, .03),\n     0 8px 8px rgba(48, 44, 67, .03);\n  width: 16px;\n  width: 16px;\n  width: 1rem;\n  height: 16px;\n  height: 16px;\n  height: 1rem;\n  background: #049cf1;\n  border-radius: 50%;\n  cursor: pointer;\n  -webkit-transition: background 200ms ease-in-out;\n  transition: background 200ms ease-in-out;\n}\n\n.styles-module_slider__1QSji:disabled:hover::-webkit-slider-thumb:hover {\n  background: #027ec4;\n}\n\n.styles-module_slider__1QSji:disabled:hover::-webkit-slider-thumb {\n  background: #049cf1;\n  cursor: default;\n}\n";
var s$l = {"slider":"styles-module_slider__1QSji"};
styleInject(css_248z$l);

function _extends$h() { _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }

function _objectWithoutProperties$g(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$g(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$g(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Slider = function Slider(_ref) {
  var name = _ref.name,
      value = _ref.value,
      className = _ref.className,
      isDisabled = _ref.isDisabled,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      onChange = _ref.onChange,
      otherProps = _objectWithoutProperties$g(_ref, ["name", "value", "className", "isDisabled", "min", "max", "step", "onChange"]);

  var handleOnChange = function handleOnChange(e) {
    onChange(Number(e.target.value));
  };

  return /*#__PURE__*/React__default.createElement("input", _extends$h({
    type: "range",
    name: name,
    value: value,
    min: min,
    max: max,
    step: step,
    className: classnames(className, s$l.slider),
    disabled: isDisabled,
    onChange: handleOnChange
  }, otherProps));
};

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired
};
Slider.defaultProps = {
  value: null,
  className: null,
  isDisabled: false,
  min: null,
  max: null,
  step: 1
};
Slider.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Slider",
  "props": {
    "value": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "min": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "max": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "step": {
      "defaultValue": {
        "value": "1",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "onChange": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$m = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n@-webkit-keyframes styles-module_pulse__2lLb3 {\n\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes styles-module_pulse__2lLb3 {\n\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n.styles-module_container__uBiTy {\n  display: inline-block;\n  position: relative;\n  width: 1em;\n  height: 1em;\n  vertical-align: baseline;\n  vertical-align: initial;\n}\n\n.styles-module_indicator__wxpiI {\n  position: absolute;\n  top: 0;\n  font-size: 1em;\n  fill: currentColor;\n  stroke: currentColor\n}\n\n.styles-module_indicator__wxpiI.styles-module_positive__1L2yr {\n  color: rgb(0, 179, 93);\n}\n\n.styles-module_indicator__wxpiI.styles-module_warn__25hgG {\n  color: rgb(255, 161, 26);\n}\n\n.styles-module_indicator__wxpiI.styles-module_negative__1Xlsi {\n  color: rgb(244, 68, 44);\n}\n\n.styles-module_indicator__wxpiI.styles-module_neutral__Hu3-R {\n  color: rgb(4, 156, 241);\n}\n\n.styles-module_indicator__wxpiI.styles-module_inactive__2BEOW {\n  color: #767574;\n}\n\n.styles-module_container__uBiTy.styles-module_inFlight__pvB0U .styles-module_indicator__wxpiI {\n  opacity: 0.6;\n  -webkit-animation: styles-module_pulse__2lLb3 2s infinite ease-in-out;\n          animation: styles-module_pulse__2lLb3 2s infinite ease-in-out\n}\n\n.styles-module_container__uBiTy.styles-module_inFlight__pvB0U .styles-module_indicator__wxpiI.styles-module_secondDot__otq1K {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n";
var s$m = {"container":"styles-module_container__uBiTy","indicator":"styles-module_indicator__wxpiI","positive":"styles-module_positive__1L2yr","warn":"styles-module_warn__25hgG","negative":"styles-module_negative__1Xlsi","neutral":"styles-module_neutral__Hu3-R","inactive":"styles-module_inactive__2BEOW","inFlight":"styles-module_inFlight__pvB0U","pulse":"styles-module_pulse__2lLb3","secondDot":"styles-module_secondDot__otq1K"};
styleInject(css_248z$m);

function _extends$i() { _extends$i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }

function _objectWithoutProperties$h(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$h(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$h(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StatusIndicator = function StatusIndicator(_ref) {
  var status = _ref.status,
      inFlight = _ref.inFlight,
      className = _ref.className,
      otherProps = _objectWithoutProperties$h(_ref, ["status", "inFlight", "className"]);

  return /*#__PURE__*/React__default.createElement("span", _extends$i({
    className: classnames(className, inFlight && s$m.inFlight, s$m.container)
  }, otherProps), /*#__PURE__*/React__default.createElement(fi.FiCircle, {
    className: classnames(s$m[status], s$m.indicator)
  }), inFlight && /*#__PURE__*/React__default.createElement(fi.FiCircle, {
    className: classnames(s$m.secondDot, s$m[status], s$m.indicator)
  }));
};

StatusIndicator.propTypes = {
  status: PropTypes.oneOf(['positive', 'warn', 'negative', 'neutral', 'inactive']).isRequired,
  inFlight: PropTypes.bool,
  className: PropTypes.string
};
StatusIndicator.defaultProps = {
  inFlight: false,
  className: null
};
StatusIndicator.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StatusIndicator",
  "props": {
    "inFlight": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "status": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "'positive'",
          "computed": false
        }, {
          "value": "'warn'",
          "computed": false
        }, {
          "value": "'negative'",
          "computed": false
        }, {
          "value": "'neutral'",
          "computed": false
        }, {
          "value": "'inactive'",
          "computed": false
        }]
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$n = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_label__2eS3j {\n  display: inline-block;\n  cursor: pointer\n}\n\n.styles-module_label__2eS3j.styles-module_disabled__1oqik {\n  cursor: not-allowed;\n}\n\n/* Visusally hidden inputs but still accessible */\n\n.styles-module_input__20ni5 {\n  position: absolute;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  border: 0;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  white-space: nowrap;\n  -webkit-clip-path: inset(50%);\n          clip-path: inset(50%);\n}\n\n.styles-module_switch__1Zp2y {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  vertical-align: middle;\n  margin-right: 8px;\n  margin-right: 8px;\n  margin-right: 0.5rem;\n  border-radius: 999px;\n  width: 36px;\n  width: 36px;\n  width: 2.25rem;\n  padding: 2px;\n  background-color: rgb(196, 194, 193);\n  cursor: pointer\n}\n\n.styles-module_switch__1Zp2y::before {\n  border-radius: 50%;\n  width: 20px;\n  width: 20px;\n  width: 1.25rem;\n  height: 20px;\n  height: 20px;\n  height: 1.25rem;\n  content: '';\n  background-color: rgb(237, 236, 236);\n  -webkit-transition-timing-function: ease-in-out;\n          transition-timing-function: ease-in-out;\n  -webkit-transition-duration: 0.25s;\n          transition-duration: 0.25s;\n  -webkit-transition-property: background-color, -webkit-transform;\n  transition-property: background-color, -webkit-transform;\n  transition-property: transform, background-color;\n  transition-property: transform, background-color, -webkit-transform;\n}\n\n.styles-module_input__20ni5:disabled + .styles-module_switch__1Zp2y {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.styles-module_input__20ni5.styles-module_checked__j1RBX + .styles-module_switch__1Zp2y {\n  background-color: rgb(4, 156, 241)\n}\n\n.styles-module_input__20ni5.styles-module_checked__j1RBX + .styles-module_switch__1Zp2y::before {\n  background-color: rgb(255, 254, 253);\n  -webkit-transform: translateX(1rem);\n          transform: translateX(1rem);\n}\n\n.styles-module_input__20ni5:enabled:focus + .styles-module_switch__1Zp2y {\n  -webkit-box-shadow: 0 0 0 3px rgba(4, 156, 241, .4);\n          box-shadow: 0 0 0 3px rgba(4, 156, 241, .4)\n}\n\n.styles-module_input__20ni5:enabled:focus + .styles-module_switch__1Zp2y::before {\n  background-color: #fffefd;\n}\n\n.styles-module_input__20ni5.styles-module_unchecked__1cDY3:enabled + .styles-module_switch__1Zp2y:hover {\n  background-color: rgb(158, 158, 156)\n}\n\n.styles-module_input__20ni5.styles-module_unchecked__1cDY3:enabled + .styles-module_switch__1Zp2y:hover::before {\n  background-color: rgb(245, 245, 245);\n}\n";
var s$n = {"label":"styles-module_label__2eS3j","disabled":"styles-module_disabled__1oqik","input":"styles-module_input__20ni5","switch":"styles-module_switch__1Zp2y","checked":"styles-module_checked__j1RBX","unchecked":"styles-module_unchecked__1cDY3"};
styleInject(css_248z$n);

function _extends$j() { _extends$j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }

function _objectWithoutProperties$i(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$i(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$i(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Switch = function Switch(_ref) {
  var name = _ref.name,
      label = _ref.label,
      isChecked = _ref.isChecked,
      onChange = _ref.onChange,
      isDisabled = _ref.isDisabled,
      otherProps = _objectWithoutProperties$i(_ref, ["name", "label", "isChecked", "onChange", "isDisabled"]);

  /* istanbul ignore next */
  var handleOnChange = function handleOnChange() {
    if (isDisabled) return;
    onChange();
  };

  return /*#__PURE__*/React__default.createElement("label", _extends$j({
    className: classnames(isDisabled && s$n.disabled, s$n.label),
    htmlFor: name,
    onClick: function onClick() {
      return handleOnChange;
    }
  }, otherProps), /*#__PURE__*/React__default.createElement("input", {
    type: "checkbox",
    id: name,
    name: name,
    className: classnames(isChecked ? s$n.checked : s$n.unchecked, s$n.input),
    checked: isChecked,
    onChange: handleOnChange,
    disabled: isDisabled
  }), /*#__PURE__*/React__default.createElement("span", {
    "aria-hidden": "true",
    className: s$n["switch"]
  }), label);
};

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool
};
Switch.defaultProps = {
  isChecked: false,
  onChange: null,
  isDisabled: false
};
Switch.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Switch",
  "props": {
    "isChecked": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "onChange": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "label": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};

var css_248z$o = ":root {\n  /* Typefaces */\n\n  /* Desktop Font Sizes */\n\n  /* Mobile Font Sizes */\n\n  /* Whites */\n\n  /* Grays */\n\n  /* Purples (blacks) */\n\n  /* Blues */\n\n  /* Greens */\n\n  /* Golds */\n\n  /* Reds */\n\n  /* Brands */\n\n  /* Semantic Colors */\n\n  /* Links */\n\n  /* Statuses */\n\n  /* Input elements */\n\n  /* Shadow */\n\n  /* Radius */\n\n  /* Layout */\n}\n\n/* Minimum Widths */\n\n/* Maximum Widths */\n\n/* 2px */\n\n/* Heading Text */\n\n/* Button */\n\n/* Button Style - Text Link */\n\n/* Input */\n\n/* Input - Label */\n\n.styles-module_textArea__23YCg:not([disabled]):focus {\n  -webkit-box-shadow: 0 0 0 3px rgba(4, 156, 241, .4);\n          box-shadow: 0 0 0 3px rgba(4, 156, 241, .4);\n}\n\n.styles-module_textArea__23YCg {\n  display: block;\n  padding: 0 8px;\n  padding: 0 8px;\n  padding: 0 0.5rem;\n  width: 100%;\n  height: 36px;\n  height: 36px;\n  height: 2.25rem;\n  line-height: 36px;\n  line-height: 36px;\n  line-height: 2.25rem;\n  outline: none;\n  border-radius: 6px;\n  border: 2px solid rgb(196, 194, 193);\n  border: 2px solid rgb(196, 194, 193);\n  border: 0.125rem solid rgb(196, 194, 193);\n  color: rgb(48, 44, 67);\n  background-color: rgb(237, 236, 236);\n  font-size: 16px;\n  font-size: 16px;\n  font-size: 1rem;\n  font-weight: 400;\n  font-family: inherit;\n  -webkit-transition-timing-function: ease-in-out;\n          transition-timing-function: ease-in-out;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-property: border-color, background, -webkit-box-shadow;\n  transition-property: border-color, background, -webkit-box-shadow;\n  transition-property: box-shadow, border-color, background;\n  transition-property: box-shadow, border-color, background, -webkit-box-shadow;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.styles-module_textArea__23YCg::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n.styles-module_textArea__23YCg:disabled {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  opacity: 0.4;\n}\n\n.styles-module_textArea__23YCg:not([disabled]):hover {\n  border-color: rgb(158, 158, 156);\n  background-color: rgb(245, 245, 245);\n}\n\n.styles-module_textArea__23YCg:not([disabled]):focus {\n  border-color: rgb(4, 156, 241);\n  background-color: rgb(255, 254, 253);\n}\n\n.styles-module_textArea__23YCg::-moz-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_textArea__23YCg::-ms-input-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_textArea__23YCg:-ms-input-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_textArea__23YCg::-webkit-input-placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_textArea__23YCg::placeholder {\n  color: #c4c2c1;\n}\n\n.styles-module_textArea__23YCg {\n  resize: none;\n  height: auto;\n  min-height: 84px;\n  min-height: 84px;\n  min-height: 5.25rem;\n  padding-top: 4px;\n  padding-top: 4px;\n  padding-top: 0.25rem;\n  padding-bottom: 4px;\n  padding-bottom: 4px;\n  padding-bottom: 0.25rem;\n  line-height: 1.5;\n}\n\n.styles-module_textArea__23YCg.styles-module_light__1DopS {\n  background-color: #f5f5f5;\n  border-color: #f5f5f5;\n}\n";
var s$o = {"textArea":"styles-module_textArea__23YCg","light":"styles-module_light__1DopS"};
styleInject(css_248z$o);

function _extends$k() { _extends$k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }

function _objectWithoutProperties$j(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$j(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$j(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextArea = function TextArea(_ref) {
  var name = _ref.name,
      inputStyle = _ref.inputStyle,
      className = _ref.className,
      rows = _ref.rows,
      isDisabled = _ref.isDisabled,
      otherProps = _objectWithoutProperties$j(_ref, ["name", "inputStyle", "className", "rows", "isDisabled"]);

  return /*#__PURE__*/React__default.createElement("textarea", _extends$k({
    name: name,
    rows: rows,
    className: classnames(className, s$o[inputStyle], s$o.textArea),
    disabled: isDisabled
  }, otherProps));
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  inputStyle: PropTypes.string,
  className: PropTypes.string,
  rows: PropTypes.string,
  isDisabled: PropTypes.bool
};
TextArea.defaultProps = {
  inputStyle: null,
  className: null,
  rows: '2',
  isDisabled: false
};
TextArea.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TextArea",
  "props": {
    "inputStyle": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "className": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "rows": {
      "defaultValue": {
        "value": "'2'",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "name": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};

exports.AirflowLogo = AirflowLogo;
exports.AstroLogo = AstroLogo;
exports.Badge = Badge;
exports.Banner = Banner;
exports.Button = Button;
exports.Card = Card;
exports.CeleryLogo = CeleryLogo;
exports.Checkbox = Checkbox;
exports.CreditCardLogo = CreditCardLogo;
exports.Dropdown = Dropdown;
exports.Empty = Empty;
exports.Flash = Flash;
exports.Form = Form;
exports.FormGroup = FormGroup;
exports.Heading = Heading;
exports.IconButton = IconButton;
exports.InfoTooltip = InfoTooltip;
exports.Input = Input;
exports.InputAutocomplete = InputAutocomplete;
exports.KubesLogo = KubesLogo;
exports.LoadingDots = LoadingDots;
exports.NumberInput = NumberInput;
exports.RadioButtonGroup = RadioButtonGroup;
exports.SearchInput = SearchInput;
exports.Select = Select;
exports.Slider = Slider;
exports.StatusIndicator = StatusIndicator;
exports.Switch = Switch;
exports.TextArea = TextArea;
exports.Toast = Toast;
exports.Tooltip = Tooltip;
exports.useToast = useToast;
