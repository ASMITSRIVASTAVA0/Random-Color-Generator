let jsbtn=document.querySelector("button");

jsbtn.addEventListener("click",function(){
    console.log("generate color request");
    let h3=document.querySelector("h3");
    let randomColor=getRandomColor();

    h3.innerText=randomColor;

    let divobj=document.querySelector("div");
    // divobj.style.backgroundColor="rgb(255, 255, 24)";
    divobj.style.backgroundColor=getRandomColor();

    console.log("random color generated");
});



function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red}, ${green}, ${blue})`;
    return color;
}
// console.log(getRandom);
function getRandom(){
    return Math.floor(Math.random(255)*100);
}