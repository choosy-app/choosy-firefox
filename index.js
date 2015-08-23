var buttons = require('sdk/ui/button/action');
var chrome = require('chrome');
var contextMenu = require('sdk/context-menu');
var self = require('sdk/self');
var tabs = require('sdk/tabs');

var Choosy = {
  'promptAll': function (url) {
    var uri, service;

    uri = this.buildURI('prompt.all', url);
    service = chrome.Cc['@mozilla.org/uriloader/external-protocol-service;1'].
      getService(chrome.Ci.nsIExternalProtocolService);

    service.loadURI(uri, null);
  },

  'buildURI': function (method, url) {
    var service, uri;

    service = chrome.Cc['@mozilla.org/network/io-service;1'].
      getService(chrome.Ci.nsIIOService);
    uri = 'x-choosy://' + method + '/' + escape(url);
    return service.newURI(uri, null, null);
  }
};

buttons.ActionButton({
  'id': 'choosy',
  'label': 'Open with Choosy',
  'icon': {
    '16': './icon16.png',
    '32': './icon32.png',
    '64': './icon64.png'
  },
  onClick: function (state) {
    Choosy.promptAll(tabs.activeTab.url);
  }
});

contextMenu.Item({
  'label': 'Open Link with Choosy',
  'context': contextMenu.SelectorContext('a[href]'),
  'image': self.data.url('icon32.png'),
  'contentScript': 'self.on("click", function (el) { self.postMessage(el.href); });',
  'onMessage': function (url) {
    Choosy.promptAll(url);
  }
});
