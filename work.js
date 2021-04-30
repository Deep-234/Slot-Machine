
//let btn = document.getElementById('btn')
let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');
let inpSpeed = document.getElementById('inpSpeed')
let values = [
    '😜', '😍', '😘', '😉', '🤦‍♂️', '🌹', '❤', '🤔'
]
function getrandomvalue() {
    return values[Math.floor(Math.random() * 7)]
}

let animationid;
function updateani(newspeed){
    if(animationid) clearInterval(animationid)
   animationid = setInterval(() => {
      value1.innerText = getrandomvalue()
      value2.innerText = getrandomvalue()
      value3.innerText = getrandomvalue()
   }, 1000/newspeed)
}

// when change the speed , it control the final speed
inpSpeed.onchange = function (ev) {
    // root of css
    document.documentElement.style.setProperty('--speed', ev.target.value)
     updateani(ev.target.value)
}
//to control button
var pressedButton = document.getElementsByTagName("button")[0];
pressedButton.addEventListener("click", function (event) {
 
 if((value1.innerText == value2.innerText == value3.innerText) || (value1.innerText == value2.innerText) || (value1.innerText == value3.innerText) || (value3.innerText == value2.innerText)){
     alert("you won maderfuckaa")
 } else{
   alert("Suck it looser")
 }
})