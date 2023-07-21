// console.log("hi");
// console.log(Math.floor(Math.random() * 100));
// Math.floor(Math.random())
function color_generator() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgcolor = "rgb("+x+","+y+","+z+")";
    console.log(bgcolor);
    // const newColor = bgcolor;
    // document.body.style.background = bgcolor;
    }
// color_generator();
// const newColor = color_generator();
// const backgroundColor = document.getElementById("butt").style.backgroundColor;
// console.log(newColor);
// console.log(typeof newColor);
// button.addEventListener('click', function color_generator()){
//     button.style.backgroundColor= bgcolor;
// }
let button = document.getElementsByClassName("butt");
let butt = button.butt;
// button.addEventListener("click", () => {
//     color_generator();
// });
document.addEventListener("click", (event) => {
    console.log(event);
});