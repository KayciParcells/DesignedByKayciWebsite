import firebase from "/firebase/app";
import "/firebase/storage";

var storage = firebase.storage();
var storageRef = storage.ref("about/Composition_ForScreens.png");

window.onload = function () {
        storageRef.getDownloadURL().then(function(url) {
          console.log(url);
        });
    };