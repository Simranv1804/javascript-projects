const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "Why did the JavaScript developer go broke? Because he kept using up all his cache.",
  "Why do Java developers wear glasses? Because they don't C#.",
  "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
  "Why was the computer cold? It forgot to close its Windows.",
  "Why did the programmer quit his job? Because he didn't get arrays.",
  "What's a programmer's favorite hangout place? Foo Bar.",
  "Why was the JavaScript file sad? Because it didn't know how to 'null' its feelings.",
  "Why do programmers hate nature? Too many bugs.",
  "Why was the computer late? It had a hard drive.",
  "Why did the function return early? Because it had a date.",
  "Why do coders love coffee? Because it helps with Java.",
  "Why was the website feeling down? It lost its domain.",
  "What do you call a programmer from Finland? Nerdic.",
  "Why did the developer go outside? To get more bytes.",
  "Why was the keyboard always tired? Because it had too many shifts.",
  "Why don't programmers like to go outside? The sunlight causes too many reflections.",
  "Why did the coder bring a ladder? To reach the next level.",
  "What is a computer's favorite snack? Microchips.",
  "Why was the browser exhausted? Too many tabs open.",
  "Why did the bug go to school? To improve its debugging skills.",
  "Why was the smartphone wearing glasses? It lost its contacts.",
  "What do computers eat for lunch? Byte-sized meals.",
  "Why did the internet break up with the computer? There was no connection.",
  "Why was the code always calm? It had exception handling.",
  "Why did the developer stay in bed? He had a caching problem.",
  "Why did the computer keep sneezing? It had a virus.",
  "Why did the programmer get stuck in the shower? The instructions said: Lather, Rinse, Repeat.",
  "Why was the laptop so smart? It had a lot of memory.",
  "Why did the coder cross the road? To fix the bug on the other side."
];
const heading = document.getElementById('head');
const button = document.getElementById('btn');

button.addEventListener('click' , ()=> {
    let index = Math.floor(Math.random()*jokes.length);
    heading.textContent = jokes[index];
})