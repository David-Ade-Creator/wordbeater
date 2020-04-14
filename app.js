window.addEventListener('load', init);
//Global

//available levels
const levels = {
  easy:5,
  medium:3,
  hard:1
}
//change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

//Dom Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'sea',
  'jungle',
  'scream',
  'river',
  'stream',
  'select',
  'evaluate',
  'solve',
  'reason',
  'think',
  'hero',
  'estate',
  'distract',
  'district',
  'discord',
  'donate',
  'decrease',
  'disagree',
  'distance',
  'discuss',
  'dangerous',
  'establishment',
  'elimination',
  'discipline',
  'theatre',
  'masterclass',
  'nutrition',
  'javascript',
  'angular',
  'framework',
  'fabricate',
  'revolver',
  'resolve',
  'siblings',
  'continent',
  'europe',
  'penguin',
  'computer'
];

//initialize game
function init(){
  seconds.innerHTML = currentLevel;
//load word from array
showWord(words);
//call countdown every seconds
setInterval(countdown, 1000);
//start matching inputs
window.addEventListener('input', startMatch);
//check game status
setInterval(checkStatus, 50);
}

function startMatch(){
  if(matchWords()){
  isPlaying = true;
  time = currentLevel + 1;
  showWord(words);
  wordInput.value='';
  score++;
  }
  if(score === -1){
    scoreDisplay.innerHTML = 0;
  }else{
  scoreDisplay.innerHTML = score;
  }
}
// match currentWord to wordInput
function matchWords(){
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML = 'Correct!!!';
    return true;
  }else{
    message.innerHTML = '';
    return false;
    score
  }
}

//pick & show random word
function showWord(words){
  //generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  //generate random word
  currentWord.innerHTML =words[randIndex];
}

function countdown(){
  //make sure time is not runout
  if(time > 0){
    time--;
  }else if(time === 0) {
    isPlaying = false;
  }
// show time
  timeDisplay.innerHTML = time;
}

//check game checkStatus
function checkStatus(){
  if(!isPlaying && time === 0){
    message.innerHTML = 'GAME OVER!!!';
    score = -1;
  }
}
