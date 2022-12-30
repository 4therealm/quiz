  let available_questions = [];



function start_game() {
        question_counter = 0;
        available_questions = [...question_objects];
        current_question = generate_question();
// }
function generate_question() {
    for(let i = 0; i < question_objects; i++) {
        = question_objects[random()];
   
    }
}
function random() {
    currentQuestionIndex = Math.floor(Math.random()*question_objects.length);
    return currentQuestionIndex
}
// function restart_game() {
    
// }