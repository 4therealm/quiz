
const clockElement = document.getElementById('clock')
const play_btn = document.getElementById("play-btn")
const questionElement = document.querySelector(".question-box")
const answerElement = document.querySelector(".answer-box")
const answerButton0 = document.querySelector("#answer-0")
const answerButton1 = document.querySelector("#answer-1")


play_btn.addEventListener('click', playGame)

let loaded_question;

let question_pool = [
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

function playGame() {
    console.log("playGame fired")
    loadQuestion()
}

function loadQuestion() {
    console.log("load question fired")
for (let index = 0; index < question_pool.length; index++) {
    loaded_question = question_pool[index]
    console.log(loaded_question.question)
    console.log(loaded_question.answers[0])
    console.log(loaded_question.answers[1])
    fireQuestion()
}}


function fireQuestion() {
    questionElement.innerHTML = loaded_question.question;
    answerButton0.innerHTML = loaded_question.answers[0].text
    answerButton1.innerHTML = loaded_question.answers[1].text
    }


 