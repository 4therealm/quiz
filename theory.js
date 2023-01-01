const question = [
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
    question: 'What is 10+2',
    answers: [
      {text: '12', correct: true},
      {text: '2', correct: false},
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
    question: 'What is 10+2',
    answers: [
      {text: '12', correct: true},
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
]

const question_element = document.querySelector(".question")
const answer_element = document.querySelector(".answer")
const start_button = document.querySelector(".start-btn")

start_button.addEventListener('click', startGame)
var selectedAnswer;

let shuffled_questions, currentQuestionIndex

var score = 0;

function startGame() {
  console.log("start game fired")
  //this essentially shuffles the order of the array, instead of randomly choosing an index from the array
  shuffled_questions = question.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  loadQuestion()
}
function loadQuestion () {
  console.log("question loaded")
  resetState() //removes previous questions content if there is any
  fireQuestion(shuffled_questions[currentQuestionIndex])  
  //firequestion pulls the content from the currentquestion index s target and places it into the html elements
}
function fireQuestion(question){
  console.log("question fired")
  question_element.innerHTML = question.question
  question.answers.forEach(answers => {
    const button = document.createElement('button')
    button.innerText = answers.text
    button.classList.add('btn')
    if (answers.correct) {button.dataset.correct = answers.correct}
    button.addEventListener('click', selectAnswer)
    answer_element.appendChild(button)
    console.log(answers)
  });}
  // firequestion pulls the selected question and answer data and places it into the html. since the answers are an array, the for each loop will execute the commands for every answer there is. making a button for each answer. and then appanding it to the answer_element


// function blankSlate() {
//  clearStatusClass(document.body)
//  while (answer_element.firstChild) {
//   answer_element.removeChild(answer_element.firstChild)  
//  } // this will delete each button created from the previeous question until the expression is false (no more children)
// }

// function selectAnswer(e){
//   const selectedButton = e.target
//   const correct = selectedButton.dataset.correct
//   //put the background color change effect here
//   Array.from(answer_element.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)//this will give the boolean data value of true or false, based on the correct property is true
//   })
//   currentQuestionIndex++
//   if (correct) {
//     score++
//     console.log(score)    
//   }
//   if (shuffled_questions.length > currentQuestionIndex + 1){//this is the control so the quiz stops at the end of the questions
//     console.log("next question coming up")
//     setTimeout( loadQuestion, 1000);
//   }
//   else{
//     console.log("game over")
//   }
// }

// function setStatusClass(element, correct){
//   clearStatusClass(element)
//   if (correct){
//     element.classList.add('correct')
//   } else {
//     element.classList.add('incorrect')
//   }}
//   function clearStatusClass(element){
//     element.classList.remove('correct')
//     element.classList.remove('incorrect')
//   }