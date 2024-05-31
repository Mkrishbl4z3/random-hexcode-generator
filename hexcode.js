const color = document.getElementById("hex")
const backgroundcolor = document.getElementById("bg")

var hexcode;

function generate(){
    let  background =  "#"+Math.random().toString(16).slice(2,8);
    console.log(background);
    hexcode = background;
    color.innerHTML = hexcode;
    backgroundcolor.style.backgroundColor= hexcode;
}

generate();