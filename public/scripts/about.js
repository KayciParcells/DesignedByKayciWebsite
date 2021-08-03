'use strict';

var firebaseConfig = {
        apiKey: 'AIzaSyCdxP7dzSDtOfqOXUNmvXbIwYmLvuPhEis',
        authDomain: 'designed-by-kayci.firebaseapp.com',
        databaseURL: 'https://designed-by-kayci.firebaseio.com',
        storageBucket: 'designed-by-kayci.appspot.com'
};
firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();
var pathReference = storage.ref("flamelink/media/Composition-01.jpg");
var domAboutImage = document.querySelector("#aboutImage");

window.onload = function () {
    document.getElementById("first-heading").innerHTML = "Kayci Parcells";
    console.log("hello world");
    var url = pathReference.getDownloadURL();
    domAboutImage.setAttribute('src', url);
    }.catch(function (error){
        console.log("error in aboutImage: ", error);
    });