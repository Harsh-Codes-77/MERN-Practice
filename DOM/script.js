// let id = document.querySelector("#title");
// console.log(id.tagName);

// document.querySelector("h1").textContent = "DOM Manipulation";

// document.querySelector("h1").innerHTML = "<h1>DOM Manipulation</h1>";

// const image = document.querySelector("img");
// console.log(image.getAttribute("src"));

const body = document.querySelector("body");
const btn = document.querySelector("#btn");
const heading = document.querySelector("#title");

function handleClick(){
    heading.textContent = "Button Clicked";
    heading.style.color = "red";
    console.log("Button Clicked");
}

btn.addEventListener("click", handleClick);

// double click event
btn.addEventListener("dblclick", function(){
    heading.textContent = "Button Double Clicked";
    heading.style.color = "blue";
    console.log("Button Double Clicked");
});

// mouseover event
btn.addEventListener("mouseover", function(){
    heading.textContent = "Mouse Over";
    heading.style.color = "green";
    console.log("Mouse Over");
});

// mouseenter event
btn.addEventListener("mouseenter", function(){
    heading.textContent = "Mouse Enter";
    heading.style.color = "yellow";
    console.log("Mouse Enter");
});

// mouseout event
btn.addEventListener("mouseout", function(){
    heading.textContent = "Mouse Out";
    heading.style.color = "black";
    console.log("Mouse Out");
});

// mouseDown event
btn.addEventListener("mousedown", function(){
    heading.textContent = "Mouse Down";
    heading.style.color = "orange";
    console.log("Mouse Down");
});

// mouseUp event
btn.addEventListener("mouseup", function(){
    heading.textContent = "Mouse Up";
    heading.style.color = "purple";
    console.log("Mouse Up");
});

// // mousemove event
// body.addEventListener("mousemove", function(){
//     heading.textContent = "Mouse Move";
//     heading.style.color = "pink";
//     console.log("Mouse Move");
// });