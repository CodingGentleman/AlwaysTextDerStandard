// ==UserScript==
// @name         Always text.derstandard.at
// @namespace    https://www.codinggentleman.com
// @version      0.2
// @description  Redirect *.derstandard to text.derstandard
// @include      http*://*derstandard.at/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    if(location.href.indexOf("text.derstandard.at") === -1) {
        var index = location.href.indexOf("derstandard.at");
        location.replace("https://text." + location.href.substring(index));
    }
})();
