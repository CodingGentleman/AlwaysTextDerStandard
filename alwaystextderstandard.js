// ==UserScript==
// @name         Always next.derstandard.at
// @namespace    https://www.codinggentleman.com
// @version      0.4
// @description  Redirect *.derstandard to next.derstandard
// @include      http*://*derstandard.at/*
// @grant        none
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/CodingGentleman/AlwaysTextDerStandard/master/alwaystextderstandard.js
// ==/UserScript==

(function() {
    'use strict';
    if(location.href.indexOf("next.derstandard.at") === -1) {
        var index = location.href.indexOf("derstandard.at");
        location.replace("https://next." + location.href.substring(index));
    }
})();
