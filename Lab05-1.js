document.querySelector('h1').addEventListener('click', onClick);
document.getElementById('b1').addEventListener('click', onClick1);
document.getElementById('b2').addEventListener('click', onClick2);
document.getElementById('b3').addEventListener('click', onClick3);
document.getElementById('b4').addEventListener('click', onClick4);
const text = ':Why you clicked me'

function onClick() {
    document.getElementById('h1').innerHTML = 'Hi';
    document.getElementById('h2').innerHTML = 'Hi';
}
function onClick1() {
    alert(document.getElementById('b1').innerHTML + text);
    document.getElementById('b1').style.backgroundColor = 'black';
    document.getElementById('b1').style.color = 'white';
    document.getElementById('b1').removeEventListener('click', onClick1);
}
function onClick2() {
    alert(document.getElementById('b2').innerHTML + text);
    document.getElementById('b2').style.backgroundColor = 'black';
    document.getElementById('b2').style.color = 'white';
    document.getElementById('b2').removeEventListener('click', onClick2);
}
function onClick3() {
    alert(document.getElementById('b3').innerHTML + text);
    document.getElementById('b3').style.backgroundColor = 'black';
    document.getElementById('b3').style.color = 'white';
    document.getElementById('b3').removeEventListener('click', onClick3);
}
function onClick4() {
    alert(document.getElementById('b4').innerHTML + text);
    document.getElementById('b4').style.backgroundColor = 'black';
    document.getElementById('b4').style.color = 'white';
    document.getElementById('b4').removeEventListener('click', onClick4);
}