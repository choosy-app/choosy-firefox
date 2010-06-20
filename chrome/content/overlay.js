var choosy = {
  onLoad: function() {
    this.initialized = true;
    this.strings = document.getElementById("choosy-strings");
  },

  onMenuItemCommand: function(event) {
    
  },

  onToolbarButtonCommand: function(event) {
    
  },

  promptAll: function(url) {
    var ioservice = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
    var uriToOpen = ioservice.newURI("x-choosy://prompt.all/" + escape(url), null, null);
    var extps = Components.classes["@mozilla.org/uriloader/external-protocol-service;1"].getService(Components.interfaces.nsIExternalProtocolService);
    extps.loadURI(uriToOpen, null);
  }
};

window.addEventListener("load", choosy.onLoad, false);
