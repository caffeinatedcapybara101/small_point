// menu display effect source:
//  https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp

/* Open when someone clicks on the menu element */
function openNav() {
    document.getElementById("navbar").style.width = "100%";
    document.getElementsByClassName("slideshow")[0].style.display = "none";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("navbar").style.width = "0%";
    document.getElementsByClassName("slideshow")[0].style.display = "flex";
}