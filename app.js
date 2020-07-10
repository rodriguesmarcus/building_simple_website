'use strict'

console.log('secret message. learn programming and everything that makes you happy');

let today = new Date()
let formatDate = today.toLocaleDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate