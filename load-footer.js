fetch("footer-mobile.html")
  .then((response) => response.text())
  .then((data) => {
    console.log("Fetched footer length:", data.length);
    console.log(data); // Full output!
    console.log(document.getElementById("footer-placeholder").innerHTML);
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading footer:", error));
