var firebase = require('firebase/app');
require('firebase/storage');

var storage = firebase.storage();
var storageRef = firebase.storage.ref("about/Composition_ForScreens.png");

window.onload = function () {
        storageRef.getDownloadURL().then(function(url) {
          console.log(url);
        });
    };