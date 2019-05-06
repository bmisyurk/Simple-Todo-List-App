var obj = document.getElementsByClassName('button')[0]; //timer on button Clear X
var time = 5;
var timer = setInterval("Start()", 1000);
function Start() {
    if(time !== 1){
        time--;
    }
    else{
        clearInterval(timer);
        obj.innerHTML = '<div class="del_li" onclick="del_li()"> <span >&#10006;</span> <span class="clr">Clear all</span> </div>'
    }
}
function del_li() {                                    // Delete all list
    var element = document.getElementById("myUL");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}