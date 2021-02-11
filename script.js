/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

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
  for(let i = 0; i < 2; i++){
    movieName = prompt('Один из последних просмотренных фильмов?', '');
    movieRating = prompt('На сколько оцените его?', '');
    if( movieName == '' || movieName.length > 50 || movieName == null || movieRating == '' || movieRating == null){
        alert('Ошибка. Попробуйте снова');
        i--;
        continue;
    }
    personalMovieDB.movies[movieName] = movieRating;
  }

  // 3
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

  console.log('personalMovieDB', personalMovieDB);