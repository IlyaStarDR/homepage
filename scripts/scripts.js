document.getElementById("twittie").addEventListener("click", function() {
  document.querySelector("#twittie > audio").play();
});

document.getElementById("trump-image").addEventListener("click", function() {
  document.querySelector("#trump-image > audio").play();
});

document.getElementById("lazy").addEventListener("click", function() {
  document.querySelector("#trump-image > img.trump").style.display = "none";
  document.querySelector("#lazy-trump > img").style.display = "block"
});

document.getElementById("lazy-trump").addEventListener("click", function() {
  document.querySelector("#lazy-trump > audio").play();
});


document.getElementById("gif").addEventListener("mouseover", function() {
  document.getElementById("harlem").play();
});

document.getElementById("gif").addEventListener("mouseout", function() {
  document.getElementById("harlem").pause();
});


