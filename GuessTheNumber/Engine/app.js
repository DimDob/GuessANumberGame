'use strict';
let againButton = document.querySelector('button[class="btn again"]');
let checkButton = document.querySelector('button[class="btn check"]');
let message = document.querySelector('p[class="message"]');
let searchedNumber = document.querySelector('div[class="number"]');
searchedNumber.textContent = '<?>';
let guess = document.querySelector('input[class="guess"]');
let sectionElement = document.querySelector('section[class="right"]');
let score = document.querySelector('span[class="score"]');
let gifElement = document.querySelector('iframe');
let batmanGifElement = document.querySelector('iframe[id="batman"]');
gifElement.style.display = 'none';
batmanGifElement.style.display = 'none';
let highScore = document.querySelector('span[class="highscore"]');

let higherDiv = document.createElement('div');
higherDiv.setAttribute('class', 'lower');
higherDiv.textContent = 'Higher!👆';
higherDiv.style.display = 'none';

let lowerDiv = document.createElement('div');
lowerDiv.setAttribute('class', 'lower');
lowerDiv.textContent = 'Lower!👇';
lowerDiv.style.display = 'block';

let gameOver = false;
let customNumber = Math.floor(Math.random() * 20 + 1);
console.log(customNumber);
let check = document
  .querySelector('.check')
  .addEventListener('click', event => {
    let currentValue = event.target.parentElement.children[0].value;

    if (Number(currentValue) < customNumber) {
      let leftClass = document.querySelector('section[class="left"]');
      leftClass.appendChild(higherDiv);
      lowerDiv.style.display = 'none';
      higherDiv.style.display = 'block';
    } else if (Number(currentValue) > customNumber) {
      let leftClass = document.querySelector('section[class="left"]');
      leftClass.appendChild(lowerDiv);
      higherDiv.style.display = 'none';
      lowerDiv.style.display = 'block';
    }
    if (Number(currentValue) === customNumber) {
      let divElement = document.createElement('div');
      divElement.setAttribute('id', 'congrats');
      searchedNumber.style.display = 'block';
      sectionElement.insertBefore(divElement, sectionElement.children[1]);
      setTimeout(() => {
        guess.value = '';
        message.textContent = '😎😎Correct number😎😎';
        divElement.textContent = 'Congratulations👍';
        gifElement.style.display = 'block';
        searchedNumber.textContent = 12;
        highScore.textContent = score.textContent;
      }, 1000);

      checkButton.disabled = true;
      gameOver = true;
    } else {
      guess.value = '';
      message.textContent = 'Try again! 😁';
      score.textContent = Number(score.textContent) - 1;
    }

    if (score.textContent == '0') {
      message.textContent = 'Sorry, try again next time! 🤡';
      checkButton.disabled = true;
      guess.value = '';
      batmanGifElement.style.display = 'block';
      gameOver = true;
    }
    if (gameOver) {
      againButton.addEventListener('click', event => {
        gameOver = false;
        score.textContent = 20;
        document.querySelector('div[id="congrats"]').textContent = '';
        message.textContent = 'Start guessing!😁';
        //sectionElement.removeChild(document.querySelector('div[id="congrats"]'))
        checkButton.disabled = false;
        guess.value = '';
        gifElement.style.display = 'none';
        batmanGifElement.style.display = 'none';
        highScore.textContent = 0;
        searchedNumber.textContent = '<?>';
      });
    }
  });
