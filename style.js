function navbtn(){
    var x = document.getElementById("button");
    x.style.transition = "500ms ease-in";
    if (x.style.visibility === "hidden") {
        x.style.opacity = '1';
        x.style.visibility = "visible";
        x.style.transform = "scale(1)";
    }else{
        x.style.opacity = '1';
        x.style.visibility = "visible";
    }
}

function btnback(){
    var x = document.getElementById("button");
    if (x.style.visibility === "visible") {
        x.style.opacity = '0';
        x.style.visibility = "hidden";
        x.style.transform = "scale (0)";
        x.style.transition = "500ms ease-in";
    } else {
        x.style.opacity = '1';
        x.style.visibility = "visible";
    }
}