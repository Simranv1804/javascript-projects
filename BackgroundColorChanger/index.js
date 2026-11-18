const bgcolor = document.getElementById('root');
const body = document.querySelector('body');

bgcolor.addEventListener('click' , (e) => {
    body.style.backgroundColor = e.target.id;
})