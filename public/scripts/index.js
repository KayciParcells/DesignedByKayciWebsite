var storage = firebase.storage();
var storageRef = storage.ref("about/Composition_ForScreens.png");
var domAboutImage = document.querySelector("#aboutImage");

window.onload = function () {
    storageRef.getDownloadURL().then(function(url) {
    domAboutImage.setAttribute('src', url);
    console.log(url);
    });
};