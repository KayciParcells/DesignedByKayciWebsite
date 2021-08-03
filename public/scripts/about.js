"use strict";

var firestore = firebase.firestore();
var storage = firebase.storage();
var pathReference = storage.ref("media/Composition-01.jpg")

//const docRef = firestore.collection("fl_content").doc("fXJvFXnibGxl7maesHAr");
const domAboutImage = document.querySelector("#aboutImage");

window.onload = function () {
    document.getElementById("first-heading").innerHTML = "Kayci Parcells";
    console.log("hello world");
    
//    docRef.get().then(function (doc) {
//        if (doc && doc.exists) {
//            const docData = doc.data();
//            domAboutImage.src = docData.aboutImage;
//            console.log("data retrieved: ", docData.aboutImage);
//        }
    var url = pathReference.getDownloadURL();
    domAboutImage.setAttribute('src', url);
    }).catch(function (error){
        console.log("error in aboutImage: ", error);
    })
};