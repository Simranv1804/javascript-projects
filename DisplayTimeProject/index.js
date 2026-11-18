const heading = document.querySelector('h1');

// setTimeout : one time execution
// setInterval : continuous time execution


setInterval(()=>{
    let time = new Date();
heading.textContent = time.toLocaleString();
},1000);