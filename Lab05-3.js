var time = 0;
//time 0 = NIGHT
//time 1 = DAY

function onClick(){
    if (time % 2 === 0) {
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
        document.querySelector('h1').innerHTML = 'GOOD NIGHT';
        document.getElementById('sp1').innerHTML = 'night';
        document.getElementById('sp2').style.color = 'blue';
        document.getElementById('sp3').innerHTML = 'day';
        document.getElementById('sp4').innerHTML = 'day';
        time++;
    } //NIGHT MODE
    else {
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';
        document.querySelector('h1').innerHTML = 'GOOD MORNING';
        document.getElementById('sp1').innerHTML = 'day';
        document.getElementById('sp2').style.color = 'red';
        document.getElementById('sp3').innerHTML = 'night';
        document.getElementById('sp4').innerHTML = 'night';
        time--;
    } // DAY MODE
}

document.querySelector('button').addEventListener('click', onClick);