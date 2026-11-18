const myForm = document.querySelector('form');
const input1 = document.getElementById('first');
const input2 = document.getElementById('second');
const result = document.getElementById('res');

myForm.addEventListener('submit',(e)=> {
    e.preventDefault();
});

const add = document.getElementById('add');
const sub = document.getElementById('sub');
const mul = document.getElementById('mul');
const div = document.getElementById('div');

add.addEventListener('click' , ()=> {
    result.textContent = `Result is : ${Number(input1.value) + Number(input2.value)}`;
});
sub.addEventListener('click' , ()=> {
    result.textContent = `Result is : ${Number(input1.value) - Number(input2.value)}`;
});
mul.addEventListener('click' , ()=> {
    result.textContent = `Result is : ${Number(input1.value) * Number(input2.value)}`;
});
div.addEventListener('click' , ()=> {
    if(Number(input2.value) === 0 && Number(input1.value) === 0){
        result.textContent = `Result is : ${0}`;
        return;
    }
    if(Number(input2.value) === 0 || Number(input1.value) === 0){
        result.textContent = `Result is : ${"cannot divide"}`;
        return;
    }
    result.textContent = `Result is : ${Number(input1.value) / Number(input2.value)}`;
});