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




function generateQuizElement(n){
  return `<div class='quiz-question-${n}'>${QUIZBASE.QUIZ[n].question}</div>
  <form class = 'quiz-submit-form ${QUIZBASE.QUIZ[n].id}'>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${QUIZBASE.QUIZ[n].answerKey.a}" name="answer" required>
    <span>${QUIZBASE.QUIZ[n].answerKey.a}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${QUIZBASE.QUIZ[n].answerKey.b}" name="answer" required>
    <span>${QUIZBASE.QUIZ[n].answerKey.b}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${QUIZBASE.QUIZ[n].answerKey.c}" name="answer" required>
    <span>${QUIZBASE.QUIZ[n].answerKey.c}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${QUIZBASE.QUIZ[n].answerKey.d}" name="answer" required>
    <span>${QUIZBASE.QUIZ[n].answerKey.d}</span>
    </label>
    <button type="submit" class="quiz-answer-submit">Submit</button>
    </fieldset>
    </form>
  `;
}

function createQuiz(n){
  console.log('`createQuz ran`');
  
  console.log('click quiz',QUIZBASE.QUIZ[0].question);
  let quizElementStringArray = [];
  for (let i=0;i<QUIZBASE.QUIZ.length;i++){
    quizElementStringArray.push(generateQuizElement(i));
  }

  console.log(quizElementStringArray);
  return quizElementStringArray;
  
}

function recordAnswerSubmitted(){
  $('#quiz-submit-form').on('submit','input',function(event){
    const answerChosen = $(this).attr('id');
    QUIZBASE.QUIZ[0].completed = true; 
  });
}

function render(n){
  //console.log('quiz-length-test',QUIZBASE.QUIZ.length);
  if(QUIZBASE.quizStart){
    let quizElementArray = createQuiz(QUIZBASE.QUIZ.length);
    
    $('.quiz-area').html(quizElementArray[n]);
    
      
    }


    
function render() {
  if (QUIZBASE.quizStart) {
    $('.intro').html(generateIntro());
    $('.quiz').empty();
    $('.status').empty();
  } else if (store.view === 'quiz') {
    $('.intro').empty();
    $('.quiz').html(generateQuiz());
    $('.status').html(generateStatus());
  }
}    
    
  
  console.log('`render ran`');
}



function startQuiz(){
  console.log('`startQuiz` ran');
  $('#quiz-start').on('click',function(){
    QUIZBASE.quizStart = true;
    let n = 1
    render(n);
    
  });
}


function handleQuizApp(){
  startQuiz();
  render();
}

$(handleQuizApp);