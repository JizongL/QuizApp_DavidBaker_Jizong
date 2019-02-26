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




function createQuiz(n){
  console.log('`createQuz ran`');
  console.log('click quiz',QUIZBASE.QUIZ[n].question);

  const quizElementString = `<div class='quiz-question'>${QUIZBASE.QUIZ[n].question}</div>
  <ul class='quiz-answer-field'>
    <li id='a'>A: ${QUIZBASE.QUIZ[n].answerKey.a}</li>
    <li id='b'>B: ${QUIZBASE.QUIZ[n].answerKey.b}</li>
    <li id='c'>C: ${QUIZBASE.QUIZ[n].answerKey.c}</li>
    <li id='d'>D: ${QUIZBASE.QUIZ[n].answerKey.d}</li>
  </ul>
  <button id = 'quiz-next' type = 'submit'>Next</button>
  `;
  $('.quiz-area').html(quizElementString);
}



function render(){
  if(QUIZBASE.quizStart){
    createQuiz(0);
    //let quizNumber = 0;
    // while(quizNumber < 10){
    //   createQuiz(quizNumber);
      // while(!QUIZBASE.QUIZ[quizNumber].completed)
      // {console.log('testing whileloop');
      //   $('.quiz-answer-field').on('click','li',function(event){
      //     const answerChosen = $(this).attr('id');
      //     QUIZBASE.QUIZ[quizNumber].completed = true;  

          
        //});
      //   quizNumber+=1;
      // }
      
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


