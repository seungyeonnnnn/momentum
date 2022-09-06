const h1 = document.getElementById("ti");
document.getElementById("ti").textContent = "Changed!";

function handleTitleClick(){
    h1.innerText = "Got you!";
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.style.color = "red";
}

function handleMouseLeave(){
    h1.style.color = "gray";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("All Good");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const grab = document.getElementsByTagName("h3");
console.log(grab);

const grab2 = document.querySelector(".hello2 h3:last-child"); // CSS와 syntax 동일. 이거 쓰면 됨.
//querySelectorAll은 전체 다 array로 querySelector는 맨 앞에 하나만
console.log(grab2);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);