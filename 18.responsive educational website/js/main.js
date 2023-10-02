let menubtn = document.getElementById("menu-btn");
let navbar = document.querySelector(".navbar");

menubtn.addEventListener("click", () => {
  navbar.style.display = navbar.style.display === "block" ? "none" : "block";
});
