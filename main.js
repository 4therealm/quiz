//three main functions:
//1. start_quiz:
    //initiated by startButtonElement
    //hud-box,question-box and answer-box become visible
    // next_question() generates the content to fill question-box & answer-box



//2. next_question


//3. select_answer


//control-box buttons
const playButton = document.getElementById('play-btn')
const saveButton = document.getElementById('save-btn')
const lbButton = document.getElementById('lb-btn')

//elements

const quizElement = document.getElementsByClassName('quiz-container')
const hudElement = document.getElementsByClassName('hud-box')
const questionElement = document.getElementsByClassName('question-box')
const answerElement = document.getElementsByClassName('answer-box')
const controlElement = document.getElementsByClassName('control-box')
const lbElement = document.getElementsByClassName('lb-box')


let shuffledQuestions, currentQuestionIndex
// = undefined

var currentScore = 0;
var finalScore;
var question_counter = 0;
var timeLeft = 15;
var selectedAnswer;
var countdown;

//event.listeners

playButton.addEventListener('click', start_quiz)

let question_objects = [
    {
        question: 'What is 2+2',
        answers: [
          {text: '4', correct: true},
          {text: '22', correct: false},
          {text: 'birdie', correct: false},
          {text: '852', correct: false},
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
    
   
//functions
function below_10(){
    if(timeLeft <= 10)
      clock.classList.add('below10');
  }
  function decrement(){
    timeLeft = time_left - 5;
    return countdown()
  }    
  
  function select_answer() {
    
  }
function reset_state(params) {
    
}

function show_question(){}

//hide control-box
//show hud-box, question-box, answer-box
//time starts
//question and relative answer is generated randomly 
//answer is selected. if correct score++, incorrect time_left--
//after answer is selected there will be a brief delay, then questionCounter++
//next_question() is called
function start_quiz(){

    playButton.classList.add('hide')
    saveButton.classList.add('hide')
    lbButton.classList.add('hide')
    shuffledQuestions = question_objects.sort(() =>Math.random() - .5); //need help understanding this
    currentQuestionIndex = 0;
    countdown = setInterval(function(){
        timeLeft--; clock.innerHTML = timeLeft;
      if(timeLeft <= 0)clearInterval(countdown);below_10()},1000);
      //when timer reaches 0 i want to end quiz
    console.log(shuffledQuestions.length);
    next_question(){}
}

function next_question(){
    currentQuestionIndex++
    reset_state()//clears current content in Q A box and replaces with new question
    show_question(shuffledQuestions[currentQuestionIndex])
}

function show_question(question) {
    questionElement.innerHTML = question_objects.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){button.dataset.correct = answer.correct}
        button.addEventListener('click', select_answer)
        answerElement.appendchild(button)
    }

    )
}


















































    //     let available_questions = [];
//     let current_question = {};
//     let score = 0;
//     let question_counter = 0;
    
//     const final_score = {};
//     const MAX_QUESTIONS = 3;
//     const SCORE_POINTS = 100;


// function start_game() {
//         question_counter = 0;
//         available_questions = [...question_objects];
//         current_question = generate_question();
// }
// function generate_question() {
//     for(let i = 0; i < available_questions; i++) {
//         question_counter++;
//         const generated_question = available_questions[random()];
//         question_objects.splice(generated_question, 1);
//         return generated_question
//     }
// }
// function random() {
//     const random_index = Math.floor(Math.random()*available_questions.length);
//     return random_index
// }
// function restart_game() {
    
// }