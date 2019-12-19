// ==UserScript==
// @name         [GitHub Projects] Auto Full-screen Mode
// @namespace    https://github.com/oleglegun/github-projects-auto-fullscreen
// @version      0.1
// @description  Auto enabling full-screen mode when any of your projects is opened.
// @author       oleglegun <oleg.legun@gmail.com>
// @match        https://github.com/users/*/projects/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/oleglegun/github-projects-auto-fullscreen/master/script.user.js
// ==/UserScript==

(function() {
    'use strict';

    if (!window.location.search) {
        window.location.replace(window.location.href + '?fullscreen=true')
    }
})();
