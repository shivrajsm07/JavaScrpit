// Event listners :

let btn = document.querySelector('button');

// Approach - 1 :

btn.addEventListener("click", fun);
function fun()
{
    alert("Button was clicked");
}


// Approach - 2 : 
// btn.addEventListener("click", () => alert("Button was clicked"));



// bubbling Effect :  (Closest to Farest)
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");

box1.addEventListener("click", function(e) {
         alert("Box1 was clicked");
});
box2.addEventListener("click", function(e) {
        alert("Box2 was clicked");
        e.stopPropagation();
});
box3.addEventListener("click", function(e) {
     alert("Box3 was clicked");
     e.stopPropagation();
});