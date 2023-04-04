let myMenubar = document.querySelector(".menubar");

myMenubar.addEventListener("click", onMenubarClicked);
function onMenubarClicked() {
    let mymenuout = document.querySelector(".menuout");
    mymenuout.classList.toggle("menuout-hide");
    mymenuout.classList.toggle("menuout-show");
}