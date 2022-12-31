
const clockElement = document.getElementById('clock')
const play_btn = document.getElementById("play-btn")
const questionElement = document.querySelector(".question-box")
const answerElement = document.querySelector(".answer-box")
const answerButton0 = document.querySelector("#answer-0")
const answerButton1 = document.querySelector("#answer-1")


play_btn.addEventListener('click', playGame)
answerButton0.addEventListener('click', (event) =>{
    console.log("you selected answerButton0")
    selectAnswer(target = loaded_question.answers[0].correct)
})
answerButton1.addEventListener('click', () =>{
    console.log("you selected answerButton1")
    selectAnswer(target = loaded_question.answers[1].correct)
})

let index = 0;
let score = 0;

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
    console.log("loadQuestion fired")
if (index <= question_pool.length) {
    loaded_question = question_pool[index]
     console.log(loaded_question.question)
    console.log(loaded_question.answers[0].correct)
    // console.log(loaded_question.answers === true)
    console.log(loaded_question.answers[1].correct)
    fireQuestion()
} 
}


function fireQuestion() {
    console.log("fireQuestion...fired")
    questionElement.innerHTML = loaded_question.question;
    answerButton0.innerHTML = loaded_question.answers[0].text
    answerButton1.innerHTML = loaded_question.answers[1].text
    }


 function selectAnswer(EventTarget) {
    EventTarget;
    console.log("answerSelect fired")
    console.log(EventTarget)

    // console.log(loaded_question.answers.correct)
    
 }

