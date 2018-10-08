// ==UserScript==
// @name         Always text.derstandard.at
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirect *.derstandard to text.derstandard
// @include      *://*derstandard.at/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(location.href.indexOf("text.derstandard.at") === -1) {
        var index = location.href.indexOf("derstandard.at");
        location.replace("http://text." + location.href.substring(index));
    }
})();
