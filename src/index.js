'use strict';



function Clipboard(clipdata){
  this.clipdata = clipdata
}

/**
 * manages clipboard interations and settings.
 * @param store
 * @constructor
 */
function ClipboardManager(store){
  this.defaultSettings = { clipboardSize:8 };
  this.activeClipboardPosition = 0;
  this.clipboards = JSON.parse(store.get('clipboards') || JSON.stringify([]));
  this.settings = JSON.parse(store.get('settings') || JSON.stringify({}));
}

/**
 * retrives settings from the UI
 * @param options
 */
ClipboardManager.prototype.setOptions = function(options){
  this.store.set('settings', _.defaults(this.defaultSettings, options));
};

/**
 * retrieves the next clipbord data
 */
ClipboardManager.prototype.next = function(){
  if(this.activeClipboardPosition <= (this.clipboards.length)){
    this.activeClipboardPosition = this.activeClipboardPosition + 1;
    this.clipboards[this.activeClipboardPosition].focus();
  }
};

/**
 * goes back to the previous clipboard.
 */
ClipboardManager.prototype.previous = function(){
  if(this.activeClipboardPosition > 0){
    this.activeClipboardPosition = this.activeClipboardPosition - 1;
    this.clipboards[this.activeClipboardPosition].focus();
  }
};

ClipboardManager.prototype.insertContent = function(event){
  const clipdata = {
    content: event.path[0].innerText,
    uiIndex: ++this.activeClipboardPosition
  };
  console.log(event.clipboardData.getData('text/html'));
  this.clipboards.push(new Clipboard(event.clipboardData));
};

ClipboardManager.prototype.addClipboard = function(clipboard){
  this.clipboards.push(clipboard);
};

ClipboardManager.prototype.deleteLastClipboard = function(){
  this.clipboards.pop();
};

ClipboardManager.prototype.getContent = function(data){
  return data;
};

function ClipboardUI(){
  $('#sb-popup').css({ display:'block' });
  this.clipManager = new ClipboardManager(store);
  this.clipboards = $('.sb-clipboard');
}

/**
 * toggle the UI when the HUD keys are used
 * @param e
 */
ClipboardUI.prototype.show = function(e){
  if (e.metaKey && e.shiftKey) { $('#sb-popup').css({ display:'block' }) }
  if (!(e.metaKey && e.shiftKey)) { $('#sb-popup').css({ display:'none' }) }

  if (e.metaKey && e.shiftKey && e.key === '+') {
    this.clipManager.addClipboard(new Clipboard());
  }
  if (e.metaKey && e.shiftKey && e.key === '-') {
    this.clipManager.deleteLastClipboard();
  }

  if (e.metaKey && e.shiftKey && (e.code === 'ArrowRight')) {
    this.clipManager.next()
  }

  if(e.metaKey && e.shiftKey && (e.code === 'ArrowLeft')){
    this.clipManager.previous()
  }
};

(function(){

  var clipUI = new ClipboardUI();
  /**
   * for debugging only
   * @param msg
   */
  function log(msg){
    console.log(msg);
  }

  //inject clipboard selector UI to context page
  $.get(chrome.extension.getURL('/app.html'), function(data){
    $($.parseHTML(data)).appendTo('body');
  });

  try {
    // TODO: Fix the logic here
    if(!document.queryCommandSupported('copy')){
      console.error('This extension will not work on your browser. Please enable clipboard manipulation')
    }
  } catch (e) { console.log(e) }

  document.addEventListener('copy', clipUI.clipManager.insertContent.bind(clipUI));
  document.addEventListener('paste', clipUI.clipManager.getContent.bind(clipUI));
  document.addEventListener('keydown', clipUI.show.bind(clipUI));
  document.addEventListener('keyup', clipUI.show.bind(clipUI));
})();