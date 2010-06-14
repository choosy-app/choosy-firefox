choosy.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ choosy.showFirefoxContextMenu(e); }, false);
};

choosy.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-choosy").hidden = gContextMenu.onImage;
};

window.addEventListener("load", choosy.onFirefoxLoad, false);
