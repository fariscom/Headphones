// ======================================================= SHOW MENU ==================================================
// ------------------------- VARIABLES CALL ------------------------
let openn = document.getElementById("open");
let closee = document.getElementById("close");
let nav_barr = document.getElementById("nav_bar");
// ------------------------- VARIABLES CALL ------------------------

// ------------------------- OPEN ------------------------
openn.onclick = function () {
  nav_barr.style.display = "flex";
  closee.style.display = "block";
  openn.style.display = "none";
};
// ------------------------- OPEN ------------------------

// ------------------------- CLOSE ------------------------
closee.onclick = function () {
  nav_barr.style.display = "none";
  closee.style.display = "none";
  openn.style.display = "block";
};
// ------------------------- CLOSE ------------------------
// ======================================================= SHOW MENU ==================================================




// ======================================================= SCROLL UP ==================================================
// ------------------------- VARIABLES CALL ------------------------
let scroll_upp = document.querySelector(".scroll_up")
// ------------------------- VARIABLES CALL ------------------------



// ------------------------- OPEN SHOW ------------------------
window.onscroll = function (){
  if (this.scrollY >= 500) {
    scroll_upp.classList.add("show");
  } else {
    scroll_upp.classList.remove("show");
  }
}
// ------------------------- OPEN SHOW ------------------------



// ------------------------- SCROLL TOP ------------------------
scroll_upp.onclick = function (){
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// ------------------------- SCROLL TOP ------------------------
// ======================================================= SCROLL UP ==================================================