'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = require('prop-types');
var PropTypes__default = _interopDefault(PropTypes);
var cn = _interopDefault(require('classnames'));
var reactIs = require('react-is');
var reactIs__default = _interopDefault(reactIs);
var ReactDOM = require('react-dom');

var AirflowLogo = function AirflowLogo(_ref) {
  var className = _ref.className;
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 150 150",
    className: className
  }, React__default.createElement("path", {
    fill: "#017cee",
    d: "M3.586 147.805l70.469-72.23c.441-.454.523-1.153.156-1.669-4.285-5.984-12.191-7.02-15.121-11.039-8.68-11.906-10.883-18.648-14.613-18.23a1.15 1.15 0 00-.676.36L18.344 71.09C3.699 86.102 1.602 119.152 1.214 146.828c-.019 1.25 1.5 1.871 2.372.977zm0 0"
  }), React__default.createElement("path", {
    fill: "#00ad46",
    d: "M147.805 146.02l-72.23-70.465c-.454-.442-1.153-.528-1.669-.16-5.984 4.289-7.02 12.195-11.039 15.125-11.906 8.68-18.648 10.882-18.23 14.613.031.258.172.492.36.676l26.093 25.457c15.012 14.64 48.062 16.742 75.738 17.129 1.25.015 1.871-1.5.977-2.375zm0 0"
  }), React__default.createElement("path", {
    fill: "#04d659",
    fillRule: "evenodd",
    d: "M71.09 131.266c-8.203-8-12.008-23.828 3.715-56.461C49.254 86.223 40.3 101.23 44.707 105.527zm0 0"
  }), React__default.createElement("path", {
    fill: "#00c7d4",
    d: "M146.02 1.805l-70.465 72.23c-.442.453-.528 1.153-.16 1.668 4.285 5.984 12.19 7.02 15.12 11.04 8.684 11.905 10.887 18.648 14.614 18.23a1.1 1.1 0 00.676-.36l25.457-26.093c14.644-15.012 16.746-48.063 17.129-75.739.02-1.25-1.5-1.87-2.371-.976zm0 0"
  }), React__default.createElement("path", {
    fill: "#11e1ee",
    fillRule: "evenodd",
    d: "M131.262 78.52c-8 8.199-23.825 12.007-56.457-3.715 11.418 25.547 26.425 34.504 30.722 30.097zm0 0"
  }), React__default.createElement("path", {
    fill: "#e43921",
    d: "M1.8 3.59l72.235 70.465c.453.441 1.153.527 1.668.156 5.98-4.285 7.02-12.191 11.04-15.121 11.905-8.68 18.648-10.883 18.23-14.613a1.15 1.15 0 00-.36-.676L78.52 18.344C63.508 3.699 30.457 1.602 2.78 1.214 1.53 1.199.905 2.714 1.8 3.59zm0 0"
  }), React__default.createElement("path", {
    fill: "#ff7557",
    fillRule: "evenodd",
    d: "M78.52 18.344c8.199 8 12.003 23.824-3.715 56.46 25.547-11.417 34.5-26.425 30.097-30.722zm0 0"
  }), React__default.createElement("path", {
    fill: "#0cb6ff",
    fillRule: "evenodd",
    d: "M18.344 71.09c8-8.203 23.824-12.004 56.46 3.715-11.417-25.547-26.425-34.5-30.722-30.098zm0 0"
  }), React__default.createElement("path", {
    fill: "#4a4848",
    d: "M77.965 74.754a3.151 3.151 0 11-6.3.081 3.151 3.151 0 016.3-.081zm0 0"
  }));
};

AirflowLogo.propTypes = {
  className: PropTypes__default.string
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
  return React__default.createElement("svg", {
    id: "light",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1092.9 618",
    className: style
  }, React__default.createElement("linearGradient", {
    id: id,
    x1: "13.6",
    x2: "960.989",
    y1: "331.301",
    y2: "331.301",
    gradientTransform: "matrix(1 0 0 -1 0 663.302)",
    gradientUnits: "userSpaceOnUse"
  }, React__default.createElement("stop", {
    offset: "0",
    stopColor: "#F96024"
  }), React__default.createElement("stop", {
    offset: ".787",
    stopColor: "#FF9907"
  })), React__default.createElement("path", {
    fill: dark ? '#282632' : '#e2e0df',
    d: "M166.4 588.2c3.9 7.5 11.3 12.1 19.4 12.1h108.3c13.8 0 23.8-12.4 27.2-18.9l60.8-116.6c1.1-2 4.7-4.2 6.4-4.2h287.1c1.8 0 5.4 2.2 6.4 4.2l60.7 116.6c3.4 6.5 13.5 18.9 27.2 18.9h108.3c8.1 0 15.5-4.6 19.4-12.1 3.8-7.2 3.7-16.1-.3-23.3L602.2 29.4c-4-7.2-11.3-11.6-19.1-11.6h-102c-7.8 0-15.2 4.5-19.1 11.6L166.7 564.9c-4 7.1-4.1 16.1-.3 23.3zm291.7-269.6l74-142 74 142c.7 1.4 1.3 3.6 1.1 4.4-.3.1-.9.3-2.2.3H459.2c-1.3 0-1.9-.2-2.2-.3-.2-.8.4-2.9 1.1-4.4z"
  }), React__default.createElement("path", {
    fill: "#A39A8B",
    d: "M964.8 244.5c1.3-3.6 5.3-6.5 9.6-7.2l91.9-14.3c3.9-.6 7.2.7 8.5 3.4 1.3 2.7.3 6.2-2.7 8.8l-68.6 62.8c-3.2 3-8 4.2-11.6 3s-5.2-4.5-3.9-8.1l.9-2.4c2.2-7.8 1.7-15.4-1.6-22.2-3.4-7-9.4-12.3-17.4-15.4-.4-.1-.9-.3-1.3-.4-1.8-.6-3.1-1.7-3.8-3.1-.6-1.4-.7-3.1 0-4.9z"
  }), React__default.createElement("path", {
    fill: "url(#".concat(id, ")"),
    d: "M18 373.7c35.3-103.2 282.8-193.1 282.8-193.1.7-.2 1.5-.4 2.3-.4 4 0 7.3 3.3 7.3 7.3 0 2.9-1.7 5.4-4.1 6.6-40.3 19.7-221 111.1-240 180.8-2.8 8-3.4 16.1.4 23.2 15.3 29 95 40.9 213.4 31.9 110.9-8.4 246.7-23.9 413.7-75.2 77.5-23.8 151.5-50.5 220.1-79.5l2.3-.9 9-3.5c2.9-1.2 6.1-1.8 9.5-1.8 14.1 0 25.6 11.3 26 25.3.2 1.4.3 2.8.2 4.2-.5 9.1-6.7 16.9-16.5 20.8l-7.5 3.2c-69.4 28.9-141.5 54.7-220.4 79-148.6 45.7-286.6 70.5-447.3 80.3-21.4 1.3-41.7 2-60.8 2-13.9 0-27.1-.3-39.5-1-5.1-.3-10.1-.6-15-1-43.5-4.2-165-23.1-135.9-108.2z"
  }));
};

AstroLogo.propTypes = {
  style: PropTypes__default.string,
  dark: PropTypes__default.bool
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var s = {"badge":"styles-module_badge__3m7_p","error":"styles-module_error__3AvIL","warning":"styles-module_warning__n3TNG","info":"styles-module_info__3eZOX","success":"styles-module_success__1KURQ"};

var Badge = function Badge(_ref) {
  var className = _ref.className,
      status = _ref.status,
      text = _ref.text,
      otherProps = _objectWithoutProperties(_ref, ["className", "status", "text"]);

  return React__default.createElement("span", _extends({
    className: cn(className, s[status], s.badge)
  }, otherProps), text);
};

Badge.propTypes = {
  className: PropTypes__default.string,
  status: PropTypes__default.oneOf(['error', 'warning', 'info', 'success']),
  text: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.element, PropTypes__default.array]).isRequired
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

var s$1 = {"container":"styles-module_container__iwgTq","error":"styles-module_error__2mqBO","warning":"styles-module_warning__23bru","info":"styles-module_info__3JQyH","success":"styles-module_success__2y6GZ"};

var Banner = function Banner(_ref) {
  var type = _ref.type,
      children = _ref.children,
      className = _ref.className;
  return React__default.createElement("div", {
    "data-name": "banner",
    "data-alert": type,
    className: cn(className, s$1[type], s$1.container)
  }, React__default.createElement("div", null, children));
};

