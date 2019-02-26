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

function generateIntro(){
  console.log('`generateIntro` ran');
}

function generateQuiz(){
  console.log('`generateQuiz` ran');
}


function generateStatus(){
  console.log('`generateStatus` ran');
}

function render() {
  console.log('`render` ran');
  if (!QUIZBASE.QUIZ.quizStart) {
    $('#quiz-intro').html(generateIntro());
    $('#quiz-area').empty();
    $('#quiz-status').empty();
  } else {
    $('#quiz-intro').empty();
    $('#quiz-area').html(generateQuiz());
    $('#quiz-status').html(generateStatus());
  }
}


function handleQuizApp(){
  generateQuiz();
  generateIntro();
  generateStatus();
  //render();
}

$(handleQuizApp);