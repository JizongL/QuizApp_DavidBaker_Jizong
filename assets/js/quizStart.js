'use strict';

function handleStartMenu() {
  $('#js-start').on('click', () => {
    $('.container').fadeOut('slow', () => {
      console.log('im faded');
    });
  });
  render();
}

function loadQuizApp(){
  startMenu();
}

$(loadQuizApp);