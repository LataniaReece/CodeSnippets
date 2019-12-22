btnEl = document.getElementById("btn")
overlayBtnEl = document.getElementById("overlayBtn")
overlayEl = document.getElementById("overlay")
btnEl.addEventListener("click", overlayOn)
overlayBtnEl.addEventListener("click", overlayOff)

function overlayOn() {
    overlayEl.style.display = "block";
};
function overlayOff() {
    overlayEl.style.display = "none";
};


