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
var timeLeft = 60;
var selectedAnswer;

//event.listeners

playButton.addEventListener('click', start_quiz)



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
    // timer_start() //should the timer be inside the function?
    // next_question()
    setInterval(function(){
        timeLeft--;
        clock.innerHTML = timeLeft;
         below_10()
     
      if(timeLeft <= 0)
            clearInterval(countdown);
            },1000);
    console.log("bitch");
}

function below_10(){
    if(timeLeft <= 10)
      clock.classList.add('below10');
  }
  function decrement(){
    timeLeft = time_left - 5;
    return countdown()
  }    


function next_question(){}


















let question_objects = [
    {
        question:
         'are you horny babay?',
        choice1: 'Not anymore',
        choice2: 'ohhhyeaahhhh',
        answer: 1,
    },
    {
        question:
        'Greatest metal band',
        choice1: 'Any other band',
        choice2: 'psh Metallica, obviously',
        answer: 1,
    },
    {
        question: 
        'Pitbulls are loving dogs',
        choice1:'False',
        choice2:'True',
        answer: 2,
    
    }
    ];
    
   

































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