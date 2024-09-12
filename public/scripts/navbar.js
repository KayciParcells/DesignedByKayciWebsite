document.addEventListener("DOMContentLoaded", function() {
  fetch('../Portfolio/navbar.html')
  .then(response => response.text())
  .then(data => { 
    document.getElementById('navbar-container').innerHTML = data;
  });
});