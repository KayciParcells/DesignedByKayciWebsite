import firebase from 'firebase/app';
import 'firebase/storage';

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