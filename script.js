"use strict";
let x = confirm("Вы администратор данного сайта ?");
let password = 1234;
if (x == true) {
  for (let i = 0; i < 1; i++) {
    let y = +prompt("Введите пароль");
    console.log(typeof y);
    if (y == 1234) {
      alert("Пароль верный. Вход на сайт выполнен успешен");
      break;
    } else {
      i--;
    }
  }
} else {
  if (x == false) {
    alert("Вам вход запрещён, т.к вы не администартор");
  }
}
