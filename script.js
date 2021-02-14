/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};


  let movieName,
      movieRating;
  
// 1-2
// personalMovies();

function personalMovies(){
    for( let i = 0; i < 2; i++ ){
    movieName = prompt('Один из последних просмотренных фильмов?', '');
    movieRating = prompt('На сколько оцените его?', '');
    if( movieName == '' || movieName.length > 50 || movieName == null || movieRating == '' || movieRating == null){
        alert('Ошибка. Попробуйте снова');
        i--;
        continue;
    }
    personalMovieDB.movies[movieName] = movieRating;
  }
}

  // 3
// checkCountOfMovies();

function checkCountOfMovies(){
  if(Number.isInteger(personalMovieDB.count)){

     if(personalMovieDB.count < 10){
     alert('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count < 30){
        alert('Вы классический зритель');
    } else{ 
        alert('Вы киноман');
    }

  } else{
      alert('Произошла ошибка!');
  }
}


writeYourGenres();

function writeYourGenres(){
  for( let i = 1; i <= 3; i++ ){
    let genres = prompt(`Ваш любимый жанр под номером ${i}`);
    if( genres == '' || genres == null){
      alert('Ошибка. Попробуйте снова.')
      i--;
    } else{
      console.log(i);
      personalMovieDB.genres[i - 1] = genres; 
    }
  }
}

  showMyDB();

function showMyDB(){
  if(!personalMovieDB.privat){
    console.log(personalMovieDB);
  }
}

  