var Victor = require('./victor'),
    Main = require('./main');

function initMain() {
    "use strict";

    var element = document.createElement('p');
    element.setAttribute('id', 'mimoText');
    element.innerHTML = 'mimosa';
    document.body.appendChild(element);

    window.main = new Main();
    var victor = new Victor();
    var element = document.createElement('p');

    element.setAttribute('id', 'victorText');
    element.innerHTML = victor.sayHi();
    document.body.appendChild(element);
};

document.addEventListener('DOMContentLoaded', initMain);
