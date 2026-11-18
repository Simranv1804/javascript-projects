const h1 = document.getElementById("title");
let count =0;
const inc = document.getElementById("btn");
inc.addEventListener('click' , () => {
    count++;
    h1.textContent = count;
});

const dec = document.getElementById("btn1");
dec.addEventListener('click' , () => {
    if(count > 0){
    count--;
    }
    h1.textContent = count;
});

const reset = document.getElementById("btn2");
reset.addEventListener('click', () => {
    count =0;
    h1.textContent = count;
});