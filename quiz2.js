'use strict';

const questionOne = '1. Normal adult dogs have how many teeth?';
const keyOne = {a:24,b:38,c:42,d:32};
const explainationOne = 'this is a test explain for question 2';
const questionTwo = '2. Through what part of the body do dogs sweat?';
const keyTwo = {a:'Mouth',b:'Ears',c:'Nose',d:'Paws'};
const explainationTwo = 'this is a test explain for question 2';
const QUIZBASE = {
  QUIZ:[
    {id:1,question:questionOne,answerKey:keyOne,correctKey:'c',completed:false,submittedKey:'',explaination:explainationOne},
    {id:2,question:questionTwo,answerKey:keyTwo,correctKey:'d',completed:false,submittedKey:'',explaination:explainationTwo}
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
  return `<div id = 'quiz-content'>
  <p class='quiz-question'>1. Normal adult dogs have how many teeth?</p>
  <form class = 'quiz-submit-form'>
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
        <button type="submit" class="quiz-answer-submit">Restart</button>
        <button type="submit" class="quiz-answer-submit">Next</button>
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

  });
  
}

function nextQuestion(){
  console.log('`next question`');
}

function submitAnswer(){
  console.log('`submitAnswer` ran');
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