/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const ads = document.querySelector('.promo__adv'),
      genre = document.querySelector('.promo__genre'),
      background = document.querySelector('.promo__bg'),
      listOfFilms = document .querySelector('.promo__interactive-list');



let moviesList = [];

movieDB.movies.forEach(value => {
    moviesList.push(value); 
    console.log(value);
});

moviesList.sort();

console.log(typeof(moviesList));
console.log(movieDB.movies);
console.log(moviesList);

    ads.remove();
    genre.innerHTML = 'драма';
    background.style.background = 'url(/img/bg.jpg) center/cover no-repeat'; 


    listOfFilms.innerHTML = "";

    moviesList.forEach((element, index) => {
        listOfFilms.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${index + 1}) ${element}
                                <div class="delete"></div>
                            </li>`);
    });


