function ClipStore(){
  this.cache = [];
}

ClipStore.prototype.put = function(datatransfer){
  thsi.cache.push(datatransfer);
};

ClipStore.prototype.get = function(index){
  return this.cache[index];
};


chrome.runtime.onMessage.addListener(function(req, sender, callback){
  console.log(req);
  callback({req:req, sender: sender});
});