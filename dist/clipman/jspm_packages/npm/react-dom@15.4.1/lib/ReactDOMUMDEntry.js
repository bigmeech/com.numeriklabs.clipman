/* */ 
(function(process) {
  'use strict';
  var _assign = require('object-assign');
  var ReactDOM = require('./ReactDOM');
  var ReactDOMUMDEntry = _assign({__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {ReactInstanceMap: require('./ReactInstanceMap')}}, ReactDOM);
  if (process.env.NODE_ENV !== 'production') {
    _assign(ReactDOMUMDEntry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
      ReactPerf: require('./ReactPerf'),
      ReactTestUtils: require('./ReactTestUtils')
    });
  }
  module.exports = ReactDOMUMDEntry;
})(require('process'));
