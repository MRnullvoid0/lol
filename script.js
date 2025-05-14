const button = document.getElementById("nig");
w = 0


// Add a click event listener
button.addEventListener("click", function() {
 w = w + 1
 console.log(w)
 document.getElementById("VD").textContent = w;

})