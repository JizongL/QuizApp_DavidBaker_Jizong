'use strict';

function handleStartMenu() {
  $('#js-start').on('click', () => {
    $('.container').fadeOut('slow', () => {
      console.log('im faded');
    });
  });
  render();
}


function generateStart(){
  console.log('`generateIntro` ran');
  return `<div id='wrapper'>
  <div class="container">
      <header id='js-header' class='' role='header'>
          <h1 id='js-header-text'> Pop Quiz! </h1>
          <p id='js-direction-text'>Your job is to answer the following questions.</p>
          <button id='js-start' type='button'><span class='start-game'>Start</span>
          </button>
      </header>
  </div>
</div>`;
}

let render = () =>{
  console.log('render ran');
  if
}


function loadQuizApp(){
  handleStartMenu();
}
 
$(loadQuizApp);