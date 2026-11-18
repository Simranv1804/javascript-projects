setInterval(()=>{
    let currentTimeStamp = Date.now();
let olympicTimeStamp = new Date(2028,6,14).getTime();

console.log(currentTimeStamp);
console.log(olympicTimeStamp);

let remainingTime = olympicTimeStamp - currentTimeStamp;

const days = Math.floor((remainingTime)/(1000*60*60*24));
remainingTime %= (1000*60*60*24);

const hours = Math.floor((remainingTime)/(1000*60*60));
remainingTime %= (1000*60*60);

const minute = Math.floor((remainingTime)/(1000*60));
remainingTime %= (1000*60);

const second = Math.floor((remainingTime)/(1000));
remainingTime %= (1000);

const h2 = document.querySelector('h2');
h2.textContent = `Date : ${days} Hours : ${hours} Minute : ${minute} Second : ${second}`;
},1000);