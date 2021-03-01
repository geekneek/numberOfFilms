'use strick';

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function() {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      }
   },
   detectPersonalLevel: function() {
      if (personalMovieDB.count < 10) {
         alert('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count < 30) {
         alert('Вы классический зритель');
      } else if (personalMovieDB.count > 30) {
         alert('Вы киноман');
      } else {
         alert('Произошла ошибка');
      }
   },
   rememberMyFilms: function() {
      for (let i = 0; i < 2; i++) {
         const a = prompt('Один из последних просмотренных фильмов?', ''),
               b = +prompt('На сколько оцените его?', '');
         if (a != '' && b != '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('DONE!');
         } else {
            console.log('ERROR!');
            i--;
         }
      }
   },
   writeYourGenres: function() {
      for (let i = 1; i <= 3; i++) {
         let genre = prompt(`Ваш любимый жанр под номером ${i}.`, '');

         if (genre == '' || genre == null) {
            console.log('Error!');
            i--;
         } else {
            personalMovieDB.genres[i - 1] = genre;
         }
      }

      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
   },
   showMyDB: function(hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },
   toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   },
};
