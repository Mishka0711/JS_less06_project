"use  strict";

let chances = 10;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function one(int_chances) {
  let st_number = getRandomInt(0, 100);
  console.log("Загаданное число: " + st_number);
  console.log("Всего попыток: " + int_chances);
  let nx_number = prompt("Угадай число от 1 до 100");

  function two(nx_number) {
    int_chances--;
    console.log("Осталось попыток: " + int_chances);
    if (int_chances > 0) {
      console.log("Загаданное число: " + st_number);
      // console.log(typeof nx_number + Number(nx_number));
      switch (true) {
        case typeof nx_number === "object" && Number(nx_number) === 0:
          console.log("если проверка на null успешна, то Игра окончена");
          confirm("Игра окончена");
          break;

        case isNaN(Number(nx_number)):
          console.log("обнаружен NAN ");
          nx_number = prompt(
            "Введите число а не строку, осталось попыток:" + int_chances
          );
          two(nx_number);
          break;

        case st_number > Number(nx_number):
          console.log("Загаданное число больше");
          nx_number = prompt(
            "Загаданное число больше, , осталось попыток:" + int_chances
          );
          two(nx_number);
          break;

        case st_number < Number(nx_number):
          console.log("Загаданное число меньше");
          nx_number = prompt(
            "Загаданное число меньше, , осталось попыток:" + int_chances
          );
          two(nx_number);
          break;

        case st_number === Number(nx_number):
          if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
            int_chances = chances;
            st_number = getRandomInt(0, 100);
            console.log("Начинаем новую игру!");
            console.log("Загаданное число: " + st_number);
            console.log("Всего попыток: " + int_chances);
            nx_number = prompt("Угадай число от 1 до 100");
            two(nx_number);
          } else {
            confirm("Спасибо за игру! До скорых встреч!!");
            console.log("Спасибо за игру! До скорых встреч!!");
          }
          break;

        default:
          break;
      }
    } else {
      confirm("Попытки закончились, хотите сыграть еще?");
    }
  }
  two(nx_number);
}

one(chances);
