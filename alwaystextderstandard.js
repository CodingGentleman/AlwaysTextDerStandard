// ==UserScript==
// @name         Always text.derstandard.at
// @namespace    https://www.codinggentleman.com
// @version      0.3
// @description  Redirect *.derstandard to text.derstandard
// @include      http*://*derstandard.at/*
// @grant        none
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/CodingGentleman/AlwaysTextDerStandard/master/alwaystextderstandard.js
// ==/UserScript==

(function() {
    'use strict';
    if(location.href.indexOf("text.derstandard.at") === -1) {
        var index = location.href.indexOf("derstandard.at");
        location.replace("https://text." + location.href.substring(index));
    }
})();
