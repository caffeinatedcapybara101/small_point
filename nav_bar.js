// menu display effect source:
//  https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp

/* Open when someone clicks on the menu element */
function openNav() {
    document.getElementById("navbar").style.width = "100%";
    let slideshow = document.getElementsByClassName("slideshow");
    if (slideshow.length != 0) {
        slideshow[0].style.display = "none";
    }
    let pageImg = document.getElementsByClassName("page-img")
    if (pageImg.length != 0) {
        pageImg[0].style.display = "none";
    }
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("navbar").style.width = "0%";
    let slideshow = document.getElementsByClassName("slideshow");
    if (slideshow.length != 0) {
        slideshow[0].style.display = "flex";
    }
    let pageImg = document.getElementsByClassName("page-img")
    if (pageImg.length != 0) {
        pageImg[0].style.display = "flex";
    }
}

window.onresize = function () {
    if (window.innerWidth < 770) {
        document.getElementById("navbar").style.width = "0%";
    }
    if (window.innerWidth > 770) {
        document.getElementById("navbar").style.width = "100%"
        let slideshow = document.getElementsByClassName("slideshow");
        if (slideshow.length != 0) {
            slideshow[0].style.display = "flex";
        }
        let pageImg = document.getElementsByClassName("page-img")
        if (pageImg.length != 0) {
            pageImg[0].style.display = "flex";
        }
    }
}