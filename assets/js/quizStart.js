'use strict';

const questionOne = '1. Normal adult dogs have how many teeth?';
const keyOne = { a: 24, b: 38, c: 42, d: 32 };
const explainationOne = 'this is a test explain for question 2';
const questionTwo = '2. Through what part of the body do dogs sweat?';
const keyTwo = { a: 'Mouth', b: 'Ears', c: 'Nose', d: 'Paws' };
const explainationTwo = 'this is a test explain for question 2';

const QUIZBASE = {
  QUIZ: [
    {
      id: cuid(),
      question: questionOne,
      answerKey: keyOne,
      correctKey: 'c',
      completed: false,
      isCorrect: false,
      submittedKey: '',
      explaination: explainationOne
    },
    {
      id: cuid(),
      question: questionTwo,
      answerKey: keyTwo,
      correctKey: 'd',
      completed: false,
      isCorrect: false,
      submittedKey: '',
      explaination: explainationTwo
    }
  ],
  quizStart: false,
  score: 0,
  quizArray: [],
  historyArray: [],
  completed: false
};

function startMenu() {
  $('#js-start').on('click', () => {
    $('.container').fadeOut('slow', () => {
      console.log('im faded');
      generateQuiz();
    });
  });
}

function generateQuiz(n) {
  return `
    <div class='quiz-container'>
     <div id='js-score-container'><span id='js-score-count'>${QUIZBASE.QUIZ.score}</span>
     </div>
    </div>
    <div data-item-id = ${QUIZBASE.QUIZ[n].id} id='quiz-content'>
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






function loadQuizApp(){
  startMenu();

}

$(loadQuizApp);