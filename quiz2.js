/*global cuid */

'use strict';

const questionOne = '1. Normal adult dogs have how many teeth?';
const keyOne = {a:24,b:38,c:42,d:32};
const explainationOne = 'this is a test explain for question 2';
const questionTwo = '2. Through what part of the body do dogs sweat?';
const keyTwo = {a:'Mouth',b:'Ears',c:'Nose',d:'Paws'};
const explainationTwo = 'this is a test explain for question 2';
const QUIZBASE = {
  QUIZ:[
    {id:cuid(),question:questionOne,answerKey:keyOne,correctKey:'c',completed:false,submittedKey:'',explaination:explainationOne},
    {id:cuid(),question:questionTwo,answerKey:keyTwo,correctKey:'d',completed:false,submittedKey:'',explaination:explainationTwo}
  ],
  quizStart:false,
  score:0,
};


  

function generateStart(){
  console.log('`generateIntro` ran');
  return `<div id='start-quiz-box'>
  <button id = 'quiz-intro'>Read quiz intro</button>
  <p>Let's start Quiz</p>
    <button id='quiz-start' type='submit'>Start Quiz</button>
    </div>`;
}



function generateQuiz(n){
  console.log('`generateQuiz` ran');
  return `<div data-item-id = ${QUIZBASE.QUIZ[n].id} id = 'quiz-content'>
  <p class='quiz-question'>1. Normal adult dogs have how many teeth?</p>
  <form data-item-id = ${QUIZBASE.QUIZ[n].id} class = 'quiz-submit-form'>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${QUIZBASE.QUIZ[n].answerKey.a}" name="answer" required>
    <span>A) 24</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${QUIZBASE.QUIZ[n].answerKey.b}" name="answer" required>
    <span>B) 38</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${QUIZBASE.QUIZ[n].answerKey.c}" name="answer" required>
    <span>C) 42</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${QUIZBASE.QUIZ[n].answerKey.d}" name="answer" required>
    <span>D) 32</span>
    </label>
    <button type="submit" class="quiz-answer-submit">Submit</button>
    </fieldset>
    </form>
    <div class='quiz-navigate-bar'>
        <button type="submit" class="quiz-restart">Restart</button>
        <button type="submit" class="quiz-next">Next</button>
    </div>
    </div>`;
}





function generateStatus(){
  console.log('`generateStatus` ran');
}



function render() {
  console.log('`render` ran');
  if (!QUIZBASE.QUIZ.quizStart) {
    console.log('not started',QUIZBASE.QUIZ.quizStart);
    $('#content-box').empty();
    $('#content-box').html(generateStart());
    //$('#quiz-status').empty();
  } else {
    $('#content-box').empty();
    $('#content-box').html(generateQuiz(0));
    //$('#quiz-status').html(generateStatus());
  }
}

function startQuiz(){
  $('#quiz-start').on('click', function(){
    QUIZBASE.QUIZ.quizStart = !QUIZBASE.QUIZ.quizStart;
    render();
    submitAnswer();
    nextQuestion();
  });
  
}


function validateQuizCompleted(){

}

function nextQuestion(){
  console.log('`next question`');
  $('.quiz-next').click(function(event){
    const currentQuizId = $(this).parents('#quiz-content').data('item-id');
  });
}


function getAnswerKey(object, value) {
  console.log(Object.keys(object));
  return Object.keys(object).find(key => object[key] === Number(value));
}

function submitAnswer(){
  console.log('`submitAnswer` ran');
  $('form').on('submit',function(event){
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    // find current quiz id
    let currentQuizId = $(this).data('item-id');
    let currentQuizObject = QUIZBASE.QUIZ.find(quiz => quiz.id === currentQuizId);
    
    let submitedKey = getAnswerKey(currentQuizObject.answerKey,answer);
    currentQuizObject.completed = !currentQuizObject.completed;
    currentQuizObject.submittedKey = submitedKey;
    console.log(QUIZBASE.QUIZ);
  });
}

function restartQuiz(){
  console.log('`restartQuiz` ran');
}




function handleQuizApp(){
  
  
  render();
  startQuiz();
  nextQuestion();
}

$(handleQuizApp);