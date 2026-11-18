
async function github(number = 20){

    const response = await fetch(`https://api.github.com/users?per_page=${number}`);
    const data = await response.json();

    const root = document.getElementById('root');
    root.textContent = "";

    for(const user of data){
       const container = document.createElement('div');
       container.style.textAlign = "center";
       container.style.padding = "20px";

       const img = document.createElement('img');
       img.src = user.avatar_url;
       img.style.height = "200px";
       img.style.width = "200px";

       const name = document.createElement('p');
       name.textContent = user.login;

       container.append(img, name);

       root.append(container);
    }
}

github();

const input = document.querySelector('input');
const search = document.querySelector('button');
// search.addEventListener('click' , ()=> {
//     const number = Number(input.value);
//     github(number);
// })

input.addEventListener('input', ()=>{
    const number = Number(input.value);
    github(number);
})

