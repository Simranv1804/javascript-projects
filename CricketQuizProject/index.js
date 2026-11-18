const answers = {
      q1:  "Sachin Tendulkar",
      q2:  "11",
      q3:  "West Indies",
      q4:  "50",
      q5:  "Brian Lara",
      q6:  "6",
      q7:  "MS Dhoni",
      q8:  "Leg Before Wicket",
      q9:  "Muttiah Muralitharan",
      q10: "6"
};

const myForm = document.getElementById('quizForm');
const result = document.getElementById('result');
myForm.addEventListener('submit' , (e)=> {
  e.preventDefault();
  
  let score = 0;
  for(let i=1; i<=10; i++){
    let quetions = "q" + i;

    let selected = document.querySelector(`input[name = "${quetions}"]:checked`);

    if(selected == null){
      continue;
    }

    let userAns = selected.value;

    if(userAns == answers[quetions]){
      score++;
    }
  }

  result.style.display = "block";
  result.textContent = `your Score : ${score}/10`;


});