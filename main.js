//three main functions:
//1. start_quiz:
    //initiated by startButtonElement
    //hud-box,question-box and answer-box become visible
    // next_question() generates the content to fill question-box & answer-box



//2. next_question


//3. select_answer


function start_quiz()
//hide control-box
//show hud-box, question-box, answer-box
//time starts
//question and relative answer is generated randomly 
//answer is selected. if correct score++, incorrect time_left--
//after answer is selected there will be a brief delay, then questionCounter++
//next_question() is called






















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
    
}