Banner.propTypes = {
  type: PropTypes__default.oneOf(['error', 'warning', 'info', 'success']),
  children: PropTypes__default.oneOfType([PropTypes__default.element, PropTypes__default.array, PropTypes__default.node]).isRequired,
  className: PropTypes__default.string
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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

var isProduction = process.env.NODE_ENV === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

var isProduction$1 = process.env.NODE_ENV === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction$1) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends$1({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
    process.env.NODE_ENV !== "production" ? warning(prompt == null, 'A history supports only one prompt at a time') : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          process.env.NODE_ENV !== "production" ? warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? process.env.NODE_ENV !== "production" ? invariant(false, 'Browser history needs a DOM') : invariant(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    process.env.NODE_ENV !== "production" ? warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends$1(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
    process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        process.env.NODE_ENV !== "production" ? warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
    process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        process.env.NODE_ENV !== "production" ? warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? process.env.NODE_ENV !== "production" ? invariant(false, 'Hash history needs a DOM') : invariant(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
    process.env.NODE_ENV !== "production" ? warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends$1(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
    process.env.NODE_ENV !== "production" ? warning(state === undefined, 'Hash history cannot push state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
        process.env.NODE_ENV !== "production" ? warning(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
    process.env.NODE_ENV !== "production" ? warning(state === undefined, 'Hash history cannot replace state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    process.env.NODE_ENV !== "production" ? warning(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends$1(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
    process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
    process.env.NODE_ENV !== "production" ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}

var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    _inheritsLoose(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (process.env.NODE_ENV !== 'production') {
            warning((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(React.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = PropTypes__default.object.isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    _inheritsLoose(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(React.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = PropTypes__default.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = React__default.createContext || createReactContext;

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs__default.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs__default.Memo] = MEMO_STATICS;

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = index();
  context.displayName = name;
  return context;
};

var historyContext =
/*#__PURE__*/
createNamedContext("Router-History");

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext$1 = function createNamedContext(name) {
  var context = index();
  context.displayName = name;
  return context;
};

var context =
/*#__PURE__*/
createNamedContext$1("Router");

/**
 * The public API for putting history on context.
 */

var Router =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return React__default.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, React__default.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(React__default.Component);

if (process.env.NODE_ENV !== "production") {
  Router.propTypes = {
    children: PropTypes__default.node,
    history: PropTypes__default.object.isRequired,
    staticContext: PropTypes__default.object
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
    process.env.NODE_ENV !== "production" ? warning(prevProps.history === this.props.history, "You cannot change <Router history>") : void 0;
  };
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return React__default.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(React__default.Component);

if (process.env.NODE_ENV !== "production") {
  MemoryRouter.propTypes = {
    initialEntries: PropTypes__default.array,
    initialIndex: PropTypes__default.number,
    getUserConfirmation: PropTypes__default.func,
    keyLength: PropTypes__default.number,
    children: PropTypes__default.node
  };

  MemoryRouter.prototype.componentDidMount = function () {
    process.env.NODE_ENV !== "production" ? warning(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : void 0;
  };
}

var Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(React__default.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return React__default.createElement(context.Consumer, null, function (context) {
    !context ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Prompt> outside a <Router>") : invariant(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return React__default.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (process.env.NODE_ENV !== "production") {
  var messageType = PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]);
  Prompt.propTypes = {
    when: PropTypes__default.bool,
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = pathToRegexp_1.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return React__default.createElement(context.Consumer, null, function (context) {
    !context ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Redirect> outside a <Router>") : invariant(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends$1({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return React__default.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, _extends$1({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (process.env.NODE_ENV !== "production") {
  Redirect.propTypes = {
    push: PropTypes__default.bool,
    from: PropTypes__default.string,
    to: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.object]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = pathToRegexp_1(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return React__default.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
  process.env.NODE_ENV !== "production" ? warning(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return React__default.createElement(context.Consumer, null, function (context$1) {
      !context$1 ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Route> outside a <Router>") : invariant(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = _extends$1({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return React__default.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ? process.env.NODE_ENV !== "production" ? evalChildrenDev(children, props, _this.props.path) : children(props) : children : component ? React__default.createElement(component, props) : render ? render(props) : null : typeof children === "function" ? process.env.NODE_ENV !== "production" ? evalChildrenDev(children, props, _this.props.path) : children(props) : null);
    });
  };

  return Route;
}(React__default.Component);

if (process.env.NODE_ENV !== "production") {
  Route.propTypes = {
    children: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.node]),
    component: function component(props, propName) {
      if (props[propName] && !reactIs.isValidElementType(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: PropTypes__default.bool,
    location: PropTypes__default.object,
    path: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.arrayOf(PropTypes__default.string)]),
    render: PropTypes__default.func,
    sensitive: PropTypes__default.bool,
    strict: PropTypes__default.bool
  };

  Route.prototype.componentDidMount = function () {
    process.env.NODE_ENV !== "production" ? warning(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : void 0;
    process.env.NODE_ENV !== "production" ? warning(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : void 0;
    process.env.NODE_ENV !== "production" ? warning(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : void 0;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
    process.env.NODE_ENV !== "production" ? warning(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : void 0;
    process.env.NODE_ENV !== "production" ? warning(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : void 0;
  };
}

function addLeadingSlash$1(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return _extends$1({}, location, {
    pathname: addLeadingSlash$1(basename) + location.pathname
  });
}

function stripBasename$1(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash$1(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return _extends$1({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
}

function staticHandler(methodName) {
  return function () {
     process.env.NODE_ENV !== "production" ? invariant(false, "You cannot %s with <StaticRouter>") : invariant(false) ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, createLocation(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = _objectWithoutPropertiesLoose$1(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash$1(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename$1(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler(),
      goBack: staticHandler(),
      goForward: staticHandler(),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return React__default.createElement(Router, _extends$1({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(React__default.Component);

if (process.env.NODE_ENV !== "production") {
  StaticRouter.propTypes = {
    basename: PropTypes__default.string,
    context: PropTypes__default.object,
    location: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.object])
  };

  StaticRouter.prototype.componentDidMount = function () {
    process.env.NODE_ENV !== "production" ? warning(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : void 0;
  };
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return React__default.createElement(context.Consumer, null, function (context) {
      !context ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Switch> outside a <Router>") : invariant(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      React__default.Children.forEach(_this.props.children, function (child) {
        if (match == null && React__default.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, _extends$1({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? React__default.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(React__default.Component);

if (process.env.NODE_ENV !== "production") {
  Switch.propTypes = {
    children: PropTypes__default.node,
    location: PropTypes__default.object
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
    process.env.NODE_ENV !== "production" ? warning(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : void 0;
    process.env.NODE_ENV !== "production" ? warning(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : void 0;
  };
}

var useContext = React__default.useContext;

if (process.env.NODE_ENV !== "production") {
  if (typeof window !== "undefined") {
    var global$1 = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global$1[key] && global$1[key] !== "esm") {
      var initialBuildName = buildNames[global$1[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global$1[key] = "esm";
  }
}

/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return React__default.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(React__default.Component);

if (process.env.NODE_ENV !== "production") {
  BrowserRouter.propTypes = {
    basename: PropTypes__default.string,
    children: PropTypes__default.node,
    forceRefresh: PropTypes__default.bool,
    getUserConfirmation: PropTypes__default.func,
    keyLength: PropTypes__default.number
  };

  BrowserRouter.prototype.componentDidMount = function () {
    process.env.NODE_ENV !== "production" ? warning(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : void 0;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return React__default.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(React__default.Component);

if (process.env.NODE_ENV !== "production") {
  HashRouter.propTypes = {
    basename: PropTypes__default.string,
    children: PropTypes__default.node,
    getUserConfirmation: PropTypes__default.func,
    hashType: PropTypes__default.oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
    process.env.NODE_ENV !== "production" ? warning(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : void 0;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = React__default.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = _objectWithoutPropertiesLoose$1(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = _extends$1({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return React__default.createElement("a", props);
});

if (process.env.NODE_ENV !== "production") {
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = _objectWithoutPropertiesLoose$1(_ref2, ["component", "replace", "to", "innerRef"]);

  return React__default.createElement(context.Consumer, null, function (context) {
    !context ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <Link> outside a <Router>") : invariant(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = _extends$1({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return React__default.createElement(component, props);
  });
});

if (process.env.NODE_ENV !== "production") {
  var toType = PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.object, PropTypes__default.func]);
  var refType = PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.func, PropTypes__default.shape({
    current: PropTypes__default.any
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: PropTypes__default.func,
    replace: PropTypes__default.bool,
    target: PropTypes__default.string,
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = React__default.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = _objectWithoutPropertiesLoose$1(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return React__default.createElement(context.Consumer, null, function (context) {
    !context ? process.env.NODE_ENV !== "production" ? invariant(false, "You should not use <NavLink> outside a <Router>") : invariant(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? _extends$1({}, styleProp, {}, activeStyle) : styleProp;

    var props = _extends$1({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return React__default.createElement(Link, props);
  });
});

if (process.env.NODE_ENV !== "production") {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = PropTypes__default.oneOf(["page", "step", "location", "date", "time", "true"]);
  NavLink.propTypes = _extends$1({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: PropTypes__default.string,
    activeStyle: PropTypes__default.object,
    className: PropTypes__default.string,
    exact: PropTypes__default.bool,
    isActive: PropTypes__default.func,
    location: PropTypes__default.object,
    sensitive: PropTypes__default.bool,
    strict: PropTypes__default.bool,
    style: PropTypes__default.object
  });
}

var s$2 = {"dots":"styles-module_dots__Mqxrs","dot":"styles-module_dot__3N-S8","loadingDotBlink":"styles-module_loadingDotBlink__1OqEJ"};

var LoadingDots = function LoadingDots(_ref) {
  var className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("span", _extends({
    className: cn(className, s$2.dots),
    "data-testid": "LoadingDots"
  }, otherProps), React__default.createElement("span", {
    className: s$2.dot
  }), React__default.createElement("span", {
    className: s$2.dot
  }), React__default.createElement("span", {
    className: s$2.dot
  }));
};

LoadingDots.propTypes = {
  className: PropTypes__default.string
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

var s$3 = {"button":"styles-module_button__3Sq9I","displayAsBlockElement":"styles-module_displayAsBlockElement__2jj7n","link":"styles-module_link__1xBYG","primary":"styles-module_primary__1c_aS","secondary":"styles-module_secondary__3Q9XL","primaryDestructive":"styles-module_primaryDestructive__3zJg0","secondaryDestructive":"styles-module_secondaryDestructive__2HGRZ","primaryAlt":"styles-module_primaryAlt__3ACon","google":"styles-module_google__JzLlY","okta":"styles-module_okta__3H2FK","github":"styles-module_github__1_PIg","small":"styles-module_small__1wI1X","large":"styles-module_large__3Wgdt","inFlightDots":"styles-module_inFlightDots__1SqFr","inFlightText":"styles-module_inFlightText__1wkjX","icon":"styles-module_icon__3mtfe","left":"styles-module_left__2__o8","right":"styles-module_right__2Df37"};

var ButtonIcon = function ButtonIcon(_ref) {
  var icon = _ref.icon,
      position = _ref.position;
  var Icon = icon;
  return React__default.createElement(Icon, {
    className: cn(s$3[position], s$3.icon)
  });
};
ButtonIcon.propTypes = {
  icon: PropTypes__default.func.isRequired,
  position: PropTypes__default.oneOf(['left', 'right']).isRequired
};
var Button = React.forwardRef(function (_ref2, ref) {
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
      otherProps = _objectWithoutProperties(_ref2, ["type", "to", "label", "buttonSize", "buttonStyle", "iconLeft", "iconRight", "isDisabled", "inFlight", "displayBlock", "className"]);

  var btnClasses = cn(className, displayBlock && s$3.displayAsBlockElement, s$3[buttonStyle], s$3[buttonSize], s$3.button);

  var renderButtonContents = function renderButtonContents() {
    return React__default.createElement(React__default.Fragment, null, iconLeft && React__default.createElement(ButtonIcon, {
      icon: iconLeft,
      position: "left"
    }), label, iconRight && React__default.createElement(ButtonIcon, {
      icon: iconRight,
      position: "right"
    }));
  };

  if (type === 'internal') {
    return React__default.createElement(Link, _extends({
      ref: ref,
      to: to,
      className: btnClasses
    }, otherProps), renderButtonContents());
  }

  if (type === 'external') {
    return React__default.createElement("a", _extends({
      ref: ref,
      href: to,
      className: btnClasses,
      target: "_blank",
      rel: "noreferrer noopener"
    }, otherProps), renderButtonContents());
  }

  return React__default.createElement("button", _extends({
    // eslint-disable-line
    ref: ref,
    type: type,
    className: btnClasses,
    disabled: isDisabled || inFlight,
    "data-inflight": inFlight ? 'true' : null
  }, otherProps), !inFlight && renderButtonContents(), inFlight && React__default.createElement(React__default.Fragment, null, React__default.createElement(LoadingDots, {
    className: s$3.inFlightDots
  }), React__default.createElement("span", {
    className: s$3.inFlightText
  }, renderButtonContents())));
});
Button.displayName = 'Button';
Button.propTypes = {
  type: PropTypes__default.oneOf(['internal', 'external', 'button', 'submit', 'reset']),
  to: PropTypes__default.string,
  label: PropTypes__default.string.isRequired,
  buttonSize: PropTypes__default.oneOf(['small', 'large']),
  buttonStyle: PropTypes__default.oneOf(['link', 'primary', 'secondary', 'primaryDestructive', 'secondaryDestructive', 'primaryAlt', 'google', 'okta', 'github']),
  iconLeft: PropTypes__default.func,
  iconRight: PropTypes__default.func,
  isDisabled: PropTypes__default.bool,
  inFlight: PropTypes__default.bool,
  className: PropTypes__default.string,
  displayBlock: PropTypes__default.bool
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

var s$4 = {"heading":"styles-module_heading__2XhjI","h1":"styles-module_h1__1ajMu","h2":"styles-module_h2__1GX8-","h3":"styles-module_h3__2iSoT","h4":"styles-module_h4__1yVS8","h5":"styles-module_h5__1WOjM","h6":"styles-module_h6__242JB"};

var Heading = function Heading(_ref) {
  var as = _ref.as,
      styleAs = _ref.styleAs,
      children = _ref.children,
      className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ["as", "styleAs", "children", "className"]);

  var HTag = as;
  return React__default.createElement(HTag, _extends({
    className: cn(className, styleAs ? s$4[styleAs] : s$4[as], s$4.heading)
  }, otherProps), children);
};

Heading.propTypes = {
  as: PropTypes__default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  styleAs: PropTypes__default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes__default.oneOfType([PropTypes__default.element, PropTypes__default.array, PropTypes__default.node]).isRequired,
  className: PropTypes__default.string
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

var s$5 = {"card":"styles-module_card__1vc51","cardHeader":"styles-module_cardHeader__3XrMj","cardBody":"styles-module_cardBody__1NGAV","noPadding":"styles-module_noPadding__2AeY4","cardFooter":"styles-module_cardFooter___p8J_"};

var Card = function Card(_ref) {
  var header = _ref.header,
      children = _ref.children,
      footer = _ref.footer,
      noPadding = _ref.noPadding,
      className = _ref.className;
  return React__default.createElement("div", {
    className: cn(className, s$5.card),
    "data-testid": "Card"
  }, header && React__default.createElement("div", {
    className: s$5.cardHeader
  }, typeof header === 'string' && React__default.createElement(Heading, {
    as: "h4"
  }, header), typeof header !== 'string' && header), React__default.createElement("div", {
    className: cn(s$5.cardBody, noPadding && s$5.noPadding)
  }, children), footer && React__default.createElement("div", {
    className: s$5.cardFooter
  }, footer));
};

Card.propTypes = {
  header: PropTypes__default.oneOfType([PropTypes__default.element, PropTypes__default.array, PropTypes__default.node, PropTypes__default.string]),
  children: PropTypes__default.oneOfType([PropTypes__default.element, PropTypes__default.array, PropTypes__default.node]).isRequired,
  footer: PropTypes__default.oneOfType([PropTypes__default.element, PropTypes__default.array, PropTypes__default.node]),
  noPadding: PropTypes__default.bool,
  className: PropTypes__default.string
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
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "svg3392",
    viewBox: "0 0 137 137",
    className: className
  }, React__default.createElement("path", {
    id: "path4707-0",
    fill: "#ff9a09",
    d: "M95.913 22.228c-.129 0-.252.489-.34 1.465l-1.138 11.96a3.81 3.81 0 01-.378 1.313 3.953 3.953 0 01-.9-.532l-4.684-3.869c-1.526-1.242-1.74-.993-.533.534l3.904 4.862c.205.26.361.55.493.852-.54.32-1.14.533-1.77.567l-16.753 1.03c-1.952.106-1.952.355 0 .497l16.54 1.313c.614.045 1.2.257 1.73.57-.121.2-.258.39-.416.566l-4.721 5.146c-1.314 1.455-1.136 1.633.426.462l5.749-4.402a3.92 3.92 0 01.476-.3c.336.533.568 1.128.626 1.756l1.348 14.056c.178 1.952.496 1.952.674 0L97.63 45.84c.05-.557.24-1.089.514-1.575.193.11.379.228.55.368l4.687 3.833c1.49 1.243 1.74 1.03.497-.496l-3.835-4.686a3.643 3.643 0 01-.402-.596c.562-.357 1.194-.597 1.858-.646l9.974-.78c1.952-.142 1.952-.427 0-.64l-9.974-1.028c-.709-.08-1.396-.369-1.993-.798.15-.351.331-.687.573-.978l3.906-4.684c1.242-1.49 1.028-1.704-.498-.497l-4.792 3.833a3.9 3.9 0 01-.74.449 3.986 3.986 0 01-.36-1.23L96.28 23.693c-.106-.976-.24-1.465-.368-1.465z"
  }), React__default.createElement("style", {
    id: "style4689"
  }), React__default.createElement("g", {
    id: "g4984",
    transform: "translate(-1.836 -13)"
  }, React__default.createElement("path", {
    id: "rect3542-0",
    fill: "#00B35D",
    stroke: "#f48e06",
    strokeLinecap: "square",
    strokeWidth: ".217",
    d: "M28.834 62.424h102.052c-22.734 16.35-24.697 33.037 0 50.153H28.834c-14.182 0-25.6-11.184-25.6-25.077 0-13.892 11.418-25.076 25.6-25.076z"
  }), React__default.createElement("path", {
    id: "rect4161-7",
    fill: "#39b865",
    strokeLinecap: "round",
    strokeWidth: "22",
    d: "M28.834 62.424c-10.07 0-18.74 5.64-22.925 13.883H116.76c2.977-4.655 7.729-9.283 14.125-13.883H28.834zM3.235 87.501c0 4.028.965 7.826 2.675 11.193h110.62c-2.358-3.751-3.481-7.482-3.433-11.193H3.235z"
  }), React__default.createElement("path", {
    id: "path4174-4",
    fill: "none",
    stroke: "#0CBEDB",
    strokeLinecap: "round",
    strokeWidth: "2.798",
    d: "M131.25 62.316c-.77 0-1.528.04-2.278.108H28.834c-14.182 0-25.599 11.184-25.599 25.077 0 13.892 11.417 25.076 25.6 25.076h100.151a25.34 25.34 0 002.264.107 6.229 6.229 0 100-12.456c-7.653 0-12.473-5.318-12.473-12.727 0-7.41 4.82-12.73 12.473-12.73a6.229 6.229 0 100-12.455z"
  }), React__default.createElement("path", {
    id: "rect3544-7",
    fill: "#07D65B",
    stroke: "#0CBEDB",
    strokeLinecap: "round",
    strokeWidth: "2.798",
    d: "M131.25 62.316c-14.106 0-24.929 11.59-24.929 25.185 0 13.594 10.823 25.183 24.93 25.183a6.229 6.229 0 100-12.456c-7.654 0-12.474-5.318-12.474-12.727 0-7.41 4.82-12.73 12.473-12.73a6.229 6.229 0 100-12.455z",
    overflow: "visible"
  })), React__default.createElement("path", {
    id: "path4711-2",
    fill: "#09a6d1",
    d: "M66.908 37.07c0-.04 0-.04 0 0-1.709-.04-5.941-.39-7.999-2.486-2.097-2.097-2.485-6.368-2.563-8.115-.077 1.747-.466 6.018-2.562 8.115-2.097 2.097-6.29 2.407-8 2.446 1.71.04 5.942.389 8 2.447 2.096 2.096 2.485 6.367 2.562 8.115.078-1.748.466-6.019 2.563-8.115 2.097-2.02 6.29-2.369 7.999-2.408.039 0 0 0 0 0"
  }), React__default.createElement("circle", {
    id: "circle4705-4",
    cx: "28.734",
    cy: "27.947",
    r: "2.663",
    fill: "#00B35D"
  }), React__default.createElement("circle", {
    id: "circle4713-2",
    cx: "66.367",
    cy: "20.717",
    r: "2.446",
    fill: "#f4362c"
  }), React__default.createElement("path", {
    id: "path4372-06",
    fill: "#777572",
    d: "M17.812 14.414s0-.069 0 0c-1.165-.069-4.111-.274-5.482-1.713-1.439-1.44-1.713-4.385-1.781-5.55-.069 1.165-.343 4.11-1.782 5.55-1.439 1.439-4.317 1.644-5.481 1.713 1.164 0 4.042.274 5.481 1.713 1.44 1.439 1.713 4.385 1.782 5.55.068-1.165.342-4.111 1.781-5.55 1.44-1.44 4.317-1.713 5.482-1.713.068 0 0 0 0 0"
  }));
};

CeleryLogo.propTypes = {
  className: PropTypes__default.string
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

var s$6 = {"label":"styles-module_label__1Tvct","disabled":"styles-module_disabled__1V23_","input":"styles-module_input__216MF","checkbox":"styles-module_checkbox__2zcaN","checked":"styles-module_checked__2XmlY","unchecked":"styles-module_unchecked__E5Vqj"};

var Checkbox = function Checkbox(_ref) {
  var name = _ref.name,
      label = _ref.label,
      isChecked = _ref.isChecked,
      onChange = _ref.onChange,
      isDisabled = _ref.isDisabled,
      otherProps = _objectWithoutProperties(_ref, ["name", "label", "isChecked", "onChange", "isDisabled"]);

  return React__default.createElement("label", _extends({
    className: cn(isDisabled && s$6.disabled, s$6.label),
    htmlFor: name
  }, otherProps), React__default.createElement("input", {
    type: "checkbox",
    id: name,
    name: name,
    className: cn(isChecked ? s$6.checked : s$6.unchecked, s$6.input),
    checked: isChecked,
    onChange: onChange,
    disabled: isDisabled
  }), React__default.createElement("span", {
    "aria-hidden": "true",
    className: s$6.checkbox
  }), label);
};

Checkbox.propTypes = {
  name: PropTypes__default.string.isRequired,
  label: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.element, PropTypes__default.array]).isRequired,
  isChecked: PropTypes__default.bool,
  onChange: PropTypes__default.func,
  isDisabled: PropTypes__default.bool
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

var CreditCardLogo = function CreditCardLogo(_ref) {
  var brand = _ref.brand,
      className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ["brand", "className"]);

  var brandId = brand.replace(' ', '_').toLowerCase();
  var supportedBrands = ['american_express', 'visa', 'mastercard', 'discover'];
  var useBrandId = supportedBrands.includes(brandId) ? brandId : 'generic';
  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 38 25",
    className: className
  }, otherProps), React__default.createElement("use", {
    xlinkHref: "#".concat(useBrandId)
  }), React__default.createElement("symbol", {
    id: "american_express",
    viewBox: "0 0 38 25"
  }, React__default.createElement("g", null, React__default.createElement("path", {
    d: "M37.96875,21.875 C37.96875,23.59375 36.5625,25 34.84375,25 L3.59375,25 C1.875,25 0.46875,23.59375 0.46875,21.875 L0.46875,3.125 C0.46875,1.40625 1.875,0 3.59375,0 L34.84375,0 C36.5625,0 37.96875,1.40625 37.96875,3.125 L37.96875,21.875 Z",
    fill: "#5ec1ec"
  }), React__default.createElement("path", {
    d: "M37.050625,0.918125 C37.616875,1.484375 37.96875,2.265625 37.96875,3.125 L37.96875,12.5 L37.96875,21.875 C37.96875,22.734375 37.6175,23.515625 37.050625,24.081875 C36.48375,24.648125 35.703125,25 34.84375,25 L19.21875,25 L3.59375,25 C2.734375,25 1.953125,24.64875 1.386875,24.081875 L37.050625,0.918125 Z",
    fill: "#5BBBE6"
  }), React__default.createElement("g", {
    transform: "translate(6.875000, 9.375000)",
    fill: "#fff"
  }, React__default.createElement("path", {
    d: "M4.565625,6.20125 L4.28,5.11375 L2.395625,5.11375 L2.101875,6.20125 L0.38,6.20125 L2.2725,0.3775 L4.363125,0.3775 L6.27875,6.20125 L4.565625,6.20125 Z M3.955,3.828125 L3.705,2.87625 C3.64625,2.665 3.57625,2.391875 3.4925,2.055625 C3.409375,1.719375 3.354375,1.47875 3.3275,1.33375 C3.304375,1.46875 3.256875,1.690625 3.186875,2 C3.116875,2.309375 2.96125,2.919375 2.720625,3.82875 L3.955,3.828125 Z"
  }), React__default.createElement("path", {
    d: "M9.43375,6.20125 L8.2475,2.023125 L8.211875,2.023125 C8.2675,2.734375 8.295,3.286875 8.295,3.681875 L8.295,6.200625 L6.906875,6.200625 L6.906875,0.4 L8.993125,0.4 L10.20375,4.51875 L10.235625,4.51875 L11.42125,0.4 L13.5125,0.4 L13.5125,6.200625 L12.071875,6.200625 L12.071875,3.6575 C12.071875,3.525625 12.074375,3.379375 12.078125,3.2175 C12.081875,3.055625 12.1,2.660625 12.131875,2.03125 L12.09625,2.03125 L10.925625,6.20125 L9.43375,6.20125 Z"
  }), React__default.createElement("polygon", {
    points: "18.043125 6.20125 14.599375 6.20125 14.599375 0.400625 18.043125 0.400625 18.043125 1.65875 16.165625 1.65875 16.165625 2.57125 17.90375 2.57125 17.90375 3.82875 16.165625 3.82875 16.165625 4.92375 18.043125 4.92375"
  }), React__default.createElement("polygon", {
    points: "24.28375 6.20125 22.47125 6.20125 21.339375 4.38875 20.22125 6.20125 18.4475 6.20125 20.37125 3.23375 18.561875 0.400625 20.3 0.400625 21.3475 2.19375 22.354375 0.400625 24.14375 0.400625 22.306875 3.35625"
  })), React__default.createElement("g", {
    transform: "translate(6.875000, 9.375000)",
    fill: "#fff"
  }, React__default.createElement("path", {
    d: "M4.565625,6.20125 L4.28,5.11375 L2.395625,5.11375 L2.101875,6.20125 L0.38,6.20125 L2.2725,0.3775 L4.363125,0.3775 L6.27875,6.20125 L4.565625,6.20125 Z M3.955,3.828125 L3.705,2.87625 C3.64625,2.665 3.57625,2.391875 3.4925,2.055625 C3.409375,1.719375 3.354375,1.47875 3.3275,1.33375 C3.304375,1.46875 3.256875,1.690625 3.186875,2 C3.116875,2.309375 2.96125,2.919375 2.720625,3.82875 L3.955,3.828125 Z"
  }), React__default.createElement("path", {
    d: "M9.43375,6.20125 L8.2475,2.023125 L8.211875,2.023125 C8.2675,2.734375 8.295,3.286875 8.295,3.681875 L8.295,6.200625 L6.906875,6.200625 L6.906875,0.4 L8.993125,0.4 L10.20375,4.51875 L10.235625,4.51875 L11.42125,0.4 L13.5125,0.4 L13.5125,6.200625 L12.071875,6.200625 L12.071875,3.6575 C12.071875,3.525625 12.074375,3.379375 12.078125,3.2175 C12.081875,3.055625 12.1,2.660625 12.131875,2.03125 L12.09625,2.03125 L10.925625,6.20125 L9.43375,6.20125 Z"
  }), React__default.createElement("polygon", {
    points: "18.043125 6.20125 14.599375 6.20125 14.599375 0.400625 18.043125 0.400625 18.043125 1.65875 16.165625 1.65875 16.165625 2.57125 17.90375 2.57125 17.90375 3.82875 16.165625 3.82875 16.165625 4.92375 18.043125 4.92375"
  }), React__default.createElement("polygon", {
    points: "24.28375 6.20125 22.47125 6.20125 21.339375 4.38875 20.22125 6.20125 18.4475 6.20125 20.37125 3.23375 18.561875 0.400625 20.3 0.400625 21.3475 2.19375 22.354375 0.400625 24.14375 0.400625 22.306875 3.35625"
  }))), React__default.createElement("path", {
    d: "M34.84375,0.625 C36.2225,0.625 37.34375,1.74625 37.34375,3.125 L37.34375,21.875 C37.34375,23.25375 36.2225,24.375 34.84375,24.375 L3.59375,24.375 C2.215,24.375 1.09375,23.25375 1.09375,21.875 L1.09375,3.125 C1.09375,1.74625 2.215,0.625 3.59375,0.625 L34.84375,0.625 Z M34.84375,0 L3.59375,0 C1.875,0 0.46875,1.40625 0.46875,3.125 L0.46875,21.875 C0.46875,23.59375 1.875,25 3.59375,25 L34.84375,25 C36.5625,25 37.96875,23.59375 37.96875,21.875 L37.96875,3.125 C37.96875,1.40625 36.5625,0 34.84375,0 Z",
    fill: "#9bcee0"
  })), React__default.createElement("symbol", {
    id: "visa",
    viewBox: "0 0 38 25"
  }, React__default.createElement("path", {
    d: "M37.96875,21.875 C37.96875,23.59375 36.5625,25 34.84375,25 L3.59375,25 C1.875,25 0.46875,23.59375 0.46875,21.875 L0.46875,3.125 C0.46875,1.40625 1.875,0 3.59375,0 L34.84375,0 C36.5625,0 37.96875,1.40625 37.96875,3.125 L37.96875,21.875 Z",
    fill: "#f3f4f4"
  }), React__default.createElement("path", {
    d: "M1.09375,6.25 L1.09375,3.125 C1.09375,1.40625 2.5,0 4.21875,0 L34.21875,0 C35.9375,0 37.34375,1.40625 37.34375,3.125 L37.34375,6.25",
    fill: "#5565af"
  }), React__default.createElement("path", {
    d: "M37.34375,18.75 L37.34375,21.875 C37.34375,23.59375 35.9375,24.375 34.21875,24.375 L4.21875,24.375 C2.5,24.375 1.09375,23.59375 1.09375,21.875 L1.09375,18.75",
    fill: "#e6a124"
  }), React__default.createElement("g", {
    transform: "translate(9.375000, 8.750000)",
    fill: "#5565af"
  }, React__default.createElement("path", {
    d: "M1.960625,5.861875 C2.214375,5.143125 2.3925,4.6825 2.4975,4.48 L4.606875,0.183125 L6.15,0.183125 L2.4975,7.321875 L0.866875,7.321875 L0.246875,0.183125 L1.6875,0.183125 L1.93625,4.48 C1.94875,4.62625 1.955625,4.84375 1.955625,5.129375 C1.948125,5.465 1.93875,5.709375 1.92625,5.861875 L1.960625,5.861875 Z"
  }), React__default.createElement("polygon", {
    points: "5.505625 7.321875 7.029375 0.183125 8.51875 0.183125 6.995 7.321875"
  }), React__default.createElement("path", {
    d: "M13.08375,5.2125 C13.08375,5.89375 12.841875,6.430625 12.36125,6.82625 C11.879375,7.221875 11.22625,7.419375 10.403125,7.419375 C9.683125,7.419375 9.104375,7.273125 8.665,6.98 L8.665,5.641875 C9.2925,5.993125 9.87625,6.169375 10.413125,6.169375 C10.776875,6.169375 11.0625,6.10125 11.2675,5.961875 C11.4725,5.82375 11.575,5.635 11.575,5.393125 C11.575,5.25375 11.553125,5.130625 11.509375,5.024375 C11.465625,4.919375 11.401875,4.820625 11.32125,4.72875 C11.239375,4.6375 11.038125,4.4725 10.715625,4.230625 C10.26625,3.9075 9.95,3.59 9.768125,3.273125 C9.585,2.9575 9.494375,2.6175 9.494375,2.2525 C9.494375,1.8325 9.594375,1.458125 9.796875,1.126875 C9.998125,0.796875 10.285,0.54 10.65875,0.355625 C11.03125,0.171875 11.459375,0.08 11.945625,0.08 C12.65125,0.08 13.298125,0.24125 13.884375,0.563125 L13.351875,1.700625 C12.844375,1.46 12.375625,1.339375 11.945625,1.339375 C11.674375,1.339375 11.45375,1.4125 11.281875,1.559375 C11.10875,1.705625 11.023125,1.9 11.023125,2.140625 C11.023125,2.339375 11.076875,2.513125 11.184375,2.660625 C11.291875,2.80875 11.5325,3.005 11.906875,3.24875 C12.3,3.509375 12.595625,3.796875 12.790625,4.110625 C12.985625,4.42625 13.08375,4.7925 13.08375,5.2125 Z"
  }), React__default.createElement("path", {
    d: "M17.87375,5.6225 L15.564375,5.6225 L14.724375,7.321875 L13.161875,7.321875 L16.901875,0.15375 L18.723125,0.15375 L19.440625,7.321875 L17.990625,7.321875 L17.87375,5.6225 Z M17.8,4.353125 L17.673125,2.644375 C17.64,2.218125 17.624375,1.80625 17.624375,1.40875 L17.624375,1.233125 C17.480625,1.62375 17.303125,2.0375 17.091875,2.473125 L16.17375,4.353125 L17.8,4.353125 Z"
  })), React__default.createElement("path", {
    d: "M37.050625,0.918125 C37.616875,1.484375 37.96875,2.265625 37.96875,3.125 L37.96875,12.5 L37.96875,21.875 C37.96875,22.734375 37.6175,23.515625 37.050625,24.081875 C36.48375,24.648125 35.703125,25 34.84375,25 L19.21875,25 L3.59375,25 C2.734375,25 1.953125,24.64875 1.386875,24.081875 L37.050625,0.918125 Z",
    fill: "#fff",
    opacity: "0.04"
  }), React__default.createElement("path", {
    d: "M34.84375,0.625 C36.2225,0.625 37.34375,1.74625 37.34375,3.125 L37.34375,21.875 C37.34375,23.25375 36.2225,24.375 34.84375,24.375 L3.59375,24.375 C2.215,24.375 1.09375,23.25375 1.09375,21.875 L1.09375,3.125 C1.09375,1.74625 2.215,0.625 3.59375,0.625 L34.84375,0.625 Z M34.84375,0 L3.59375,0 C1.875,0 0.46875,1.40625 0.46875,3.125 L0.46875,21.875 C0.46875,23.59375 1.875,25 3.59375,25 L34.84375,25 C36.5625,25 37.96875,23.59375 37.96875,21.875 L37.96875,3.125 C37.96875,1.40625 36.5625,0 34.84375,0 Z",
    fill: "#f8f8f9"
  })), React__default.createElement("symbol", {
    id: "mastercard",
    viewBox: "0 0 38 25"
  }, React__default.createElement("path", {
    d: "M37.96875,21.875 C37.96875,23.59375 36.5625,25 34.84375,25 L3.59375,25 C1.875,25 0.46875,23.59375 0.46875,21.875 L0.46875,3.125 C0.46875,1.40625 1.875,0 3.59375,0 L34.84375,0 C36.5625,0 37.96875,1.40625 37.96875,3.125 L37.96875,21.875 Z",
    fill: "#5565af"
  }), React__default.createElement("path", {
    d: "M37.050625,0.918125 C37.616875,1.484375 37.96875,2.265625 37.96875,3.125 L37.96875,12.5 L37.96875,21.875 C37.96875,22.734375 37.6175,23.515625 37.050625,24.081875 C36.48375,24.648125 35.703125,25 34.84375,25 L19.21875,25 L3.59375,25 C2.734375,25 1.953125,24.64875 1.386875,24.081875 L37.050625,0.918125 Z",
    fill: "#fff",
    opacity: "0.04"
  }), React__default.createElement("g", {
    transform: "translate(8.125000, 6.250000)",
    fill: "#EA564b"
  }, React__default.createElement("path", {
    d: "M11.09375,2.125 C9.948125,0.825 8.275,0 6.40625,0 C2.955,0 0.15625,2.798125 0.15625,6.25 C0.15625,9.700625 2.955,12.5 6.40625,12.5 C8.275,12.5 9.948125,11.675 11.09375,10.374375 C10.12375,9.273125 9.53125,7.83375 9.53125,6.25 C9.53125,4.66625 10.12375,3.22625 11.09375,2.125 Z"
  }), React__default.createElement("path", {
    d: "M11.09375,2.125 C10.12375,3.22625 9.53125,4.666875 9.53125,6.25 C9.53125,7.833125 10.12375,9.273125 11.09375,10.374375 C12.06375,9.273125 12.65625,7.83375 12.65625,6.25 C12.65625,4.66625 12.06375,3.22625 11.09375,2.125 Z"
  })), React__default.createElement("path", {
    d: "M23.90625,6.25 C22.0375,6.25 20.364375,7.075 19.21875,8.375 C18.948125,8.6825 18.71125,9.01875 18.50375,9.375 L19.93375,9.375 C20.16125,9.765625 20.338125,10.186875 20.478125,10.625 L17.950625,10.625 C17.82375,11.026875 17.731875,11.443125 17.68875,11.875 L20.738125,11.875 C20.759375,12.08125 20.780625,12.2875 20.780625,12.5 C20.780625,12.71125 20.768125,12.919375 20.7475,13.125 L17.688125,13.125 C17.73125,13.556875 17.823125,13.973125 17.95,14.375 L20.485,14.375 C20.345625,14.815 20.15875,15.2325 19.93125,15.625 L18.503125,15.625 C18.71,15.98 18.9475,16.316875 19.218125,16.624375 C20.36375,17.925 22.036875,18.75 23.905625,18.75 C27.356875,18.75 30.155625,15.950625 30.155625,12.5 C30.15625,9.048125 27.3575,6.25 23.90625,6.25 Z",
    fill: "#e9d419"
  }), React__default.createElement("path", {
    d: "M34.84375,0.625 C36.2225,0.625 37.34375,1.74625 37.34375,3.125 L37.34375,21.875 C37.34375,23.25375 36.2225,24.375 34.84375,24.375 L3.59375,24.375 C2.215,24.375 1.09375,23.25375 1.09375,21.875 L1.09375,3.125 C1.09375,1.74625 2.215,0.625 3.59375,0.625 L34.84375,0.625 Z M34.84375,0 L3.59375,0 C1.875,0 0.46875,1.40625 0.46875,3.125 L0.46875,21.875 C0.46875,23.59375 1.875,25 3.59375,25 L34.84375,25 C36.5625,25 37.96875,23.59375 37.96875,21.875 L37.96875,3.125 C37.96875,1.40625 36.5625,0 34.84375,0 Z",
    fill: "#7684b7"
  })), React__default.createElement("symbol", {
    id: "discover",
    viewBox: "0 0 38 25"
  }, React__default.createElement("path", {
    d: "M37.96875,21.875 C37.96875,23.59375 36.5625,25 34.84375,25 L3.59375,25 C1.875,25 0.46875,23.59375 0.46875,21.875 L0.46875,3.125 C0.46875,1.40625 1.875,0 3.59375,0 L34.84375,0 C36.5625,0 37.96875,1.40625 37.96875,3.125 L37.96875,21.875 Z",
    fill: "#fff9f0"
  }), React__default.createElement("g", {
    transform: "translate(6.250000, 10.000000)"
  }, React__default.createElement("path", {
    d: "M3.678125,2.464375 C3.678125,3.090625 3.5,3.57 3.144375,3.903125 C2.7875,4.235625 2.2725,4.4025 1.599375,4.4025 L0.521875,4.4025 L0.521875,0.599375 L1.715625,0.599375 C2.336875,0.599375 2.81875,0.76375 3.16125,1.09125 C3.50625,1.41875 3.678125,1.876875 3.678125,2.464375 Z M2.840625,2.485625 C2.840625,1.66875 2.479375,1.260625 1.759375,1.260625 L1.329375,1.260625 L1.329375,3.7362507 L1.675625,3.73625 C2.4525,3.736875 2.840625,3.319375 2.840625,2.485625 Z",
    fill: "#414042"
  }), React__default.createElement("polygon", {
    fill: "#414042",
    points: "4.36 4.4025 4.36 0.599375 5.16625 0.599375 5.16625 4.4025"
  }), React__default.createElement("path", {
    d: "M8.369375,3.34625 C8.369375,3.690625 8.24625,3.96 7.998125,4.158125 C7.750625,4.355625 7.4075,4.455625 6.966875,4.455625 C6.561875,4.455625 6.201875,4.37875 5.889375,4.226875 L5.889375,3.4775 C6.14625,3.593125 6.36375,3.6725 6.54125,3.720625 C6.71875,3.766875 6.881875,3.79 7.029375,3.79 C7.205625,3.79 7.341875,3.755625 7.43625,3.68875 C7.52875,3.621875 7.578125,3.52 7.578125,3.3875 C7.578125,3.313125 7.5575,3.246875 7.515,3.18875 C7.474375,3.13 7.4125,3.07375 7.33125,3.020625 C7.250625,2.9675 7.08625,2.880625 6.83875,2.763125 C6.606875,2.65375 6.433125,2.548125 6.315625,2.448125 C6.19875,2.348125 6.106875,2.23125 6.0375,2.096875 C5.968125,1.9625 5.93375,1.80625 5.93375,1.628125 C5.93375,1.291875 6.0475,1.0275 6.275625,0.835 C6.504375,0.641875 6.81875,0.54625 7.221875,0.54625 C7.419375,0.54625 7.608125,0.569375 7.7875,0.61625 C7.966875,0.6625 8.155,0.729375 8.350625,0.81375 L8.090625,1.440625 C7.8875,1.3575 7.71875,1.298125 7.58625,1.26625 C7.453125,1.23375 7.3225,1.216875 7.195,1.216875 C7.041875,1.216875 6.924375,1.251875 6.84375,1.32375 C6.761875,1.395 6.72125,1.4875 6.72125,1.601875 C6.72125,1.673125 6.7375,1.734375 6.770625,1.788125 C6.80375,1.84125 6.85625,1.891875 6.928125,1.94125 C7,1.990625 7.17125,2.079375 7.439375,2.208125 C7.794375,2.378125 8.038125,2.54875 8.170625,2.719375 C8.303125,2.88875 8.369375,3.098125 8.369375,3.34625 Z",
    fill: "#414042"
  }), React__default.createElement("path", {
    d: "M10.67375,1.215625 C10.37,1.215625 10.135625,1.330625 9.96875,1.5575 C9.80125,1.785625 9.719375,2.104375 9.719375,2.51125 C9.719375,3.35875 10.0375,3.783125 10.67375,3.783125 C10.94125,3.783125 11.263125,3.718125 11.644375,3.583125 L11.644375,4.259375 C11.331875,4.39 10.983125,4.454375 10.598125,4.454375 C10.045,4.454375 9.621875,4.285625 9.32875,3.95 C9.035625,3.615 8.889375,3.133125 8.889375,2.505 C8.889375,2.109375 8.961875,1.763125 9.10625,1.46625 C9.249375,1.1675 9.456875,0.940625 9.72625,0.781875 C9.996875,0.623125 10.3125,0.54375 10.675,0.54375 C11.044375,0.54375 11.41625,0.633125 11.788125,0.811875 L11.528125,1.4675 C11.385,1.4 11.243125,1.34125 11.098125,1.290625 C10.95375,1.24 10.8125,1.215625 10.67375,1.215625 Z",
    fill: "#414042"
  }), React__default.createElement("path", {
    d: "M18.099375,0.599375 L18.91375,0.599375 L17.621875,4.4025 L16.7425,4.4025 L15.4525,0.599375 L16.2675,0.599375 L16.983125,2.8625 C17.0225,2.996875 17.065,3.15125 17.106875,3.33 C17.148125,3.508125 17.175,3.63 17.18625,3.7 C17.205,3.540625 17.27,3.263125 17.38125,2.8625 L18.099375,0.599375 Z",
    fill: "#414042"
  }), React__default.createElement("polygon", {
    fill: "#414042",
    points: "21.5825 4.4025 19.391875 4.4025 19.391875 0.599375 21.5825 0.599375 21.5825 1.260625 20.198125 1.260625 20.198125 2.095625 21.486875 2.095625 21.486875 2.75625 20.198125 2.75625 20.198125 3.73625 21.5825 3.73625"
  }), React__default.createElement("path", {
    d: "M23.1825,2.943125 L23.1825,4.4025 L22.37625,4.4025 L22.37625,0.599375 L23.484375,0.599375 C24.00125,0.599375 24.383125,0.693125 24.631875,0.881875 C24.879375,1.07 25.00375,1.355 25.00375,1.73875 C25.00375,1.961875 24.941875,2.161875 24.819375,2.335625 C24.69625,2.51 24.521875,2.646875 24.296875,2.745625 C24.86875,3.599375 25.24125,4.1525 25.415,4.401875 L24.52,4.401875 L23.611875,2.9425 L23.1825,2.943125 Z M23.1825,2.2875 L23.443125,2.2875 C23.6975,2.2875 23.88625,2.245 24.0075,2.160625 C24.128125,2.075 24.189375,1.94125 24.189375,1.759375 C24.189375,1.57875 24.126875,1.45125 24.003125,1.374375 C23.879375,1.2975 23.6875,1.26 23.4275,1.26 L23.18125,1.26 L23.1825,2.2875 Z",
    fill: "#414042"
  }), React__default.createElement("circle", {
    fill: "#e6a124",
    cx: "13.635",
    cy: "2.50125",
    r: "1.901875"
  })), React__default.createElement("path", {
    d: "M37.96875,17.1875 L37.96875,21.875 C37.96875,22.305 37.880625,22.715 37.721875,23.088125 C37.5625,23.46125 37.33375,23.79875 37.050625,24.081875 C36.7675,24.365 36.430625,24.59375 36.056875,24.753125 C35.6825,24.911875 35.273125,25 34.84375,25 L20.808125,25 L6.7725,25 L37.96875,17.1875 Z",
    fill: "#e6a124"
  }), React__default.createElement("path", {
    d: "M37.050625,0.918125 C37.616875,1.484375 37.96875,2.265625 37.96875,3.125 L37.96875,12.5 L37.96875,21.875 C37.96875,22.734375 37.6175,23.515625 37.050625,24.081875 C36.48375,24.648125 35.703125,25 34.84375,25 L19.21875,25 L3.59375,25 C2.734375,25 1.953125,24.64875 1.386875,24.081875 L37.050625,0.918125 Z",
    fill: "#fff",
    opacity: "0.08"
  }), React__default.createElement("path", {
    d: "M34.84375,0.625 C36.2225,0.625 37.34375,1.74625 37.34375,3.125 L37.34375,21.875 C37.34375,23.25375 36.2225,24.375 34.84375,24.375 L3.59375,24.375 C2.215,24.375 1.09375,23.25375 1.09375,21.875 L1.09375,3.125 C1.09375,1.74625 2.215,0.625 3.59375,0.625 L34.84375,0.625 Z M34.84375,0 L3.59375,0 C1.875,0 0.46875,1.40625 0.46875,3.125 L0.46875,21.875 C0.46875,23.59375 1.875,25 3.59375,25 L34.84375,25 C36.5625,25 37.96875,23.59375 37.96875,21.875 L37.96875,3.125 C37.96875,1.40625 36.5625,0 34.84375,0 Z",
    fill: "#f7f5f2"
  })), React__default.createElement("symbol", {
    id: "generic",
    viewBox: "0 0 60 40"
  }, React__default.createElement("path", {
    d: "M60,35 C60,37.75 57.75,40 55,40 L5,40 C2.25,40 0,37.75 0,35 L0,5 C0,2.25 2.25,0 5,0 L55,0 C57.75,0 60,2.25 60,5 L60,35 Z",
    fill: "#302c43"
  }), React__default.createElement("path", {
    d: "M58.281,1.469 C59.187,2.375 59.75,3.625 59.75,5 L59.75,20 L59.75,35 C59.75,36.375 59.188,37.625 58.281,38.531 C57.374,39.437 56.125,40 54.75,40 L29.75,40 L4.75,40 C3.375,40 2.125,39.438 1.219,38.531 L58.281,1.469 Z",
    fill: "#edecec",
    opacity: "0.08"
  }), React__default.createElement("path", {
    d: "M55.0458326,1 C57.2536709,1 59.0491659,2.794 59.0491659,5 L59.0491659,35 C59.0491659,37.206 57.2536709,39 55.0458326,39 L5.0041666,39 C2.7963283,39 1.00083332,37.206 1.00083332,35 L1.00083332,5 C1.00083332,2.794 2.7963283,1 5.0041666,1 L55.0458326,1 Z M55.0458326,0 L5.0041666,0 C2.25187497,0 0,2.25 0,5 L0,35 C0,37.75 2.25187497,40 5.0041666,40 L55.0458326,40 C57.7981243,40 60.0499992,37.75 60.0499992,35 L60.0499992,5 C60.0499992,2.25 57.7981243,0 55.0458326,0 Z",
    fill: "#f8f8f9"
  }), React__default.createElement("rect", {
    fillOpacity: "0.25",
    fill: "#000",
    x: "40",
    y: "9",
    width: "11",
    height: "8",
    rx: "1"
  }), React__default.createElement("g", {
    fillOpacity: "0.735535553",
    fill: "#edecec"
  }, React__default.createElement("rect", {
    x: "9",
    y: "26",
    width: "9",
    height: "5",
    rx: "1"
  }), React__default.createElement("rect", {
    x: "20",
    y: "26",
    width: "9",
    height: "5",
    rx: "1"
  }), React__default.createElement("rect", {
    x: "31",
    y: "26",
    width: "9",
    height: "5",
    rx: "1"
  }), React__default.createElement("rect", {
    x: "42",
    y: "26",
    width: "9",
    height: "5",
    rx: "1"
  }))));
};

CreditCardLogo.propTypes = {
  brand: PropTypes__default.string,
  className: PropTypes__default.string
};
CreditCardLogo.defaultProps = {
  brand: 'generic',
  className: null
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
    }
  }
};

var s$7 = {"container":"styles-module_container__1c_LC","open":"styles-module_open__1VgoM"};

var Dropdown = function Dropdown(_ref) {
  var isOpen = _ref.isOpen,
      children = _ref.children;
  return React__default.createElement("div", {
    className: cn(s$7.container, isOpen && s$7.open)
  }, children);
};

Dropdown.propTypes = {
  isOpen: PropTypes__default.bool.isRequired,
  children: PropTypes__default.oneOfType([PropTypes__default.element, PropTypes__default.array, PropTypes__default.node]).isRequired
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

var s$8 = {"container":"styles-module_container__LXfZj","actions":"styles-module_actions__xB9VF","footer":"styles-module_footer__2kzbh"};

var Empty = function Empty(_ref) {
  var heading = _ref.heading,
      description = _ref.description,
      actions = _ref.actions,
      footer = _ref.footer,
      className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ["heading", "description", "actions", "footer", "className"]);

  return React__default.createElement("div", _extends({
    className: cn(className, s$8.container)
  }, otherProps), React__default.createElement(Heading, {
    as: "h3"
  }, heading), description, actions && React__default.createElement("div", {
    className: s$8.actions
  }, actions), footer && React__default.createElement("div", {
    className: s$8.footer
  }, footer));
};

Empty.propTypes = {
  heading: PropTypes__default.string.isRequired,
  description: PropTypes__default.element.isRequired,
  actions: PropTypes__default.element,
  footer: PropTypes__default.element,
  className: PropTypes__default.string
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

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && React.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return React.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var computedSize = props.size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;

    var attr = props.attr,
        title = props.title,
        svgProps = __rest(props, ["attr", "title"]);

    return React.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign({
        color: props.color || conf.color
      }, conf.style, props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
var FiAlertTriangle = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}},{"tag":"line","attr":{"x1":"12","y1":"9","x2":"12","y2":"13"}},{"tag":"line","attr":{"x1":"12","y1":"17","x2":"12","y2":"17"}}]})(props);
};
FiAlertTriangle.displayName = "FiAlertTriangle";
var FiCheck = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"20 6 9 17 4 12"}}]})(props);
};
FiCheck.displayName = "FiCheck";
var FiChevronDown = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"6 9 12 15 18 9"}}]})(props);
};
FiChevronDown.displayName = "FiChevronDown";
var FiCircle = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}}]})(props);
};
FiCircle.displayName = "FiCircle";
var FiInfo = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"8"}}]})(props);
};
FiInfo.displayName = "FiInfo";
var FiSearch = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"11","cy":"11","r":"8"}},{"tag":"line","attr":{"x1":"21","y1":"21","x2":"16.65","y2":"16.65"}}]})(props);
};
FiSearch.displayName = "FiSearch";
var FiX = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"18","y1":"6","x2":"6","y2":"18"}},{"tag":"line","attr":{"x1":"6","y1":"6","x2":"18","y2":"18"}}]})(props);
};
FiX.displayName = "FiX";
var FiZap = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}}]})(props);
};
FiZap.displayName = "FiZap";

var s$9 = {"container":"styles-module_container__3IJQ4","error":"styles-module_error__1lNQn","warning":"styles-module_warning__1pU-P","info":"styles-module_info__DlhKD","success":"styles-module_success__Qq1Pd","icon":"styles-module_icon__3_TZs","content":"styles-module_content__30nyW","closeBtn":"styles-module_closeBtn__3GTTc"};

var icons = {
  error: React__default.createElement(FiAlertTriangle, {
    className: s$9.icon
  }),
  warning: React__default.createElement(FiZap, {
    className: s$9.icon
  }),
  info: React__default.createElement(FiInfo, {
    className: s$9.icon
  }),
  success: React__default.createElement(FiCheck, {
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

  return React__default.createElement("div", {
    "data-name": "flash",
    "data-alert": type,
    className: cn(className, s$9.container, s$9[type])
  }, icons[type], React__default.createElement("span", {
    className: s$9.content
  }, children), isDismissable && React__default.createElement("button", {
    type: "button",
    onClick: handleClose,
    className: s$9.closeBtn,
    title: "Dismiss message",
    "aria-label": "close"
  }, React__default.createElement(FiX, null)));
};

Flash.propTypes = {
  type: PropTypes__default.oneOf(['error', 'warning', 'info', 'success']),
  children: PropTypes__default.oneOfType([PropTypes__default.element, PropTypes__default.array, PropTypes__default.node]).isRequired,
  className: PropTypes__default.string,
  isDismissable: PropTypes__default.bool,
  dismissKey: PropTypes__default.string
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

const is = {
  arr: Array.isArray,
  obj: a => Object.prototype.toString.call(a) === '[object Object]',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === void 0,
  nul: a => a === null,
  set: a => a instanceof Set,
  map: a => a instanceof Map,

  equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    let i;

    for (i in a) if (!(i in b)) return false;

    for (i in b) if (a[i] !== b[i]) return false;

    return is.und(i) ? a === b : true;
  }

};
function merge(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return object => (is.arr(object) ? object : Object.keys(object)).reduce((acc, element) => {
    const key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
    acc[key] = target(key);
    return acc;
  }, target);
}
function useForceUpdate() {
  const _useState = React.useState(false),
        f = _useState[1];

  const forceUpdate = React.useCallback(() => f(v => !v), []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj(...args) : obj;
}

function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        ref = props.ref,
        lazy = props.lazy,
        forward = _objectWithoutPropertiesLoose$1(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  const forward = getForwardProps(props);
  if (is.und(forward)) return _extends$1({
    to: forward
  }, props);
  const rest = Object.keys(props).reduce((a, k) => !is.und(forward[k]) ? a : _extends$1({}, a, {
    [k]: props[k]
  }), {});
  return _extends$1({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

class Animated {
  constructor() {
    this.payload = void 0;
    this.children = [];
  }

  getAnimatedValue() {
    return this.getValue();
  }

  getPayload() {
    return this.payload || this;
  }

  attach() {}

  detach() {}

  getChildren() {
    return this.children;
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArray extends Animated {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObject extends Animated {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.attach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

  getAnimatedValue() {
    return this.getValue(true);
  }

}

let applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn,
    transform
  };
}
let colorNames;
function injectColorNames(names) {
  colorNames = names;
}
let requestFrame = cb => typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
let interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
let now = () => Date.now();
let animatedApi = node => node.current;
let createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}

/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

class AnimatedProps extends AnimatedObject {
  constructor(props, callback) {
    super();
    this.update = void 0;
    this.payload = !props.style ? props : _extends$1({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.update = callback;
    this.attach();
  }

}

const isFunctionComponent = val => is.fun(val) && !(val.prototype instanceof React__default.Component);

const createAnimatedComponent = Component => {
  const AnimatedComponent = React.forwardRef((props, ref) => {
    const forceUpdate = useForceUpdate();
    const mounted = React.useRef(true);
    const propsAnimated = React.useRef(null);
    const node = React.useRef(null);
    const attachProps = React.useCallback(props => {
      const oldPropsAnimated = propsAnimated.current;

      const callback = () => {
        let didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    React.useEffect(() => () => {
      mounted.current = false;
      propsAnimated.current && propsAnimated.current.detach();
    }, []);
    React.useImperativeHandle(ref, () => animatedApi(node));
    attachProps(props);

    const _getValue = propsAnimated.current.getValue(),
          scrollTop = _getValue.scrollTop,
          scrollLeft = _getValue.scrollLeft,
          animatedProps = _objectWithoutPropertiesLoose$1(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    const refFn = isFunctionComponent(Component) ? undefined : childRef => node.current = handleRef(childRef, ref);
    return React__default.createElement(Component, _extends$1({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};

let active = false;
const controllers = new Set();

const update = () => {
  if (!active) return false;
  let time = now();

  for (let controller of controllers) {
    let isActive = false;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    requestFrame(update);
  } else {
    active = false;
  }

  return active;
};

const start = controller => {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active) {
    active = true;
    requestFrame(update);
  }
};

const stop = controller => {
  if (controllers.has(controller)) controllers.delete(controller);
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

class AnimatedInterpolation extends AnimatedArray {
  constructor(parents, range, output, extrapolate) {
    super();
    this.calc = void 0;
    this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    this.calc = createInterpolator(range, output, extrapolate);
  }

  getValue() {
    return this.calc(...this.payload.map(value => value.getValue()));
  }

  updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */
function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(child => addAnimatedStyles(child, styles));
  }
}

class AnimatedValue extends Animated {
  constructor(_value) {
    var _this;

    super();
    _this = this;
    this.animatedStyles = new Set();
    this.value = void 0;
    this.startPosition = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.startTime = void 0;
    this.lastTime = void 0;
    this.done = false;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.value = _value;
    this.startPosition = _value;
    this.lastPosition = _value;
  }

  flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  clearStyles() {
    this.animatedStyles.clear();
  }

  getValue() {
    return this.value;
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

class AnimatedValueArray extends AnimatedArray {
  constructor(values) {
    super();
    this.payload = values.map(n => new AnimatedValue(n));
  }

  setValue(value, flush) {
    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach((v, i) => this.payload[i].setValue(v, flush));
      }
    } else {
      this.payload.forEach(p => p.setValue(value, flush));
    }
  }

  getValue() {
    return this.payload.map(v => v.getValue());
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

let G = 0;

class Controller {
  constructor() {
    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = () => this.interpolations;

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  update(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    const _ref = interpolateTo(args),
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          to = _ref.to,
          props = _objectWithoutPropertiesLoose$1(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push(_extends$1({}, props, {
        delay,
        to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      let ops = {};
      Object.entries(to).forEach((_ref2) => {
        let k = _ref2[0],
            v = _ref2[1];

        // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props
        const entry = _extends$1({
          to: {
            [k]: v
          },
          delay: callProp(delay, k)
        }, props);

        const previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = _extends$1({}, ops[entry.delay], entry, {
          to: _extends$1({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort((a, b) => a.delay - b.delay); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */


  start(onEnd) {
    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach((_ref3) => {
          let _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) this.merged = _extends$1({}, from, this.merged);
          if (is.obj(to)) this.merged = _extends$1({}, this.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      const local = this.local = ++this.guid;
      const queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach((_ref4, index) => {
        let delay = _ref4.delay,
            props = _objectWithoutPropertiesLoose$1(_ref4, ["delay"]);

        const cb = finished => {
          if (index === queue.length - 1 && local === this.guid && finished) {
            this.idle = true;
            if (this.props.onRest) this.props.onRest(this.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        let async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(() => {
            if (local === this.guid) {
              if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
            }
          }, delay);
        } else if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();
        start(this);
      }

    return this;
  }

  stop(finished) {
    this.listeners.forEach(onEnd => onEnd(finished));
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */


  pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  }

  runAsync(_ref5, onEnd) {
    var _this = this;

    let delay = _ref5.delay,
        props = _objectWithoutPropertiesLoose$1(_ref5, ["delay"]);

    const local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    let queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      for (let i = 0; i < props.to.length; i++) {
        const index = i;

        const fresh = _extends$1({}, props, interpolateTo(props.to[index]));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(() => {
          //this.stop()
          if (local === this.guid) return new Promise(r => this.diff(fresh).start(r));
        });
      }
    } else if (is.fun(props.to)) {
      let index = 0;
      let last;
      queue = queue.then(() => props.to( // next(props)
      p => {
        const fresh = _extends$1({}, props, interpolateTo(p));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        index++; //this.stop()

        if (local === this.guid) return last = new Promise(r => this.diff(fresh).start(r));
        return;
      }, // cancel()
      function (finished) {
        if (finished === void 0) {
          finished = true;
        }

        return _this.stop(finished);
      }).then(() => last));
    }

    queue.then(onEnd);
  }

  diff(props) {
    this.props = _extends$1({}, this.props, props);
    let _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = _extends$1({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref7) => {
      let name = _ref7[0],
          value = _ref7[1];
      // Issue cached entries, except on reset
      let entry = acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = is.num(value);
      const isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = is.arr(value);
      const isInterpolation = !isNumber && !isArray && !isString;
      let fromValue = !is.und(from[name]) ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      let parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray(target ? toValue.getPayload() : toValue),
          animatedValues;
      let newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      let currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      const isFirst = is.und(parent);
      const isActive = !isFirst && entry.animatedValues.some(v => !v.done);
      const currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      const hasNewGoal = !is.equ(newValue, entry.previous);
      const hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          let prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray(target ? toValue.getPayload() : toValue);
        animatedValues = toArray(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        this.hasChanged = true; // Reset animated values

        animatedValues.forEach(value => {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }

        return _extends$1({}, acc, {
          [name]: _extends$1({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else {
        if (!currentValueDiffersFromGoal) {
          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          this.hasChanged = true;
          return _extends$1({}, acc, {
            [name]: _extends$1({}, acc[name], {
              previous: newValue
            })
          });
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  }

  destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  }

}

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

let guid = 0;
const ENTER = 'enter';
const LEAVE = 'leave';
const UPDATE = 'update';

const mapKeys = (items, keys) => (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);

const get = props => {
  let items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? item => item : _props$keys,
      rest = _objectWithoutPropertiesLoose$1(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return _extends$1({
    items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  const props = _extends$1({
    items: input,
    keys: keyTransform || (i => i)
  }, config);

  const _get = get(props),
        _get$lazy = _get.lazy,
        lazy = _get$lazy === void 0 ? false : _get$lazy,
        _get$unique = _get.unique,
        _get$reset = _get.reset,
        reset = _get$reset === void 0 ? false : _get$reset,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        onDestroyed = _get.onDestroyed,
        keys = _get.keys,
        items = _get.items,
        onFrame = _get.onFrame,
        _onRest = _get.onRest,
        onStart = _get.onStart,
        ref = _get.ref,
        extra = _objectWithoutPropertiesLoose$1(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  const forceUpdate = useForceUpdate();
  const mounted = React.useRef(false);
  const state = React.useRef({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate
  });
  React.useImperativeHandle(props.ref, () => ({
    start: () => Promise.all(Array.from(state.current.instances).map((_ref) => {
      let c = _ref[1];
      return new Promise(r => c.start(r));
    })),
    stop: finished => Array.from(state.current.instances).forEach((_ref2) => {
      let c = _ref2[1];
      return c.stop(finished);
    }),

    get controllers() {
      return Array.from(state.current.instances).map((_ref3) => {
        let c = _ref3[1];
        return c;
      });
    }

  })); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(transition => {
      const slot = transition.slot,
            from = transition.from,
            to = transition.to,
            config = transition.config,
            trail = transition.trail,
            key = transition.key,
            item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      const ctrl = state.current.instances.get(key);

      const newProps = _extends$1({}, extra, {
        to,
        from,
        config,
        ref,
        onRest: values => {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            const curInstances = Array.from(state.current.instances);
            const active = curInstances.some((_ref4) => {
              let c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && (() => onStart(item, slot)),
        onFrame: onFrame && (values => onFrame(item, slot, values)),
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  React.useEffect(() => {
    state.current.mounted = mounted.current = true;
    return () => {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map((_ref5) => {
        let c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map((_ref6) => {
    let item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item,
      key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  const deleted = state.current.deleted;

  for (let _ref7 of deleted) {
    let key = _ref7.key;

    const filter = t => t.key !== key;

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  }

  state.current.forceUpdate();
}

function diffItems(_ref8, props) {
  let first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = _objectWithoutPropertiesLoose$1(_ref8, ["first", "prevProps"]);

  let _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  let _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  let current = _extends$1({}, state.current);

  let deleted = [...state.deleted]; // Compare next keys with current keys

  let currentKeys = Object.keys(current);
  let currentSet = new Set(currentKeys);
  let nextSet = new Set(keys);
  let added = keys.filter(item => !currentSet.has(item));
  let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
  let updated = keys.filter(item => currentSet.has(item));
  let delay = -trail;

  while (order.length) {
    const changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach((key, index) => {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(key => {
            const keyIndex = _keys.indexOf(key);

            const item = _items[keyIndex];
            const slot = LEAVE;
            deleted.unshift(_extends$1({}, current[key], {
              slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(key => {
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = UPDATE;
            current[key] = _extends$1({}, current[key], {
              item,
              slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  let out = keys.map(key => current[key]); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach((_ref9) => {
    let left = _ref9.left,
        right = _ref9.right,
        item = _objectWithoutPropertiesLoose$1(_ref9, ["left", "right"]);

    let pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [...out.slice(0, pos), item, ...out.slice(pos)];
  });
  return _extends$1({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current,
    deleted,
    prevProps: props
  });
}

class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }

    super();

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

const createStringInterpolator = config => {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba));
  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((_value, i) => createInterpolator(_extends$1({}, config, {
    output: outputRanges[i]
  })));
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
};

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = _objectWithoutPropertiesLoose$1(props, ["style", "children", "scrollTop", "scrollLeft"]);

    const filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, style => style);

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
// Extend animated with all the available THREE elements
const apply = merge(createAnimatedComponent, false);
const extendedAnimated = apply(domElements);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cleanProps = function cleanProps(props) {
  var initialState = props.initialState,
      getInitialState = props.getInitialState,
      refs = props.refs,
      getRefs = props.getRefs,
      didMount = props.didMount,
      didUpdate = props.didUpdate,
      willUnmount = props.willUnmount,
      getSnapshotBeforeUpdate = props.getSnapshotBeforeUpdate,
      shouldUpdate = props.shouldUpdate,
      render = props.render,
      rest = _objectWithoutProperties$1(props, ["initialState", "getInitialState", "refs", "getRefs", "didMount", "didUpdate", "willUnmount", "getSnapshotBeforeUpdate", "shouldUpdate", "render"]);

  return rest;
};

var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    var _temp, _this, _ret;

    _classCallCheck(this, Component);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Component.prototype.getArgs = function getArgs() {
    var state = this.state,
        props = this.props,
        setState = this._setState,
        forceUpdate = this._forceUpdate,
        refs = this._refs;

    return {
      state: state,
      props: cleanProps(props),
      refs: refs,
      setState: setState,
      forceUpdate: forceUpdate
    };
  };

  Component.prototype.componentDidMount = function componentDidMount() {
    if (this.props.didMount) this.props.didMount(this.getArgs());
  };

  Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props.shouldUpdate) return this.props.shouldUpdate({
      props: this.props,
      state: this.state,
      nextProps: cleanProps(nextProps),
      nextState: nextState
    });else return true;
  };

  Component.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.props.willUnmount) this.props.willUnmount({
      state: this.state,
      props: cleanProps(this.props),
      refs: this._refs
    });
  };

  Component.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.didUpdate) this.props.didUpdate(Object.assign(this.getArgs(), {
      prevProps: cleanProps(prevProps),
      prevState: prevState
    }), snapshot);
  };

  Component.prototype.getSnapshotBeforeUpdate = function getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props.getSnapshotBeforeUpdate) {
      return this.props.getSnapshotBeforeUpdate(Object.assign(this.getArgs(), {
        prevProps: cleanProps(prevProps),
        prevState: prevState
      }));
    } else {
      return null;
    }
  };

  Component.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        render = _props.render;

    return render ? render(this.getArgs()) : typeof children === "function" ? children(this.getArgs()) : children || null;
  };

  return Component;
}(React__default.Component);

Component.defaultProps = {
  getInitialState: function getInitialState() {},
  getRefs: function getRefs() {
    return {};
  }
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = this.props.initialState || this.props.getInitialState(this.props);
  this._refs = this.props.refs || this.props.getRefs(this.getArgs());

  this._setState = function () {
    return _this2.setState.apply(_this2, arguments);
  };

  this._forceUpdate = function () {
    return _this2.forceUpdate.apply(_this2, arguments);
  };
};

process.env.NODE_ENV !== "production" ? Component.propTypes = {
  initialState: PropTypes.object,
  getInitialState: PropTypes.func,
  refs: PropTypes.object,
  getRefs: PropTypes.func,
  didMount: PropTypes.func,
  didUpdate: PropTypes.func,
  willUnmount: PropTypes.func,
  getSnapshotBeforeUpdate: PropTypes.func,
  shouldUpdate: PropTypes.func,
  render: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
} : void 0;

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var style = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: 0,
  overflow: "hidden",
  position: "absolute"
};

var VisuallyHidden = (function (props) {
  return React__default.createElement("div", _extends$2({ style: style }, props));
});

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// singleton state is fine because you don't server render
// an alert (SRs don't read them on first load anyway)
var keys = {
  polite: -1,
  assertive: -1
};

var elements = {
  polite: {},
  assertive: {}
};

var liveRegions = {
  polite: null,
  assertive: null
};

var renderTimer = null;

var renderAlerts = function renderAlerts() {
  clearTimeout(renderTimer);

  renderTimer = setTimeout(function () {
    Object.keys(elements).forEach(function (type) {
      var container = liveRegions[type];
      if (container) {
        ReactDOM.render(React__default.createElement(
          VisuallyHidden,
          null,
          React__default.createElement(
            "div",
            {
              role: type === "assertive" ? "alert" : "status",
              "aria-live": type
            },
            Object.keys(elements[type]).map(function (key) {
              return React__default.cloneElement(elements[type][key], {
                key: key
              });
            })
          )
        ), liveRegions[type]);
      }
    });
  }, 500);
};

var createMirror = function createMirror(type) {
  var key = ++keys[type];

  var mount = function mount(element) {
    if (liveRegions[type]) {
      elements[type][key] = element;
      renderAlerts();
    } else {
      var _node = document.createElement("div");
      _node.setAttribute("data-reach-live-" + type, "true");
      liveRegions[type] = _node;
      document.body.appendChild(liveRegions[type]);
      mount(element);
    }
  };

  var update = function update(element) {
    elements[type][key] = element;
    renderAlerts();
  };

  var unmount = function unmount(element) {
    delete elements[type][key];
    renderAlerts();
  };

  return { mount: mount, update: update, unmount: unmount };
};

var Alert = function Alert(_ref) {
  var children = _ref.children,
      type = _ref.type,
      props = _objectWithoutProperties$2(_ref, ["children", "type"]);

  var element = React__default.createElement(
    "div",
    _extends$3({}, props, { "data-reach-alert": true }),
    children
  );
  return React__default.createElement(Component, {
    type: type,
    getRefs: function getRefs() {
      return { mirror: createMirror(type) };
    },
    didMount: function didMount(_ref2) {
      var refs = _ref2.refs;
      return refs.mirror.mount(element);
    },
    didUpdate: function didUpdate(_ref3) {
      var refs = _ref3.refs,
          prevProps = _ref3.prevProps;

      if (prevProps.type !== type) {
        refs.mirror.unmount();
        refs.mirror = createMirror(type);
        refs.mirror.mount(element);
      } else {
        refs.mirror.update(element, prevProps.type, type);
      }
    },
    willUnmount: function willUnmount(_ref4) {
      var refs = _ref4.refs;
      return refs.mirror.unmount(element);
    },
    children: element
  });
};

process.env.NODE_ENV !== "production" ? Alert.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
} : void 0;

Alert.defaultProps = {
  type: "polite"
};

const Alert$1 = ({ id, title, onClose }) => {
    return (React.createElement("div", { id: id, className: "Toaster__alert" },
        typeof title === "string" ? (React.createElement("div", { className: "Toaster__alert_text" }, title)) : (title),
        onClose && React.createElement(Close, { onClose: onClose })));
};
const Close = ({ onClose }) => (React.createElement("button", { className: "Toaster__alert_close", type: "button", "aria-label": "Close", onClick: onClose },
    React.createElement("span", { "aria-hidden": "true" }, "\u00D7")));

function useTimeout(callback, delay) {
    const savedCallback = React.useRef();
    // Remember the latest callback.
    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    React.useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current();
            }
        }
        if (delay !== null) {
            let id = setTimeout(tick, delay);
            return () => clearTimeout(id);
        }
    }, [delay]);
}

const getStyle = (position) => {
    let style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };
    if (position.includes("right")) {
        style.alignItems = "flex-end";
    }
    else if (position.includes("left")) {
        style.alignItems = "flex-start";
    }
    return style;
};
const Message = ({ id, message, position, onRequestRemove, requestClose = false, duration = 30000 }) => {
    const container = React.useRef(null);
    const [timeout, setTimeout] = React.useState(duration);
    const [localShow, setLocalShow] = React.useState(true);
    const isFromTop = position === "top-left" || position === "top-right" || position === "top";
    useTimeout(close, timeout);
    const animation = {
        config: { mass: 1, tension: 185, friction: 26 },
        from: {
            opacity: 1,
            height: 0,
            transform: `translateY(${isFromTop ? "-100%" : 0}) scale(1)`
        },
        enter: () => (next) => next({
            opacity: 1,
            height: container.current.getBoundingClientRect().height,
            transform: `translateY(0) scale(1)`
        }),
        leave: {
            opacity: 0,
            height: 0,
            transform: `translateY(0 scale(0.9)`
        },
        onRest
    };
    const transition = useTransition(localShow, null, animation);
    const style = React.useMemo(() => getStyle(position), [position]);
    function onMouseEnter() {
        setTimeout(null);
    }
    function onMouseLeave() {
        setTimeout(duration);
    }
    function onRest() {
        if (!localShow) {
            onRequestRemove();
        }
    }
    function close() {
        setLocalShow(false);
    }
    React.useEffect(() => {
        if (requestClose) {
            setLocalShow(false);
        }
    }, [requestClose]);
    function renderMessage() {
        if (typeof message === "string" || React.isValidElement(message)) {
            return React.createElement(Alert$1, { id: id, title: message, onClose: close });
        }
        if (typeof message === "function") {
            return message({
                id,
                onClose: close
            });
        }
        return null;
    }
    return (React.createElement(React.Fragment, null, transition.map(({ key, item, props }) => item && (React.createElement(extendedAnimated.div, { key: key, className: "Toaster__message", onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, style: Object.assign({ opacity: props.opacity, height: props.height }, style) },
        React.createElement(extendedAnimated.div, { style: {
                transform: props.transform,
                pointerEvents: "auto"
            }, ref: container, className: "Toaster__message-wrapper" },
            React.createElement(Alert, null, renderMessage())))))));
};

const defaultState = {
    top: [],
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    bottom: [],
    "bottom-right": []
};
class ToastManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultState;
        this.notify = (message, options) => {
            const toast = this.createToastState(message, options);
            const { position } = toast;
            // prepend the toast for toasts positioned at the top of
            // the screen, otherwise append it.
            const isTop = position.includes("top");
            this.setState(prev => {
                return Object.assign({}, prev, { [position]: isTop
                        ? [toast, ...prev[position]]
                        : [...prev[position], toast] });
            });
            return { id: toast.id, position: toast.position };
        };
        this.closeAll = () => {
            Object.keys(this.state).forEach(pos => {
                const p = pos;
                const position = this.state[p];
                position.forEach((toast) => {
                    this.closeToast(toast.id, p);
                });
            });
        };
        this.createToastState = (message, options) => {
            const id = ++ToastManager.idCounter;
            // a bit messy, but object.position returns a number because
            // it's a method argument.
            const position = options.hasOwnProperty("position") && typeof options.position === "string"
                ? options.position
                : "top";
            return {
                id,
                message,
                position,
                showing: true,
                duration: typeof options.duration === "undefined" ? 5000 : options.duration,
                onRequestRemove: () => this.removeToast(String(id), position),
                type: options.type
            };
        };
        this.closeToast = (id, position) => {
            this.setState(prev => {
                return Object.assign({}, prev, { [position]: prev[position].map(toast => {
                        if (toast.id !== id)
                            return toast;
                        return Object.assign({}, toast, { requestClose: true });
                    }) });
            });
        };
        // actually fully remove the toast
        this.removeToast = (id, position) => {
            this.setState(prev => {
                return Object.assign({}, prev, { [position]: prev[position].filter(toast => toast.id !== id) });
            });
        };
        this.getStyle = (position) => {
            let style = {
                maxWidth: "560px",
                position: "fixed",
                zIndex: 5500,
                pointerEvents: "none"
            };
            if (position === "top" || position === "bottom") {
                style.margin = "0 auto";
                style.textAlign = "center";
            }
            if (position.includes("top")) {
                style.top = 0;
            }
            if (position.includes("bottom")) {
                style.bottom = 0;
            }
            if (!position.includes("left")) {
                style.right = 0;
            }
            if (!position.includes("right")) {
                style.left = 0;
            }
            return style;
        };
        props.notify(this.notify, this.closeAll, this.closeToast);
    }
    render() {
        return Object.keys(this.state).map(position => {
            const pos = position;
            const toasts = this.state[pos];
            return (React.createElement("span", { key: position, className: "Toaster__manager-" + pos, style: this.getStyle(pos) }, toasts.map((toast) => {
                return React.createElement(Message, Object.assign({ position: pos, key: toast.id }, toast));
            })));
        });
    }
}
ToastManager.idCounter = 0;

const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
const PORTAL_ID = "react-toast";
class Toaster {
    constructor() {
        this.closeAll = () => {
            if (this.removeAll) {
                this.removeAll();
            }
        };
        this.bindNotify = (fn, removeAll, closeToast) => {
            this.createNotification = fn;
            this.removeAll = removeAll;
            this.closeToast = closeToast;
        };
        this.notify = (message, options = {}) => {
            if (this.createNotification) {
                return this.createNotification(message, options);
            }
        };
        this.close = (id, position) => {
            if (this.closeToast) {
                this.closeToast(id, position);
            }
        };
        if (!isBrowser) {
            return;
        }
        let portalElement;
        const existingPortalElement = document.getElementById(PORTAL_ID);
        if (existingPortalElement) {
            portalElement = existingPortalElement;
        }
        else {
            const el = document.createElement("div");
            el.id = PORTAL_ID;
            el.className = "Toaster";
            if (document.body != null) {
                document.body.appendChild(el);
            }
            portalElement = el;
        }
        ReactDOM.render(React.createElement(ToastManager, { notify: this.bindNotify }), portalElement);
    }
}

const toaster = new Toaster();

var s$a = {"toast":"styles-module_toast__16nbR","error":"styles-module_error__27BNe","warning":"styles-module_warning__2Tly4","info":"styles-module_info__2Cw6l","success":"styles-module_success__XWUOD","closeToast":"styles-module_closeToast__3tb2S"};

/* istanbul ignore file */
var icons$1 = {
  error: React__default.createElement(FiAlertTriangle, null),
  warning: React__default.createElement(FiZap, null),
  info: React__default.createElement(FiInfo, null),
  success: React__default.createElement(FiCheck, null)
};
var Toast = function Toast(_ref) {
  var type = _ref.type,
      content = _ref.content,
      isClosable = _ref.isClosable,
      onClose = _ref.onClose;
  return React__default.createElement("div", {
    "data-name": "alert",
    "data-alert": type,
    className: cn(s$a[type], s$a.toast)
  }, icons$1[type], React__default.createElement("span", null, content), isClosable && React__default.createElement("button", {
    type: "button",
    onClick: onClose,
    className: s$a.closeToast,
    title: "Dismiss message",
    "aria-label": "close"
  }, React__default.createElement(FiX, null)));
};
Toast.propTypes = {
  type: PropTypes__default.oneOf(['error', 'warning', 'info', 'success']).isRequired,
  content: PropTypes__default.string.isRequired,
  isClosable: PropTypes__default.bool,
  onClose: PropTypes__default.func
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
      return React__default.createElement(Toast, {
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

var s$b = {"form":"styles-module_form__r342h"};

var Form = function Form(_ref) {
  var handleSubmit = _ref.handleSubmit,
      isSuccess = _ref.isSuccess,
      successMsg = _ref.successMsg,
      errors = _ref.errors,
      children = _ref.children,
      className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ["handleSubmit", "isSuccess", "successMsg", "errors", "children", "className"]);

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
  return React__default.createElement("form", _extends({
    action: "",
    className: cn(className, s$b.form),
    onSubmit: handleSubmit
  }, otherProps), children);
};

Form.propTypes = {
  handleSubmit: PropTypes__default.func,
  isSuccess: PropTypes__default.bool,
  successMsg: PropTypes__default.string,
  errors: PropTypes__default.objectOf(PropTypes__default.string),
  children: PropTypes__default.oneOfType([PropTypes__default.element, PropTypes__default.array]).isRequired,
  className: PropTypes__default.string
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

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser$1 = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser$1 && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser$1 && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser$1 && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser$1 && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends$4 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$4({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$4({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update$1() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser$1 && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$4({}, attributes, data.attributes);
  data.styles = _extends$4({}, styles, data.styles);
  data.arrowStyles = _extends$4({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$4({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$4({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends$4({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$4({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$4({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$4({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$4({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update$1.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/**!
* tippy.js v5.2.1
* (c) 2017-2020 atomiks
* MIT License
*/

function _extends$5() {
  _extends$5 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$5.apply(this, arguments);
}

var version = "5.2.1";

/**
 * Triggers reflow
 */
function reflow(element) {
  void element.offsetHeight;
}
/**
 * Sets the innerHTML of an element
 */

function setInnerHTML(element, html) {
  element[innerHTML()] = html;
}
/**
 * Determines if the value is a reference element
 */

function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
/**
 * Safe .hasOwnProperty check, for prototype-less objects
 */

function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
/**
 * Returns an array of elements based on the value
 */

function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }

  if (isNodeList(value)) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  return arrayFrom(document.querySelectorAll(value));
}
/**
 * Returns a value at a given index depending on if it's an array or number
 */

function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }

  return value;
}
/**
 * Prevents errors from being thrown while accessing nested modifier objects
 * in `popperOptions`
 */

function getModifier(obj, key) {
  return obj && obj.modifiers && obj.modifiers[key];
}
/**
 * Determines if the value is of type
 */

function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}
/**
 * Determines if the value is of type Element
 */

function isElement(value) {
  return isType(value, 'Element');
}
/**
 * Determines if the value is of type NodeList
 */

function isNodeList(value) {
  return isType(value, 'NodeList');
}
/**
 * Determines if the value is of type MouseEvent
 */

function isMouseEvent(value) {
  return isType(value, 'MouseEvent');
}
/**
 * Firefox extensions don't allow setting .innerHTML directly, this will trick
 * it
 */

function innerHTML() {
  return 'innerHTML';
}
/**
 * Evaluates a function if one, or returns the value
 */

function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(void 0, args) : value;
}
/**
 * Sets a popperInstance modifier's property to a value
 */

function setModifierValue(modifiers, name, property, value) {
  modifiers.filter(function (m) {
    return m.name === name;
  })[0][property] = value;
}
/**
 * Returns a new `div` element
 */

function div() {
  return document.createElement('div');
}
/**
 * Applies a transition duration to a list of elements
 */

function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
/**
 * Sets the visibility state to elements so they can begin to transition
 */

function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
/**
 * Debounce utility. To avoid bloating bundle size, we're only passing 1
 * argument here, a more generic function would pass all arguments. Only
 * `onMouseMove` uses this which takes the event object for now.
 */

function debounce$1(fn, ms) {
  // Avoid wrapping in `setTimeout` if ms is 0 anyway
  if (ms === 0) {
    return fn;
  }

  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn(arg);
    }, ms);
  };
}
/**
 * Preserves the original function invocation when another function replaces it
 */

function preserveInvocation(originalFn, currentFn, args) {
  if (originalFn && originalFn !== currentFn) {
    originalFn.apply(void 0, args);
  }
}
/**
 * Deletes properties from an object (pure)
 */

function removeProperties(obj, keys) {
  var clone = _extends$5({}, obj);

  keys.forEach(function (key) {
    delete clone[key];
  });
  return clone;
}
/**
 * Ponyfill for Array.from - converts iterable values to an array
 */

function arrayFrom(value) {
  return [].slice.call(value);
}
/**
 * Works like Element.prototype.closest, but uses a callback instead
 */

function closestCallback(element, callback) {
  while (element) {
    if (callback(element)) {
      return element;
    }

    element = element.parentElement;
  }

  return null;
}
/**
 * Determines if an array or string includes a string
 */

function includes(a, b) {
  return a.indexOf(b) > -1;
}
/**
 * Creates an array from string of values separated by whitespace
 */

function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
/**
 * Returns the `nextValue` if `nextValue` is not `undefined`, otherwise returns
 * `currentValue`
 */

function useIfDefined(nextValue, currentValue) {
  return nextValue !== undefined ? nextValue : currentValue;
}
/**
 * Converts a value that's an array or single value to an array
 */

function normalizeToArray(value) {
  return [].concat(value);
}
/**
 * Returns the ownerDocument of the first available element, otherwise global
 * document
 */

function getOwnerDocument(elementOrElements) {
  var _normalizeToArray = normalizeToArray(elementOrElements),
      element = _normalizeToArray[0];

  return element ? element.ownerDocument || document : document;
}
/**
 * Adds item to array if array does not contain it
 */

function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
/**
 * Adds `px` if value is a number, or returns it directly
 */

function appendPxIfNumber(value) {
  return typeof value === 'number' ? value + "px" : value;
}
/**
 * Filters out duplicate elements in an array
 */

function unique(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}
/**
 * Returns number from number or CSS units string
 */

function getNumber(value) {
  return typeof value === 'number' ? value : parseFloat(value);
}
/**
 * Gets number or CSS string units in pixels (e.g. `1rem` -> 16)
 */

function getUnitsInPx(doc, value) {
  var isRem = typeof value === 'string' && includes(value, 'rem');
  var html = doc.documentElement;
  var rootFontSize = 16;

  if (html && isRem) {
    return parseFloat(getComputedStyle(html).fontSize || String(rootFontSize)) * getNumber(value);
  }

  return getNumber(value);
}
/**
 * Adds the `distancePx` value to the placement of a Popper.Padding object
 */

function getComputedPadding(basePlacement, padding, distancePx) {
  if (padding === void 0) {
    padding = 5;
  }

  var freshPaddingObject = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  var keys = Object.keys(freshPaddingObject);
  return keys.reduce(function (obj, key) {
    obj[key] = typeof padding === 'number' ? padding : padding[key];

    if (basePlacement === key) {
      obj[key] = typeof padding === 'number' ? padding + distancePx : padding[basePlacement] + distancePx;
    }

    return obj;
  }, freshPaddingObject);
}

function createMemoryLeakWarning(method) {
  var txt = method === 'destroy' ? 'n already-' : ' ';
  return "\n    " + method + "() was called on a" + txt + "destroyed instance. This is a no-op but\n    indicates a potential memory leak.\n  ";
}
function clean(value) {
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
}

function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}

function getFormattedMessage(message) {
  return [getDevMessage(message), // title
  'color: #00C584; font-size: 1.3em; font-weight: bold;', // message
  'line-height: 1.5', // footer
  'color: #a6a095;'];
}
/**
 * Helpful wrapper around `console.warn()`.
 * TODO: Should we use a cache so it only warns a single time and not spam the
 * console? (Need to consider hot reloading and invalidation though). Chrome
 * already batches warnings as well.
 */

function warnWhen(condition, message) {
  if (condition) {
    var _console;

    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}
/**
 * Helpful wrapper around `console.error()`
 */

function errorWhen(condition, message) {
  if (condition) {
    var _console2;

    (_console2 = console).error.apply(_console2, getFormattedMessage(message));
  }
}
/**
 * Validates the `targets` value passed to `tippy()`
 */

function validateTargets(targets) {
  var didPassFalsyValue = !targets;
  var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
  errorWhen(didPassFalsyValue, ['tippy() was passed', '`' + String(targets) + '`', 'as its targets (first) argument. Valid types are: String, Element, Element[],', 'or NodeList.'].join(' '));
  errorWhen(didPassPlainObject, ['tippy() was passed a plain object which is no longer supported as an argument.', 'See: https://atomiks.github.io/tippyjs/misc/#custom-position'].join(' '));
}

var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var defaultProps = _extends$5({
  allowHTML: true,
  animation: 'fade',
  appendTo: function appendTo() {
    return document.body;
  },
  aria: 'describedby',
  arrow: true,
  boundary: 'scrollParent',
  content: '',
  delay: 0,
  distance: 10,
  duration: [300, 250],
  flip: true,
  flipBehavior: 'flip',
  flipOnUpdate: false,
  hideOnClick: true,
  ignoreAttributes: false,
  inertia: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  lazy: true,
  maxWidth: 350,
  multiple: false,
  offset: 0,
  onAfterUpdate: function onAfterUpdate() {},
  onBeforeUpdate: function onBeforeUpdate() {},
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {},
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  onUntrigger: function onUntrigger() {},
  placement: 'top',
  plugins: [],
  popperOptions: {},
  role: 'tooltip',
  showOnCreate: false,
  theme: '',
  touch: true,
  trigger: 'mouseenter focus',
  triggerTarget: null,
  updateDuration: 0,
  zIndex: 9999
}, pluginProps);
var defaultKeys = Object.keys(defaultProps);
/**
 * If the setProps() method encounters one of these, the popperInstance must be
 * recreated
 */

var POPPER_INSTANCE_DEPENDENCIES = ['arrow', 'boundary', 'distance', 'flip', 'flipBehavior', 'flipOnUpdate', 'offset', 'placement', 'popperOptions'];
/**
 * Mutates the defaultProps object by setting the props specified
 */

var setDefaultProps = function setDefaultProps(partialProps) {
  if (process.env.NODE_ENV !== "production") {
    validateProps(partialProps, []);
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (key) {
    defaultProps[key] = partialProps[key];
  });
};
/**
 * Returns an extended props object including plugin props
 */

function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps = plugins.reduce(function (acc, plugin) {
    var name = plugin.name,
        defaultValue = plugin.defaultValue;

    if (name) {
      acc[name] = passedProps[name] !== undefined ? passedProps[name] : defaultValue;
    }

    return acc;
  }, {});
  return _extends$5({}, passedProps, {}, pluginProps);
}
/**
 * Returns an object of optional props from data-tippy-* attributes
 */

function getDataAttributeProps(reference, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(_extends$5({}, defaultProps, {
    plugins: plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
  return props;
}
/**
 * Evaluates the props object by merging data attributes and disabling
 * conflicting props where necessary
 */

function evaluateProps(reference, props) {
  var out = _extends$5({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));

  if (out.interactive) {
    out.aria = null;
  }

  return out;
}
/**
 * Validates props with the valid `defaultProps` object
 */

function validateProps(partialProps, plugins) {
  if (partialProps === void 0) {
    partialProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (prop) {
    var value = partialProps[prop];
    var didSpecifyPlacementInPopperOptions = prop === 'popperOptions' && value !== null && typeof value === 'object' && hasOwnProperty(value, 'placement');
    var nonPluginProps = removeProperties(defaultProps, ['animateFill', 'followCursor', 'inlinePositioning', 'sticky']); // These props have custom warnings

    var customWarningProps = ['a11y', 'arrowType', 'showOnInit', 'size', 'target', 'touchHold'];
    var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop) && !includes(customWarningProps, prop); // Check if the prop exists in `plugins`

    if (didPassUnknownProp) {
      didPassUnknownProp = plugins.filter(function (plugin) {
        return plugin.name === prop;
      }).length === 0;
    }

    warnWhen(prop === 'target', ['The `target` prop was removed in v5 and replaced with the delegate() addon', 'in order to conserve bundle size.', 'See: https://atomiks.github.io/tippyjs/addons/#event-delegation'].join(' '));
    warnWhen(prop === 'a11y', ['The `a11y` prop was removed in v5. Make sure the element you are giving a', 'tippy to is natively focusable, such as <button> or <input>, not <div>', 'or <span>.'].join(' '));
    warnWhen(prop === 'showOnInit', 'The `showOnInit` prop was renamed to `showOnCreate` in v5.');
    warnWhen(prop === 'arrowType', ['The `arrowType` prop was removed in v5 in favor of overloading the `arrow`', 'prop.', '\n\n', '"round" string was replaced with importing the string from the package.', '\n\n', "* import {roundArrow} from 'tippy.js'; (ESM version)\n", '* const {roundArrow} = tippy; (IIFE CDN version)', '\n\n', 'Before: {arrow: true, arrowType: "round"}\n', 'After: {arrow: roundArrow}`'].join(' '));
    warnWhen(prop === 'touchHold', ['The `touchHold` prop was removed in v5 in favor of overloading the `touch`', 'prop.', '\n\n', 'Before: {touchHold: true}\n', 'After: {touch: "hold"}'].join(' '));
    warnWhen(prop === 'size', ['The `size` prop was removed in v5. Instead, use a theme that specifies', 'CSS padding and font-size properties.'].join(' '));
    warnWhen(prop === 'theme' && value === 'google', 'The included theme "google" was renamed to "material" in v5.');
    warnWhen(didSpecifyPlacementInPopperOptions, ['Specifying placement in `popperOptions` is not supported. Use the base-level', '`placement` prop instead.', '\n\n', 'Before: {popperOptions: {placement: "bottom"}}\n', 'After: {placement: "bottom"}'].join(' '));
    warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's a", 'plugin, forgot to pass it in an array as props.plugins.', '\n\n', 'In v5, the following props were turned into plugins:', '\n\n', '* animateFill\n', '* followCursor\n', '* sticky', '\n\n', 'All props: https://atomiks.github.io/tippyjs/all-props/\n', 'Plugins: https://atomiks.github.io/tippyjs/plugins/'].join(' '));
  });
}

var PASSIVE = {
  passive: true
};
var IOS_CLASS = "tippy-iOS";
var POPPER_CLASS = "tippy-popper";
var TOOLTIP_CLASS = "tippy-tooltip";
var CONTENT_CLASS = "tippy-content";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var POPPER_SELECTOR = "." + POPPER_CLASS;
var TOOLTIP_SELECTOR = "." + TOOLTIP_CLASS;
var CONTENT_SELECTOR = "." + CONTENT_CLASS;
var ARROW_SELECTOR = "." + ARROW_CLASS;
var SVG_ARROW_SELECTOR = "." + SVG_ARROW_CLASS;

var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */

function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }

  currentInput.isTouch = true;

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */

function onDocumentMouseMove() {
  var now = performance.now();

  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);
  }

  lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */

function onWindowBlur() {
  var activeElement = document.activeElement;

  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;

    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
/**
 * Adds the needed global event listeners
 */

function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouchStart, _extends$5({}, PASSIVE, {
    capture: true
  }));
  window.addEventListener('blur', onWindowBlur);
}

var isBrowser$2 = typeof window !== 'undefined' && typeof document !== 'undefined';
var ua = isBrowser$2 ? navigator.userAgent : '';
var isIE$1 = /MSIE |Trident\//.test(ua);
var isIOS = isBrowser$2 && /iPhone|iPad|iPod/.test(navigator.platform);
function updateIOSClass(isAdd) {
  var shouldAdd = isAdd && isIOS && currentInput.isTouch;
  document.body.classList[shouldAdd ? 'add' : 'remove'](IOS_CLASS);
}

/**
 * Returns the popper's placement, ignoring shifting (top-start, etc)
 */

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
/**
 * Adds `data-inertia` attribute
 */

function addInertia(tooltip) {
  tooltip.setAttribute('data-inertia', '');
}
/**
 * Removes `data-inertia` attribute
 */

function removeInertia(tooltip) {
  tooltip.removeAttribute('data-inertia');
}
/**
 * Adds interactive-related attributes
 */

function addInteractive(tooltip) {
  tooltip.setAttribute('data-interactive', '');
}
/**
 * Removes interactive-related attributes
 */

function removeInteractive(tooltip) {
  tooltip.removeAttribute('data-interactive');
}
/**
 * Sets the content of a tooltip
 */

function setContent(contentEl, props) {
  if (isElement(props.content)) {
    setInnerHTML(contentEl, '');
    contentEl.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    var key = props.allowHTML ? 'innerHTML' : 'textContent';
    contentEl[key] = props.content;
  }
}
/**
 * Returns the child elements of a popper element
 */

function getChildren(popper) {
  return {
    tooltip: popper.querySelector(TOOLTIP_SELECTOR),
    content: popper.querySelector(CONTENT_SELECTOR),
    arrow: popper.querySelector(ARROW_SELECTOR) || popper.querySelector(SVG_ARROW_SELECTOR)
  };
}
/**
 * Creates an arrow element and returns it
 */

function createArrowElement(arrow) {
  var arrowElement = div();

  if (arrow === true) {
    arrowElement.className = ARROW_CLASS;
  } else {
    arrowElement.className = SVG_ARROW_CLASS;

    if (isElement(arrow)) {
      arrowElement.appendChild(arrow);
    } else {
      setInnerHTML(arrowElement, arrow);
    }
  }

  return arrowElement;
}
/**
 * Constructs the popper element and returns it
 */

function createPopperElement(id, props) {
  var popper = div();
  popper.className = POPPER_CLASS;
  popper.style.position = 'absolute';
  popper.style.top = '0';
  popper.style.left = '0';
  var tooltip = div();
  tooltip.className = TOOLTIP_CLASS;
  tooltip.id = "tippy-" + id;
  tooltip.setAttribute('data-state', 'hidden');
  tooltip.setAttribute('tabindex', '-1');
  updateTheme(tooltip, 'add', props.theme);
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');

  if (props.interactive) {
    addInteractive(tooltip);
  }

  if (props.arrow) {
    tooltip.setAttribute('data-arrow', '');
    tooltip.appendChild(createArrowElement(props.arrow));
  }

  if (props.inertia) {
    addInertia(tooltip);
  }

  setContent(content, props);
  tooltip.appendChild(content);
  popper.appendChild(tooltip);
  updatePopperElement(popper, props, props);
  return popper;
}
/**
 * Updates the popper element based on the new props
 */

function updatePopperElement(popper, prevProps, nextProps) {
  var _getChildren = getChildren(popper),
      tooltip = _getChildren.tooltip,
      content = _getChildren.content,
      arrow = _getChildren.arrow;

  popper.style.zIndex = '' + nextProps.zIndex;
  tooltip.setAttribute('data-animation', nextProps.animation);
  tooltip.style.maxWidth = appendPxIfNumber(nextProps.maxWidth);

  if (nextProps.role) {
    tooltip.setAttribute('role', nextProps.role);
  } else {
    tooltip.removeAttribute('role');
  }

  if (prevProps.content !== nextProps.content) {
    setContent(content, nextProps);
  } // arrow


  if (!prevProps.arrow && nextProps.arrow) {
    // false to true
    tooltip.appendChild(createArrowElement(nextProps.arrow));
    tooltip.setAttribute('data-arrow', '');
  } else if (prevProps.arrow && !nextProps.arrow) {
    // true to false
    tooltip.removeChild(arrow);
    tooltip.removeAttribute('data-arrow');
  } else if (prevProps.arrow !== nextProps.arrow) {
    // true to 'round' or vice-versa
    tooltip.removeChild(arrow);
    tooltip.appendChild(createArrowElement(nextProps.arrow));
  } // interactive


  if (!prevProps.interactive && nextProps.interactive) {
    addInteractive(tooltip);
  } else if (prevProps.interactive && !nextProps.interactive) {
    removeInteractive(tooltip);
  } // inertia


  if (!prevProps.inertia && nextProps.inertia) {
    addInertia(tooltip);
  } else if (prevProps.inertia && !nextProps.inertia) {
    removeInertia(tooltip);
  } // theme


  if (prevProps.theme !== nextProps.theme) {
    updateTheme(tooltip, 'remove', prevProps.theme);
    updateTheme(tooltip, 'add', nextProps.theme);
  }
}
/**
 * Add/remove transitionend listener from tooltip
 */

function updateTransitionEndListener(tooltip, action, listener) {
  ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
    tooltip[action + 'EventListener'](event, listener);
  });
}
/**
 * Adds/removes theme from tooltip's classList
 */

function updateTheme(tooltip, action, theme) {
  splitBySpaces(theme).forEach(function (name) {
    tooltip.classList[action](name + "-theme");
  });
}
/**
 * Determines if the mouse cursor is outside of the popper's interactive border
 * region
 */

function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX,
      clientY = event.clientY;
  return popperTreeData.every(function (_ref) {
    var popperRect = _ref.popperRect,
        tooltipRect = _ref.tooltipRect,
        interactiveBorder = _ref.interactiveBorder;
    // Get min/max bounds of both the popper and tooltip rects due to
    // `distance` offset
    var mergedRect = {
      top: Math.min(popperRect.top, tooltipRect.top),
      right: Math.max(popperRect.right, tooltipRect.right),
      bottom: Math.max(popperRect.bottom, tooltipRect.bottom),
      left: Math.min(popperRect.left, tooltipRect.left)
    };
    var exceedsTop = mergedRect.top - clientY > interactiveBorder;
    var exceedsBottom = clientY - mergedRect.bottom > interactiveBorder;
    var exceedsLeft = mergedRect.left - clientX > interactiveBorder;
    var exceedsRight = clientX - mergedRect.right > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}

var idCounter = 1;
var mouseMoveListeners = [];
/**
 * Used by `hideAll()`
 */

var mountedInstances = [];
/**
 * Creates and returns a Tippy object. We're using a closure pattern instead of
 * a class so that the exposed object API is clean without private members
 * prefixed with `_`.
 */

function createTippy(reference, passedProps) {
  var props = evaluateProps(reference, _extends$5({}, defaultProps, {}, getExtendedPassedProps(passedProps))); // If the reference shouldn't have multiple tippys, return null early

  if (!props.multiple && reference._tippy) {
    return null;
  }
  /* ======================= 🔒 Private members 🔒 ======================= */


  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isBeingDestroyed = false;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var popperUpdates = 0;
  var lastTriggerEvent;
  var currentMountCallback;
  var currentTransitionEndListener;
  var listeners = [];
  var debouncedOnMouseMove = debounce$1(onMouseMove, props.interactiveDebounce);
  var currentTarget; // Support iframe contexts
  // Static check that assumes any of the `triggerTarget` or `reference`
  // nodes will never change documents, even when they are updated

  var doc = getOwnerDocument(props.triggerTarget || reference);
  /* ======================= 🔑 Public members 🔑 ======================= */

  var id = idCounter++;
  var popper = createPopperElement(id, props);
  var popperChildren = getChildren(popper);
  var popperInstance = null;
  var plugins = unique(props.plugins); // These two elements are static

  var tooltip = popperChildren.tooltip,
      content = popperChildren.content;
  var transitionableElements = [tooltip, content];
  var state = {
    // The current real placement (`data-placement` attribute)
    currentPlacement: null,
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: popper,
    popperChildren: popperChildren,
    popperInstance: popperInstance,
    props: props,
    state: state,
    plugins: plugins,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    setProps: setProps,
    setContent: setContent,
    show: show,
    hide: hide,
    enable: enable,
    disable: disable,
    destroy: destroy
  };
  /* ==================== Initial instance mutations =================== */

  reference._tippy = instance;
  popper._tippy = instance;
  var pluginsHooks = plugins.map(function (plugin) {
    return plugin.fn(instance);
  });
  var hadAriaExpandedAttributeOnCreate = reference.hasAttribute('aria-expanded');
  addListenersToTriggerTarget();
  handleAriaExpandedAttribute();

  if (!props.lazy) {
    createPopperInstance();
  }

  invokeHook('onCreate', [instance]);

  if (props.showOnCreate) {
    scheduleShow();
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function () {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper.addEventListener('mouseleave', function (event) {
    if (instance.props.interactive && includes(instance.props.trigger, 'mouseenter')) {
      debouncedOnMouseMove(event);
      doc.addEventListener('mousemove', debouncedOnMouseMove);
    }
  });
  return instance;
  /* ======================= 🔒 Private methods 🔒 ======================= */

  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }

  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === 'hold';
  }

  function getCurrentTarget() {
    return currentTarget || reference;
  }

  function getDelay(isShow) {
    // For touch or keyboard input, force `0` delay for UX reasons
    // Also if the instance is mounted but not visible (transitioning out),
    // ignore delay
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
      return 0;
    }

    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }

  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }

    pluginsHooks.forEach(function (pluginHooks) {
      if (hasOwnProperty(pluginHooks, hook)) {
        // @ts-ignore
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });

    if (shouldInvokePropsHook) {
      var _instance$props;

      // @ts-ignore
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }

  function handleAriaDescribedByAttribute() {
    var aria = instance.props.aria;

    if (!aria) {
      return;
    }

    var attr = "aria-" + aria;
    var id = tooltip.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      var currentValue = node.getAttribute(attr);

      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
      } else {
        var nextValue = currentValue && currentValue.replace(id, '').trim();

        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }

  function handleAriaExpandedAttribute() {
    // If the user has specified `aria-expanded` on their reference when the
    // instance was created, we have to assume they're controlling it externally
    // themselves
    if (hadAriaExpandedAttributeOnCreate) {
      return;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      if (instance.props.interactive) {
        node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
      } else {
        node.removeAttribute('aria-expanded');
      }
    });
  }

  function cleanupInteractiveMouseListeners() {
    doc.body.removeEventListener('mouseleave', scheduleHide);
    doc.removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }

  function onDocumentMouseDown(event) {
    // Clicked on interactive popper
    if (instance.props.interactive && popper.contains(event.target)) {
      return;
    } // Clicked on the event listeners target


    if (getCurrentTarget().contains(event.target)) {
      if (currentInput.isTouch) {
        return;
      }

      if (instance.state.isVisible && includes(instance.props.trigger, 'click')) {
        return;
      }
    }

    if (instance.props.hideOnClick === true) {
      isVisibleFromClick = false;
      instance.clearDelayTimeouts();
      instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
      // currentTarget. This lets a tippy with `focus` trigger know that it
      // should not show

      didHideDueToDocumentMouseDown = true;
      setTimeout(function () {
        didHideDueToDocumentMouseDown = false;
      }); // The listener gets added in `scheduleShow()`, but this may be hiding it
      // before it shows, and hide()'s early bail-out behavior can prevent it
      // from being cleaned up

      if (!instance.state.isMounted) {
        removeDocumentMouseDownListener();
      }
    }
  }

  function addDocumentMouseDownListener() {
    doc.addEventListener('mousedown', onDocumentMouseDown, true);
  }

  function removeDocumentMouseDownListener() {
    doc.removeEventListener('mousedown', onDocumentMouseDown, true);
  }

  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }

  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }

  function onTransitionEnd(duration, callback) {
    function listener(event) {
      if (event.target === tooltip) {
        updateTransitionEndListener(tooltip, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(tooltip, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(tooltip, 'add', listener);
    currentTransitionEndListener = listener;
  }

  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node: node,
        eventType: eventType,
        handler: handler,
        options: options
      });
    });
  }

  function addListenersToTriggerTarget() {
    if (getIsCustomTouchBehavior()) {
      on('touchstart', onTrigger, PASSIVE);
      on('touchend', onMouseLeave, PASSIVE);
    }

    splitBySpaces(instance.props.trigger).forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      }

      on(eventType, onTrigger);

      switch (eventType) {
        case 'mouseenter':
          on('mouseleave', onMouseLeave);
          break;

        case 'focus':
          on(isIE$1 ? 'focusout' : 'blur', onBlurOrFocusOut);
          break;

        case 'focusin':
          on('focusout', onBlurOrFocusOut);
          break;
      }
    });
  }

  function removeListenersFromTriggerTarget() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function onTrigger(event) {
    var shouldScheduleClickHide = false;

    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }

    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();

    if (!instance.state.isVisible && isMouseEvent(event)) {
      // If scrolling, `mouseenter` events can be fired if the cursor lands
      // over a new target, but `mousemove` events don't get fired. This
      // causes interactive tooltips to get stuck open until the cursor is
      // moved
      mouseMoveListeners.forEach(function (listener) {
        return listener(event);
      });
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && (!includes(instance.props.trigger, 'mouseenter') || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      var _getNormalizedTouchSe = getNormalizedTouchSettings(),
          value = _getNormalizedTouchSe[0],
          duration = _getNormalizedTouchSe[1];

      if (currentInput.isTouch && value === 'hold' && duration) {
        // We can hijack the show timeout here, it will be cleared by
        // `scheduleHide()` when necessary
        showTimeout = setTimeout(function () {
          scheduleShow(event);
        }, duration);
      } else {
        scheduleShow(event);
      }
    }

    if (event.type === 'click') {
      isVisibleFromClick = !shouldScheduleClickHide;
    }

    if (shouldScheduleClickHide) {
      scheduleHide(event);
    }
  }

  function onMouseMove(event) {
    var isCursorOverReferenceOrPopper = closestCallback(event.target, function (el) {
      return el === reference || el === popper;
    });

    if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
      return;
    }

    var popperTreeData = arrayFrom(popper.querySelectorAll(POPPER_SELECTOR)).concat(popper).map(function (popper) {
      var instance = popper._tippy;
      var tooltip = instance.popperChildren.tooltip;
      var interactiveBorder = instance.props.interactiveBorder;
      return {
        popperRect: popper.getBoundingClientRect(),
        tooltipRect: tooltip.getBoundingClientRect(),
        interactiveBorder: interactiveBorder
      };
    });

    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }

  function onMouseLeave(event) {
    if (isEventListenerStopped(event)) {
      return;
    }

    if (includes(instance.props.trigger, 'click') && isVisibleFromClick) {
      return;
    }

    if (instance.props.interactive) {
      doc.body.addEventListener('mouseleave', scheduleHide);
      doc.addEventListener('mousemove', debouncedOnMouseMove);
      pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
      debouncedOnMouseMove(event);
      return;
    }

    scheduleHide(event);
  }

  function onBlurOrFocusOut(event) {
    if (!includes(instance.props.trigger, 'focusin') && event.target !== getCurrentTarget()) {
      return;
    } // If focus was moved to within the popper


    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide(event);
  }

  function isEventListenerStopped(event) {
    var supportsTouch = 'ontouchstart' in window;
    var isTouchEvent = includes(event.type, 'touch');
    var isCustomTouch = getIsCustomTouchBehavior();
    return supportsTouch && currentInput.isTouch && isCustomTouch && !isTouchEvent || currentInput.isTouch && !isCustomTouch && isTouchEvent;
  }

  function createPopperInstance() {
    var popperOptions = instance.props.popperOptions;
    var arrow = instance.popperChildren.arrow;
    var flipModifier = getModifier(popperOptions, 'flip');
    var preventOverflowModifier = getModifier(popperOptions, 'preventOverflow');
    var distancePx;

    function applyMutations(data) {
      var prevPlacement = instance.state.currentPlacement;
      instance.state.currentPlacement = data.placement;

      if (instance.props.flip && !instance.props.flipOnUpdate) {
        if (data.flipped) {
          instance.popperInstance.options.placement = data.placement;
        }

        setModifierValue(instance.popperInstance.modifiers, 'flip', 'enabled', false);
      }

      tooltip.setAttribute('data-placement', data.placement);

      if (data.attributes['x-out-of-boundaries'] !== false) {
        tooltip.setAttribute('data-out-of-boundaries', '');
      } else {
        tooltip.removeAttribute('data-out-of-boundaries');
      }

      var basePlacement = getBasePlacement(data.placement);
      var isVerticalPlacement = includes(['top', 'bottom'], basePlacement);
      var isSecondaryPlacement = includes(['bottom', 'right'], basePlacement); // Apply `distance` prop

      tooltip.style.top = '0';
      tooltip.style.left = '0';
      tooltip.style[isVerticalPlacement ? 'top' : 'left'] = (isSecondaryPlacement ? 1 : -1) * distancePx + 'px'; // Careful not to cause an infinite loop here
      // Fixes https://github.com/FezVrasta/popper.js/issues/784

      if (prevPlacement && prevPlacement !== data.placement) {
        instance.popperInstance.update();
      }
    }

    var config = _extends$5({
      eventsEnabled: false,
      placement: instance.props.placement
    }, popperOptions, {
      modifiers: _extends$5({}, popperOptions && popperOptions.modifiers, {
        // We can't use `padding` on the popper el because of these bugs when
        // flipping from a vertical to horizontal placement or vice-versa,
        // there is severe flickering.
        // https://github.com/FezVrasta/popper.js/issues/720
        // This workaround increases bundle size by 250B minzip unfortunately,
        // due to need to custom compute the distance (since Popper rect does
        // not get affected by the inner tooltip's distance offset)
        tippyDistance: {
          enabled: true,
          order: 0,
          fn: function fn(data) {
            // `html` fontSize may change while `popperInstance` is alive
            // e.g. on resize in media queries
            distancePx = getUnitsInPx(doc, instance.props.distance);
            var basePlacement = getBasePlacement(data.placement);
            var computedPreventOverflowPadding = getComputedPadding(basePlacement, preventOverflowModifier && preventOverflowModifier.padding, distancePx);
            var computedFlipPadding = getComputedPadding(basePlacement, flipModifier && flipModifier.padding, distancePx);
            var instanceModifiers = instance.popperInstance.modifiers;
            setModifierValue(instanceModifiers, 'preventOverflow', 'padding', computedPreventOverflowPadding);
            setModifierValue(instanceModifiers, 'flip', 'padding', computedFlipPadding);
            return data;
          }
        },
        preventOverflow: _extends$5({
          boundariesElement: instance.props.boundary
        }, preventOverflowModifier),
        flip: _extends$5({
          enabled: instance.props.flip,
          behavior: instance.props.flipBehavior
        }, flipModifier),
        arrow: _extends$5({
          element: arrow,
          enabled: !!arrow
        }, getModifier(popperOptions, 'arrow')),
        offset: _extends$5({
          offset: instance.props.offset
        }, getModifier(popperOptions, 'offset'))
      }),
      onCreate: function onCreate(data) {
        applyMutations(data);
        preserveInvocation(popperOptions && popperOptions.onCreate, config.onCreate, [data]);
        runMountCallback();
      },
      onUpdate: function onUpdate(data) {
        applyMutations(data);
        preserveInvocation(popperOptions && popperOptions.onUpdate, config.onUpdate, [data]);
        runMountCallback();
      }
    });

    instance.popperInstance = new Popper(reference, popper, config);
  }

  function runMountCallback() {
    // Only invoke currentMountCallback after 2 updates
    // This fixes some bugs in Popper.js (TODO: aim for only 1 update)
    if (popperUpdates === 0) {
      popperUpdates++; // 1

      instance.popperInstance.update();
    } else if (currentMountCallback && popperUpdates === 1) {
      popperUpdates++; // 2

      reflow(popper);
      currentMountCallback();
    }
  }

  function mount() {
    // The mounting callback (`currentMountCallback`) is only run due to a
    // popperInstance update/create
    popperUpdates = 0;
    var appendTo = instance.props.appendTo;
    var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
    // it's directly after the reference element so the elements inside the
    // tippy can be tabbed to
    // If there are clipping issues, the user can specify a different appendTo
    // and ensure focus management is handled correctly manually

    var node = getCurrentTarget();

    if (instance.props.interactive && appendTo === defaultProps.appendTo || appendTo === 'parent') {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    } // The popper element needs to exist on the DOM before its position can be
    // updated as Popper.js needs to read its dimensions


    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
    }

    if (process.env.NODE_ENV !== "production") {
      // Accessibility check
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, ['Interactive tippy element may not be accessible via keyboard navigation', 'because it is not directly after the reference element in the DOM source', 'order.', '\n\n', 'Using a wrapper <div> or <span> tag around the reference element solves', 'this by creating a new parentNode context.', '\n\n', 'Specifying `appendTo: document.body` silences this warning, but it', 'assumes you are using a focus management solution to handle keyboard', 'navigation.', '\n\n', 'See: https://atomiks.github.io/tippyjs/accessibility/#interactivity'].join(' '));
    }

    setModifierValue(instance.popperInstance.modifiers, 'flip', 'enabled', instance.props.flip);
    instance.popperInstance.enableEventListeners(); // Mounting callback invoked in `onUpdate`

    instance.popperInstance.update();
  }

  function scheduleShow(event) {
    instance.clearDelayTimeouts();

    if (!instance.popperInstance) {
      createPopperInstance();
    }

    if (event) {
      invokeHook('onTrigger', [instance, event]);
    }

    addDocumentMouseDownListener();
    var delay = getDelay(true);

    if (delay) {
      showTimeout = setTimeout(function () {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }

  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook('onUntrigger', [instance, event]);

    if (!instance.state.isVisible) {
      removeDocumentMouseDownListener();
      return;
    } // For interactive tippies, scheduleHide is added to a document.body handler
    // from onMouseLeave so must intercept scheduled hides from mousemove/leave
    // events when trigger contains mouseenter and click, and the tip is
    // currently shown as a result of a click.


    if (includes(instance.props.trigger, 'mouseenter') && includes(instance.props.trigger, 'click') && includes(['mouseleave', 'mousemove'], event.type) && isVisibleFromClick) {
      return;
    }

    var delay = getDelay(false);

    if (delay) {
      hideTimeout = setTimeout(function () {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrame = requestAnimationFrame(function () {
        instance.hide();
      });
    }
  }
  /* ======================= 🔑 Public methods 🔑 ======================= */


  function enable() {
    instance.state.isEnabled = true;
  }

  function disable() {
    // Disabling the instance should also hide it
    // https://github.com/atomiks/tippy.js-react/issues/106
    instance.hide();
    instance.state.isEnabled = false;
  }

  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }

  function setProps(partialProps) {
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    if (process.env.NODE_ENV !== "production") {
      validateProps(partialProps, plugins);
      warnWhen(partialProps.plugins ? partialProps.plugins.length !== plugins.length || plugins.some(function (p, i) {
        if (partialProps.plugins && partialProps.plugins[i]) {
          return p !== partialProps.plugins[i];
        } else {
          return true;
        }
      }) : false, "Cannot update plugins");
    }

    invokeHook('onBeforeUpdate', [instance, partialProps]);
    removeListenersFromTriggerTarget();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, _extends$5({}, instance.props, {}, partialProps, {
      ignoreAttributes: true
    }));
    nextProps.ignoreAttributes = useIfDefined(partialProps.ignoreAttributes, prevProps.ignoreAttributes);
    instance.props = nextProps;
    addListenersToTriggerTarget();

    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce$1(onMouseMove, nextProps.interactiveDebounce);
    }

    updatePopperElement(popper, prevProps, nextProps);
    instance.popperChildren = getChildren(popper); // Ensure stale aria-expanded attributes are removed

    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
        node.removeAttribute('aria-expanded');
      });
    } else if (nextProps.triggerTarget) {
      reference.removeAttribute('aria-expanded');
    }

    handleAriaExpandedAttribute();

    if (instance.popperInstance) {
      if (POPPER_INSTANCE_DEPENDENCIES.some(function (prop) {
        return hasOwnProperty(partialProps, prop) && partialProps[prop] !== prevProps[prop];
      })) {
        var currentReference = instance.popperInstance.reference;
        instance.popperInstance.destroy();
        createPopperInstance();
        instance.popperInstance.reference = currentReference;

        if (instance.state.isVisible) {
          instance.popperInstance.enableEventListeners();
        }
      } else {
        instance.popperInstance.update();
      }
    }

    invokeHook('onAfterUpdate', [instance, partialProps]);
  }

  function setContent(content) {
    instance.setProps({
      content: content
    });
  }

  function show(duration) {
    if (duration === void 0) {
      duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    }

    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
    } // Early bail-out


    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;

    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    } // Normalize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getCurrentTarget().hasAttribute('disabled')) {
      return;
    }

    if (!instance.popperInstance) {
      createPopperInstance();
    }

    invokeHook('onShow', [instance], false);

    if (instance.props.onShow(instance) === false) {
      return;
    }

    addDocumentMouseDownListener();
    popper.style.visibility = 'visible';
    instance.state.isVisible = true; // Prevent a transition of the popper from its previous position and of the
    // elements at a different placement
    // Check if the tippy was fully unmounted before `show()` was called, to
    // allow for smooth transition for `createSingleton()`

    if (!instance.state.isMounted) {
      setTransitionDuration(transitionableElements.concat(popper), 0);
    }

    currentMountCallback = function currentMountCallback() {
      if (!instance.state.isVisible) {
        return;
      }

      setTransitionDuration([popper], instance.props.updateDuration);
      setTransitionDuration(transitionableElements, duration);
      setVisibilityState(transitionableElements, 'visible');
      handleAriaDescribedByAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      updateIOSClass(true);
      instance.state.isMounted = true;
      invokeHook('onMount', [instance]);
      onTransitionedIn(duration, function () {
        instance.state.isShown = true;
        invokeHook('onShown', [instance]);
      });
    };

    mount();
  }

  function hide(duration) {
    if (duration === void 0) {
      duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    }

    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
    } // Early bail-out


    var isAlreadyHidden = !instance.state.isVisible && !isBeingDestroyed;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled && !isBeingDestroyed;

    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }

    invokeHook('onHide', [instance], false);

    if (instance.props.onHide(instance) === false && !isBeingDestroyed) {
      return;
    }

    removeDocumentMouseDownListener();
    popper.style.visibility = 'hidden';
    instance.state.isVisible = false;
    instance.state.isShown = false;
    setTransitionDuration(transitionableElements, duration);
    setVisibilityState(transitionableElements, 'hidden');
    handleAriaDescribedByAttribute();
    handleAriaExpandedAttribute();
    onTransitionedOut(duration, function () {
      instance.popperInstance.disableEventListeners();
      instance.popperInstance.options.placement = instance.props.placement;
      popper.parentNode.removeChild(popper);
      mountedInstances = mountedInstances.filter(function (i) {
        return i !== instance;
      });

      if (mountedInstances.length === 0) {
        updateIOSClass(false);
      }

      instance.state.isMounted = false;
      invokeHook('onHidden', [instance]);
    });
  }

  function destroy() {
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    isBeingDestroyed = true;
    instance.clearDelayTimeouts();
    instance.hide(0);
    removeListenersFromTriggerTarget();
    delete reference._tippy;

    if (instance.popperInstance) {
      instance.popperInstance.destroy();
    }

    isBeingDestroyed = false;
    instance.state.isDestroyed = true;
    invokeHook('onDestroy', [instance]);
  }
}

function tippy(targets, optionalProps,
/** @deprecated use Props.plugins */
plugins) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  plugins = defaultProps.plugins.concat(optionalProps.plugins || plugins);

  if (process.env.NODE_ENV !== "production") {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }

  bindGlobalEventListeners();

  var passedProps = _extends$5({}, optionalProps, {
    plugins: plugins
  });

  var elements = getArrayOfElements(targets);

  if (process.env.NODE_ENV !== "production") {
    var isSingleContentElement = isElement(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ['tippy() was passed an Element as the `content` prop, but more than one tippy', 'instance was created by this invocation. This means the content element will', 'only be appended to the last tippy instance.', '\n\n', 'Instead, pass the .innerHTML of the element, or use a function that returns a', 'cloned version of the element instead.', '\n\n', '1) content: element.innerHTML\n', '2) content: () => element.cloneNode(true)'].join(' '));
  }

  var instances = elements.reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, passedProps);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}

tippy.version = version;
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;

/**!
* tippy.js v5.2.1
* (c) 2017-2020 atomiks
* MIT License
*/

/**
 * Re-uses a single tippy element for many different tippy instances.
 * Replaces v4's `tippy.group()`.
 */

var createSingleton = function createSingleton(tippyInstances, optionalProps,
/** @deprecated use Props.plugins */
plugins) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  if (process.env.NODE_ENV !== "production") {
    errorWhen(!Array.isArray(tippyInstances), ['The first argument passed to createSingleton() must be an array of tippy', 'instances. The passed value was', String(tippyInstances)].join(' '));
  }

  plugins = optionalProps.plugins || plugins;
  tippyInstances.forEach(function (instance) {
    instance.disable();
  });

  var userAria = _extends$5({}, defaultProps, {}, optionalProps).aria;

  var currentAria;
  var currentTarget;
  var references = tippyInstances.map(function (instance) {
    return instance.reference;
  });
  var singleton = {
    fn: function fn(instance) {
      function handleAriaDescribedByAttribute(isShow) {
        if (!currentAria) {
          return;
        }

        var attr = "aria-" + currentAria;

        if (isShow && !instance.props.interactive) {
          currentTarget.setAttribute(attr, instance.popperChildren.tooltip.id);
        } else {
          currentTarget.removeAttribute(attr);
        }
      }

      return {
        onAfterUpdate: function onAfterUpdate(_, _ref) {
          var aria = _ref.aria;

          // Ensure `aria` for the singleton instance stays `null`, while
          // changing the `userAria` value
          if (aria !== undefined && aria !== userAria) {
            {
              userAria = aria;
            }
          }
        },
        onDestroy: function onDestroy() {
          tippyInstances.forEach(function (instance) {
            instance.enable();
          });
        },
        onMount: function onMount() {
          handleAriaDescribedByAttribute(true);
        },
        onUntrigger: function onUntrigger() {
          handleAriaDescribedByAttribute(false);
        },
        onTrigger: function onTrigger(_, event) {
          var target = event.currentTarget;
          var index = references.indexOf(target); // bail-out

          if (target === currentTarget) {
            return;
          }

          currentTarget = target;
          currentAria = userAria;

          if (instance.state.isVisible) {
            handleAriaDescribedByAttribute(true);
          }

          instance.popperInstance.reference = target;
          instance.setContent(tippyInstances[index].props.content);
        }
      };
    }
  };
  return tippy(div(), _extends$5({}, optionalProps, {
    plugins: [singleton].concat(plugins),
    aria: null,
    triggerTarget: references
  }));
};

function _extends$6() {
  _extends$6 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$6.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var isBrowser$3 = typeof window !== 'undefined' && typeof document !== 'undefined';
function preserveRef(ref, node) {
  if (ref) {
    if (typeof ref === 'function') {
      ref(node);
    }

    if ({}.hasOwnProperty.call(ref, 'current')) {
      ref.current = node;
    }
  }
}
function ssrSafeCreateDiv() {
  return isBrowser$3 && document.createElement('div');
}
function updateClassName(tooltip, action, classNames) {
  classNames.split(/\s+/).forEach(function (name) {
    if (name) {
      tooltip.classList[action](name);
    }
  });
}

var useIsomorphicLayoutEffect = isBrowser$3 ? React.useLayoutEffect : React.useEffect;
function useUpdateClassName(component, className, deps) {
  useIsomorphicLayoutEffect(function () {
    var tooltip = component.instance.popperChildren.tooltip;

    if (className) {
      updateClassName(tooltip, 'add', className);
      return function () {
        updateClassName(tooltip, 'remove', className);
      };
    }
  }, [className].concat(deps));
}
function useInstance(initialValue) {
  // Using refs instead of state as it's recommended to not store imperative
  // values in state due to memory problems in React(?)
  var ref = React.useRef();

  if (!ref.current) {
    ref.current = typeof initialValue === 'function' ? initialValue() : initialValue;
  }

  return ref.current;
}
function useSingletonCreate(component, props, enabled, deps) {
  useIsomorphicLayoutEffect(function () {
    var instances = component.instances;
    var instance = createSingleton(instances, props);
    component.instance = instance;

    if (!enabled) {
      instance.disable();
    }

    return function () {
      instance.destroy();
      component.instances = instances.filter(function (i) {
        return !i.state.isDestroyed;
      });
    };
  }, deps);
}
function useSingletonUpdate(component, props, enabled) {
  useIsomorphicLayoutEffect(function () {
    if (component.renders === 1) {
      component.renders++;
      return;
    }

    var instance = component.instance;
    instance.setProps(props);

    if (enabled) {
      instance.enable();
    } else {
      instance.disable();
    }
  });
}

function Tippy(_ref) {
  var children = _ref.children,
      content = _ref.content,
      className = _ref.className,
      visible = _ref.visible,
      singleton = _ref.singleton,
      _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? true : _ref$multiple,
      _ref$ignoreAttributes = _ref.ignoreAttributes,
      ignoreAttributes = _ref$ignoreAttributes === void 0 ? true : _ref$ignoreAttributes,
      __source = _ref.__source,
      __self = _ref.__self,
      restOfNativeProps = _objectWithoutPropertiesLoose$2(_ref, ["children", "content", "className", "visible", "singleton", "enabled", "multiple", "ignoreAttributes", "__source", "__self"]);

  var isControlledMode = visible !== undefined;
  var isSingletonMode = singleton !== undefined;

  var _useState = React.useState(false),
      mounted = _useState[0],
      setMounted = _useState[1];

  var component = useInstance(function () {
    return {
      container: ssrSafeCreateDiv(),
      renders: 1
    };
  });

  var props = _extends$6({
    ignoreAttributes: ignoreAttributes,
    multiple: multiple
  }, restOfNativeProps, {
    content: component.container
  });

  if (isControlledMode) {
    props.trigger = 'manual';
  }

  if (isSingletonMode) {
    enabled = false;
  }

  var deps = [children.type]; // CREATE

  useIsomorphicLayoutEffect(function () {
    var instance = tippy(component.ref, props);
    component.instance = instance;

    if (!enabled) {
      instance.disable();
    }

    if (visible) {
      instance.show();
    }

    if (isSingletonMode) {
      singleton(instance);
    }

    setMounted(true);
    return function () {
      instance.destroy();
    };
  }, deps); // UPDATE

  useIsomorphicLayoutEffect(function () {
    // Prevent this effect from running on 1st render
    if (component.renders === 1) {
      component.renders++;
      return;
    }

    var instance = component.instance;
    instance.setProps(props);

    if (enabled) {
      instance.enable();
    } else {
      instance.disable();
    }

    if (isControlledMode) {
      if (visible) {
        instance.show();
      } else {
        instance.hide();
      }
    }
  });
  useUpdateClassName(component, className, deps);
  return React__default.createElement(React__default.Fragment, null, React.cloneElement(children, {
    ref: function ref(node) {
      component.ref = node;
      preserveRef(children.ref, node);
    }
  }), mounted && ReactDOM.createPortal(content, component.container));
}

if (process.env.NODE_ENV !== 'production') {
  var ContentType = PropTypes__default.oneOfType([PropTypes__default.number, PropTypes__default.string, PropTypes__default.element]);
  Tippy.propTypes = {
    content: PropTypes__default.oneOfType([ContentType, PropTypes__default.arrayOf(ContentType)]).isRequired,
    children: PropTypes__default.element.isRequired,
    visible: PropTypes__default.bool,
    enabled: PropTypes__default.bool,
    className: PropTypes__default.string,
    singleton: PropTypes__default.func
  };
}

var Tippy$1 = React.forwardRef(function TippyWrapper(_ref2, _ref3) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose$2(_ref2, ["children"]);

  return React__default.createElement(Tippy, props, React.cloneElement(children, {
    ref: function ref(node) {
      preserveRef(_ref3, node);
      preserveRef(children.ref, node);
    }
  }));
});

function TippySingleton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled,
      _ref$ignoreAttributes = _ref.ignoreAttributes,
      ignoreAttributes = _ref$ignoreAttributes === void 0 ? true : _ref$ignoreAttributes,
      restOfNativeProps = _objectWithoutPropertiesLoose$2(_ref, ["children", "className", "enabled", "ignoreAttributes"]);

  var component = useInstance({
    instances: [],
    renders: 1
  });

  var props = _extends$6({
    ignoreAttributes: ignoreAttributes
  }, restOfNativeProps);

  var deps = [children.length];
  useSingletonCreate(component, props, enabled, deps);
  useSingletonUpdate(component, props, enabled);
  useUpdateClassName(component, className, deps);
  return React.Children.map(children, function (child) {
    return React.cloneElement(child, {
      enabled: false,
      onCreate: function onCreate(instance) {
        if (child.props.onCreate) {
          child.props.onCreate(instance);
        }

        component.instances.push(instance);
      }
    });
  });
}

if (process.env.NODE_ENV !== 'production') {
  TippySingleton.propTypes = {
    children: PropTypes__default.arrayOf(PropTypes__default.element).isRequired
  };
}

var Tooltip = function Tooltip(_ref) {
  var otherProps = _extends({}, _ref);

  return React__default.createElement(Tippy$1, _extends({
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

var s$c = {"iconWrapper":"styles-module_iconWrapper__1qyT0","icon":"styles-module_icon__3GPzn"};

var InfoTooltip = function InfoTooltip(_ref) {
  var className = _ref.className,
      content = _ref.content,
      otherProps = _objectWithoutProperties(_ref, ["className", "content"]);

  return React__default.createElement(Tooltip, {
    content: content
  }, React__default.createElement("span", _extends({
    className: cn(className, s$c.iconWrapper)
  }, otherProps), React__default.createElement(FiInfo, {
    className: s$c.icon
  })));
};

InfoTooltip.propTypes = {
  content: PropTypes__default.oneOfType([PropTypes__default.element, PropTypes__default.string]).isRequired,
  className: PropTypes__default.string
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

var s$d = {"formGroup":"styles-module_formGroup__3lKOn","label":"styles-module_label__3bJBz","visuallyHidden":"styles-module_visuallyHidden__36izm","light":"styles-module_light__3t8lq","helperText":"styles-module_helperText__3XhkA"};

var FormGroup = function FormGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      helperText = _ref.helperText,
      helperInTooltip = _ref.helperInTooltip,
      inputStyle = _ref.inputStyle,
      label = _ref.label,
      name = _ref.name,
      isHiddenLabel = _ref.isHiddenLabel,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "helperText", "helperInTooltip", "inputStyle", "label", "name", "isHiddenLabel"]);

  return React__default.createElement("div", _extends({
    className: cn(className, inputStyle && s$d[inputStyle], s$d.formGroup)
  }, otherProps), React__default.createElement("label", {
    className: cn(isHiddenLabel && s$d.visuallyHidden, s$d.label),
    htmlFor: name
  }, label, helperText && helperInTooltip && React__default.createElement(InfoTooltip, {
    content: helperText,
    className: "uMl1"
  })), children, helperText && !helperInTooltip && React__default.createElement("div", {
    className: s$d.helperText
  }, helperText));
};

FormGroup.propTypes = {
  children: PropTypes__default.oneOfType([PropTypes__default.element, PropTypes__default.array, PropTypes__default.node]).isRequired,
  className: PropTypes__default.string,
  helperText: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.element, PropTypes__default.object, PropTypes__default.node]),
  helperInTooltip: PropTypes__default.bool,
  inputStyle: PropTypes__default.string,
  isHiddenLabel: PropTypes__default.bool,
  label: PropTypes__default.string,
  name: PropTypes__default.string.isRequired
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

var s$e = {"button":"styles-module_button__3rq1W","displayAsBlockElement":"styles-module_displayAsBlockElement__GCh4m","primary":"styles-module_primary__81J8A","secondary":"styles-module_secondary__W0v_L","primaryDestructive":"styles-module_primaryDestructive__ckqFg","secondaryDestructive":"styles-module_secondaryDestructive__1_cWv","primaryAlt":"styles-module_primaryAlt__2hzh2","google":"styles-module_google__1GcLq","okta":"styles-module_okta__17B68","github":"styles-module_github__2fXX2","small":"styles-module_small__wWA7Q","large":"styles-module_large__2aNbe","icon":"styles-module_icon__2esWq"};

var IconButton = React.forwardRef(function (_ref, ref) {
  var type = _ref.type,
      ariaLabel = _ref.ariaLabel,
      buttonSize = _ref.buttonSize,
      buttonStyle = _ref.buttonStyle,
      icon = _ref.icon,
      isDisabled = _ref.isDisabled,
      displayBlock = _ref.displayBlock,
      className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ["type", "ariaLabel", "buttonSize", "buttonStyle", "icon", "isDisabled", "displayBlock", "className"]);

  var btnClasses = cn(className, displayBlock && s$e.displayAsBlockElement, s$e[buttonStyle], s$e[buttonSize], s$e.button);
  var Icon = icon;
  return React__default.createElement("button", _extends({
    // eslint-disable-line
    ref: ref,
    type: type,
    "aria-label": ariaLabel,
    title: ariaLabel,
    className: btnClasses,
    disabled: isDisabled
  }, otherProps), React__default.createElement(Icon, {
    className: s$e.icon
  }));
});
IconButton.displayName = 'IconButton';
IconButton.propTypes = {
  type: PropTypes__default.oneOf(['button', 'submit', 'reset']),
  ariaLabel: PropTypes__default.string.isRequired,
  buttonSize: PropTypes__default.oneOf(['small', 'large']),
  buttonStyle: PropTypes__default.oneOf(['primary', 'secondary', 'primaryDestructive', 'secondaryDestructive', 'primaryAlt', 'google', 'okta', 'github']),
  icon: PropTypes__default.func.isRequired,
  isDisabled: PropTypes__default.bool,
  className: PropTypes__default.string,
  displayBlock: PropTypes__default.bool
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

var s$f = {"input":"styles-module_input__1me90","light":"styles-module_light__3dnng"};

var Input = React.forwardRef(function (_ref, ref) {
  var name = _ref.name,
      type = _ref.type,
      inputStyle = _ref.inputStyle,
      className = _ref.className,
      isDisabled = _ref.isDisabled,
      otherProps = _objectWithoutProperties(_ref, ["name", "type", "inputStyle", "className", "isDisabled"]);

  return React__default.createElement("input", _extends({
    ref: ref,
    type: type,
    name: name,
    className: cn(className, inputStyle && s$f[inputStyle], s$f.input),
    disabled: isDisabled
  }, otherProps));
});
Input.displayName = 'Input';
Input.propTypes = {
  name: PropTypes__default.string.isRequired,
  type: PropTypes__default.string,
  inputStyle: PropTypes__default.string,
  className: PropTypes__default.string,
  isDisabled: PropTypes__default.bool
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

var s$g = {"wrapper":"styles-module_wrapper__1yozk","suggestions":"styles-module_suggestions__3s1V5","suggestion":"styles-module_suggestion__2GX6c","active":"styles-module_active__IYw0Q"};

var InputAutocomplete = function InputAutocomplete(_ref) {
  var name = _ref.name,
      suggestions = _ref.suggestions,
      onChange = _ref.onChange,
      value = _ref.value,
      className = _ref.className,
      isDisabled = _ref.isDisabled,
      otherProps = _objectWithoutProperties(_ref, ["name", "suggestions", "onChange", "value", "className", "isDisabled"]);

  var _useState = React.useState({
    activeSuggestion: 0,
    filteredSuggestions: suggestions,
    showSuggestions: false,
    userInput: value
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleOnBlur = function handleOnBlur() {
    setState(_objectSpread2({}, state, {
      showSuggestions: false
    }));
  };

  var handleOnFocus = function handleOnFocus() {
    setState(_objectSpread2({}, state, {
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
    setState(_objectSpread2({}, state, {
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
      setState(_objectSpread2({}, state, {
        showSuggestions: false
      }));
    } else if (e.keyCode === 13) {
      // User pressed the enter key
      e.preventDefault();

      if (state.showSuggestions) {
        setState(_objectSpread2({}, state, {
          activeSuggestion: 0,
          showSuggestions: false,
          userInput: state.filteredSuggestions[state.activeSuggestion]
        }));
      }
    } else if (e.keyCode === 38) {
      // User pressed the up arrow
      if (state.activeSuggestion === 0) return;
      setState(_objectSpread2({}, state, {
        activeSuggestion: state.activeSuggestion - 1
      }));
    } else if (e.keyCode === 40) {
      // User pressed the down arrow
      if (state.activeSuggestion - 1 === state.filteredSuggestions.length) return;
      setState(_objectSpread2({}, state, {
        activeSuggestion: state.activeSuggestion + 1
      }));
    }
  };

  return React__default.createElement("span", {
    className: cn(className, s$g.wrapper)
  }, React__default.createElement(Input, _extends({
    name: name,
    onFocus: handleOnFocus,
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onKeyDown: onKeyDown,
    value: state.userInput,
    autoComplete: "off",
    isDisabled: isDisabled
  }, otherProps)), state.showSuggestions && React__default.createElement("ul", {
    className: s$g.suggestions
  }, state.filteredSuggestions.map(function (suggestion, index) {
    return React__default.createElement("li", {
      // eslint-disable-line
      key: suggestion,
      className: cn(index === state.activeSuggestion && s$g.active, s$g.suggestion),
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
  name: PropTypes__default.string.isRequired,
  onChange: PropTypes__default.func.isRequired,
  value: PropTypes__default.string,
  suggestions: PropTypes__default.arrayOf(PropTypes__default.string),
  className: PropTypes__default.string,
  isDisabled: PropTypes__default.bool
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
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 700 700",
    className: className
  }, React__default.createElement("path", {
    fill: "#326ce5",
    d: "M358.986 10.06a46.725 46.342 0 0 0-17.906 4.531L96.736 131.341a46.725 46.342 0 0 0-25.28 31.438l-60.282 262.25a46.725 46.342 0 0 0 6.344 35.531 46.725 46.342 0 0 0 2.656 3.688l169.125 210.28a46.725 46.342 0 0 0 36.531 17.438l271.219-.062a46.725 46.342 0 0 0 36.531-17.406l169.063-210.313a46.725 46.342 0 0 0 9.03-39.219L651.3 162.716a46.725 46.342 0 0 0-25.281-31.437L381.643 14.59a46.725 46.342 0 0 0-22.657-4.53z"
  }), React__default.createElement("path", {
    d: "M361.408 99.307c-8.077.001-14.626 7.276-14.625 16.25 0 .138.028.27.03.406-.011 1.22-.07 2.689-.03 3.75.192 5.176 1.32 9.138 2 13.907 1.23 10.206 2.26 18.667 1.625 26.531-.62 2.965-2.803 5.677-4.75 7.562l-.344 6.188a190.337 190.337 0 0 0-26.438 4.062c-37.974 8.623-70.67 28.184-95.562 54.594a245.167 245.167 0 0 1-5.281-3.75c-2.612.353-5.25 1.159-8.688-.844-6.545-4.405-12.506-10.486-19.719-17.812-3.305-3.504-5.698-6.841-9.625-10.219-.891-.767-2.252-1.804-3.25-2.594-3.07-2.447-6.69-3.724-10.187-3.843-4.496-.154-8.824 1.604-11.656 5.156-5.036 6.315-3.424 15.968 3.593 21.562.071.057.147.101.219.157.964.781 2.145 1.783 3.031 2.437 4.167 3.077 7.973 4.652 12.125 7.094 8.747 5.402 15.999 9.88 21.75 15.281 2.246 2.394 2.639 6.613 2.938 8.438l4.687 4.187c-25.093 37.764-36.707 84.41-29.843 131.938l-6.125 1.781c-1.615 2.085-3.896 5.365-6.282 6.344-7.525 2.37-15.994 3.24-26.218 4.312-4.8.4-8.943.161-14.032 1.125-1.12.212-2.68.619-3.906.906l-.125.032c-.067.015-.155.048-.219.062-8.62 2.083-14.157 10.006-12.375 17.813 1.783 7.808 10.203 12.556 18.875 10.687.063-.014.154-.017.219-.031.098-.022.184-.07.281-.094 1.21-.265 2.724-.56 3.782-.843 5.003-1.34 8.626-3.308 13.125-5.032 9.676-3.47 17.691-6.37 25.5-7.5 3.26-.255 6.697 2.012 8.406 2.969l6.375-1.094c14.67 45.483 45.414 82.245 84.344 105.313l-2.657 6.375c.958 2.475 2.014 5.824 1.3 8.27-2.838 7.36-7.7 15.13-13.237 23.792-2.681 4.002-5.425 7.108-7.844 11.688-.579 1.096-1.316 2.78-1.875 3.937-3.759 8.043-1.002 17.305 6.219 20.782 7.266 3.497 16.284-.192 20.187-8.25.006-.012.026-.02.031-.032.004-.009-.004-.022 0-.03.556-1.143 1.344-2.645 1.813-3.72 2.072-4.747 2.762-8.815 4.219-13.406 3.87-9.72 5.995-19.919 11.322-26.274 1.459-1.74 3.837-2.41 6.303-3.07l3.312-6c33.938 13.027 71.927 16.523 109.875 7.907a189.77 189.77 0 0 0 25.094-7.563c.93 1.651 2.661 4.826 3.125 5.625 2.506.815 5.24 1.236 7.469 4.531 3.985 6.81 6.71 14.865 10.031 24.594 1.457 4.591 2.178 8.66 4.25 13.406.472 1.082 1.256 2.605 1.812 3.75 3.895 8.085 12.943 11.787 20.22 8.282 7.219-3.478 9.979-12.74 6.218-20.782-.559-1.158-1.327-2.841-1.906-3.937-2.42-4.58-5.163-7.655-7.844-11.656-5.537-8.662-10.13-15.858-12.969-23.22-1.187-3.796.2-6.157 1.125-8.624-.554-.635-1.739-4.22-2.437-5.906 40.457-23.889 70.298-62.022 84.312-106.063 1.893.298 5.182.88 6.25 1.094 2.2-1.45 4.222-3.344 8.188-3.031 7.808 1.129 15.823 4.03 25.5 7.5 4.498 1.723 8.121 3.723 13.125 5.062 1.057.283 2.572.547 3.781.813.097.023.183.071.281.093.066.015.156.017.219.032 8.672 1.866 17.094-2.88 18.875-10.688 1.78-7.807-3.754-15.732-12.375-17.812-1.254-.286-3.032-.77-4.25-1-5.09-.964-9.231-.727-14.031-1.125-10.225-1.072-18.694-1.943-26.219-4.313-3.068-1.19-5.251-4.841-6.313-6.344l-5.906-1.718c3.062-22.155 2.237-45.212-3.062-68.282-5.349-23.284-14.8-44.58-27.407-63.343 1.515-1.378 4.377-3.911 5.188-4.657.237-2.624.033-5.375 2.75-8.281 5.751-5.4 13.003-9.879 21.75-15.281 4.152-2.443 7.99-4.017 12.156-7.094.942-.696 2.23-1.798 3.219-2.594 7.015-5.596 8.63-15.248 3.594-21.562-5.037-6.314-14.797-6.91-21.813-1.313-.998.791-2.353 1.823-3.25 2.594-3.926 3.378-6.351 6.714-9.656 10.219-7.213 7.326-13.174 13.438-19.719 17.844-2.836 1.65-6.99 1.08-8.875.968l-5.562 3.969c-31.72-33.26-74.905-54.525-121.406-58.656-.13-1.949-.3-5.471-.344-6.532-1.904-1.821-4.204-3.376-4.781-7.312-.637-7.864.426-16.325 1.656-26.531.679-4.769 1.807-8.73 2-13.907.044-1.176-.027-2.884-.031-4.156-.001-8.974-6.548-16.25-14.625-16.25zm-18.313 113.438l-4.344 76.718-.312.157c-.292 6.863-5.94 12.343-12.875 12.343-2.841 0-5.463-.912-7.594-2.468l-.125.062-62.906-44.594c19.333-19.01 44.063-33.06 72.562-39.53a154.125 154.125 0 0 1 15.594-2.688zm36.656 0c33.274 4.092 64.045 19.159 87.625 42.25l-62.5 44.312-.218-.093c-5.548 4.051-13.364 3.046-17.688-2.375a12.807 12.807 0 0 1-2.812-7.47l-.063-.03zM232.126 283.62l57.438 51.375-.063.312c5.185 4.507 5.95 12.328 1.625 17.75a12.892 12.892 0 0 1-6.687 4.406l-.063.25-73.625 21.25c-3.747-34.265 4.329-67.573 21.375-95.343zm258.157.03c8.534 13.833 14.996 29.283 18.843 46.032 3.801 16.548 4.755 33.067 3.188 49.031l-74-21.312-.063-.313c-6.626-1.81-10.699-8.551-9.156-15.312a12.786 12.786 0 0 1 4.094-6.844l-.031-.156 57.125-51.125zm-140.657 55.313h23.532l14.625 18.282-5.25 22.812-21.125 10.156-21.188-10.187-5.25-22.813zm75.438 62.563c1-.05 1.995.04 2.969.219l.125-.157 76.156 12.875c-11.146 31.314-32.473 58.44-60.969 76.594l-29.562-71.406.093-.125c-2.715-6.31.002-13.71 6.25-16.719 1.6-.77 3.271-1.197 4.938-1.281zm-127.906.312c5.811.082 11.024 4.116 12.375 10.032.632 2.77.324 5.513-.72 7.937l.22.281-29.25 70.688c-27.348-17.549-49.13-43.824-60.782-76.063l75.5-12.812.125.156c.845-.155 1.701-.23 2.532-.219zm63.78 30.97a12.764 12.764 0 0 1 6.032 1.28c2.56 1.233 4.537 3.174 5.781 5.5h.282l37.218 67.25a154.256 154.256 0 0 1-14.875 4.157c-28.464 6.463-56.838 4.504-82.53-4.25l37.124-67.125h.063a12.91 12.91 0 0 1 10.906-6.813z",
    fill: "#fff",
    stroke: "#fff",
    strokeWidth: ".25",
    overflow: "visible"
  }));
};

KubesLogo.propTypes = {
  className: PropTypes__default.string
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

var s$h = {"input":"styles-module_input__sD-2c","light":"styles-module_light__2R293"};

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
      otherProps = _objectWithoutProperties(_ref, ["name", "value", "inputStyle", "clampValueOnBlur", "className", "isDisabled", "min", "max", "step", "onChange"]);

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

  return React__default.createElement("input", _extends({
    type: "number",
    name: name,
    value: value,
    min: min,
    max: max,
    step: step,
    className: cn(className, inputStyle && s$h[inputStyle], s$h.input),
    disabled: isDisabled,
    onBlur: handleOnBlur,
    onChange: handleOnChange
  }, otherProps));
};

NumberInput.propTypes = {
  name: PropTypes__default.string.isRequired,
  value: PropTypes__default.number,
  inputStyle: PropTypes__default.string,
  className: PropTypes__default.string,
  clampValueOnBlur: PropTypes__default.bool,
  isDisabled: PropTypes__default.bool,
  min: PropTypes__default.number,
  max: PropTypes__default.number,
  step: PropTypes__default.number,
  onChange: PropTypes__default.func.isRequired
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

var s$i = {"container":"styles-module_container__22usV","option":"styles-module_option__1k7uJ","input":"styles-module_input__3pf8r","label":"styles-module_label__1EhXj"};

var RadioButtonGroup = function RadioButtonGroup(_ref) {
  var name = _ref.name,
      options = _ref.options,
      active = _ref.active,
      _onChange = _ref.onChange,
      isDisabled = _ref.isDisabled,
      className = _ref.className;
  return React__default.createElement("div", {
    className: cn(className, s$i.container)
  }, options.map(function (o) {
    return React__default.createElement("div", {
      key: o.value,
      className: s$i.option
    }, React__default.createElement("input", {
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
    }), React__default.createElement("label", {
      htmlFor: o.value,
      className: s$i.label
    }, o.label));
  }));
};

RadioButtonGroup.propTypes = {
  name: PropTypes__default.string.isRequired,
  options: PropTypes__default.arrayOf(PropTypes__default.shape({
    value: PropTypes__default.string.isRequired,
    label: PropTypes__default.string.isRequired
  })).isRequired,
  active: PropTypes__default.string.isRequired,
  onChange: PropTypes__default.func.isRequired,
  isDisabled: PropTypes__default.bool,
  className: PropTypes__default.string
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

var s$j = {"searchWrapper":"styles-module_searchWrapper__1fBCS","searchIcon":"styles-module_searchIcon__3tpUr","disabled":"styles-module_disabled__3Glhp","searchInput":"styles-module_searchInput__3OG3V"};

var SearchInput = function SearchInput(_ref) {
  var name = _ref.name,
      className = _ref.className,
      isDisabled = _ref.isDisabled,
      otherProps = _objectWithoutProperties(_ref, ["name", "className", "isDisabled"]);

  return React__default.createElement("div", {
    className: s$j.searchWrapper
  }, React__default.createElement(FiSearch, {
    className: cn(isDisabled && s$j.disabled, s$j.searchIcon)
  }), React__default.createElement(Input, _extends({
    type: "search",
    name: name,
    className: s$j.searchInput,
    isDisabled: isDisabled
  }, otherProps)));
};

SearchInput.propTypes = {
  name: PropTypes__default.string.isRequired,
  className: PropTypes__default.string,
  isDisabled: PropTypes__default.bool
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

var s$k = {"container":"styles-module_container__3WaOQ","select":"styles-module_select__2ZcZd","light":"styles-module_light__2JR9i","iconWrapper":"styles-module_iconWrapper__IKE_d","icon":"styles-module_icon__noM9B"};

var Select = function Select(_ref) {
  var inputStyle = _ref.inputStyle,
      className = _ref.className,
      placeholder = _ref.placeholder,
      children = _ref.children,
      isDisabled = _ref.isDisabled,
      otherProps = _objectWithoutProperties(_ref, ["inputStyle", "className", "placeholder", "children", "isDisabled"]);

  return React__default.createElement("div", {
    className: cn(className, inputStyle, s$k.container)
  }, React__default.createElement("select", _extends({
    className: s$k.select,
    disabled: isDisabled
  }, otherProps), placeholder && React__default.createElement("option", {
    value: ""
  }, placeholder), children), React__default.createElement("span", {
    className: s$k.iconWrapper
  }, React__default.createElement(FiChevronDown, {
    className: s$k.icon
  })));
};

Select.propTypes = {
  className: PropTypes__default.string,
  placeholder: PropTypes__default.string,
  inputStyle: PropTypes__default.string,
  children: PropTypes__default.oneOfType([PropTypes__default.element, PropTypes__default.array, PropTypes__default.node]).isRequired,
  isDisabled: PropTypes__default.bool
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

var s$l = {"slider":"styles-module_slider__1QSji"};

var Slider = function Slider(_ref) {
  var name = _ref.name,
      value = _ref.value,
      className = _ref.className,
      isDisabled = _ref.isDisabled,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      onChange = _ref.onChange,
      otherProps = _objectWithoutProperties(_ref, ["name", "value", "className", "isDisabled", "min", "max", "step", "onChange"]);

  var handleOnChange = function handleOnChange(e) {
    onChange(Number(e.target.value));
  };

  return React__default.createElement("input", _extends({
    type: "range",
    name: name,
    value: value,
    min: min,
    max: max,
    step: step,
    className: cn(className, s$l.slider),
    disabled: isDisabled,
    onChange: handleOnChange
  }, otherProps));
};

Slider.propTypes = {
  name: PropTypes__default.string.isRequired,
  value: PropTypes__default.number,
  className: PropTypes__default.string,
  isDisabled: PropTypes__default.bool,
  min: PropTypes__default.number,
  max: PropTypes__default.number,
  step: PropTypes__default.number,
  onChange: PropTypes__default.func.isRequired
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

var s$m = {"container":"styles-module_container__uBiTy","indicator":"styles-module_indicator__wxpiI","positive":"styles-module_positive__1L2yr","warn":"styles-module_warn__25hgG","negative":"styles-module_negative__1Xlsi","neutral":"styles-module_neutral__Hu3-R","inactive":"styles-module_inactive__2BEOW","inFlight":"styles-module_inFlight__pvB0U","pulse":"styles-module_pulse__2lLb3","secondDot":"styles-module_secondDot__otq1K"};

var StatusIndicator = function StatusIndicator(_ref) {
  var status = _ref.status,
      inFlight = _ref.inFlight,
      className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ["status", "inFlight", "className"]);

  return React__default.createElement("span", _extends({
    className: cn(className, inFlight && s$m.inFlight, s$m.container)
  }, otherProps), React__default.createElement(FiCircle, {
    className: cn(s$m[status], s$m.indicator)
  }), inFlight && React__default.createElement(FiCircle, {
    className: cn(s$m.secondDot, s$m[status], s$m.indicator)
  }));
};

StatusIndicator.propTypes = {
  status: PropTypes__default.oneOf(['positive', 'warn', 'negative', 'neutral', 'inactive']).isRequired,
  inFlight: PropTypes__default.bool,
  className: PropTypes__default.string
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

var s$n = {"label":"styles-module_label__2eS3j","disabled":"styles-module_disabled__1oqik","input":"styles-module_input__20ni5","switch":"styles-module_switch__1Zp2y","checked":"styles-module_checked__j1RBX","unchecked":"styles-module_unchecked__1cDY3"};

var Switch$1 = function Switch(_ref) {
  var name = _ref.name,
      label = _ref.label,
      isChecked = _ref.isChecked,
      onChange = _ref.onChange,
      isDisabled = _ref.isDisabled,
      otherProps = _objectWithoutProperties(_ref, ["name", "label", "isChecked", "onChange", "isDisabled"]);

  /* istanbul ignore next */
  var handleOnChange = function handleOnChange() {
    if (isDisabled) return;
    onChange();
  };

  return React__default.createElement("label", _extends({
    className: cn(isDisabled && s$n.disabled, s$n.label),
    htmlFor: name,
    onClick: function onClick() {
      return handleOnChange;
    }
  }, otherProps), React__default.createElement("input", {
    type: "checkbox",
    id: name,
    name: name,
    className: cn(isChecked ? s$n.checked : s$n.unchecked, s$n.input),
    checked: isChecked,
    onChange: handleOnChange,
    disabled: isDisabled
  }), React__default.createElement("span", {
    "aria-hidden": "true",
    className: s$n["switch"]
  }), label);
};

Switch$1.propTypes = {
  name: PropTypes__default.string.isRequired,
  label: PropTypes__default.string.isRequired,
  isChecked: PropTypes__default.bool,
  onChange: PropTypes__default.func,
  isDisabled: PropTypes__default.bool
};
Switch$1.defaultProps = {
  isChecked: false,
  onChange: null,
  isDisabled: false
};
Switch$1.__docgenInfo = {
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

var s$o = {"textArea":"styles-module_textArea__23YCg","light":"styles-module_light__1DopS"};

var TextArea = function TextArea(_ref) {
  var name = _ref.name,
      inputStyle = _ref.inputStyle,
      className = _ref.className,
      rows = _ref.rows,
      isDisabled = _ref.isDisabled,
      otherProps = _objectWithoutProperties(_ref, ["name", "inputStyle", "className", "rows", "isDisabled"]);

  return React__default.createElement("textarea", _extends({
    name: name,
    rows: rows,
    className: cn(className, s$o[inputStyle], s$o.textArea),
    disabled: isDisabled
  }, otherProps));
};

TextArea.propTypes = {
  name: PropTypes__default.string.isRequired,
  inputStyle: PropTypes__default.string,
  className: PropTypes__default.string,
  rows: PropTypes__default.string,
  isDisabled: PropTypes__default.bool
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
exports.Switch = Switch$1;
exports.TextArea = TextArea;
exports.Toast = Toast;
exports.Tooltip = Tooltip;
exports.useToast = useToast;
