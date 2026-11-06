document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.md-content a[href^="http"]').forEach(function (a) {
    if (a.hostname !== window.location.hostname) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  });
  document.querySelectorAll('.md-content a[href$=".pdf"]').forEach(function (a) {
    a.target = "_blank";
  });
});

