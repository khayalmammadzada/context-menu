const contextMenu= document.querySelector(".context")
let changeColor=document.querySelector(".change-color")

window.addEventListener("contextmenu", function(e){
e.preventDefault();
contextMenu.style.visibility="visible";
contextMenu.style.top=e.clientY+"px"
contextMenu.style.left=e.clientX+"px"

});

window.addEventListener("click", () => contextMenu.style.visibility="hidden")



changeColor.addEventListener("click", function(){
    random_bg_color();
});

function random_bg_color(){
    var x =Math.round(Math.random() * 256)
    var y =Math.round(Math.random() * 256)
    var z =Math.round(Math.random() * 256)
    var bgColor="rgb("+x+","+y+","+z+")";
    console.log(bgColor);
    document.body.style.background=bgColor;
}


