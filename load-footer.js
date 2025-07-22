fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading mobile footer:", error));

// fetch("footer-desktop.html")
//   .then((response) => response.text())
//   .then((data) => {
//     document.getElementById("footer-desktop-placeholder").innerHTML = data;
//   })
//   .catch((error) => console.error("Error loading desktop footer:", error));
