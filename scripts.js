console.log('---JS---')

let count = 0;
const counterSelector = document.getElementById('counter');

function plus(){
    counterSelector.innerText = ++count;
}
function minus(){
    counterSelector.innerText = --count;
}
function reset(){
    count = 0;
    counterSelector.innerText = 0;
}
