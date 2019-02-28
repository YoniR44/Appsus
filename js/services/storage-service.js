'use strict';

export default {
    store,
    load,
    getDataFromFile,
    saveToFile
}

function store(key, value) {
    var str = JSON.stringify(value);
    localStorage.setItem(key, str);
}

function load(key) {
    var str = localStorage.getItem(key)
    return JSON.parse(str)
}

function getDataFromFile(name) {
    let fileName = '/js/services/data/' + name + '.json';
    console.log(fileName);
    return fetch(fileName)
        .then(response => response.json())
};

function saveToFile(jsonData, filename) {
    let blob = new Blob([jsonData], { type: 'text/plain;charset=utf-8;' })
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename)
    } else {
        let link = document.createElement('a')
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            let url = URL.createObjectURL(blob)
            link.setAttribute('href', url)
            link.setAttribute('download', filename)
            link.style.visibility = 'hidden'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    }
}

