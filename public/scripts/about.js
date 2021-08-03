"use strict";

var firestore = firebase.firestore();

const docRef = firestore.collection("fl_content").doc("fXJvFXnibGxl7maesHAr");
const domAboutImage = document.querySelector("#aboutImage");

window.onload = function () {
    document.getElementById("first-heading").innerHTML = "JS Connected2";
    console.log("hello world");
    
    docRef.get().then(function (doc) {
        if (doc && doc.exists) {
            const docData = doc.data();
            domAboutImage.src = docData.aboutImage;
            console.log("data retrieved: ", docData.aboutImage);
        }
    }).catch(function (error){
        console.log("error in aboutImage: ", error);
    })
};