const textArea = document.getElementById('text');
const textCount = document.getElementById('txtcount');
const wordCount = document.getElementById('wordcount');

textArea.addEventListener('input' , ()=> {
    const text = textArea.value;
    const totalTxt = text.trim();

    const arr = totalTxt.split(" ");

    textCount.textContent = `Text Count : ${totalTxt.length}`;
    if(totalTxt === '')
    wordCount.textContent = `Word Count : ${0}`;
else
    wordCount.textContent = `Word Count : ${arr.length}`;
})