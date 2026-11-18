// Condition of strong password 
// 1. number of char >= 8
// 2. Capital letter
// 3. Small Letter
// 4. Special character
// 5. Number must be 
const heading = document.querySelector('h1');
const input = document.getElementById('pwd');
input.addEventListener('input' , ()=>{
    const password =input.value;

    if(password.length < 8){
        heading.textContent = "week Password";
        return;
    }
    let hasCapital = false;
    let hasSmall = false;
    let hasSpecial = false;
    let hasNumber = false;

    for(let i=0;i<password.length;i++){
        let ch = password[i];

        if(ch>='A' && ch <='Z'){
            hasCapital= true;
        }else if(ch>='a' && ch <='z'){
            hasSmall= true;
        }else if(ch>='0' && ch<='9'){
            hasNumber= true;
        }else{
            hasSpecial= true;
        }
    }
    if(hasCapital && hasNumber && hasSmall && hasSpecial){
        heading.textContent = "Strong Password";
    }
})