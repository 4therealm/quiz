// dynamic element targeting
const score_text = document.querySelector ( "#score" );
const clockElement = document.querySelector ( "#clock" );
const play_btn = document.querySelector ( "#play-btn" );
const restart_btn = document.querySelector("#restart")

const hudElement = document.querySelector ( ".hud-box" );
const questionElement = document.querySelector ( ".question-box" );
const answerElement = document.querySelector ( ".answer-box" );
const controlElement = document.querySelector ( ".control-box" );
const lbElement = document.querySelector ( ".lb-box" );

const SCORE_POINTS = 100;

// local storage interaction
const most_recent_score = localStorage.getItem ( 'mostRecentScore' );
const high_scores = JSON.parse ( localStorage.getItem ( "highScores" ) ) || [];

lbElement.innerHTML = high_scores.map ( userData => {
  return `<li class="high-score">
  ${userData.name} - ${userData.score}</li>`;} ).join ( "" );

// other variables


let score = 0;
let timeLeft = 120;
let loaded_question;
let shuffled_questions_pool, currentQuestionIndex

// the array of questions
let question_pool = [
  { question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      {text: '<javascript>', correct: false},
      {text: '<scripting>', correct: false},
      {text: '<js>', correct: false},
      {text: '<script>', correct: true},]},

  { question:'In the statement let Gary = Gary*25; do we in fact NEED that many Garys',
    answers: [
      {text: 'Not even close, give me more!', correct:false},
      {text: 'that is far too many Garys', correct:true},
 ]},
  { question:'Which of the following keywords is used to define a variable in Javascript?',
    answers: [
      {text: 'var', correct:false},
      {text: 'let', correct:false},
      {text: 'var, let, const', correct:true},
      {text: 'const', correct:false},
 ]},
  { question:'Which of the following methods is used to access HTML elements using Javascript?',
    answers: [
      {text: 'getElementbyId()', correct:false},
      {text: 'getElementsByClassName()', correct:false},
      {text: 'local.storage.git.html', correct:false},
      {text: 'Both A and B', correct:true},
 ]},
  { question:'How can a data type be declared to be a constant type?',
    answers: [
      {text: 'var', correct:false},
      {text: 'const', correct:true},
      {text: 'for', correct:false},
      {text: 'constant', correct:false},
 ]},
 { question:'How does a FOR loop start?',
    answers: [
      {text: 'for (i = 0; i <= 5; i++)', correct:true},
      {text: 'for (i <= 5; i++)', correct:false},
      {text: 'for (i = 0; i <= 5)', correct:false},
      {text: 'for i = 1 to 5', correct:false},
 ]},
 { question:'How can you add a comment in a JavaScript?',
 answers: [
   {text: 'This is a comment', correct:false},
   {text: '<!--This is a comment-->', correct:false},
   {text: '//This is a comment', correct:true},
   {text: 'declare (comment)', correct:false},
]},


];

// event listeners
play_btn.addEventListener ( 'click', playGame );

// functions
function playGame () {
  console.log ( "let the games begin" );
  restart()
  shuffled_questions_pool = question_pool.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  quizUi();
  quizTimer();
  loadQuestion();

}

function loadQuestion () {
  console.log ( "Your current score is " + score );
  console.log ( "Question is loaded" );
  blankSlate()
  fireQuestion (shuffled_questions_pool[currentQuestionIndex]);

  }
  
function fireQuestion(question){
  console.log("question fired")
  questionElement.innerHTML = question.question
  
  question.answers.forEach(answers => {
      const button = document.createElement('button')
      button.innerText = answers.text
      button.classList.add('btn')

        if (answers.correct){button.dataset.correct = answers.correct}

      button.addEventListener('click', selectAnswer)
      answerElement.appendChild(button)
      console.log(answers.correct)
    });}

function selectAnswer(e){
  console.log("answer has been selected")
      const selectedButton = e.target
      const correct = selectedButton.dataset.correct
      Array.from(answerElement.children).forEach(button => {
        setClass(button, button.dataset.correct)
      })
    
      if (correct) {
        incrementScore(SCORE_POINTS)
        console.log("You got it right! great job!")    
      }else {
        console.log("Pshhh, read a book")
        timeLeft = timeLeft - 20 
      }
      
      if (shuffled_questions_pool.length > currentQuestionIndex + 1){
        console.log("next question coming up")
        setTimeout( loadQuestion, 1000);
      }else{
        console.log("game over")
        gameOver()
      }
      currentQuestionIndex++ 
    }
function gameOver () {
  localStorage.setItem ( 'mostRecentScore', score );
  console.log ( "Game over, bud" );
  clearInterval ( timer );
  saveScore ();
  resultsUi()

}
function restart(){
  score = 0;
  timeLeft = 120;
  score_text.innerText = score;
  clockElement.innerText= timeLeft
}
function saveScore () {
  let username = prompt ( "Your score = " + score + "\nEnter name and click OK to save score" );
  const userData = {name: username,score: score};
  high_scores.push ( userData );
  localStorage.setItem ( 'highScores', JSON.stringify ( high_scores ) );
}
function incrementScore ( num ) {
  score += num;
  score_text.innerText = score;
}
function quizTimer () {
  timer = setInterval ( () => {
    timeLeft = timeLeft - 1;
    clock.innerText = timeLeft;
    below_10 ();
    
    if ( ( timeLeft <= -1 ) ) 
      {clearInterval ( timer );
        gameOver ();
      }}, 1000 );}

function below_10 () {

  if ( timeLeft <= 10 ) {   
    clock.classList.add ( 'below10' );
    } else {clockElement.classList.remove('below10')}
}

function quizUi () {
  hudElement.classList.remove ( 'hide' );
  questionElement.classList.remove ( 'hide' );
  answerElement.classList.remove ( 'hide' );
  controlElement.classList.add ( 'hide' );
  lbElement.classList.add('hide')
  }
  function resultsUi () {
  console.log ( "resultsUi() fired" );
  questionElement.classList.add ( 'hide' );
  answerElement.classList.add ( 'hide' );
  hudElement.classList.add ( 'hide' );
  lbElement.classList.remove ( 'hide' );
  controlElement.classList.remove('hide');
}
  function blankSlate() {
    clearClass(document.body)
    while (answerElement.firstChild) {
     answerElement.removeChild(answerElement.firstChild)  
    }
   }
   function setClass(element, correct){
    clearClass(element)
    if (correct){
      element.classList.add('correct')
    } else {
      element.classList.add('incorrect')
    }}
    function clearClass(element){
      element.classList.remove('correct')
      element.classList.remove('incorrect')
    }