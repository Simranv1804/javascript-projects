const boy = document.getElementById('boy');
const girl = document.getElementById('girl');
const myform = document.querySelector('form');

const btn = document.querySelector('button');

const heading = document.querySelector('h1');

myform.addEventListener('submit' , (e)=> {

    e.preventDefault();

    const value1 = boy.value.length;
    const value2 = girl.value.length;

    const result = (value1*value2*value1*value2) % 101;

    heading.textContent = `Result is : ${result}%`;
})