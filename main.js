
//1. start_quiz:
// next_question() generates the content to fill question-box & answer-box

//control-box buttons
const playButton = document.getElementById('play-btn')
const saveButton = document.getElementById('save-btn')
const lbButton = document.getElementById('lb-btn')

//elements
//do queryselector instead
const clockElement = document.getElementById('clock')
const progressElement = document.getElementById('progress')
const scoreElement = document.getElementById('score')
const quizElement = document.querySelector(".quiz-container")
const hudElement = document.querySelector(".hud-box")
const questionElement = document.querySelector(".question-box")
const answerElement = document.querySelector(".answer-box")
const controlElement = document.querySelector(".control-box")
const lbElement = document.querySelector(".lb-box")
const answerButtons = document.querySelector(".answer-btns")

let currentQuestionIndex
// = undefined

let Score = 0;
let finalScore;
let question_counter
let timeLeft = 15;
let selectedAnswer;
let countdown;
const MAX_QUESTIONS = 4;

//event.listeners

playButton.addEventListener('click', start_quiz)

function timer() {
        countdown = setInterval(function()
        {
        timeLeft--; 
        clock.innerHTML = timeLeft;
         below_10()
        
      if(timeLeft <= 0){
        clearInterval(countdown)
        }
       },
       1000);
       
}
function below_10(){
    if(timeLeft <= 10)
      clock.classList.add('below10');
  }
  function decrement(){
    timeLeft = time_left - 5;
    return countdown()
  }    
function start_style_adjust(params) {
    controlElement.classList.add('hide');
    answerElement.classList.remove('hide');
    hudElement.classList.remove('hide');
    questionElement.classList.remove('hide');
}

//question and relative answer is generated randomly 
//answer is selected. if correct score++, incorrect time_left--
//after answer is selected there will be a brief delay, then questionCounter++
//next_question() is called

//log question objects first, then after shufflld questions
function start_quiz(){
    question_counter = 0;
    Score = 0;
    start_style_adjust()
    timer()
    console.log("quiz has started")
    next_question()
}

function resetState(){
    question_counter++
    question_objects.splice(currentQuestionIndex, 1)
    console.log(currentQuestionIndex)
    while (answerElement.firstChild){
      answerElement.removeChild
      (answerElement.firstChild)
    }
  
   }

function next_question(){
    resetState()
    console.log("next-question fired")
    // question_objects.splice(currentQuestionIndex, 1)
    random()
    show_question(question_objects[currentQuestionIndex])   
  console.log("current question index" + currentQuestionIndex)}

function random() {
    currentQuestionIndex = Math.floor(Math.random()*question_objects.length);
    console.log(currentQuestionIndex)
    console.log("random fired")
}

function show_question(question) {
    console.log("show_question fired")
    questionElement.innerHTML = question_objects[currentQuestionIndex].question
    console.log(question)
    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) { button.dataset.correct = answer.correct; }
        button.addEventListener('click', select_answer)
        answerElement.appendChild(button);
        console.log(answer.correct)
    });
}

function select_answer(e){
    console.log("select answer fired")
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    console.log(correct)
    Array.from(answerButtons.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if(correct){
        Score++
       
      console.log("you got it right" + Score)
    }
    if (question_counter < MAX_QUESTIONS){
       next_question()
    
    
    } else {  
      playButton.innerText = 'Restart'
      playButton.classList.remove('hide')
      saveButton.classList.remove('hide')
      lbButton.classList.remove('hide')
    }}
    
    function setStatusClass(element, correct) {
        clearStatusClass(element)
        if(correct){
          element.classList.add('correct')
        } else {
          element.classList.add('incorrect')
        }}
      function clearStatusClass(element){
        element.classList.remove('correct')
        element.classList.remove('incorrect')
      }







let question_objects = [
    {
        question: 'What is 2+2',
        answers: [
          {text: '4', correct: true},
          {text: '22', correct: false},
                  ]
      },
    
      {
        question: 'What is 10+2',
        answers: [
          {text: '12', correct: true},
          {text: '2', correct: false},
        ]
      },
      {
        question: 'What is 10/2',
        answers: [
          {text: '5', correct: true},
          {text: '2', correct: false},
        ]
      },
    
    
      {
        question: 'What is 50*2',
        answers: [
          {text: '100', correct: true},
          {text: '15', correct: false},
        ]
      }
];


