document.getElementById("openTB").addEventListener("click", openMTB);
var a = 0;
function openMTB() {
    if (a == 0) {
document.getElementById("li1").style.display="block";
document.getElementById("li2").style.display="block";
document.getElementById("li3").style.display="block";
document.getElementById("li4").style.display="block";
document.getElementById("li5").style.display="block";
document.getElementById("li6").style.display="block";
a = 1;
    }
    else if (a == 1) {
document.getElementById("li1").style.display="none";
document.getElementById("li2").style.display="none";
document.getElementById("li3").style.display="none";
document.getElementById("li4").style.display="none";
document.getElementById("li5").style.display="none";
document.getElementById("li6").style.display="none";
a = 0;
    }
}
