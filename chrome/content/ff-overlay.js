choosy.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ choosy.showFirefoxContextMenu(e); }, false);
};

choosy.showFirefoxContextMenu = function(event) {
  document.getElementById("context-choosy").hidden = !gContextMenu.onLink;
};

window.addEventListener("load", choosy.onFirefoxLoad, false);
