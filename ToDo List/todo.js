window.onload = function () {

    var todoList = [];
    if(localStorage.getItem('todo') != undefined) {
        todoList = JSON.parse(localStorage.getItem('todo'));
        out();
    }
    document.getElementsByClassName("button_add")[0].onclick  = function () {
       var re = document.getElementsByClassName("app__task-new")[0].value;
       var temp = {};
       temp.todo = re;
       temp.check = false;
       var i = todoList.length;
       todoList[i] = temp;
       console.log(todoList);
       out();
       localStorage.setItem('todo',JSON.stringify(todoList));
    }

    function out() {
        var out = '';
        for (var key in todoList) {

            if (todoList[key].check === true){
                out += '<input type="checkbox" checked>'
            }
            else {
                out += '<input type="checkbox">'
            }
            out += todoList[key].todo + '<br>';


        }
        document.getElementById('app__list').innerHTML = out;
        document.getElementById('app__task-new').value = '';

    }

}