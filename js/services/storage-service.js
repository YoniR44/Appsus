'use strict';

export default {
    store,
    load,
    getDataFromFile
}

function store(key, value) {
    var str = JSON.stringify(value);
    localStorage.setItem(key, str);
}

function load(key) {
    var str = localStorage.getItem(key)
    return JSON.parse(str)
}

function getDataFromFile() {
    return fetch('data/data.json')
      .then(response => response.json())
  };
  
