'use strict'
const score0El= document.querySelector('#score--0');
const score1El=document.getElementById('score--1')

const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1 ')
const current0El=document.getElementById('current--0')
const current1El=document.getElementById('current--1')

const diceEl=document.querySelector('.dice') 
const btnNew=document.querySelector('.btn--new')
const btnRoll=document.querySelector('.btn--roll')
const btnHold=document.querySelector('.btn--hold')


score0El.textContent=0
score1El.textContent=0 


diceEl.classList.add('hidden');
const scores=[0,0] 
let currentScore=0
let activePlayer=0 
let playing=true;


btnRoll.addEventListener('click',function()
{
if(playing){
const dice =Math.trunc(Math.random()*6)+1


console.log(dice)
diceEl.src = `/Users/admin/Downloads/complete-javascript-course-master/07-Pig-Game/final/dice-${dice}.png`;

 
if(dice!==1){
currentScore =currentScore+dice
document.getElementById(`current--${activePlayer}`).textContent= currentScore;  
}
else {
document.getElementById(`current--${activePlayer}`).textContent= currentScore;   
currentScore=0
activePlayer =  activePlayer===0 ? 1:0 
player0El.classList.toggle('player-active')
player1El.classList.toggle('player-active')
}

}
})


btnHold.addEventListener('click',function(){
if(playing){

 
 console.log(scores[activePlayer ])
scores[activePlayer]+= currentScore 
document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]; 
     
if(scores[activePlayer]>=100 ){
playing=false;
diceEl.classList.add('hidden')

   document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
   document.querySelector(`.player--${activePlayer}`).classList.remove ('player--winner')
}
else{

document.getElementById(`current--${activePlayer}`).textContent= currentScore;   
currentScore=0
activePlayer =  activePlayer===0 ? 1:0 
player0El.classList.toggle('player-active')
player1El.classList.toggle('player-active')
} 
}
})


btnNew.addEventListener('click',function(){
score0El.textContent=0
score1El.textContent =0 
current0El.textContent=0
current1El.textContent=0    
player0El.classList.remove('player--winner')
player1El.classList.remove('player--winner')

player0El.classList.add('player--active')
player1El.classList.remove('player--active')
})
