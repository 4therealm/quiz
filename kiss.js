// element targeting
const score_text = document.querySelector ( "#score" );
const clockElement = document.querySelector ( "#clock" );
const play_btn = document.querySelector ( "#play-btn" );

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

  { question:'In the statement Gary = Gary*25; do we in fact NEED that many Garys',
    answers: [
      {text: 'Not even close, give me more!', correct:false},
      {text: 'that is far too many Garys', correct:true},
 ]},
  { question:'Which of the following keywords is used to define a variable in Javascript?',
    answers: [
      {text: 'var', correct:false},
      {text: 'let', correct:false},
      {text: 'Both A and B', correct:true},
      {text: 'if()', correct:false},
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
{ question:'Arrays in JavaScript are defined by which of the following statements?',
answers: [
  {text: 'It is an ordered list of objects', correct:false},
  {text: 'It is an ordered list of string', correct:false},
  {text: 'It is an ordered list of functions', correct:false},
  {text: 'It is an ordered list of values', correct:true},
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

  loadQuestion();

}

function loadQuestion () {
  console.log ( "Your current score is " + score );
  console.log ( "Question is loaded" );
  blankSlate()//removes previous questions content if there is any
  fireQuestion (shuffled_questions_pool[currentQuestionIndex]);
  // question_count += 1;
  //loadQuestion clears out the previous questions data and grabs the next object in the shuffled array
  }
  
function fireQuestion(question){
  console.log("question fired")
  questionElement.innerHTML = question.question//displays the current question.question in the question_element
  
  question.answers.forEach(answers => { //since there is an array holding the answers for each question, for each will select each answers.text and create a button with a class of btn to hold it and adding the click event listener to run the selectAnswer function on the targeted button when called. while doing this it also checks to see if the answers.correct property is true or false. if true, it adds a dataset equal to the boolean true. this data set will be used when that button is targeted.  then finally it inserts each button into the answer_element with appendChild
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
      const selectedButton = e.target//creates a function scoped variable to represent the event emmiter(the button clicked)
      const correct = selectedButton.dataset.correct//the only button that will have the dataset of correct is the one that is answers.correct.true, from the previously executed function fireQuestion. so the selected button will either be correct = true, or correct = undefined(i think?)
      Array.from(answerElement.children).forEach(button => {
        setClass(button, button.dataset.correct)//this will give the boolean data value of true or false, based on the correct property is true
      })//now the selected answers given data can be compared with an if statement
    
      if (correct) {// operators are not necessary in boolean comparisons like this. this is how it looks though
        //if (correct === true){ increase the score by 1} if (correct === false){subtract time by 5 sec}
        incrementScore(SCORE_POINTS)
        console.log("You git it right! great job!")    
      }else {
        console.log("Pshhh, read a book")
        timeLeft = timeLeft - 20 //-5 animation will go here
      }
      //next is the control of how many times the next question will generate.as long as the shuffled questions length is greater than the currentquestionindex then the next question will be loaded
      if (shuffled_questions_pool.length > currentQuestionIndex + 1){
        console.log("next question coming up")
        setTimeout( loadQuestion, 1000);//setTimeout forces a delay of 1000ms (1 sec) until the loadQuestion function is called
      }else{
        console.log("game over")
        gameOver()
      }
      currentQuestionIndex++//bumps the index up by one after each question is answered
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
  quizTimer()
  quizUi();
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
  lbElement.classList.remove ( 'hide' );
  controlElement.classList.remove ( 'hide' );
  hudElement.classList.add ( 'hide' );
}
  function blankSlate() {
    clearClass(document.body)
    while (answerElement.firstChild) {
     answerElement.removeChild(answerElement.firstChild)  
    } // this will delete each button created from the previous question until the expression is false (no more children)
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