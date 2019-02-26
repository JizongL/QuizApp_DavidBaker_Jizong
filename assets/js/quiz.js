'use strict';

const questionOne = '1. Normal adult dogs have how many teeth?';
const keyOne = {a:24,b:38,c:43,d:32};
const questionTwo = '2. Through what part of the body do dogs sweat?';
const keyTwo = {a:'Mouth',b:'Ears',c:'Nose',d:'Paws'};

const QUIZBASE = {
  QUIZ:[
    {id:1,question:questionOne,answerKey:keyOne,completed:false},
    {id:2,question:questionTwo,answerKey:keyTwo,completed:false}
  ],
  quizStart:false,
  score:0,
  
};




function createQuiz(){
  console.log('`createQuz ran`');
  console.log('click quiz',QUIZBASE.QUIZ[0].question);

  const quizElementString = `<p>${QUIZBASE.QUIZ[0].question}</p>
  <ul>
    <li>${QUIZBASE.QUIZ[0].answerKey.a}</li>
    <li>${QUIZBASE.QUIZ[0].answerKey.b}</li>
    <li>${QUIZBASE.QUIZ[0].answerKey.c}</li>
    <li>${QUIZBASE.QUIZ[0].answerKey.d}</li>
  </ul>
  <button id = 'quiz-next' type = 'submit'>Next</button>
  `;
  $('.quiz-area').html(quizElementString);
}

function render(){
  if(QUIZBASE.quizStart){
    createQuiz();
  }
  console.log('`render ran`');
}



function startQuiz(){
  console.log('`startQuiz` ran');
  $('#quiz-start').on('click',function(){
    QUIZBASE.quizStart = true;
    render();
    
  });
}


function handleQuizApp(){
  startQuiz();
  render();
}

$(handleQuizApp);





$( '#js-start' ).on( 'click', function() {
  console.log('I hear you');
});

function generateStart(){
  console.log('`generateIntro` ran');
  return `<div id='start-quiz-box'>
  <button id = 'quiz-intro'>Read quiz intro</button>
  <p>Let's start Quiz</p>
  <button id='quiz-start' type='submit'>Start Quiz</button>
  </div>`;
}

