//element targeting
const clockElement = document.getElementById ( 'clock' );
const play_btn = document.getElementById ( "play-btn" );
const questionElement = document.querySelector ( ".question-box" );
const answerElement = document.querySelector ( ".answer-box" );
const answerButton0 = document.querySelector ( "#answer-0" );
const answerButton1 = document.querySelector ( "#answer-1" );
const SCORE_POINTS = 100;// I THINK DOING SOME SORT OF MULTIPLIER FOR CORRECT ANSWERERS IN SUCCESSIONS
const score_element = document.querySelector ("#Score");
//local storage interaction
const most_recent_score = localStorage.getItem('mostRecentScore')
const high_scores = JSON.parse(localStorage.getItem('leaderboard')) || []

//other variables
let index = 0;
let scoreText = most_recent_score;
let score = 0;
let question_count = 0;
let timeLeft = 60;
let loaded_question;
//the array of questions
let question_pool = [
    {

        question: 'What is 2+2',
        answers: [
             {

                text: '22',
                correct: false

            },{

                text: '4',
                correct: true

            },
        ]

    }, {
        question: 'What is 10+2',
        answers: [
            {

                text: '12',
                correct: true

            }, {

                text: '2',
                correct: false

            },
        ]

    }, {

        question: 'What is 10/2',
        answers: [
            {

                text: '5',
                correct: true

            }, {

                text: '2',
                correct: false

            },
        ]

    }, {
        question: 'What is 50*2',
        answers: [
            {

                text: '100',
                correct: true

            }, {

                text: '15',
                correct: false

            },
        ]

    }
];

//event listeners
play_btn.addEventListener ( 'click', playGame );
answerButton0.addEventListener ( 'click', () => {

    console.log ( "you clicked answerButton0" );
    selectAnswer ( selected_answer = loaded_question.answers[ 0 ].correct );

} );
answerButton1.addEventListener ( 'click', () => {

    console.log ( "you clicked answerButton1" );
    selectAnswer ( selected_answer = loaded_question.answers[ 1 ].correct );

} );

//functions
function playGame () {
console.log("let the games begin")
    // quizUi();
    quizTimer ();
    loadQuestion ();
    //hide buttons?
}

function loadQuestion () {

    console.log ( "loadQuestion fired" );
    localStorage.setItem('mostRecentScore', score);
    console.log (most_recent_score);

    if ( index < question_pool.length ) {

        question_count++;
        loaded_question = question_pool[ index ];

        // console.log ( loaded_question.question );
        // console.log ( loaded_question.answers[ 0 ] );
        // console.log ( loaded_question.answers[ 1 ] );
        
        fireQuestion ();
    }
    else {
        //hide certain quiz elements and show stat panel
        gameOver()
      
    }
}


function gameOver(){
  
  alert("game over")
        prompt("Here are your results \n final score = (finalScore) \n\ question count = (questioncount) \n enter your initals to save high score")

    if(prompt){ saveCurrentScore = () => {
            localStorage.setItem('mostRecentScore', score)}
            }}
        // {resetState()}
        //run save score to save players initials and score
      

function fireQuestion () {

    console.log ( "fireQuestion...fired" );
    questionElement.innerHTML = loaded_question.question;
    // these can be put in A FOR EACH LOOP
    answerButton0.innerHTML = loaded_question.answers[ 0 ].text;
    answerButton1.innerHTML = loaded_question.answers[ 1 ].text;

}


function selectAnswer ( target ) {
    console.log ( "answerSelect fired" );
    console.log ( target );
    if ( target ) {
        console.log ( "Correct! well done" );
        score++;
        // make button green
    }
    if ( ! target ) {
        console.log ( "psh, read a book" );
        decrement = () =>{
          timeLeft = timeLeft - 5;
    // flash animation on the timer
        }
    }
    index++
    console.log("index position:" + index)
    console.log("current score = " + score)
    saveCurrentScore = () => {
      localStorage.setItem('mostRecentScore', score);}
    loadQuestion ();
}


function quizTimer () {

    timer = setInterval ( () => {

        timeLeft = timeLeft - 1;
        clock.innerHTML = timeLeft;
        below_10 ();

        if ( timeLeft <= 0 ) {

            clearInterval ( timer );
            // run gameOver()

        }

    }, 1000 );

}


function below_10 () {

    if ( timeLeft <= 10 ) {

        clock.classList.add ( 'below10' );

    }

}
