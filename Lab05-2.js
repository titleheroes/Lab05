document.querySelector('input').addEventListener("change", add);
var list = document.querySelector('ul');
var close = document.getElementsByClassName("close");

//add event
function add() {
    var i = document.createElement("i");
    i.className = "fas fa-trash close";

    var input = document.querySelector('input').value;
    var li = document.createElement('li');

    li.appendChild(i);
    li.appendChild(document.createTextNode('               ' + input));
    list.appendChild(li);
    document.querySelector('input').value = '';

    //remove event
    i.addEventListener('click' ,function()  { i.parentElement.remove(); }  );
}

//check event
list.addEventListener('click', function(onClick) {
    onClick.target.classList.toggle('done');
  }, false);