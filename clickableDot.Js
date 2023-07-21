// console.log("hi");
// console.log(Math.floor(Math.random() * 100));
// Math.floor(Math.random())
const button = document.getElementsByClassName("butt");
function color_generator() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgcolor = "rgb("+x+","+y+","+z+")";
    console.log(bgcolor);
    button[0].style.backgroundColor = bgcolor;
    }
// color_generator();
document.addEventListener("click", (event) => {
   color_generator();
   console.log(event);
   button[0].textContent = "Click for Colors!";
});
