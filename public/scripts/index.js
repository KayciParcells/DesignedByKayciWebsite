var storage = firebase.storage();
var storageRef = storage.ref("about/Composition_ForScreens.png");
var domAboutImage = document.getElementById("#aboutImage");

window.onload = function () {
    storageRef.getDownloadURL().then(function(url) {
    console.log(url);
    domAboutImage.src = url;
    });
};