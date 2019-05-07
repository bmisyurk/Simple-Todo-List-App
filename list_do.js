function newElement() {
                                             // Create a new list item when clicking on the "Add" button
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    // Create colors for prioritets
    if (document.getElementsByClassName('selectBox')[0].value === "3")
        li.className = "colorW";
    else if (document.getElementsByClassName('selectBox')[0].value === "2")
        li.className = "colorY";
    else
        li.className = "colorR";
    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
                                             // X  - mark on out list(default html)
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
                                             //delete li on click "X"(default html)
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

                                             // Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
                                             //delete li on click "X"(will be create)
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

                                             // Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


(function enter() {
    document.querySelector('input').addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            newElement();
        }
    });
})();











