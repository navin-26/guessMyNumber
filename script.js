'use strict';

// document.querySelector('.message').textContent="correct number : ";

// document.querySelector('.number').textContent=13;
 
let number=Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore=0;
let value=document.querySelector('.number').textContent;
const input = document.querySelector('input');
console.log(input);

function check(){
     const guess = Number(document.querySelector('.input-box').value);
     if (value === '?') {
       if (guess === number) {
         document.querySelector('.number').textContent = number;
         document.querySelector('.message').textContent = '🎉 correct answer';
         if (highscore < score) {
           highscore = document.querySelector('.highscore').textContent = score;
         }
         document.querySelector('body').style.backgroundColor = '#8ac926';
         value = number;
       }
       if (score > 1) {
         if (!guess || guess < 0) {
           document.querySelector('.message').textContent = '🚨 invalid number';
           document.querySelector('body').style.backgroundColor = '#b80c09';
         } else if (guess > 20) {
           document.querySelector('.message').textContent = '❌ between 1 - 20';
           document.querySelector('body').style.backgroundColor = '#b80c09';
         } else if (guess !== number) {
           document.querySelector('.message').textContent =
             guess < number ? '🔻 too low' : '🔺 too high';
           document.querySelector('body').style.backgroundColor = '#12100E';
           score--;
           document.querySelector('.score').textContent = score;
         }
       } else {
         document.querySelector('.message').textContent =
           '🥀 you lost . play again';
         document.querySelector('.score').textContent = 0;
       }
     } else {
       document.querySelector('.message').textContent = '💫 play again';
     }
   
}
document.querySelector('.check').addEventListener('click', ()=>{
    check();
});
document.querySelector('.again').addEventListener('click',function(){
   score=document.querySelector('.score').textContent = 20;
      document.querySelector('.message').textContent = '⌛ Start guessing....';
        
         number = Math.trunc(Math.random() * 20) + 1;
          document.querySelector('body').style.backgroundColor = '#12100E';
          value=document.querySelector('.number').textContent = '?';
            document.querySelector('.input-box').value ='';
           


});

input.addEventListener('keyup', (event)=>{
  if (event.key === 'Enter') {
    check();
  }
});

