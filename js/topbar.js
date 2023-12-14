
window.onscroll = moveTopbar;

function moveTopbar() {
    if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
        document.getElementById("topbar").style.top = "0px";
    } else {
        console.log(document.documentElement.scrollTop);
        document.getElementById("topbar").style.top = "-50px";
    }
}