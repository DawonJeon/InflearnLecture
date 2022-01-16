// document.title = "Hello! From JS!"

// const title = document.getElementById("title");

// console.dir(title);

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos)


// const title = document.getElementsByTagName("h1");

// const title = document.querySelector(".hello h1");

// console.log(title);

// title.style.color = "blue";
//h1 스타일을 javascript에서도 변경가능 

const title = document.querySelector("div.hello:first-child h1")

function handleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.background = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOOOOD");
}

// title.addEventListener("click", handleClick); 이것과 같은 말이 밑에 표현
title.onclick = handleClick;
// title.addEventListener("mouseenter", handleMouseEnter); 
//마찬가지로 간단하게 표현바꿀수 있음 (바꿀때는 ""없애고, on추가해야함)
title.onmouseenter = handleMouseEnter
title.addEventListener("mouseleave", handleMouseLeave);

/**
 * 축약표현은 나중에 remove할수 없기에 별로 선호 X
 * .addEventListner("event", function); 형식은
 * 후에 .removeEventListner 가 가능함
 */

window.addEventListener("resize", handleWindowResize);

//"resize"는 document가 아니라 window로 호출해야함

window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);