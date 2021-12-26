(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    const cardList = document.querySelector('.playing-field');
    const button = document.querySelector('.btn-repeat');
    let count = 0;

    // Сыграть ещё раз

    function gameOver() {
      button.classList.add('btn-repeat--active');

      button.addEventListener('click', () => {
        window.location.reload();
      });
    }

    function startGame() {
      // Создаем массив данных с помощью алгоритма Фишера-Йетса.
      function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
        return arr;
      }

      // Создаем игровое поле

      function createCard(value) {
        const card = document.createElement('li');

        card.classList.add('card');
        card.textContent = value;

        cardList.append(card);
      }

      for (const value of shuffle(array)) {
        createCard(value);
      }

      // Взаимодействие с карточками

      let isActive = false;
      let firstCard;
      let secondCard;

      function openCard() {
        this.classList.add('card--active');

        if (!isActive) {
          isActive = true;
          firstCard = this;
        } else if (isActive && firstCard !== this) {
          secondCard = this;
          isActive = false;
          compareCards(firstCard, secondCard);
        } else {
          this.classList.remove('card--active');
          isActive = false;
        }
      }

      document.querySelectorAll('.card').forEach((el) => {
        el.addEventListener('click', openCard);
      });

      // Сравниваем карты
      function deleteClassList() {
        firstCard.classList.remove('card--active');
        secondCard.classList.remove('card--active');
      }

      function compareCards(first, second) {
        if (first.textContent === second.textContent) {
          first.removeEventListener('click', openCard);
          second.removeEventListener('click', openCard);
          count += 2;
          if (count === array.length) {
            gameOver();
          }
        } else {
          setTimeout(deleteClassList, 500);
        }
      }
    }

    startGame();
  });
}());
