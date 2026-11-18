const quotes = [
  "Success is the sum of small efforts repeated day in and day out.",
  "The best way to learn programming is by building projects.",
  "Dream big, start small, act now.",
  "Consistency beats motivation.",
  "Every expert was once a beginner.",
  "Mistakes are proof that you are trying.",
  "Do something today that your future self will thank you for.",
  "Great things take time.",
  "Stay focused and never stop learning.",
  "Your only limit is your mindset.",
  "Hard work beats talent when talent doesn't work hard.",
  "Small progress is still progress.",
  "Believe in yourself and all that you are.",
  "Discipline is choosing what you want most over what you want now.",
  "Stay hungry, stay foolish.",
  "Learning never exhausts the mind.",
  "The secret of getting ahead is getting started.",
  "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
  "Don't watch the clock; do what it does. Keep going.",
  "Push yourself because no one else is going to do it for you.",
  "The future depends on what you do today.",
  "Opportunities don't happen. You create them.",
  "Focus on progress, not perfection.",
  "A journey of a thousand miles begins with a single step.",
  "Your dreams don't work unless you do.",
  "Never give up on something you really want.",
  "Stay positive, work hard, make it happen.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Keep learning, keep growing, keep improving."
];
const button = document.getElementById('btn');
const heading = document.getElementById('head');
button.addEventListener('click' ,()=> {
    const index = Math.floor(Math.random()*quotes.length);
    heading.textContent = quotes[index];
})