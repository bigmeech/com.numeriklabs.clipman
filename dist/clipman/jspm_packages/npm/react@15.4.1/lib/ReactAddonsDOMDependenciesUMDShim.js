/* */ 
(function(process) {
  'use strict';
  exports.getReactDOM = function() {
    return ReactDOM;
  };
  exports.getReactInstanceMap = function() {
    return ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactInstanceMap;
  };
  if (process.env.NODE_ENV !== 'production') {
    exports.getReactPerf = function() {
      return ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactPerf;
    };
    exports.getReactTestUtils = function() {
      return ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactTestUtils;
    };
  }
})(require('process'));
