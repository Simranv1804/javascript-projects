const time = document.getElementById('display');
const start = document.getElementById('startBtn');
const stop = document.getElementById('stopBtn');
const restart = document.getElementById('resetBtn');

let second = 0;
let minute = 0;

let interval = null;
let isrunning = false;
start.addEventListener('click' , ()=> {

    if(isrunning == true)  return;

    isrunning = true;
    start.textContent = "resume";

    interval = setInterval( ()=>{
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }

        let sec = String(second).padStart(2,"0");
        let min = String(minute).padStart(2,"0");  

        time.textContent = `${min} : ${sec}`; 

    }, 1000);
});

stop.addEventListener('click' , () => {
    clearInterval(interval);
    isrunning = false;
});

restart.addEventListener('click' , ()=> {
    clearInterval(interval);
    isrunning = false;

    time.textContent = "00 : 00";
    start.textContent = "start";
})