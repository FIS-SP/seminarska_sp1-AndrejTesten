var modal = document.getElementById("myModal");

var btnrez = document.querySelectorAll(".btnrez");

var span = document.getElementsByClassName("close")[0];

var menubtn = document.querySelectorAll(".menu-btn");

let navbar = document.querySelector(".navbar");

menubtn.forEach(function (mb) {
    mb.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});
  
btnrez.forEach(function (br) {
  br.addEventListener("click", function () {
    modal.style.display = "block";
  });
});
span.onclick = function () {
  modal.style.display = "none";
};




window.onscroll = () => {
  navbar.classList.remove("active");
};

