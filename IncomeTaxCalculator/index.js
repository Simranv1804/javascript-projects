const myForm = document.querySelector('form');
const input = document.getElementById('AI');
const heading = document.getElementById('res');
let ans =0;
myForm.addEventListener('submit' , (e) =>  {
 
    e.preventDefault();

    if(Number(input.value) <= 400000){
        ans = 0.00 * Number(input.value);
    }else if(Number(input.value) <= 800000){
        ans = 0.05 * (Number(input.value) - 400000);
    }else if(Number(input.value) <= 1200000){
        ans = 0.10 * (Number(input.value)-800000) + (400000 * 0.05) ;
    }else if(Number(input.value) <= 1600000){
        ans = 0.15 *(Number(input.value) - 1200000) + (400000 * 0.05) + (400000 * 0.10) ;
    }else if(Number(input.value) <= 2000000){
        ans = 0.20 * (Number(input.value) - 1600000) + (400000 * 0.05) + (400000 * 0.10) + (400000 * 0.15);
    }else if(Number(input.value) <= 2400000){
        ans = 0.25 * (Number(input.value) - 2000000) + (400000 * 0.05) + (400000 * 0.10) + (400000 * 0.15) + (400000 * 0.20);
    }else{
        ans = 0.30 * (Number(input.value) - 2400000) + (400000 * 0.05) + (400000 * 0.10) + (400000 * 0.15) + (400000 * 0.20) + (400000 * 0.25);
    }
    heading.textContent = `Tax is : ${ans}`;
});