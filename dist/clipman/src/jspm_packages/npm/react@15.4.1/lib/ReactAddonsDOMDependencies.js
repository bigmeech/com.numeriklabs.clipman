/* */ 
(function(process) {
  'use strict';
  var ReactDOM = require('react-dom/lib/ReactDOM');
  var ReactInstanceMap = require('react-dom/lib/ReactInstanceMap');
  exports.getReactDOM = function() {
    return ReactDOM;
  };
  exports.getReactInstanceMap = function() {
    return ReactInstanceMap;
  };
  if (process.env.NODE_ENV !== 'production') {
    var ReactPerf = require('react-dom/lib/ReactPerf');
    var ReactTestUtils = require('react-dom/lib/ReactTestUtils');
    exports.getReactPerf = function() {
      return ReactPerf;
    };
    exports.getReactTestUtils = function() {
      return ReactTestUtils;
    };
  }
})(require('process'));
