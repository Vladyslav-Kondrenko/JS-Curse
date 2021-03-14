/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const ads = document.querySelector(".promo__adv"),
    genre = document.querySelector(".promo__genre"),
    background = document.querySelector(".promo__bg"),
    listOfFilms = document.querySelector(".promo__interactive-list");

  ads.innerHTML = "";
  genre.innerHTML = "драма";
  background.style.background = "url(/img/bg.jpg) center/cover no-repeat";

  const echoFilm = function (arr) {
    arr.forEach((item, key) => {
      arr[key] = item.toLowerCase();
    });

    movieDB.movies.sort();
    listOfFilms.innerHTML = "";

    movieDB.movies.forEach((value, number) => {
      let newFilm = value;

      if (newFilm.length > 21) {
        newFilm = `${newFilm.substr(0, 21)}...`;
      }

      listOfFilms.innerHTML += `<li class="promo__interactive-item">${
        number + 1
      }) ${newFilm} <div class="delete"></div> </li>`;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        echoFilm(movieDB.movies);
      });
    });
  };

  echoFilm(movieDB.movies);

  const form = document.querySelector(".add"),
    input = form.querySelector(".adding__input"),
    checkbox = form.querySelector('input[type="checkbox"]');

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let inputValue = input.value;
    let checkboxValue = checkbox.checked;

    if (inputValue !== "") {
      movieDB.movies.push(inputValue);
      echoFilm(movieDB.movies);
      input.value = "";

      if (checkboxValue) {
        console.log("Добавляем любимый фильм");
      }
    }

    console.log(inputValue);
    console.log(checkboxValue);
  });
});
