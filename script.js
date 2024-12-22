"use  strict";
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function one() {
  let st_number = getRandomInt(0, 100);
  console.log(st_number);
  let nx_number = prompt("Угадай число от 1 до 100");

  function two(nx_number) {
    console.log("Загаданное число: " + st_number);
    // console.log(typeof nx_number + Number(nx_number));
    switch (true) {
      case typeof nx_number === "object" && Number(nx_number) === 0:
        console.log("если проверка на null успешна, то Игра окончена");
        confirm("Игра окончена");
        break;

      case isNaN(Number(nx_number)):
        console.log("обнаружен NAN ");
        nx_number = prompt("Введите число а не строку:");
        two(nx_number);
        break;

      case st_number > Number(nx_number):
        console.log("Загаданное число больше");
        nx_number = prompt("Загаданное число больше, новая попытка:");
        two(nx_number);
        break;

      case st_number < Number(nx_number):
        console.log("Загаданное число меньше");
        nx_number = prompt("Загаданное число меньше, новая попытка:");
        two(nx_number);
        break;

      case st_number === Number(nx_number):
        confirm("Поздравляю, Вы угадали!!!");
        console.log("Поздравляю, Вы угадали!!!");
        break;
      default:
    }
  }
  two(nx_number);
}

one();
