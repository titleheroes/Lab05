var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var spans = document.getElementsByTagName("span");
input.addEventListener("keypress",function(keyPress){
    if(keyPress.which==13){
        var li = document.createElement('li');
        var span = document.createElement('span');
        var icon = document.createElement('icon');
        var newtodo = this.value;
        this.value=" ";
        icon.classList.add('fas', 'fa-trash-alt');
        span.append(icon);
        ul.appendChild(li).append(span," ",newtodo);
        deleteTodo();

    }
});

function deleteTodo(){
    for(let span of spans){
      span.addEventListener ("click",function (){
        span.parentElement.remove();
        event.stopPropagation();
      });
    }
  }

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);