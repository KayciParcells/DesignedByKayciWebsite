import firebase from 'firebase/app';
import 'firebase/storage';

var storage = firebase.storage();
var pathReference = storage.ref("flamelink/media/Composition-01.jpg");
var domAboutImage = document.querySelector("#aboutImage");
var storageRef = firebase.storage.ref("about/Composition_ForScreens.png");

window.onload = function () {
        storageRef.getDownloadURL().then(function(url) {
          console.log(url);
        });
    };