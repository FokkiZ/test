"use strict";

const numberOfFilms = +prompt('kiko');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('yakui film'),
      b = prompt('ocinka'),
      c = prompt('yakui film'),
      d = prompt('ocinka');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);