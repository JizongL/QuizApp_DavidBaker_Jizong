'use strict';

const questionOne = '1. Normal adult dogs have how many teeth?';
const keyOne = {a:24,b:38,c:42,d:32};
const explainationOne = 'this is a test explain for question 2';
const questionTwo = '2. Through what part of the body do dogs sweat?';
const keyTwo = {a:'Mouth',b:'Ears',c:'Nose',d:'Paws'};
const explainationTwo = 'this is a test explain for question 2';

const QUIZBASE = {
  QUIZ:[
    {id:cuid(),question:questionOne,answerKey:keyOne,correctKey:'c',completed:false,isCorrect:false,submittedKey:'',explaination:explainationOne},
    {id:cuid(),question:questionTwo,answerKey:keyTwo,correctKey:'d',completed:false,isCorrect:false,submittedKey:'',explaination:explainationTwo}
  ],
  quizStart:false,
  score:0,
  quizArray:[],
  historyArray:[],
  completed:false
};


  

function generateStart(){
  console.log('`generateIntro` ran');
  return `<div id='js-score-container'>
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


function generateStatus(quizNum,score){
  console.log('`generateStatus` ran');
  return ` <ul id='quiz-status-field'>
  <li id = 'quiz-number'>Qestion: ${quizNum}/10</li>
  <li id = 'quiz-score'>Score:${score}/100</li>
</ul>`;
}



function render() {
  console.log('`render` ran');
  if (!QUIZBASE.QUIZ.quizStart) {
    console.log('not started',QUIZBASE.QUIZ.quizStart);
    $('#content-box').empty();
    $('#content-box').html(generateStart());
    $('#quiz-status').empty();
  } else {
    generateQuizArray();
    $('#content-box').empty();
    let index = QUIZBASE.quizArray.shift();
    console.log('test index in render',index);
    // push it to history index
    QUIZBASE.historyArray.push(index);
    $('#content-box').html(generateQuiz(index));
    // first argument keeps track of the number of question
    $('#quiz-status').html(generateStatus(QUIZBASE.historyArray.length,QUIZBASE.score));
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


function shuffleArray(a){
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  console.log('original',a);
  return a;
}


function generateQuizArray(){
  let arrayLength = QUIZBASE.QUIZ.length;
  for (let i =0;i < arrayLength;i++){
    QUIZBASE.quizArray.push(i);
  }
  //QUIZBASE.quizArray = shuffleArray(QUIZBASE.quizArray);
}

function nextQuestion(){
  console.log('`next question`');
  $('.quiz-next').click(function(event){
    const currentQuizId = $(this).parents('#quiz-content').data('item-id');
    render();
  });
}





function generatePromptAfterSubmit(rightWrong,Explain=''){
  return `<div class = 'quiz-transition-box'>
  <div class='quiz-correct-or-wrong'>
    <span>${rightWrong}</span>
  </div>
  <div class= 'quiz-explaination-field'>
  <p class = 'quiz-explaination-content'>
    ${Explain}
  </p>
  </div>
  <button type="submit" class="quiz-transition-continue">Continue</button>
  
</div>`;
}

function promptAfterSubmit(object){
  console.log('is correct test',object.isCorrect);
  if(object.isCorrect){
    let correct = 'Correct,well done!';
    let trainsition = generatePromptAfterSubmit(correct);
    $('#content-box').html(trainsition);
  }else{
    let wrong = 'Sorry, your answer is incorrect!';
    let trainsition = generatePromptAfterSubmit(wrong,object.explaination);
    $('#content-box').html(trainsition);
    $('.quiz-transition-continue').on('click',function(){
      render();
    });
  }
}

// get key from value 
function getAnswerKey(object, value) {
  return Object.keys(object).find(key => object[key] === Number(value));
}

function updateQuizStatus(){
  console.log('`updateQuizStatus` ran');
}

function submitAnswer(){
  console.log('`submitAnswer` ran');
  $('form').on('submit',function(event){
    event.preventDefault();
    // get radio button checked value
    let selected = $('input:checked');
    let answer = selected.val();
    console.log('selected answer',answer);
    // find current quiz id
    let currentQuizId = $(this).data('item-id');
    console.log('testing current quiz id',currentQuizId);
    let currentQuizObject = QUIZBASE.QUIZ.find(quiz => quiz.id === currentQuizId);
    // get submitted anawer value through cuid. 
    let submitedKey = getAnswerKey(currentQuizObject.answerKey,answer);
    console.log('compare keys',currentQuizObject.correctKey,submitedKey);

    if(currentQuizObject.correctKey===submitedKey){
      currentQuizObject.isCorrect =!currentQuizObject.isCorrect;
    }
    currentQuizObject.completed = !currentQuizObject.completed;
    currentQuizObject.submittedKey = submitedKey;
    console.log('Testing submit',currentQuizObject,QUIZBASE.QUIZ);
    promptAfterSubmit(currentQuizObject);
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