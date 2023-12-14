document.addEventListener("DOMContentLoaded", function() {
    // on dom loaded, load nav bar
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            document.getElementById("topbar-holder").innerHTML = this.responseText;
            console.log(document.getElementById("topbar-holder"));

            window.onscroll = moveTopbar;
        }
    }
    xhttp.open("GET", "navbar.html", true);
    xhttp.send();
})


function moveTopbar() {
    console.log(document.getElementById("topbar"));
    if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
        document.getElementById("topbar").style.top = "0px";
    } else {
        console.log(document.documentElement.scrollTop);
        document.getElementById("topbar").style.top = "-50px";
    }
}

