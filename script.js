const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".min");
const hours = document.querySelector(".hr");
const start = document.querySelector(".start");
const cancel = document.querySelector(".cancel");

let sec = 0;
let minn = 0;
let hr = 0;
let startSetInterval;

start.addEventListener("click", iniciar);

function twoDigits(digit) {
  if (digit < 10) {
    return "0" + digit;
  } else {
    return digit;
  }
}

function iniciar() {
  startSetInterval = setInterval(
    () => {
      seconds.innerText = sec++;
      seconds.innerHTML = `${twoDigits(sec)}`;

      if (sec > 60) {
        minutes.innerText = minn++;
        sec = 0;
        minutes.innerHTML = `${twoDigits(minn)}`;
      }

      if (minn > 60) {
        hours.innerText = hr++;
        minn = 0;
        hours.innerHTML = `${twoDigits(hr)}`;
      }

    },1000);

  start.setAttribute("disabled", "");
}


cancel.addEventListener('dblclick', reset)
cancel.addEventListener('click', pausar)


function pausar() { 
clearInterval(startSetInterval)
start.removeAttribute('disabled')
}

function reset(){
    seconds.innerText= '00';
    minutes.innerText= '00';
    hours.innerText= '00';
    sec= 0;
    minn=0;
    hr= 0;
}


